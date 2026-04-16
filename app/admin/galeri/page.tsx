'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
  location: string;
  order: number;
}

export default function GalleryManagementPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    category: '',
    title: '',
    location: '',
    span: false,
    order: 0,
  });

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (Array.isArray(data)) setImages(data);
    } catch {
      // API not connected
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', '4iklim/gallery');

      try {
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
        const uploadData = await uploadRes.json();
        if (uploadData.url) {
          const createRes = await fetch('/api/gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              src: uploadData.url,
              publicId: uploadData.publicId,
              category: form.category || 'Genel',
              title: file.name.replace(/\.[^.]+$/, ''),
              location: '',
              span: false,
              order: images.length,
            }),
          });
          const newImage = await createRes.json();
          setImages((prev) => [...prev, newImage]);
        }
      } catch {
        alert(`"${file.name}" yüklenirken hata oluştu.`);
      }
    }
    setUploading(false);
    e.target.value = '';
  }

  async function handleDelete(id: string) {
    if (!confirm('Bu görseli silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    setImages(images.filter((img) => img.id !== id));
  }

  async function handleUpdate(id: string) {
    await fetch(`/api/gallery/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setImages(images.map((img) => (img.id === id ? { ...img, ...form } : img)));
    setEditingId(null);
    setShowForm(false);
  }

  function startEdit(img: GalleryImage) {
    setEditingId(img.id);
    setForm({ category: img.category, title: img.title, location: img.location, span: false, order: img.order });
    setShowForm(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Galeri Yönetimi</h2>
        <label className="bg-[#0d3b6e] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0a2f58] transition flex items-center gap-2 cursor-pointer">
          <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
          <i className="fas fa-upload"></i>
          {uploading ? 'Yükleniyor...' : 'Resim Yükle'}
        </label>
      </div>

      {showForm && editingId && (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 max-w-2xl">
          <h3 className="font-semibold text-gray-800 mb-4">Görsel Düzenle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Başlık</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Konum</label>
              <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sıra</label>
              <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={() => handleUpdate(editingId)}
              className="bg-[#0d3b6e] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#0a2f58] transition">
              Güncelle
            </button>
            <button onClick={() => { setEditingId(null); setShowForm(false); }}
              className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
              İptal
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <i className="fas fa-spinner fa-spin text-2xl"></i>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      ) : images.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <i className="fas fa-photo-video text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Henüz galeri görseli eklenmemiş.</p>
          <p className="text-gray-400 text-sm mt-1">Yukarıdaki butonu kullanarak resim yükleyebilirsiniz.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="bg-white rounded-xl shadow-sm overflow-hidden group relative">
              <div className="aspect-square relative">
                <Image src={img.src} alt={img.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(img)}
                      className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-50 transition">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={() => handleDelete(img.id)}
                      className="bg-white text-red-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-50 transition">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-800 truncate">{img.title}</p>
                <p className="text-xs text-gray-400">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
