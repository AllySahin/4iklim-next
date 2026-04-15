import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a2d55] text-white">

      {/* Newsletter Bar */}
      <div className="border-b border-white/10 bg-[#0d3b6e]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-base">E-Bülten&apos;e Abone Olun</p>
              <p className="text-white/60 text-sm">Kampanya ve haberlerden ilk siz haberdar olun.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#e67e22]"
              />
              <button className="bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand — 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="4 İklim İnsani Yardım Derneği"
                width={200}
                height={47}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-xs">
              Türkiye&apos;nin ve dünyanın dört bir yanında ihtiyaç sahiplerine yardım eli uzatan, şeffaf ve güvenilir bir sivil toplum kuruluşuyuz.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: 'fa-award', text: 'Kamu Yararına Dernek' },
                { icon: 'fa-shield-halved', text: 'KVKK Uyumlu' },
                { icon: 'fa-file-invoice', text: 'Şeffaflık Raporu' },
              ].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                  <i className={`fas ${b.icon} text-[#e67e22]`}></i> {b.text}
                </span>
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-2">
              {[
                { href: '#', icon: 'fa-x-twitter', label: 'Twitter' },
                { href: '#', icon: 'fa-instagram', label: 'Instagram' },
                { href: '#', icon: 'fa-facebook-f', label: 'Facebook' },
                { href: '#', icon: 'fa-youtube', label: 'YouTube' },
                { href: '#', icon: 'fa-linkedin-in', label: 'LinkedIn' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e67e22] transition-colors text-sm">
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Menü</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/', 'Ana Sayfa'],
                ['/hakkimizda', 'Hakkımızda'],
                ['/projeler', 'Projelerimiz'],
                ['/haberler', 'Haberler'],
                ['/galeri', 'Galeri'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/65 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-[#e67e22]"></i> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Katılım</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/bagis', 'Bağış Yap'],
                ['/gonullu', 'Gönüllü Ol'],
                ['/kampanya', 'Aktif Kampanya'],
                ['/iletisim', 'İletişim'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-white/65 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-[#e67e22]"></i> {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/bagis" className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors shadow-lg shadow-[#e67e22]/20">
                <i className="fas fa-hand-holding-heart"></i> Bağış Yap
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">İletişim</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#e67e22] mt-1 flex-shrink-0"></i>
                <span>Fatih Mahallesi, İstiklal Cad. No:120<br />Fatih / İstanbul, 34000</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-[#e67e22] flex-shrink-0"></i>
                <a href="tel:+902120000000" className="hover:text-white transition-colors">+90 (212) 000 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-volume text-[#e67e22] flex-shrink-0"></i>
                <a href="tel:+908503330000" className="hover:text-white transition-colors">0850 333 00 00 (Bağış Hattı)</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-[#e67e22] flex-shrink-0"></i>
                <a href="mailto:info@4iklim.org.tr" className="hover:text-white transition-colors">info@4iklim.org.tr</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Numbers Bar */}
      <div className="border-t border-white/10 bg-[#0d3b6e]/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '12.500+', label: 'Desteklenen Kişi' },
              { val: '48', label: 'Aktif Proje' },
              { val: '18 Ülke', label: 'Ulaşılan Coğrafya' },
              { val: '320+', label: 'Gönüllü' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-xl font-black text-[#e67e22]">{s.val}</p>
                <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[12px] text-white/40">
            <span>&copy; 2026 4 İklim İnsani Yardım Derneği. Tüm hakları saklıdır. Dernek Tescil No: 34-258-79</span>
            <div className="flex items-center gap-4">
              <Link href="/iletisim" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
              <span className="w-px h-3 bg-white/20"></span>
              <Link href="/iletisim" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
              <span className="w-px h-3 bg-white/20"></span>
              <Link href="/iletisim" className="hover:text-white transition-colors">Çerez Politikası</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
