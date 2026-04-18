'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/admin',
        redirect: false,
      });

      if (result?.error) {
        setError('E-posta veya şifre hatalı.');
        setLoading(false);
      } else if (result?.ok) {
        // Başarılı giriş - dashboard'a yönlendir
        router.push('/admin');
        router.refresh();
      } else {
        setError('Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Bağlantı hatası. Lütfen tekrar deneyin.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0d3b6e] rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-lock text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Girişi</h1>
          <p className="text-gray-500 text-sm mt-1">4 İklim Yönetim Paneli</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none transition"
              placeholder="admin@4iklim.org"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d3b6e] focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0d3b6e] text-white py-3 rounded-lg font-semibold hover:bg-[#0a2f58] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-spinner fa-spin"></i> Giriş yapılıyor...
              </span>
            ) : (
              'Giriş Yap'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
