'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
  { href: '/admin/slider', label: 'Slider', icon: 'fas fa-images' },
  { href: '/admin/projeler', label: 'Projeler', icon: 'fas fa-project-diagram' },
  { href: '/admin/galeri', label: 'Galeri', icon: 'fas fa-photo-video' },
  { href: '/admin/gonulluler', label: 'Gönüllüler', icon: 'fas fa-users' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-[#0d3b6e] text-white flex flex-col">
        <div className="p-6 border-b border-white/20">
          <Link href="/admin" className="text-xl font-bold">
            4 İklim Admin
          </Link>
        </div>
        <nav className="flex-1 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                  isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
                }`}
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/20">
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-white/10 w-full rounded transition-colors"
          >
            <i className="fas fa-sign-out-alt w-5 text-center"></i>
            Çıkış Yap
          </button>
          <Link href="/" className="flex items-center gap-3 px-6 py-2 text-xs text-white/60 hover:text-white mt-1">
            <i className="fas fa-external-link-alt w-5 text-center"></i>
            Siteye Git
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Yönetim Paneli</h1>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
