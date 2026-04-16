'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [form, setForm] = useState({
    slug: '',
    title: '',
    category: '',
    categoryColor: '#0d3b6e',
    status: 'Devam Ediyor',
    location: '',
    target: '',
    reached: '',
    percent: 0,
    description: '',
    isActive: true,
  });

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', '4iklim/projects');
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) setImageUrl(data.url);
    } catch {
      alert('Resim yüklenirken hata oluştu.');
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!imageUrl) { alert('Lütfen bir görsel yükleyin.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, image: imageUrl }),
      });
      if (res.ok) {
        router.push('/admin/projeler');
      } else {
        const data = await res.json();
        alert(JSON.stringify(data.error));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Yeni Proje Ekle</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 max-w-3xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Proje Görseli *</label>
          {imageUrl ? (
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-2">
              <Image src={imageUrl} alt="Preview" fill className="object-cover" />
              <button type="button" onClick={() => setImageUrl('')}
                className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600">
                <i className="fas fa-times"></i>
              </button>
            </div>
          ) : (
            <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#0d3b6e] transition block">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              {uploading ? (
                <div className="text-gray-500"><i className="fas fa-spinner fa-spin text-2xl mb-2"></i><p>Yükleniyor...</p></div>
              ) : (
                <div className="text-gray-400"><i className="fas fa-cloud-upload-alt text-3xl mb-2"></i><p>Görsel yüklemek için tıklayın</p></div>
              )}
            </label>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proje Adı *</label>
          <input type="text" value={form.title} required
            onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input type="text" value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none bg-gray-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
            <input type="text" value={form.category} required
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="Afet Yardımı"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Rengi</label>
            <div className="flex gap-2">
              <input type="color" value={form.categoryColor}
                onChange={(e) => setForm({ ...form, categoryColor: e.target.value })}
                className="w-12 h-10 rounded border border-gray-300 cursor-pointer" />
              <input type="text" value={form.categoryColor}
                onChange={(e) => setForm({ ...form, categoryColor: e.target.value })}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none">
              <option value="Devam Ediyor">Devam Ediyor</option>
              <option value="Tamamlandı">Tamamlandı</option>
              <option value="Planlanan">Planlanan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Konum *</label>
            <input type="text" value={form.location} required
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="Hatay, Türkiye"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hedef</label>
            <input type="text" value={form.target}
              onChange={(e) => setForm({ ...form, target: e.target.value })}
              placeholder="500.000 ₺"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ulaşılan</label>
            <input type="text" value={form.reached}
              onChange={(e) => setForm({ ...form, reached: e.target.value })}
              placeholder="350.000 ₺"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Yüzde (%)</label>
            <input type="number" value={form.percent} min={0} max={100}
              onChange={(e) => setForm({ ...form, percent: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
          <textarea value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={5}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none resize-none" />
        </div>

        <div className="flex items-center">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-[#0d3b6e] focus:ring-[#0d3b6e]" />
            <span className="text-sm font-medium text-gray-700">Aktif</span>
          </label>
        </div>

        <div className="flex gap-3 pt-4">
          <button type="submit" disabled={loading}
            className="bg-[#0d3b6e] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0a2f58] transition disabled:opacity-50">
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
          <button type="button" onClick={() => router.back()}
            className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition">
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}
