import Image from 'next/image';
import Link from 'next/link';
import VolunteerForm from '@/components/VolunteerForm';

const whyReasons = [
  { icon: 'fa-heart', title: 'Anlamlı Katkı', desc: 'Sahada gördüğünüz dönüşümle bizzat hissedersiniz — her çaba, gerçek bir hayatı etkiler.' },
  { icon: 'fa-users', title: 'Güçlü Topluluk', desc: '320\'yi aşkın aktif gönüllüden oluşan sıcak, örgütlü ve amaç odaklı bir ekibin parçası olursunuz.' },
  { icon: 'fa-graduation-cap', title: 'Ücretsiz Eğitim', desc: 'Afet müdahalesi, saha koordinasyon ve liderlik gibi konularda sertifikaya dönüşen eğitimler alırsınız.' },
  { icon: 'fa-globe', title: 'Yurt İçi & Yurt Dışı', desc: 'Yurt içi saha çalışmalarının yanı sıra uluslararası proje ekiplerine dahil olma fırsatı bulursunuz.' },
];

const steps = [
  { num: '01', title: 'Başvuru Formunu Doldurun', desc: 'Aşağıdaki formu eksiksiz doldurun. Bilgileriniz gizlilik kapsamında saklanır.' },
  { num: '02', title: 'Değerlendirme', desc: 'Başvurunuz koordinatörlerimiz tarafından 5 iş günü içinde incelenir.' },
  { num: '03', title: 'Oryantasyon Eğitimi', desc: 'Kabul edilen adaylar, ücretsiz oryantasyon programına davet edilir.' },
  { num: '04', title: 'Sahaya Başlayın', desc: 'Eğitim sonrasında tercih ettiğiniz alana atanarak aktif gönüllü olarak göreve başlarsınız.' },
];

export default function Gonullu() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[300px] md:h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80"
          alt="Gönüllü Ol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#059669]/90 to-[#0d3b6e]/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Gönüllü Ol
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gönüllü Olun</h1>
            <p className="text-white/85 max-w-2xl text-lg">
              İyilik hareketine katılarak mazlumların yanında olun. Her katkı, kalıcı bir değişime dönüşür.
            </p>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Aramıza Katılın</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-4">Neden Gönüllü Olmalısınız?</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyReasons.map((r, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#059669]/20 transition-colors">
                  <i className={`fas ${r.icon} text-2xl text-[#059669]`}></i>
                </div>
                <h4 className="font-bold text-[#0d3b6e] mb-3 text-lg">{r.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Nasıl Başlarım?</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Başvuru Süreci</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-[#059669]/15 absolute top-4 right-4 leading-none">{s.num}</div>
                <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#059669]/30">
                  <span className="text-white font-bold text-sm">{s.num}</span>
                </div>
                <h4 className="font-bold text-[#0d3b6e] mb-2">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-3">Başvur</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Gönüllü Başvuru Formu</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#059669] to-[#047857] px-10 py-6">
              <p className="text-white font-semibold flex items-center gap-2">
                <i className="fas fa-info-circle"></i>
                Tüm alanları eksiksiz doldurun. Başvurunuz 5 iş günü içinde değerlendirilecektir.
              </p>
            </div>
            <div className="p-8 md:p-10">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}