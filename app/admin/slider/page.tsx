'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  order: number;
  isActive: boolean;
}

export default function SliderListPage() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides();
  }, []);

  async function fetchSlides() {
    try {
      const res = await fetch('/api/slides');
      const data = await res.json();
      if (Array.isArray(data)) setSlides(data);
    } catch {
      // API not connected
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Bu slider\'ı silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/slides/${id}`, { method: 'DELETE' });
    setSlides(slides.filter((s) => s.id !== id));
  }

  async function toggleActive(id: string, current: boolean) {
    await fetch(`/api/slides/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !current }),
    });
    setSlides(slides.map((s) => (s.id === id ? { ...s, isActive: !current } : s)));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Slider Yönetimi</h2>
        <Link
          href="/admin/slider/new"
          className="bg-[#0d3b6e] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0a2f58] transition flex items-center gap-2"
        >
          <i className="fas fa-plus"></i>
          Yeni Slider
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <i className="fas fa-spinner fa-spin text-2xl"></i>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      ) : slides.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <i className="fas fa-images text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Henüz slider eklenmemiş.</p>
          <Link href="/admin/slider/new" className="text-[#0d3b6e] font-medium hover:underline mt-2 inline-block">
            İlk slider&apos;ı ekleyin
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Görsel</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Başlık</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Alt Başlık</th>
                <th className="text-center px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Sıra</th>
                <th className="text-center px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {slides.map((slide) => (
                <tr key={slide.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-24 h-14 relative rounded overflow-hidden bg-gray-100">
                      <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{slide.title}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{slide.subtitle}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{slide.order}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleActive(slide.id, slide.isActive)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        slide.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {slide.isActive ? 'Aktif' : 'Pasif'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/slider/${slide.id}/edit`}
                        className="text-blue-600 hover:text-blue-800 p-2"
                        title="Düzenle"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        onClick={() => handleDelete(slide.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                        title="Sil"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
