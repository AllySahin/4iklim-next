'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  image: string;
  title: string;
  category: string;
  status: string;
  location: string;
  isActive: boolean;
}

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (Array.isArray(data)) setProjects(data);
    } catch {
      // API not connected
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Bu projeyi silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    setProjects(projects.filter((p) => p.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Proje Yönetimi</h2>
        <Link
          href="/admin/projeler/new"
          className="bg-[#0d3b6e] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0a2f58] transition flex items-center gap-2"
        >
          <i className="fas fa-plus"></i>
          Yeni Proje
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <i className="fas fa-spinner fa-spin text-2xl"></i>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <i className="fas fa-project-diagram text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Henüz proje eklenmemiş.</p>
          <Link href="/admin/projeler/new" className="text-[#0d3b6e] font-medium hover:underline mt-2 inline-block">
            İlk projeyi ekleyin
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Görsel</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Proje Adı</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Kategori</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Konum</th>
                <th className="text-center px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-20 h-14 relative rounded overflow-hidden bg-gray-100">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{project.title}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{project.category}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{project.location}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'Tamamlandı' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/projeler/${project.id}/edit`}
                        className="text-blue-600 hover:text-blue-800 p-2"
                        title="Düzenle"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
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
