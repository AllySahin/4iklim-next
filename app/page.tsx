import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let dbSlides: { image: string; title: string; subtitle: string; description: string; cta: string; ctaLink: string }[] = [];
  let dbProjects: any[] = [];
  
  try {
    const slides = await prisma.slide.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });
    dbSlides = slides.map((s) => ({
      image: s.image,
      title: s.title,
      subtitle: s.subtitle || '',
      description: s.description || '',
      cta: s.ctaText || 'Detaylı Bilgi',
      ctaLink: s.ctaLink || '/projeler',
    }));

    // Son 3 projeyi getir
    const projects = await prisma.project.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });
    dbProjects = projects;
  } catch {
    // DB not connected — will use defaults
  }

  return (
    <>
      <HeroSlider slides={dbSlides} />

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
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Faaliyet Alanlarımız</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-4">Neler Yapıyoruz?</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              Ticari kaygı gütmeyen derneğimiz, şeffaflık ilkesi ile yürüttüğü projelerle<br className="hidden md:block" /> Türkiye ve Afrika'da binlerce insana umut oluyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'fa-graduation-cap',
                color: 'text-[#e67e22]',
                bg: 'bg-[#e67e22]/10',
                title: 'Öğrenci Bursları',
                desc: 'İhtiyaç sahibi öğrencilere eğitim bursu sağlayarak geleceklerine yatırım yapıyoruz.'
              },
              {
                icon: 'fa-home',
                color: 'text-[#059669]',
                bg: 'bg-[#059669]/10',
                title: 'Kira Yardımı',
                desc: 'Barınma sıkıntısı çeken ailelere düzenli kira desteği sunuyoruz.'
              },
              {
                icon: 'fa-hands-holding-circle',
                color: 'text-[#0d3b6e]',
                bg: 'bg-[#0d3b6e]/10',
                title: 'İhtiyaç Sahipleri',
                desc: 'Gıda, giyim, ısınma ve diğer temel ihtiyaçlar için destek sağlıyoruz.'
              },
              {
                icon: 'fa-book-quran',
                color: 'text-[#8e44ad]',
                bg: 'bg-[#8e44ad]/10',
                title: 'Afrika\'da Kuran Dağıtımı',
                desc: 'Afrika ülkelerinde Kuran-ı Kerim dağıtımı ve din eğitimi programları yürütüyoruz.'
              },
              {
                icon: 'fa-droplet',
                color: 'text-[#3498db]',
                bg: 'bg-[#3498db]/10',
                title: 'Su Kuyusu',
                desc: 'Temiz suya erişimi olmayan bölgelerde su kuyuları açıyor, hayat kaynağı oluyoruz.'
              },
              {
                icon: 'fa-mosque',
                color: 'text-[#16a085]',
                bg: 'bg-[#16a085]/10',
                title: 'Medrese ve Cami Yapımı',
                desc: 'Eğitim ve ibadet merkezleri inşa ederek kalıcı katkılar sunuyoruz.'
              },
            ].map((activity, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${activity.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${activity.icon} text-2xl ${activity.color}`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#0d3b6e] mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0d3b6e]/5 to-[#059669]/5 rounded-2xl p-8 border-l-4 border-[#0d3b6e]">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-12 h-12 bg-[#0d3b6e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-halved text-[#0d3b6e] text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#0d3b6e] mb-2">Şeffaflık ve Güvenilirlik</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Ticari kaygı gütmeyen</strong> bir sivil toplum kuruluşu olarak tüm faaliyetlerimizi 
                    şeffaflık ilkesi içerisinde yürütüyor, her kuruşun hesabını bağışçılarımıza raporlarımızla sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
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

      <section className="py-20 bg-gray-50">
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
            {dbProjects.length > 0 ? (
              dbProjects.map((project) => (
                <Link key={project.id} href={`/projeler/${project.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 ${project.categoryColor} text-white text-xs font-bold rounded-full`}>{project.category}</span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.status === 'Devam Ediyor' ? 'bg-white text-[#059669] border border-[#059669]' : 'bg-white text-gray-600 border border-gray-300'}`}>{project.status}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[16px] font-bold text-[#0d3b6e] mb-2 group-hover:text-[#2471a3] transition-colors leading-snug">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description?.substring(0, 100)}...</p>
                    <div className="inline-flex items-center gap-2 text-[#e67e22] font-semibold text-sm group-hover:text-[#ca6f1e]">
                      Detayları gör <i className="fas fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // Fallback projeler
              [
                {
                  slug: 'ogrenci-burslari',
                  image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
                  badge: 'Eğitim', badgeColor: 'bg-orange-600',
                  title: 'Öğrenci Bursları',
                  desc: 'İhtiyaç sahibi öğrencilere eğitim bursu sağlayarak geleceklerine yatırım yapıyoruz.',
                  status: 'Devam Ediyor',
                },
                {
                  slug: 'kira-yardimi',
                  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
                  badge: 'Barınma', badgeColor: 'bg-green-600',
                  title: 'Kira Yardımı',
                  desc: 'Barınma sıkıntısı çeken ailelere düzenli kira desteği sunuyoruz.',
                  status: 'Devam Ediyor',
                },
                {
                  slug: 'ihtiyac-sahipleri',
                  image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
                  badge: 'Gıda', badgeColor: 'bg-blue-600',
                  title: 'İhtiyaç Sahiplerine Destek',
                  desc: 'Gıda, giyim ve diğer temel ihtiyaçlar için destek sağlıyoruz.',
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
              ))
            )}
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

