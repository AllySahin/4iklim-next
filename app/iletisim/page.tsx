import Image from 'next/image';
import Link from 'next/link';

const offices = [
  {
    city: 'İstanbul (Genel Merkez)',
    address: 'Fatih Mahallesi, İstiklal Caddesi No:120, Fatih / İstanbul',
    phone: '+90 212 555 00 00',
    email: 'info@4iklim.org',
    hours: 'Pzt–Cum: 09:00–18:00',
    icon: 'fa-building',
  },
  {
    city: 'Ankara Temsilciliği',
    address: 'Kızılay Mahallesi, Atatürk Bulvarı No:45, Çankaya / Ankara',
    phone: '+90 312 444 00 00',
    email: 'ankara@4iklim.org',
    hours: 'Pzt–Cum: 09:00–17:30',
    icon: 'fa-map-location-dot',
  },
  {
    city: 'İzmir Temsilciliği',
    address: 'Konak Mahallesi, Cumhuriyet Bulvarı No:78, Konak / İzmir',
    phone: '+90 232 333 00 00',
    email: 'izmir@4iklim.org',
    hours: 'Pzt–Cum: 09:00–17:30',
    icon: 'fa-map-location-dot',
  },
];

const socials = [
  { icon: 'fa-brands fa-instagram', label: 'Instagram', handle: '@4iklim', color: 'from-purple-600 to-pink-500' },
  { icon: 'fa-brands fa-twitter', label: 'Twitter / X', handle: '@4iklim', color: 'from-sky-500 to-blue-600' },
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook', handle: '4 İklim Derneği', color: 'from-blue-700 to-blue-500' },
  { icon: 'fa-brands fa-youtube', label: 'YouTube', handle: '4 İklim TV', color: 'from-red-600 to-red-500' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', handle: '4İklim İnsani Yardım', color: 'from-blue-800 to-blue-600' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', handle: '+90 555 000 0000', color: 'from-green-600 to-green-500' },
];

export default function Iletisim() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
          alt="İletişim"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6e]/85 to-[#0d3b6e]/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              İletişim
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h1>
            <p className="text-white/85 max-w-2xl text-lg">
              Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Form – 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#0d3b6e] to-[#2471a3] px-10 py-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <i className="fas fa-envelope"></i> Bize Mesaj Gönderin
                </h2>
                <p className="text-white/70 text-sm mt-1">En geç 2 iş günü içinde yanıt veririz.</p>
              </div>
              <div className="p-8 md:p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#0d3b6e] text-gray-700 transition-colors" placeholder="Ahmet Yılmaz" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#0d3b6e] text-gray-700 transition-colors" placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#0d3b6e] text-gray-700 transition-colors" placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Konu *</label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#0d3b6e] text-gray-700 transition-colors">
                      <option>Genel Bilgi</option>
                      <option>Bağış ve Destek</option>
                      <option>Gönüllülük Başvurusu</option>
                      <option>Kurumsal İşbirliği</option>
                      <option>Basın ve Medya</option>
                      <option>Şikayet / Öneri</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız *</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#0d3b6e] text-gray-700 transition-colors resize-none" placeholder="Mesajınızı buraya yazın..."></textarea>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <input type="checkbox" id="kvkk" className="mt-1 accent-[#0d3b6e]" />
                    <label htmlFor="kvkk" className="text-sm text-gray-600 leading-relaxed">
                      Kişisel verilerimin KVKK kapsamında işlenmesini kabul ediyorum.
                    </label>
                  </div>
                  <button type="button" className="w-full py-4 bg-[#0d3b6e] hover:bg-[#2471a3] text-white font-bold rounded-xl text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-[#0d3b6e]/20">
                    <i className="fas fa-paper-plane"></i>
                    Mesajı Gönder
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info – 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-md p-7">
                <h3 className="text-lg font-bold text-[#0d3b6e] mb-5 flex items-center gap-2">
                  <i className="fas fa-headset text-[#e67e22]"></i> Hızlı İletişim
                </h3>
                <div className="space-y-4">
                  <a href="tel:+902125550000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-[#0d3b6e]/10 rounded-full flex items-center justify-center group-hover:bg-[#0d3b6e]/20 transition-colors">
                      <i className="fas fa-phone text-[#0d3b6e] text-sm"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Telefon</p>
                      <p className="font-semibold text-gray-700 text-sm">+90 212 555 00 00</p>
                    </div>
                  </a>
                  <a href="tel:+908503330000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-[#e67e22]/10 rounded-full flex items-center justify-center group-hover:bg-[#e67e22]/20 transition-colors">
                      <i className="fas fa-phone-volume text-[#e67e22] text-sm"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Bağış Hattı</p>
                      <p className="font-semibold text-gray-700 text-sm">0850 333 00 00</p>
                    </div>
                  </a>
                  <a href="mailto:info@4iklim.org" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-[#059669]/10 rounded-full flex items-center justify-center group-hover:bg-[#059669]/20 transition-colors">
                      <i className="fas fa-envelope text-[#059669] text-sm"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">E-posta</p>
                      <p className="font-semibold text-gray-700 text-sm">info@4iklim.org</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="bg-white rounded-2xl shadow-md p-7">
                <h3 className="text-lg font-bold text-[#0d3b6e] mb-4 flex items-center gap-2">
                  <i className="fas fa-location-dot text-[#e67e22]"></i> Genel Merkez
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Fatih Mahallesi, İstiklal Caddesi No:120<br />
                  Fatih / İstanbul, 34000
                </p>
                <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <i className="fas fa-map text-3xl mb-2 text-[#0d3b6e]/40"></i>
                    <p className="text-xs">Harita görünümü</p>
                  </div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-3 text-sm text-[#0d3b6e] font-semibold flex items-center gap-1 hover:text-[#2471a3]">
                  Google Maps&apos;te Aç <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>

              {/* Working Hours */}
              <div className="bg-[#0d3b6e] rounded-2xl p-7 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-clock text-[#e67e22]"></i> Çalışma Saatleri
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Pazartesi – Cuma</span>
                    <span className="font-semibold">09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Cumartesi</span>
                    <span className="font-semibold">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Pazar</span>
                    <span className="text-white/50">Kapalı</span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/20 text-xs text-white/60">
                  Acil durumlar için 7/24 bağış hattımızı arayabilirsiniz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-2">Temsilciliklerimiz</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Tüm Ofislerimiz</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offices.map((o, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#0d3b6e]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d3b6e]/20 transition-colors">
                  <i className={`fas ${o.icon} text-[#0d3b6e]`}></i>
                </div>
                <h4 className="font-bold text-[#0d3b6e] mb-3">{o.city}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex gap-2"><i className="fas fa-map-marker-alt text-[#e67e22] mt-0.5 flex-shrink-0"></i>{o.address}</p>
                  <p className="flex gap-2"><i className="fas fa-phone text-[#e67e22] flex-shrink-0"></i>{o.phone}</p>
                  <p className="flex gap-2"><i className="fas fa-envelope text-[#e67e22] flex-shrink-0"></i>{o.email}</p>
                  <p className="flex gap-2"><i className="fas fa-clock text-[#e67e22] flex-shrink-0"></i>{o.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-2">Takip Edin</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Sosyal Medyada Biz</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {socials.map((s, i) => (
              <div key={i} className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 text-center text-white hover:scale-105 transition-transform cursor-pointer shadow-md`}>
                <i className={`${s.icon} text-3xl mb-2`}></i>
                <p className="font-bold text-xs">{s.label}</p>
                <p className="text-white/75 text-xs mt-1">{s.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
