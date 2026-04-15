import Image from 'next/image';

export default function Haberler() {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=800&q=80',
      date: '10 Nisan 2026',
      title: 'Kış Yardım Kampanyamız Tamamlandı',
      description: '2025-2026 kış sezonu boyunca yürüttüğümüz "Kardeşini Isıt" kampanyasında 3.200 aileye kömür, soba ve kışlık giysi ulaştırdık.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
      date: '2 Mart 2026',
      title: 'Yeni Gönüllü Eğitim Programı Başladı',
      description: 'Sahada görev alacak gönüllülerimize yönelik düzenlediğimiz "Afet ve Acil Durum Farkındalık Eğitimi" programına 85 kişi katıldı.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
      date: '14 Şubat 2026',
      title: 'Uluslararası Yardım İşbirliği Protokolü İmzalandı',
      description: 'Yurt dışı yardım faaliyetlerini hızlandırmak ve kapasiteyi artırmak amacıyla global sivil toplum kuruluşlarıyla işbirliği anlaşması imzaladık.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d3b6e] mb-4">Haberler & Duyurular</h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Derneğimizin saha çalışmalarından ve son gelişmelerinden haberdar olun.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row group">
              <div className="relative w-full md:w-1/3 h-56 md:h-auto">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 w-full md:w-2/3">
                <p className="text-sm text-[#e67e22] font-semibold mb-2">
                  <i className="far fa-calendar mr-2"></i>{item.date}
                </p>
                <h3 className="text-2xl font-bold text-[#0d3b6e] mb-3 group-hover:text-[#2471a3] transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-[#0d3b6e] font-semibold border-b-2 border-transparent hover:border-[#0d3b6e] pb-1 transition-colors">
                  Haberin Devamı Gör
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}