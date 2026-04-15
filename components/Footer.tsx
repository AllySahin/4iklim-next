import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0d3b6e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="4 İklim" 
                width={200}
                height={47}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/80 mb-4">
              Türkiye'nin ve dünyanın dört bir yanında ihtiyaç sahiplerine yardım eli uzatan, şeffaf ve güvenilir bir sivil toplum kuruluşuyuz.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-white/80 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/projeler" className="text-white/80 hover:text-white transition-colors">Projelerimiz</Link></li>
              <li><Link href="/haberler" className="text-white/80 hover:text-white transition-colors">Haberler</Link></li>
              <li><Link href="/galeri" className="text-white/80 hover:text-white transition-colors">Galeri</Link></li>
            </ul>
          </div>

          {/* Participation */}
          <div>
            <h4 className="font-bold text-base mb-4">Katılım</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bagis" className="text-white/80 hover:text-white transition-colors">Bağış Yap</Link></li>
              <li><Link href="/gonullu" className="text-white/80 hover:text-white transition-colors">Gönüllü Ol</Link></li>
              <li><Link href="/iletisim" className="text-white/80 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5"></i>
                <span>[Adres bilgisi eklenecek]</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@4iklim.org.tr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/70">
            <span>&copy; 2026 4 İklim İnsani Yardım Derneği. Tüm hakları saklıdır.</span>
            <span>Dernek Tescil No: [XXXX]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
