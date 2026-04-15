import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
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
      <div className="relative h-[300px] md:h-[380px]">
        <Image src="https://images.unsplash.com/photo-1593113565637-5271d09f9f11?auto=format&fit=crop&w=1920&q=80" alt="Projelerimiz" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6e]/85 to-[#0d3b6e]/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Projelerimiz
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projelerimiz</h1>
            <p className="text-white/85 max-w-2xl text-lg">Sahada yürüttüğümüz, tamamladığımız ve devam eden insani yardım ile kalkınma projelerimiz.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[['48', 'Toplam Proje', 'fa-folder-open'], ['12.500+', 'Yardım Edilen Kişi', 'fa-people-group'], ['18', 'Ülke', 'fa-earth-europe'], ['320+', 'Gönüllü', 'fa-hands-holding-circle']].map(([n, l, icon]) => (
              <div key={l} className="py-6 px-6 text-center">
                <i className={`fas ${icon} text-[#e67e22] text-2xl mb-2`}></i>
                <div className="text-2xl font-bold text-[#0d3b6e]">{n}</div>
                <div className="text-xs text-gray-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#e67e22] font-semibold tracking-widest text-sm uppercase mb-3">Çalışmalarımız</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Güncel Projeler</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold rounded-full`}>{project.category}</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Tamamlandı' ? 'bg-gray-800 text-white' : 'bg-white text-[#059669] border border-[#059669]'}`}>{project.status}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0d3b6e] mb-2 group-hover:text-[#2471a3] transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5"><i className="fas fa-location-dot text-[#e67e22]"></i> {project.location}</p>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-1">{project.desc}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>Hedef: <strong className="text-gray-700">{project.target}</strong></span>
                      <span>Ulaşılan: <strong className="text-[#059669]">{project.reached}</strong></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-[#059669] h-2 rounded-full transition-all" style={{ width: `${project.percent}%` }}></div>
                    </div>
                    <div className="text-right text-xs text-gray-400 mt-1">%{project.percent}</div>
                  </div>

                  <Link href="/bagis" className="w-full block text-center py-2.5 bg-[#0d3b6e] text-white font-semibold rounded-lg hover:bg-[#1a5276] transition-colors text-sm">
                    Bu Projeye Destek Ver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Yeni Bir Proje Başlatmak İster misiniz?</h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8">Kurumsal bağışınızla doğrudan bir projenin sponsoru olabilirsiniz.</p>
          <Link href="/iletisim" className="px-8 py-3.5 bg-[#e67e22] text-white font-semibold rounded-lg hover:bg-[#ca6f1e] transition-colors shadow-lg">Bize Ulaşın</Link>
        </div>
      </section>
    </div>
  );
}