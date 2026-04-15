import Image from 'next/image';

export default function Projeler() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      category: 'Barınma',
      title: 'Depremzede Ailelere Konteyner Ev',
      status: 'Devam Ediyor',
      desc: 'Afet bölgelerinde evsiz kalan ailelere geçici barınma desteği sağlamak amacıyla kurduğumuz konteyner kent projesi.'
    },
    {
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
      category: 'Eğitim',
      title: 'Kırtasiye ve Eğitim Seti Dağıtımı',
      status: 'Devam Ediyor',
      desc: 'Maddi imkansızlıklar nedeniyle eğitime erişimde zorluk çeken çocuklara okul çantası ve kırtasiye malzemesi desteği.'
    },
    {
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&q=80',
      category: 'Gıda',
      title: 'Ramazan Gıda Paketi',
      status: 'Tamamlandı',
      desc: 'Ramazan ayının bereketini paylaşmak için yurt içi ve yurt dışında binlerce aileye ulaştırdığımız erzak paketleri.'
    },
    {
      image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ceabc?auto=format&fit=crop&w=800&q=80',
      category: 'Su Kuyusu',
      title: 'Afrika Su Kuyusu Projeleri',
      status: 'Devam Ediyor',
      desc: 'Temiz içme suyuna erişimin olmadığı kurak bölgelerde, bağışçıların destekleriyle açılan yaşam pınarları.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d3b6e] mb-4">Projelerimiz</h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sizlerin destekleriyle hayata geçirdiğimiz ve devam eden insani yardım projelerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow">
              <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 w-full md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#2471a3] text-white text-xs font-semibold rounded-full">{project.category}</span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Devam Ediyor' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0d3b6e] mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <button className="text-[#e67e22] font-semibold hover:text-[#ca6f1e] text-left">
                  Detayları Gör <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}