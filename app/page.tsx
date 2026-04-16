import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="w-full mt-10 md:mt-14 mb-0">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Harekete Geç</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-4">Ne Yapmak İstiyorsunuz?</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'fa-hand-holding-heart',
                color: 'text-[#e67e22]',
                bg: 'bg-[#e67e22]/10',
                border: 'border-t-[#e67e22]',
                title: 'Bağış Yapın',
                desc: 'Her miktar fark yaratır. Bağışınız şeffaflık ilkesiyle doğrudan ihtiyaç sahiplerine ulaştırılır.',
                link: '/bagis',
                cta: 'Bağış Yap',
                ctaClass: 'bg-[#e67e22] hover:bg-[#ca6f1e] text-white',
              },
              {
                icon: 'fa-users',
                color: 'text-[#059669]',
                bg: 'bg-[#059669]/10',
                border: 'border-t-[#059669]',
                title: 'Gönüllü Olun',
                desc: 'Zamanınızı ve enerjinizi paylaşarak uzak coğrafyalardaki kardeşlerinize umut olun.',
                link: '/gonullu',
                cta: 'Başvuru Formu',
                ctaClass: 'bg-[#059669] hover:bg-[#047857] text-white',
              },
              {
                icon: 'fa-clipboard-list',
                color: 'text-[#0d3b6e]',
                bg: 'bg-[#0d3b6e]/10',
                border: 'border-t-[#0d3b6e]',
                title: 'Projelerimiz',
                desc: 'Yürüttüğümüz insani yardım ve toplumsal kalkınma projelerini detaylıca inceleyin.',
                link: '/projeler',
                cta: 'Projeleri İncele',
                ctaClass: 'bg-[#0d3b6e] hover:bg-[#2471a3] text-white',
              },
            ].map((card, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-t-4 ${card.border}`}>
                <div className="p-8">
                  <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-5`}>
                    <i className={`fas ${card.icon} text-2xl ${card.color}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d3b6e] mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <Link href={card.link} className={`inline-flex items-center gap-2 ${card.ctaClass} px-6 py-2.5 rounded-full font-semibold text-sm transition-colors`}>
                    {card.cta} <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                  alt="Topluluk ve Dayanışma"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Biz Kimiz?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-2 leading-tight">İnsani Değerleri<br />Yaşatan Köprü</h2>
              <div className="w-16 h-1 bg-[#e67e22] rounded mb-7"></div>
              <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
                2010 yılında kurulan 4 İklim İnsani Yardım Derneği, Türkiye&apos;nin ve dünyanın dört bir yanındaki ihtiyaç sahiplerine ulaşarak kalıcı değişimler yaratmaktadır.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Şeffaflık ve hesap verebilirlik ilkesiyle faaliyet gösteriyoruz.',
                  'Yardımlarımızı ayrım gözetmeksizin tüm ihtiyaç sahiplerine ulaştırıyoruz.',
                  'Kısa vadeli yardım ve uzun vadeli kalkınma projelerini bir arada yürütüyoruz.',
                  'Bağışlarınızın %94\'ü doğrudan saha projelerine aktarılmaktadır.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[#e67e22]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-check text-[#e67e22] text-[10px]"></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/hakkimizda" className="inline-flex items-center gap-2 bg-[#0d3b6e] hover:bg-[#2471a3] text-white font-semibold px-7 py-3 rounded-full transition-colors">
                Daha Fazla Bilgi <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Saha Çalışmaları</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-1">Son Projelerimiz</h2>
              <div className="w-16 h-1 bg-[#e67e22] rounded"></div>
            </div>
            <Link href="/projeler" className="inline-flex items-center gap-2 text-[#0d3b6e] font-semibold text-sm border-2 border-[#0d3b6e] px-5 py-2 rounded-full hover:bg-[#0d3b6e] hover:text-white transition-all self-start md:self-auto">
              Tüm Projeler <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                slug: 'depremzede-konteyner-ev',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                badge: 'Barınma', badgeColor: 'bg-blue-600',
                title: 'Depremzede Ailelere Konteyner Ev Projesi',
                desc: 'Doğal afet mağdurları için geçici barınma imkânı sağlayan konteyner ev kampanyamız devam etmektedir.',
                status: 'Devam Ediyor',
              },
              {
                slug: 'okul-cantasi-kirtasiye',
                image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
                badge: 'Eğitim', badgeColor: 'bg-[#e67e22]',
                title: 'Kırtasiye ve Eğitim Seti Dağıtımı',
                desc: 'Her yıl düzenlenen okul başı kampanyamızda binlerce öğrenciye kırtasiye ve okul çantası ulaştırıyoruz.',
                status: 'Tamamlandı',
              },
              {
                slug: 'ramazan-gida-paketi',
                image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=600&q=80',
                badge: 'Gıda', badgeColor: 'bg-[#059669]',
                title: 'Ramazan Gıda Paketi Dağıtımı',
                desc: 'Ramazan ayı boyunca ihtiyaç sahibi ailelere temel gıda paketleri ve iftar yemekleri ulaştırıyoruz.',
                status: 'Devam Ediyor',
              },
            ].map((project, i) => (
              <Link key={i} href={`/projeler/${project.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 ${project.badgeColor} text-white text-xs font-bold rounded-full`}>{project.badge}</span>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.status === 'Devam Ediyor' ? 'bg-white text-[#059669] border border-[#059669]' : 'bg-white text-gray-600 border border-gray-300'}`}>{project.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-bold text-[#0d3b6e] mb-2 group-hover:text-[#2471a3] transition-colors leading-snug">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.desc}</p>
                  <div className="inline-flex items-center gap-2 text-[#e67e22] font-semibold text-sm group-hover:text-[#ca6f1e]">
                    Detayları gör <i className="fas fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-4">Harekete Geç</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            Bir Bağışınız<br className="hidden md:block" /> Bir Hayat Değiştirebilir
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bağışlarınızın %94&apos;ü şeffaflık ilkesi çerçevesinde tamamen ihtiyaç sahiplerine aktarılmaktadır.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/bagis" className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-bold px-9 py-4 rounded-full text-base transition-colors shadow-xl shadow-[#e67e22]/20">
              <i className="fas fa-hand-holding-heart"></i> Hemen Bağış Yap
            </Link>
            <Link href="/gonullu" className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-9 py-4 rounded-full text-base transition-colors shadow-xl shadow-[#059669]/20">
              <i className="fas fa-users"></i> Gönüllü Ol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

