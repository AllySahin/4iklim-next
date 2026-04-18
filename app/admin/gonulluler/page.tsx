'use client';

import { useEffect, useState } from 'react';

interface Volunteer {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  ageGroup: string;
  area: string;
  availability: string;
  travel: string;
  note: string;
  kvkkConsent: boolean;
  status: string;
  createdAt: string;
}

export default function VolunteerManagementPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchVolunteers();
  }, []);

  async function fetchVolunteers() {
    try {
      const res = await fetch('/api/volunteers');
      const data = await res.json();
      if (Array.isArray(data)) setVolunteers(data);
    } catch {
      // API not connected
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/volunteers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setVolunteers(volunteers.map((v) => (v.id === id ? { ...v, status } : v)));
  }

  async function handleDelete(id: string) {
    if (!confirm('Bu gönüllüyü silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/volunteers/${id}`, { method: 'DELETE' });
    setVolunteers(volunteers.filter((v) => v.id !== id));
  }

  const filtered = filterStatus === 'all' ? volunteers : volunteers.filter((v) => v.status === filterStatus);

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-600',
  };

  const statusLabels: Record<string, string> = {
    pending: 'Bekliyor',
    approved: 'Onaylandı',
    rejected: 'Reddedildi',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gönüllü Yönetimi</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Filtre:</span>
          {['all', 'pending', 'approved', 'rejected'].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                filterStatus === s ? 'bg-[#0d3b6e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s === 'all' ? 'Tümü' : statusLabels[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-sm">
          <span className="font-semibold text-yellow-700">{volunteers.filter((v) => v.status === 'pending').length}</span>{' '}
          <span className="text-yellow-600">Bekliyor</span>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm">
          <span className="font-semibold text-green-700">{volunteers.filter((v) => v.status === 'approved').length}</span>{' '}
          <span className="text-green-600">Onaylandı</span>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-sm">
          <span className="font-semibold text-red-600">{volunteers.filter((v) => v.status === 'rejected').length}</span>{' '}
          <span className="text-red-500">Reddedildi</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <i className="fas fa-spinner fa-spin text-2xl"></i>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <i className="fas fa-users text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">
            {filterStatus === 'all' ? 'Henüz gönüllü başvurusu yok.' : 'Bu filtrede sonuç bulunamadı.'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Ad Soyad</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">İletişim</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Yaş / Alan</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Uygunluk</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Seyahat</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="font-medium text-gray-800">{v.fullName}</div>
                      <div className="text-xs text-gray-400">{new Date(v.createdAt).toLocaleDateString('tr-TR')}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-sm text-gray-600">{v.phone}</div>
                      <div className="text-xs text-gray-400">{v.email}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-sm text-gray-600">{v.ageGroup}</div>
                      <div className="text-xs text-gray-400">{v.area}</div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{v.availability}</td>
                    <td className="px-5 py-4 text-center">
                      {v.travel && v.travel.includes('Evet') ? (
                        <span className="inline-flex items-center gap-1 text-xs text-green-600">
                          <i className="fas fa-check-circle"></i>
                          <span className="hidden lg:inline">{v.travel}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <i className="fas fa-times-circle"></i>
                          <span className="hidden lg:inline">{v.travel || 'Belirtilmedi'}</span>
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[v.status] || 'bg-gray-100 text-gray-500'}`}>
                        {statusLabels[v.status] || v.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {v.status !== 'approved' && (
                          <button onClick={() => updateStatus(v.id, 'approved')}
                            className="text-green-600 hover:text-green-800 p-2" title="Onayla">
                            <i className="fas fa-check-circle"></i>
                          </button>
                        )}
                        {v.status !== 'rejected' && (
                          <button onClick={() => updateStatus(v.id, 'rejected')}
                            className="text-orange-500 hover:text-orange-700 p-2" title="Reddet">
                            <i className="fas fa-ban"></i>
                          </button>
                        )}
                        <button onClick={() => handleDelete(v.id)}
                          className="text-red-500 hover:text-red-700 p-2" title="Sil">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
