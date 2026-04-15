'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/projeler', label: 'Projelerimiz' },
  { href: '/haberler', label: 'Haberler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/gonullu', label: 'Gönüllü Ol' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#0a2d55] text-white/80 text-xs py-2 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center divide-x divide-white/20">
              <a href="tel:+902120000000" className="flex items-center gap-1.5 pr-4 hover:text-white transition-colors">
                <i className="fas fa-phone-alt text-[#e67e22]"></i> +90 (212) 000 00 00
              </a>
              <a href="mailto:info@4iklim.org.tr" className="flex items-center gap-1.5 px-4 hover:text-white transition-colors">
                <i className="fas fa-envelope text-[#e67e22]"></i> info@4iklim.org.tr
              </a>
              <span className="flex items-center gap-1.5 pl-4 text-white/50">
                <i className="fas fa-clock text-[#e67e22]"></i> Pzt–Cum 09:00–18:00
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-[10px] uppercase tracking-widest mr-1">Takip Et</span>
              {[
                { href: 'https://twitter.com', icon: 'fa-x-twitter', label: 'Twitter' },
                { href: 'https://instagram.com', icon: 'fa-instagram', label: 'Instagram' },
                { href: 'https://facebook.com', icon: 'fa-facebook-f', label: 'Facebook' },
                { href: 'https://youtube.com', icon: 'fa-youtube', label: 'YouTube' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-6 h-6 rounded bg-white/10 flex items-center justify-center hover:bg-[#e67e22] transition-colors">
                  <i className={`fab ${s.icon} text-[11px]`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="4 İklim İnsani Yardım Derneği"
                width={240}
                height={56}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-3.5 py-2 font-medium text-[13px] text-gray-600 hover:text-[#0d3b6e] transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#e67e22] rounded-full group-hover:w-4/5 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/gonullu"
                className="text-[13px] font-semibold text-[#059669] border border-[#059669] px-4 py-2 rounded-full hover:bg-[#059669] hover:text-white transition-all duration-200"
              >
                <i className="fas fa-users mr-1.5"></i>Gönüllü Ol
              </Link>
              <Link
                href="/bagis"
                className="text-[13px] font-bold bg-[#e67e22] text-white px-5 py-2 rounded-full hover:bg-[#ca6f1e] transition-colors shadow-sm shadow-[#e67e22]/30"
              >
                <i className="fas fa-hand-holding-heart mr-1.5"></i>Bağış Yap
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <ul className="space-y-1 mb-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2.5 rounded-xl font-medium text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0d3b6e] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 px-4">
                <Link href="/gonullu" className="flex-1 py-2.5 text-center text-sm font-semibold text-[#059669] border border-[#059669] rounded-full hover:bg-[#059669] hover:text-white transition-all" onClick={() => setIsMenuOpen(false)}>
                  Gönüllü Ol
                </Link>
                <Link href="/bagis" className="flex-1 py-2.5 text-center text-sm font-bold bg-[#e67e22] text-white rounded-full hover:bg-[#ca6f1e] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Bağış Yap
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
