import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Campaign Banner */}
      <section className="w-full mt-10 md:mt-16 mb-8">
        <Link href="/kampanya" className="block w-full">
          <Image 
            src="/images/banner1.png"
            alt="4 İklim İnsani Yardım Kampanyası"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
          />
        </Link>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Ne Yapmak İstiyorsunuz?</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mb-4"></div>
            <p className="text-gray-600">Size en yakın yolu seçin, birlikte iyilik yapalım.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <i className="fa-solid fa-hand-holding-heart text-5xl text-[#e67e22] mb-4"></i>
              <h3 className="text-xl font-bold text-[#0d3b6e] mb-3">Bağış Yapın</h3>
              <p className="text-gray-600 mb-4">Her miktar fark yaratır. Bağışınız doğrudan ihtiyaç sahiplerine ulaştırılmaktadır.</p>
              <Link href="/bagis" className="text-[#e67e22] font-semibold hover:text-[#ca6f1e] inline-flex items-center gap-2">
                Bağış için tıklayın <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <i className="fa-solid fa-users text-5xl text-[#059669] mb-4"></i>
              <h3 className="text-xl font-bold text-[#0d3b6e] mb-3">Gönüllü Olun</h3>
              <p className="text-gray-600 mb-4">Zamanınızı ve enerjinizi paylaşarak toplumsal değişime katkı sağlayın.</p>
              <Link href="/gonullu" className="text-[#059669] font-semibold hover:text-[#047857] inline-flex items-center gap-2">
                Başvurmak için tıklayın <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <i className="fa-solid fa-clipboard-list text-5xl text-[#0d3b6e] mb-4"></i>
              <h3 className="text-xl font-bold text-[#0d3b6e] mb-3">Projelerimizi İnceleyin</h3>
              <p className="text-gray-600 mb-4">Yürüttüğümüz insani yardım ve toplumsal kalkınma projelerimizi keşfedin.</p>
              <Link href="/projeler" className="text-[#e67e22] font-semibold hover:text-[#ca6f1e] inline-flex items-center gap-2">
                Projeleri görüntüleyin <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                alt="Topluluk ve Dayanışma"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Biz Kimiz?</h2>
              <div className="w-16 h-1 bg-[#e67e22] rounded mb-6"></div>
              <p className="text-gray-600 mb-5 text-lg">
                2010 yılında kurulan 4 İklim İnsani Yardım Derneği, Türkiye'nin tüm coğrafi bölgelerinde ve yurt dışında ihtiyaç sahiplerine ulaşarak insani değerleri yaşatmayı amaçlamaktadır.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#e67e22] text-xl mt-0.5"></i>
                  <span className="text-gray-700">Şeffaflık ve hesap verebilirlik ilkesiyle faaliyet gösteriyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#e67e22] text-xl mt-0.5"></i>
                  <span className="text-gray-700">Yardımlarımızı ayrım gözetmeksizin tüm ihtiyaç sahiplerine ulaştırıyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#e67e22] text-xl mt-0.5"></i>
                  <span className="text-gray-700">Gönüllü ve bağışçılarımızla güçlü bir dayanışma ağı oluşturuyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#e67e22] text-xl mt-0.5"></i>
                  <span className="text-gray-700">Kısa vadeli yardım ve uzun vadeli kalkınma projelerini bir arada yürütüyoruz.</span>
                </li>
              </ul>
              <Link 
                href="/hakkimizda"
                className="inline-block px-8 py-3 bg-[#0d3b6e] text-white font-semibold rounded-lg hover:bg-[#1a5276] transition-colors"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Son Projelerimiz</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mb-4"></div>
            <p className="text-gray-600">Sahada yürüttüğümüz güncel insani yardım ve kalkınma çalışmaları.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                badge: 'Barınma',
                title: 'Depremzede Ailelere Konteyner Ev Projesi',
                description: 'Doğal afet mağdurları için geçici barınma imkânı sağlayan konteyner ev kampanyamız devam etmektedir.'
              },
              {
                image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
                badge: 'Eğitim',
                title: 'Kırtasiye ve Eğitim Seti Dağıtımı',
                description: 'Her yıl düzenlenen okul başı kampanyamızda binlerce öğrenciye kırtasiye ve okul çantası ulaştırıyoruz.'
              },
              {
                image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=600&q=80',
                badge: 'Gıda',
                title: 'Ramazan Gıda Paketi Dağıtımı',
                description: 'Ramazan ayı boyunca ihtiyaç sahibi ailelere temel gıda paketleri ve iftar yemekleri ulaştırıyoruz.'
              }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#2471a3] text-white text-xs font-semibold rounded-full mb-3">
                    {project.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#0d3b6e] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <Link href="/projeler" className="text-[#e67e22] font-semibold text-sm hover:text-[#ca6f1e] inline-flex items-center gap-2">
                    Detayları gör <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projeler"
              className="inline-block px-8 py-3 bg-[#0d3b6e] text-white font-semibold rounded-lg hover:bg-[#1a5276] transition-colors"
            >
              Tüm Projeleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bir Bağışınız Bir Hayat Değiştirebilir</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Bağışlarınız şeffaflık ilkesi çerçevesinde, tamamen ihtiyaç sahiplerine aktarılmaktadır. Siz de bu güzel yolculuğun bir parçası olun.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/bagis"
              className="inline-block px-8 py-3 bg-[#e67e22] text-white font-semibold rounded-lg hover:bg-[#ca6f1e] transition-colors"
            >
              Bağış Bilgilerini Gör
            </Link>
            <Link 
              href="/gonullu"
              className="inline-block px-8 py-3 bg-[#059669] hover:bg-[#047857] text-white font-semibold rounded-lg shadow-lg transition-colors border border-transparent"
            >
              Gönüllü Ol
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Son Haberler</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mb-4"></div>
            <p className="text-gray-600">Faaliyetlerimizden ve derneğimizden haberdar olun.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=600&q=80',
                date: '10 Nisan 2026',
                title: 'Kış Yardım Kampanyamız Tamamlandı',
                description: '2025-2026 kış sezonu boyunca yürüttüğümüz kampanyada 3.200 aileye ulaştık.'
              },
              {
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
                date: '2 Mart 2026',
                title: 'Yeni Gönüllü Eğitim Programı Başladı',
                description: 'Gönüllülerimize yönelik düzenlediğimiz eğitim programına 85 kişi katıldı.'
              },
              {
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
                date: '14 Şubat 2026',
                title: 'Uluslararası Yardım İşbirliği Protokolü İmzalandı',
                description: 'Yurt dışı yardım faaliyetleri kapsamında yeni bir işbirliği anlaşması imzaladık.'
              }
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    <i className="far fa-calendar mr-2"></i>{news.date}
                  </p>
                  <h3 className="text-lg font-bold text-[#0d3b6e] mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                  <Link href="/haberler" className="text-[#e67e22] font-semibold text-sm hover:text-[#ca6f1e] inline-flex items-center gap-2">
                    Devamını oku <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/haberler"
              className="inline-block px-8 py-3 bg-[#0d3b6e] text-white font-semibold rounded-lg hover:bg-[#1a5276] transition-colors"
            >
              Tüm Haberleri Gör
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
