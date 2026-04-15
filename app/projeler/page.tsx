import Image from 'next/image';
import Link from 'next/link';

export const projects = [
  {
    id: 1,
    slug: 'depremzede-konteyner-ev',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    category: 'Barınma',
    categoryColor: 'bg-blue-600',
    title: 'Depremzede Ailelere Konteyner Ev Projesi',
    status: 'Devam Ediyor',
    location: 'Hatay, Kahramanmaraş',
    target: '500 aile',
    reached: '347 aile',
    percent: 69,
    desc: 'Depremin yıkıcı etkisiyle evsiz kalan ailelere, onurlu ve güvenli bir barınma imkânı sunmak amacıyla hayata geçirilen konteyner kent projemiz devam etmektedir.'
  },
  {
    id: 2,
    slug: 'okul-cantasi-kirtasiye',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    category: 'Eğitim',
    categoryColor: 'bg-orange-500',
    title: 'Okul Çantası ve Kırtasiye Seti Dağıtımı',
    status: 'Devam Ediyor',
    location: 'Tüm Türkiye',
    target: '10.000 öğrenci',
    reached: '7.820 öğrenci',
    percent: 78,
    desc: 'Her yıl Eylül ayı öncesinde başlayan kampanyamızda, maddi imkânsızlıklar nedeniyle okul malzemelerine erişemeyen öğrencilere eksiksiz kırtasiye seti ulaştırıyoruz.'
  },
  {
    id: 3,
    slug: 'ramazan-gida-paketi',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&q=80',
    category: 'Gıda',
    categoryColor: 'bg-green-600',
    title: 'Ramazan Gıda Paketi Dağıtımı',
    status: 'Tamamlandı',
    location: 'Yurt İçi & Yurt Dışı',
    target: '5.000 aile',
    reached: '5.000 aile',
    percent: 100,
    desc: 'Ramazan ayının bereketini paylaşmak için yurt içinde ve yurt dışındaki ihtiyaç sahibi ailelere ulaştırdığımız gıda paketi kampanyamızı başarıyla tamamladık.'
  },
  {
    id: 4,
    slug: 'afrika-su-kuyusu',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ceabc?auto=format&fit=crop&w=800&q=80',
    category: 'Su & Sağlık',
    categoryColor: 'bg-sky-600',
    title: 'Afrika\'da Su Kuyusu Projesi',
    status: 'Devam Ediyor',
    location: 'Nijer, Chad, Somali',
    target: '50 kuyu',
    reached: '38 kuyu',
    percent: 76,
    desc: 'Temiz içme suyuna erişimin olmadığı kurak Afrika bölgelerinde, bağışçılarımızın destekleriyle hayat pınarları açmaya devam ediyoruz.'
  },
  {
    id: 5,
    slug: 'kis-cadiri-isinma',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    category: 'Barınma',
    categoryColor: 'bg-blue-600',
    title: 'Kış Çadırı ve Isınma Yardımı',
    status: 'Tamamlandı',
    location: 'Suriye, Afganistan',
    target: '2.000 aile',
    reached: '2.000 aile',
    percent: 100,
    desc: "Zorlu kış koşullarında Suriye ve Afganistan'daki mülteci ailelere çadır, battaniye ve kışlık giysi desteği ulaştırdık."
  },
  {
    id: 6,
    slug: 'kuran-kursu-egitim-merkezi',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    category: 'Eğitim',
    categoryColor: 'bg-orange-500',
    title: 'Kur\'an Kursu ve Eğitim Merkezi',
    status: 'Devam Ediyor',
    location: 'Bosna Hersek',
    target: '1 merkez',
    reached: 'İnşaat aşamasında',
    percent: 55,
    desc: "Bosna Hersek'te ihtiyaç duyulan eğitim merkezinin inşaatı tüm hızıyla sürmektedir. Tamamlandığında yıllık 500+ öğrenciye hizmet verecektir."
  },
];

export default function Projeler() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[350px] md:h-[420px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1593113565637-5271d09f9f11?auto=format&fit=crop&w=1920&q=80" alt="Projelerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b6e]/90 via-[#0d3b6e]/75 to-[#2471a3]/60"></div>
        
        {/* Decorative Elements */}
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
              <div className="flex items-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#e67e22] flex items-center justify-center">
                    <i className="fas fa-folder-open text-white"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">48</div>
                    <div className="text-white/70 text-xs">Aktif Proje</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center">
                    <i className="fas fa-earth-europe text-white"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">18</div>
                    <div className="text-white/70 text-xs">Ülke</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
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

      {/* Projects Grid */}
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

      {/* CTA */}
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