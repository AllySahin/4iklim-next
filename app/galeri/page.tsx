import Image from 'next/image';
import Link from 'next/link';

const categories = ['Tümü', 'Gıda Yardımı', 'Eğitim', 'Sağlık', 'Su & Sanitasyon', 'Afet'];

const photos = [
  {
    src: '/images/galeri-1.jpg',
    cat: 'Gıda Yardımı', title: 'Ramazan Gıda Dağıtımı', loc: 'İdlib, Suriye', span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/galeri-school.jpg',
    cat: 'Eğitim', title: 'Okul Açılışı', loc: 'Niamey, Nijer', span: '',
  },
  {
    src: '/images/galeri-3.jpg',
    cat: 'Sağlık', title: 'Mobil Klinik', loc: 'Mogadişu, Somali', span: '',
  },
  {
    src: '/images/galeri-4.jpg',
    cat: 'Gıda Yardımı', title: 'Kış Gıda Paketi', loc: 'Ankara, Türkiye', span: '',
  },
  {
    src: '/images/galeri-5.jpg',
    cat: 'Su & Sanitasyon', title: 'Kuyu Açılışı', loc: 'Darfur, Sudan', span: '',
  },
  {
    src: '/images/galeri-classroom.jpg',
    cat: 'Eğitim', title: 'Sınıf İnşaatı', loc: 'Adana, Türkiye', span: 'col-span-2',
  },
  {
    src: '/images/galeri-7.jpg',
    cat: 'Afet', title: 'Deprem Yardımı', loc: 'Hatay, Türkiye', span: '',
  },
  {
    src: '/images/galeri-8.jpg',
    cat: 'Gıda Yardımı', title: 'Gönüllü Koordinasyon', loc: 'İstanbul, Türkiye', span: '',
  },
  {
    src: '/images/galeri-9.jpg',
    cat: 'Sağlık', title: 'Aşı Kampanyası', loc: 'Bağdat, Irak', span: '',
  },
  {
    src: '/images/galeri-10.jpg',
    cat: 'Su & Sanitasyon', title: 'Su Şebekesi Kurulumu', loc: "N'Djamena, Chad", span: '',
  },
  {
    src: '/images/galeri-11.jpg',
    cat: 'Eğitim', title: 'Gönüllü Eğitim Programı', loc: 'İzmir, Türkiye', span: 'col-span-2',
  },
];

export default function Galeri() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[380px]">
        <Image
          src="/images/galeri-hero.jpg"
          alt="Galeri"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6e]/85 to-[#0d3b6e]/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Galeri
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fotoğraf Galerisi</h1>
            <p className="text-white/85 max-w-2xl text-lg">
              Saha çalışmalarımızdan, tamamlanan projelerimizden ve gönüllülerimizin anılarından kareler.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${i === 0 ? 'bg-[#0d3b6e] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-[#0d3b6e] hover:text-white border border-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer ${p.span}`}
                >
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-xs font-semibold text-[#e67e22] mb-1">{p.cat}</span>
                    <h4 className="text-white font-bold text-sm leading-tight">{p.title}</h4>
                    <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
                      <i className="fas fa-map-marker-alt text-[10px]"></i> {p.loc}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-expand text-white text-xs"></i>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 border-2 border-[#0d3b6e] text-[#0d3b6e] font-semibold px-8 py-3 rounded-full hover:bg-[#0d3b6e] hover:text-white transition-all duration-300">
                <i className="fas fa-images"></i> Daha Fazla Fotoğraf Yükle
              </button>
            </div>
          </div>
        </section>

      }
      <section className="py-16 bg-gradient-to-r from-[#0d3b6e] to-[#2471a3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Siz de Bu Anların Parçası Olun</h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Gönüllü olarak sahaya katılın ya da bağışınızla projelere destek verin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gonullu" className="bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-3.5 rounded-full transition-colors">
              <i className="fas fa-users mr-2"></i>Gönüllü Ol
            </Link>
            <Link href="/bagis" className="bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-bold px-8 py-3.5 rounded-full transition-colors">
              <i className="fas fa-hand-holding-heart mr-2"></i>Bağış Yap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
