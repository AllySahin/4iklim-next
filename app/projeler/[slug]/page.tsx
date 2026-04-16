'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../page';
import { use } from 'react';

export default function ProjeDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[420px] md:h-[520px]">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 md:pb-16">
            <div className="mb-4 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <Link href="/projeler" className="hover:text-white transition-colors">Projeler</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-white font-medium">{project.title}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className={`px-4 py-1.5 ${project.categoryColor} text-white text-sm font-bold rounded-full shadow-lg`}>
                <i className="fas fa-tag mr-1.5"></i>{project.category}
              </span>
              <span className={`px-4 py-1.5 text-sm font-bold rounded-full shadow-lg ${
                project.status === 'Tamamlandı' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-[#059669]'
              }`}>
                <i className={`fas ${project.status === 'Tamamlandı' ? 'fa-check-circle' : 'fa-spinner fa-pulse'} mr-1.5`}></i>
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 max-w-4xl leading-tight drop-shadow-lg">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/95">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <i className="fas fa-location-dot text-[#e67e22]"></i>
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <i className="fas fa-bullseye text-[#059669]"></i>
                <span className="font-medium">Hedef: {project.target}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0d3b6e] to-[#2471a3] rounded-2xl flex items-center justify-center">
                  <i className="fas fa-info-circle text-white text-xl"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b6e]">Proje Hakkında</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">{project.desc}</p>
                <p>
                  Bu proje kapsamında, ihtiyaç sahiplerine doğrudan ve etkili yardım ulaştırmayı hedefliyoruz. 
                  Sahada görev alan deneyimli ekiplerimiz, bağışçılarımızın güveni ve destekleriyle her gün 
                  yüzlerce aileye umut oluyor, onların hayatlarına dokunuyor.
                </p>
                <p>
                  Şeffaflık ve hesap verebilirlik ilkelerimiz gereği, tüm bağışlarınızın kullanımı düzenli 
                  olarak raporlanmakta ve web sitemizden detaylı şekilde takip edilebilmektedir. Yapılan her 
                  harcama, ulaşılan her aile ve gerçekleştirilen her faaliyet kayıt altına alınmaktadır.
                </p>
                <div className="bg-gradient-to-r from-[#0d3b6e]/5 to-[#059669]/5 border-l-4 border-[#0d3b6e] p-6 rounded-lg mt-6">
                  <p className="font-semibold text-[#0d3b6e] mb-2">
                    <i className="fas fa-heart text-[#e67e22] mr-2"></i>
                    Siz de Bu Değişimin Parçası Olabilirsiniz
                  </p>
                  <p className="text-sm text-gray-600">
                    Yapacağınız her bağış, bir ailenin geleceğini aydınlatacak, çocukların geleceğine 
                    yatırım yapacak ve toplumsal dayanışmayı güçlendirecektir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#34d399] rounded-2xl flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-xl"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b6e]">Proje Hedefleri</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: 'fa-hands-helping', text: 'İhtiyaç sahibi ailelere doğrudan ve kalıcı destek sağlamak' },
                  { icon: 'fa-users', text: 'Toplumsal dayanışmayı güçlendirmek ve farkındalık yaratmak' },
                  { icon: 'fa-seedling', text: 'Sürdürülebilir çözümler üreterek uzun vadeli etki yaratmak' },
                  { icon: 'fa-chart-line', text: 'Şeffaf ve hesap verebilir bir yardım süreci yürütmek' },
                ].map((hedef, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${hedef.icon} text-[#059669]`}></i>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pt-1">{hedef.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#0d3b6e] mb-6 flex items-center gap-2">
                <i className="fas fa-chart-pie text-[#e67e22]"></i>
                Proje Özeti
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#0d3b6e]/5 to-[#059669]/5 rounded-xl p-4 border-l-4 border-[#0d3b6e]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                      <i className="fas fa-bullseye text-[#e67e22]"></i> Hedef
                    </span>
                    <span className="text-lg font-bold text-[#0d3b6e]">{project.target}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                     <i className="fas fa-map-marker-alt text-[#e67e22]"></i> Konum
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <i className="fas fa-tag text-[#e67e22]"></i> Kategori
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <i className="fas fa-circle-check text-[#e67e22]"></i> Durum
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e67e22] to-[#ca6f1e] rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hand-holding-heart text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Destek Olun</h3>
                <p className="text-white/90 text-sm">
                  Her bağış bir hayattır, her katkı bir umuttur.
                </p>
              </div>
              <Link 
                href="/bagis" 
                className="block w-full text-center bg-white text-[#e67e22] font-bold py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg text-lg"
              >
                <i className="fas fa-heart mr-2"></i>
                Bağış Yap
              </Link>
              <p className="text-center text-xs text-white/70 mt-4">
                <i className="fas fa-shield-alt mr-1"></i>
                Güvenli bağış sistemi
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#0d3b6e] mb-4 flex items-center gap-2">
                <i className="fas fa-share-nodes text-[#e67e22]"></i>
                Paylaş
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Sosyal medyada paylaşarak daha fazla kişiye ulaşmasını sağlayın
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'fa-facebook-f', color: 'bg-[#1877f2]', name: 'Facebook' },
                  { icon: 'fa-x-twitter', color: 'bg-gray-900', name: 'X' },
                  { icon: 'fa-whatsapp', color: 'bg-[#25d366]', name: 'WhatsApp' },
                  { icon: 'fa-linkedin-in', color: 'bg-[#0077b5]', name: 'LinkedIn' },
                ].map((social, i) => (
                  <button 
                    key={i}
                    className={`${social.color} text-white py-3 rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2`}
                    title={`${social.name}'da paylaş`}
                  >
                    <i className={`fab ${social.icon}`}></i>
                    <span className="text-xs font-medium">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#0d3b6e] mb-5 flex items-center gap-2">
                <i className="fas fa-folder-open text-[#e67e22]"></i>
                Diğer Projeler
              </h3>
              <div className="space-y-4">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p, i) => (
                    <Link 
                      key={i}
                      href={`/projeler/${p.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                          <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#0d3b6e] group-hover:text-[#2471a3] line-clamp-2 mb-2 transition-colors">
                            {p.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2.5 py-1 ${p.categoryColor} text-white rounded-full font-medium`}>
                              {p.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              %{p.percent}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link 
                href="/projeler"
                className="block w-full text-center mt-5 py-3 border-2 border-[#0d3b6e] text-[#0d3b6e] font-bold rounded-xl hover:bg-[#0d3b6e] hover:text-white transition-all"
              >
                Tüm Projeleri Gör
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

