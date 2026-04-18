import Image from 'next/image';
import Link from 'next/link';

export default function Hakkimizda() {
  const values = [
    { icon: 'fa-eye', title: 'Şeffaflık', desc: 'Her kuruşun hesabını bağışçılarımıza raporlarımız aracılığıyla şeffaf bir şekilde sunuyoruz.' },
    { icon: 'fa-scale-balanced', title: 'Tarafsızlık', desc: 'Din, dil, ırk ve mezhep ayrımı gözetmeksizin tüm ihtiyaç sahiplerine eşit yaklaşıyoruz.' },
    { icon: 'fa-handshake-angle', title: 'Sorumluluk', desc: 'Üstlendiğimiz her projeyi zamanında, eksiksiz ve en yüksek kalitede tamamlamayı taahhüt ediyoruz.' },
    { icon: 'fa-leaf', title: 'Sürdürülebilirlik', desc: "Anlık yardımın ötesinde kalıcı çözümler üreterek toplulukların bağımsızlığına katkı sağlıyoruz." },
  ];

  const team = [
    { name: 'Ahmet Yılmaz', role: 'Genel Başkan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fatma Demir', role: 'Genel Sekreter', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mehmet Çelik', role: 'Mali İşler Sorumlusu', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ayşe Kaya', role: 'Proje Koordinatörü', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[340px] md:h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=80"
          alt="Hakkımızda"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6e]/85 to-[#0d3b6e]/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Hakkımızda
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hakkımızda</h1>
            <p className="text-white/85 max-w-2xl text-lg">2010'dan bu yana yurt içi ve yurt dışında insani yardım, eğitim ve kalkınma projelerinde aktif olarak faaliyet gösteriyoruz.</p>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#e67e22] font-semibold tracking-widest text-sm uppercase mb-3">Biz Kimiz?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-6 leading-tight">
                Dünyanın Dört Bir Yanında <br/>İyiliği Ulaştırıyoruz
              </h2>
              <div className="w-16 h-1 bg-[#e67e22] rounded mb-8"></div>
              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                2010 yılında kurulan <strong className="text-[#0d3b6e]">4 İklim İnsani Yardım Derneği</strong>, din, dil, ırk ve mezhep ayrımı gözetmeksizin dünyanın dört bir yanındaki mazlum, mağdur ve muhtaç insanların yardımına koşmayı şiar edinmiş bir sivil toplum kuruluşudur.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                <strong className="text-[#0d3b6e]">Ticari kaygı gütmeyen</strong> derneğimiz, tüm faaliyetlerini <strong className="text-[#0d3b6e]">şeffaflık ilkesi</strong> içerisinde yürütmekte ve her kuruşun hesabını bağışçılarımıza düzenli raporlarla sunmaktadır.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Çıktığımız bu iyilik yolculuğunda asıl gayemiz; insanların geçici ihtiyaçlarını gidermekle kalmayıp kalıcı ve sürdürülebilir projeler üreterek onların kendi ayakları üzerinde durabilmelerine destek olmaktır.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[['12.500+', 'Yardım Edilen Aile'], ['48', 'Tamamlanan Proje'], ['320+', 'Aktif Gönüllü'], ['15', 'Yıllık Deneyim']].map(([num, label]) => (
                  <div key={label} className="text-center p-5 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-[#0d3b6e] mb-1">{num}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                  alt="Ekibimiz sahada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#e67e22] text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-medium">Yıllık Tecrübe</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0d3b6e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 rounded-2xl p-10 border border-white/20">
              <div className="w-14 h-14 bg-[#e67e22] rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-white/80 leading-relaxed">
                Yeryüzünde adaletin ve iyiliğin hâkim olması amacıyla; olağanüstü haller, savaşlar ve doğal afetler sebebiyle mağdur olmuş tüm insanlara en hızlı ve etkili şekilde insani yardım ulaştırmak; eğitim ve sağlık başta olmak üzere temel insan haklarının korunmasına yönelik projeler geliştirmek.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-10 border border-white/20">
              <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-binoculars text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-white/80 leading-relaxed">
                Türkiye'nin ve dünyanın dört ikliminde ulaşılmadık hiçbir muhtaç bölge bırakmamak; şeffaflık ilkesinden taviz vermeden iyilik hareketini tüm dünyaya yayarak önde gelen insani yardım kuruluşları arasında yer almak.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#e67e22] font-semibold tracking-widest text-sm uppercase mb-3">Temel Değerlerimiz</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">İlkelerimiz</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center group">
                <div className="w-16 h-16 bg-[#0d3b6e]/10 group-hover:bg-[#0d3b6e] rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                  <i className={`fas ${v.icon} text-2xl text-[#0d3b6e] group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0d3b6e] mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#e67e22] font-semibold tracking-widest text-sm uppercase mb-3">Ekibimiz</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-3">Yönetim Kurulumuz</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#e67e22] transition-colors shadow-md">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-[#0d3b6e] text-lg">{member.name}</h4>
                <p className="text-[#e67e22] text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#059669]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siz de Bu Yolculuğun Bir Parçası Olun</h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8">Gönüllü olun veya bağışınızla binlerce insana umut olun.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/bagis" className="px-8 py-3.5 bg-[#e67e22] text-white font-semibold rounded-lg hover:bg-[#ca6f1e] transition-colors shadow-lg">Bağış Yapın</Link>
            <Link href="/gonullu" className="px-8 py-3.5 bg-white text-[#059669] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">Gönüllü Olun</Link>
          </div>
        </div>
      </section>
    </div>
  );
}