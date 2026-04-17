import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { defaultProjects, type ProjectData } from '@/lib/default-data';

export const dynamic = 'force-dynamic';

async function getProjects(): Promise<ProjectData[]> {
  try {
    const dbProjects = await prisma.project.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    if (dbProjects.length > 0) {
      return dbProjects.map((p) => ({
        id: p.id,
        slug: p.slug,
        image: p.image,
        category: p.category,
        categoryColor: p.categoryColor || 'bg-blue-600',
        title: p.title,
        status: p.status || 'Devam Ediyor',
        location: p.location || '',
        target: p.target || '',
        reached: p.reached || '',
        percent: p.percent || 0,
        desc: p.description || '',
      }));
    }
  } catch {
    // DB not connected
  }
  return defaultProjects;
}

export default async function Projeler() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen">
      <div className="relative h-[350px] md:h-[420px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1920&q=80" alt="Projelerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b6e]/90 via-[#0d3b6e]/75 to-[#2471a3]/60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-white/80 text-sm mb-3 flex items-center gap-2 font-medium">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-[#e67e22]">Projelerimiz</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
                İnsani Yardım<br className="hidden md:block" /> Projelerimiz
              </h1>
              <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
                Dünyanın dört bir yanında yürüttüğümüz, hayat kurtaran ve gelecek inşa eden projelerimizle 
                umut olmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Kategoriler:</span>
            {[
              { label: 'Tümü', icon: 'fa-grip', color: 'bg-gray-600' },
              { label: 'Barınma', icon: 'fa-house', color: 'bg-blue-600' },
              { label: 'Eğitim', icon: 'fa-book', color: 'bg-orange-500' },
              { label: 'Gıda', icon: 'fa-bowl-rice', color: 'bg-green-600' },
              { label: 'Su & Sağlık', icon: 'fa-heart-pulse', color: 'bg-sky-600' },
            ].map((cat) => (
              <button key={cat.label} className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-200 hover:border-[#e67e22] hover:bg-[#e67e22]/5 transition-all text-sm font-medium text-gray-700 whitespace-nowrap">
                <i className={`fas ${cat.icon} text-[#e67e22]`}></i>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#e67e22] font-semibold tracking-widest text-sm uppercase mb-3">
              <i className="fas fa-hands-holding-circle mr-2"></i>Saha Çalışmaları
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-4">Devam Eden ve Tamamlanan Projeler</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#e67e22] to-[#f39c12] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, i) => (
              <Link href={`/projeler/${project.slug}`} key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1.5 ${project.categoryColor} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`}>
                      {project.category}
                    </span>
                    <span className={`px-3 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${project.status === 'Tamamlandı' ? 'bg-gray-800 text-white' : 'bg-white text-[#059669]'}`}>
                      <i className={`fas ${project.status === 'Tamamlandı' ? 'fa-check-circle' : 'fa-spinner'} mr-1`}></i>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium flex items-center gap-2 drop-shadow-lg">
                      <i className="fas fa-location-dot text-[#e67e22]"></i> {project.location}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0d3b6e] mb-3 group-hover:text-[#2471a3] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0d3b6e]/30 transition-all text-sm">
                    <i className="fas fa-arrow-right text-xs"></i>
                    Detayları Gör
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#0d3b6e] via-[#1a5276] to-[#2471a3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#e67e22] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#e67e22]/40">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Kurumsal İşbirliği Fırsatları</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Şirketinizle yeni bir insani yardım projesi başlatmak veya mevcut projelerimize sponsor olmak ister misiniz? 
              Kurumsal sosyal sorumluluk ekibimiz size özel çözümler sunmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e67e22] text-white font-bold rounded-xl hover:bg-[#ca6f1e] transition-all shadow-xl shadow-[#e67e22]/30 hover:shadow-2xl hover:-translate-y-1">
                <i className="fas fa-envelope"></i>
                Bize Ulaşın
              </Link>
              <Link href="/bagis" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30">
                <i className="fas fa-hand-holding-heart"></i>
                Hemen Bağış Yap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}