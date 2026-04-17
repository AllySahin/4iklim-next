'use client';

import { useState } from 'react';

const areas = [
  'Saha Çalışmaları ve Yardım Dağıtımı',
  'Eğitim ve Rehberlik',
  'Organizasyon ve Etkinlik Planlama',
  'Dijital Medya ve İletişim',
  'Tercüme / Dil Desteği',
  'Sağlık ve Psikososyal Destek',
  'Lojistik ve Tedarik',
  'Hukuki ve Mali Danışmanlık',
];

export default function VolunteerForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    ageGroup: '18–25',
    area: areas[0],
    availability: 'Hafta içi',
    travel: 'Evet, yurt içi',
    note: '',
    kvkkConsent: false,
  });

  async function handleSubmit() {
    if (!form.fullName || !form.phone || !form.email) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }
    if (!form.kvkkConsent) {
      alert('KVKK onayı zorunludur.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          travel: form.travel.startsWith('Evet'),
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        alert('Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch {
      alert('Bağlantı hatası. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check-circle text-[#059669] text-4xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-[#0d3b6e] mb-3">Başvurunuz Alındı!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Gönüllü başvurunuz başarıyla gönderildi. Koordinatörlerimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
          <input type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors" placeholder="Ahmet Yılmaz" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors" placeholder="05XX XXX XX XX" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors" placeholder="ornek@email.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Yaş Grubu</label>
          <select value={form.ageGroup} onChange={(e) => setForm({ ...form, ageGroup: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors">
            <option>18–25</option>
            <option>26–35</option>
            <option>36–45</option>
            <option>46–59</option>
            <option>60+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Gönüllü Olmak İstediğiniz Alan *</label>
        <select value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors">
          {areas.map((a, i) => <option key={i}>{a}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Müsaitlik Durumu</label>
          <select value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors">
            <option>Hafta içi</option>
            <option>Hafta sonu</option>
            <option>Her gün</option>
            <option>Uzaktan / Online</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Seyahat Edilebilir mi?</label>
          <select value={form.travel} onChange={(e) => setForm({ ...form, travel: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors">
            <option>Evet, yurt içi</option>
            <option>Evet, yurt içi ve dışı</option>
            <option>Hayır, sadece yerel</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Kendinizden Kısaca Bahsedin</label>
        <textarea rows={4} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#059669] text-gray-700 transition-colors resize-none" placeholder="Tecrübeleriniz, becerileriniz ve derneğimize katabileceğiniz değerler..."></textarea>
      </div>
      <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
        <input type="checkbox" id="kvkk" checked={form.kvkkConsent} onChange={(e) => setForm({ ...form, kvkkConsent: e.target.checked })} className="mt-1 accent-[#059669]" />
        <label htmlFor="kvkk" className="text-sm text-gray-600 leading-relaxed">
          Kişisel verilerimin 6698 sayılı KVKK kapsamında işlenmesini ve dernek faaliyetleri hakkında tarafımla iletişime geçilmesini kabul ediyorum.
        </label>
      </div>
      <button type="submit" disabled={loading}
        className="w-full py-4 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-xl text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-[#059669]/20 disabled:opacity-50">
        <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
        {loading ? 'Gönderiliyor...' : 'Başvurumu Gönder'}
      </button>
    </form>
  );
}
