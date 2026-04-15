import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../page';

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı',
    };
  }

  return {
    title: `${project.title} | 4 İklim İnsani Yardım`,
    description: project.desc,
  };
}

export default function ProjeDetay({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <Link href="/projeler" className="hover:text-white">Projeler</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-white">{project.title}</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-4 py-1.5 ${project.categoryColor} text-white text-sm font-bold rounded-full`}>
                {project.category}
              </span>
              <span className={`px-4 py-1.5 text-sm font-bold rounded-full ${project.status === 'Tamamlandı' ? 'bg-gray-800 text-white' : 'bg-white text-[#059669]'}`}>
                <i className={`fas ${project.status === 'Tamamlandı' ? 'fa-check-circle' : 'fa-spinner'} mr-1.5`}></i>
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-4xl leading-tight">
              {project.title}
            </h1>

            {/* Location */}
            <p className="text-white/90 text-lg flex items-center gap-2">
              <i className="fas fa-location-dot text-[#e67e22]"></i>
              {project.location}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Project Description */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0d3b6e] mb-6 flex items-center gap-3">
                <i className="fas fa-info-circle text-[#e67e22]"></i>
                Proje Hakkında
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu proje kapsamında, ihtiyaç sahiplerine doğrudan ve etkili yardım ulaştırmayı hedefliyoruz. 
                  Sahada görev alan ekiplerimiz, bağışçılarımızın destekleriyle her gün yüzlerce aileye umut oluyorlar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Şeffaflık ilkemiz gereği, tüm bağışlarınızın kullanımı düzenli olarak raporlanmakta ve 
                  web sitemizden takip edilebilmektedir. Sizin de bu projeye destek olarak, değişimin 
                  bir parçası olmanızı bekliyoruz.
                </p>
              </div>
            </div>

            {/* Project Goals */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0d3b6e] mb-6 flex items-center gap-3">
                <i className="fas fa-bullseye text-[#e67e22]"></i>
                Proje Hedefleri
              </h2>
              <ul className="space-y-4">
                {[
                  'İhtiyaç sahibi ailelere doğrudan ve kalıcı destek sağlamak',
                  'Toplumsal dayanışmayı güçlendirmek ve farkındalık yaratmak',
                  'Sürdürülebilir çözümler üreterek uzun vadeli etki yaratmak',
                  'Şeffaf ve hesap verebilir bir yardım süreci yürütmek'
                ].map((hedef, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-xs"></i>
                    </span>
                    {hedef}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0d3b6e] mb-6 flex items-center gap-3">
                <i className="fas fa-timeline text-[#e67e22]"></i>
                Proje Zaman Çizelgesi
              </h2>
              <div className="space-y-6">
                {[
                  { date: 'Ocak 2026', title: 'Proje Başlangıcı', desc: 'İhtiyaç analizi ve saha araştırması tamamlandı' },
                  { date: 'Şubat 2026', title: 'İlk Aşama', desc: 'Yardım paketlerinin hazırlanması ve lojistik planlaması' },
                  { date: 'Mart 2026', title: 'Dağıtım Başladı', desc: 'Sahada aktif dağıtım çalışmaları devam ediyor' },
                  { date: 'Nisan 2026', title: 'Devam Ediyor', desc: 'Hedeflenen ailelerin %69\'una ulaşıldı' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0d3b6e] flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
                    </div>
                    <div className="pb-6 flex-1">
                      <span className="text-sm font-semibold text-[#e67e22]">{item.date}</span>
                      <h3 className="text-lg font-bold text-[#0d3b6e] mt-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-[#0d3b6e] mb-4">Proje İstatistikleri</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Hedef:</span>
                    <span className="font-bold text-gray-800">{project.target}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Ulaşılan:</span>
                    <span className="font-bold text-[#059669]">{project.reached}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden mt-3">
                    <div 
                      className="h-full bg-gradient-to-r from-[#059669] to-[#34d399] rounded-full transition-all"
                      style={{ width: `${project.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-gray-500 mt-2">%{project.percent} tamamlandı</p>
                </div>
              </div>
            </div>

            {/* Donate CTA */}
            <div className="bg-gradient-to-br from-[#e67e22] to-[#f39c12] rounded-2xl p-6 text-white shadow-lg">
              <i className="fas fa-hand-holding-heart text-4xl mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Bu Projeye Destek Olun</h3>
              <p className="text-white/90 text-sm mb-6">
                Her bağış, bir ailenin hayatında kalıcı bir değişim yaratır.
              </p>
              <Link 
                href="/bagis" 
                className="block w-full text-center bg-white text-[#e67e22] font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Bağış Yap
              </Link>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-[#0d3b6e] mb-4">Projeyi Paylaş</h3>
              <p className="text-sm text-gray-600 mb-4">
                Sosyal medyada paylaşarak daha fazla kişiye ulaşın
              </p>
              <div className="flex gap-2">
                {[
                  { icon: 'fa-facebook-f', color: 'bg-[#1877f2]' },
                  { icon: 'fa-x-twitter', color: 'bg-black' },
                  { icon: 'fa-whatsapp', color: 'bg-[#25d366]' },
                  { icon: 'fa-linkedin-in', color: 'bg-[#0077b5]' },
                ].map((social, i) => (
                  <button 
                    key={i}
                    className={`flex-1 ${social.color} text-white py-3 rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    <i className={`fab ${social.icon}`}></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-[#0d3b6e] mb-4">Diğer Projeler</h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p, i) => (
                    <Link 
                      key={i}
                      href={`/projeler/${p.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={p.image} alt={p.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#0d3b6e] group-hover:text-[#2471a3] line-clamp-2 mb-1">
                            {p.title}
                          </h4>
                          <span className={`text-xs px-2 py-0.5 ${p.categoryColor} text-white rounded-full`}>
                            {p.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link 
                href="/projeler"
                className="block w-full text-center mt-4 py-2 border-2 border-[#0d3b6e] text-[#0d3b6e] font-semibold rounded-lg hover:bg-[#0d3b6e] hover:text-white transition-all text-sm"
              >
                Tüm Projeleri Gör
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
