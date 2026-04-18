'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Stats {
  slides: number;
  projects: number;
  gallery: number;
  volunteers: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<Stats>({ slides: 0, projects: 0, gallery: 0, volunteers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = '/admin/login';
    }
  }, [status]);

  useEffect(() => {
    if (status === 'authenticated') {
      async function fetchStats() {
        try {
          const [slidesRes, projectsRes, galleryRes, volunteersRes] = await Promise.all([
            fetch('/api/slides'),
            fetch('/api/projects'),
            fetch('/api/gallery'),
            fetch('/api/volunteers'),
          ]);
          const [slides, projects, gallery, volunteers] = await Promise.all([
            slidesRes.json(),
            projectsRes.json(),
            galleryRes.json(),
            volunteersRes.json(),
          ]);
          setStats({
            slides: Array.isArray(slides) ? slides.length : 0,
            projects: Array.isArray(projects) ? projects.length : 0,
            gallery: Array.isArray(gallery) ? gallery.length : 0,
            volunteers: Array.isArray(volunteers) ? volunteers.length : 0,
          });
        } catch {
          // API not connected yet
        } finally {
          setLoading(false);
        }
      }
      fetchStats();
    }
  }, [status]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-3xl text-gray-400 mb-2"></i>
          <p className="text-gray-500">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const cards = [
    { label: 'Slider', count: stats.slides, icon: 'fas fa-images', color: 'bg-blue-500', href: '/admin/slider' },
    { label: 'Projeler', count: stats.projects, icon: 'fas fa-project-diagram', color: 'bg-green-500', href: '/admin/projeler' },
    { label: 'Galeri', count: stats.gallery, icon: 'fas fa-photo-video', color: 'bg-purple-500', href: '/admin/galeri' },
    { label: 'Gönüllüler', count: stats.volunteers, icon: 'fas fa-users', color: 'bg-orange-500', href: '/admin/gonulluler' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {loading ? '—' : card.count}
                </p>
              </div>
              <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <i className={`${card.icon} text-white text-lg`}></i>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Hoş Geldiniz!</h3>
        <p className="text-gray-600">
          4 İklim İnsani Yardım Derneği yönetim paneline hoş geldiniz.
        </p>
      </div>
    </div>
  );
}
