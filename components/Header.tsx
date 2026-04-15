'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#0d3b6e] text-white/85 text-xs py-1.5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-1.5">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-phone"></i> +90 (212) 000 00 00
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-envelope"></i> info@4iklim.org.tr
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-white transition-colors">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="4 İklim İnsani Yardım Derneği" 
                width={240}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1">
              <li><Link href="/" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/projeler" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Projelerimiz</Link></li>
              <li><Link href="/haberler" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Haberler</Link></li>
              <li><Link href="/galeri" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Galeri</Link></li>
              <li><Link href="/gonullu" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">Gönüllü Ol</Link></li>
              <li><Link href="/iletisim" className="px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-[#0d3b6e] transition-colors">İletişim</Link></li>
              <li>
                <Link href="/bagis" className="bg-[#e67e22] text-white px-4.5 py-2 rounded-lg font-semibold text-sm hover:bg-[#ca6f1e] transition-colors">
                  Bağış Yap
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0d3b6e] rounded transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="lg:hidden pb-4 space-y-2">
              <li><Link href="/" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link></li>
              <li><Link href="/projeler" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Projelerimiz</Link></li>
              <li><Link href="/haberler" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Haberler</Link></li>
              <li><Link href="/galeri" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Galeri</Link></li>
              <li><Link href="/gonullu" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Gönüllü Ol</Link></li>
              <li><Link href="/iletisim" className="block px-3.5 py-2 rounded-lg font-medium text-sm text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>İletişim</Link></li>
              <li>
                <Link href="/bagis" className="block bg-[#e67e22] text-white px-3.5 py-2 rounded-lg font-semibold text-sm text-center hover:bg-[#ca6f1e]" onClick={() => setIsMenuOpen(false)}>
                  Bağış Yap
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
