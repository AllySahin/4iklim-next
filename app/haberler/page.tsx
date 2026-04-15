import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=800&q=80',
    category: 'Kampanya', date: '10 Nisan 2026',
    title: 'Kış Yardım Kampanyamız Başarıyla Tamamlandı',
    excerpt: '2025-2026 kış sezonu boyunca yürüttüğümüz "Kardeşini Isıt" kampanyasında 3.200 aileye kömür, soba ve kışlık giysi ulaştırdık. Kampanyaya destek veren tüm bağışçılarımıza teşekkür ederiz.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    category: 'Eğitim', date: '2 Mart 2026',
    title: 'Yeni Gönüllü Eğitim Programı Başladı',
    excerpt: 'Sahada görev alacak gönüllülerimize yönelik hazırladığımız "Afet Farkındalık ve Acil Durum Müdahale" programına 85 kişi katıldı. Sertifika töreni önümüzdeki ay gerçekleşecek.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    category: 'Duyuru', date: '14 Şubat 2026',
    title: 'Uluslararası İnsani Yardım İşbirliği Protokolü İmzalandı',
    excerpt: 'Yurt dışı yardım faaliyetlerinin kapasitesini artırmak amacıyla 3 uluslararası sivil toplum kuruluşuyla kapsamlı bir işbirliği protokolü imzaladık.',
  },
  {
    image: 'https://images.unsplash.com/photo-1524995997946-a1ce25e64123?auto=format&fit=crop&w=800&q=80',
    category: 'Eğitim', date: '5 Ocak 2026',
    title: "Afrika'da 3 Yeni Okul İnşaatı Başladı",
    excerpt: "Nijer ve Chad'da hayırsever bağışçılarımızın desteğiyle 3 yeni ilkokul binasının inşaatına başlandı. Okullar tamamlandığında 900 öğrenciye hizmet verecek.",
  },
  {
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    category: 'Proje', date: '18 Aralık 2025',
    title: 'Ramazan Gıda Paketi Kampanyasına Kayıtlar Başladı',
    excerpt: '2026 yılı Ramazan kampanyamız için hazırlıklar başladı. Yurt içi ve yurt dışında 5.000 aileye ulaşmayı hedeflediğimiz bu kampanyaya destek olmak için son gün 15 Şubat.',
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    category: 'Basın', date: '1 Aralık 2025',
    title: '2025 Yılı Faaliyet Raporu Yayımlandı',
    excerpt: 'Derneğimizin 2025 yılına ait kapsamlı faaliyet raporu tüm şeffaflığıyla yayımlandı. Raporda proje detayları, harcama kalemleri ve gelecek dönem hedefleri yer almaktadır.',
  },
];

const categoryColors: Record<string, string> = {
  Kampanya: 'bg-[#e67e22]',
  Eğitim: 'bg-blue-600',
  Duyuru: 'bg-[#0d3b6e]',
  Proje: 'bg-[#059669]',
  Basın: 'bg-gray-600',
};

export default function Haberler() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
          alt="Haberler"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6e]/85 to-[#0d3b6e]/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Haberler
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Haberler & Duyurular</h1>
            <p className="text-white/85 max-w-2xl text-lg">
              Saha çalışmalarımızdan, tamamlanan projelerimizden ve derneğimizden haberdar olun.
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          <div className="mb-14">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-4">Öne Çıkan Haber</p>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row group hover:shadow-xl transition-shadow">
              <div className="relative w-full lg:w-1/2 h-72 lg:h-auto min-h-[280px]">
                <Image src={news[0].image} alt={news[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-5 left-5">
                  <span className={`px-4 py-1.5 ${categoryColors[news[0].category]} text-white text-xs font-bold rounded-full shadow`}>
                    {news[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center w-full lg:w-1/2">
                <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <i className="far fa-calendar text-[#e67e22]"></i> {news[0].date}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b6e] mb-5 group-hover:text-[#2471a3] transition-colors leading-snug">
                  {news[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{news[0].excerpt}</p>
                <div className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition-colors w-fit">
                  Haberin Devamını Oku <i className="fas fa-arrow-right text-sm"></i>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-6">Tüm Haberler</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${categoryColors[item.category] || 'bg-gray-600'} text-white text-xs font-bold rounded-full shadow`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                    <i className="far fa-calendar text-[#e67e22]"></i> {item.date}
                  </p>
                  <h3 className="text-[17px] font-bold text-[#0d3b6e] mb-3 group-hover:text-[#2471a3] transition-colors leading-snug flex-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#e67e22] font-semibold text-sm hover:text-[#ca6f1e] cursor-pointer mt-auto">
                    Devamını Oku <i className="fas fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-14 text-center">
            <button className="inline-flex items-center gap-2 border-2 border-[#0d3b6e] text-[#0d3b6e] font-semibold px-8 py-3 rounded-full hover:bg-[#0d3b6e] hover:text-white transition-all duration-300">
              <i className="fas fa-plus"></i> Daha Fazla Haber Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3]">
        <div className="container mx-auto px-4 text-center">
          <i className="fas fa-envelope text-4xl text-white/40 mb-4"></i>
          <h2 className="text-3xl font-bold text-white mb-3">Haber Bültenimize Abone Olun</h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Derneğimizin son haberleri, kampanyaları ve duyurularını e-posta yoluyla takip edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
            />
            <button className="bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-semibold px-7 py-3 rounded-full transition-colors whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}