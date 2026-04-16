import Image from 'next/image';
import Link from 'next/link';

const updates = [
  { date: '12 Mart 2026', text: '1.200 aileye acil gıda paketi ulaştırıldı.' },
  { date: '5 Mart 2026', text: 'Sudan saha ekibi 3 ilde dağıtım tamamladı.' },
  { date: '20 Şubat 2026', text: 'İstanbul bağış deposunda hazırlıklar sürüyor.' },
  { date: '10 Şubat 2026', text: 'Kampanya resmi olarak başlatıldı.' },
];

const faqs = [
  { q: 'Bağışım nerede kullanılacak?', a: 'Bağışlarınızın %94\'ü doğrudan saha projelerine aktarılır. Kullanım detayları faaliyet raporumuza yansıtılır.' },
  { q: 'Kampanya ne zaman bitiyor?', a: 'Kampanya 30 Nisan 2026 tarihine kadar sürecektir. Ancak hedef erken dolduğunda tamamlanabilir.' },
  { q: 'Vergi indirimi avantajı var mı?', a: 'Evet. Derneğimiz kamu yararına dernek statüsündedir. GVK Madde 89 kapsamında bağışlarınız gelir vergisinden düşülebilir.' },
  { q: 'Kurumsal bağış yapabilir miyim?', a: 'Evet, kurumsal bağış ve sponsorluk için info@4iklim.org adresinden iletişime geçebilirsiniz.' },
];

export default function Kampanya() {
  const raised = 284500;
  const goal = 500000;
  const percent = Math.round((raised / goal) * 100);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <Image
          src="/images/banner1.png"
          alt="Yorulmaya Değer Kampanyası"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-4 py-1.5 bg-[#059669] text-white text-xs font-bold rounded-full">Kış Kampanyası</span>
            <span className="px-4 py-1.5 bg-[#0d3b6e] text-white text-xs font-bold rounded-full">Devam Ediyor</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0d3b6e] mb-4 leading-tight">
            Yorulmaya Değer: Kardeşin İçin Harekete Geç!
          </h1>
          <p className="text-gray-500 text-sm mb-8 flex items-center gap-4">
            <span><i className="far fa-calendar text-[#e67e22] mr-1"></i> 10 Şubat – 30 Nisan 2026</span>
            <span><i className="fas fa-map-marker-alt text-[#e67e22] mr-1"></i> Türkiye, Suriye, Sudan, Somali</span>
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-10">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-3xl font-black text-[#059669]">₺{raised.toLocaleString('tr-TR')}</p>
                <p className="text-sm text-gray-500">Toplanan bağış</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-700">₺{goal.toLocaleString('tr-TR')}</p>
                <p className="text-sm text-gray-500">Hedef</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#059669] to-[#34d399] rounded-full transition-all duration-1000"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{percent}% tamamlandı</span>
              <span>{(goal - raised).toLocaleString('tr-TR')} ₺ kaldı</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xl font-bold text-[#0d3b6e]">1.247</p>
                <p className="text-xs text-gray-500">Bağışçı</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xl font-bold text-[#0d3b6e]">5.000</p>
                <p className="text-xs text-gray-500">Hedef Aile</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xl font-bold text-[#0d3b6e]">48 gün</p>
                <p className="text-xs text-gray-500">Kalan Süre</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/bagis" className="flex-1 min-w-[180px] py-4 bg-[#e67e22] hover:bg-[#ca6f1e] text-white font-bold rounded-xl text-center text-lg transition-colors shadow-lg shadow-[#e67e22]/20 flex items-center justify-center gap-2">
              <i className="fas fa-hand-holding-heart"></i> Hemen Bağış Yap
            </Link>
            <Link href="/gonullu" className="flex-1 min-w-[180px] py-4 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-xl text-center text-lg transition-colors shadow-lg shadow-[#059669]/20 flex items-center justify-center gap-2">
              <i className="fas fa-users"></i> Gönüllü Ol
            </Link>
            <button className="px-6 py-4 border-2 border-gray-200 text-gray-600 hover:border-[#0d3b6e] hover:text-[#0d3b6e] font-semibold rounded-xl transition-colors flex items-center gap-2">
              <i className="fas fa-share-alt"></i> Paylaş
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-4">Kampanya Hikayesi</p>
              <h2 className="text-2xl font-bold text-[#0d3b6e] mb-6">"Yorulmaya Değer" Diyerek Çıktık Bu Yola</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  Uzak sınırların ötesindeki kardeşlerimizin dertlerine derman olmak için büyük bir kampanya başlattık. Yokluğun ve yoksulluğun hüküm sürdüğü topraklarda, sıcak bir yuvaya, temiz bir suya veya sadece karınlarını doyuracak temel gıdaya hasret milyonlarca insan var.
                </p>
                <p>
                  4 İklim İnsani Yardım Derneği olarak düzenlediğimiz bu kampanyada acil yardım paketleriyle kardeşlerimizi ısıtmaya ve onlara umut aşılamaya gidiyoruz. Bu zorlu yolculukta ne kadar engelle karşılaşırsak karşılaşalım, onların bir tebessümü için <strong className="text-[#0d3b6e]">yorulmaya değer</strong> diyoruz.
                </p>
                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#e67e22] shadow-sm">
                  <h3 className="font-bold text-[#0d3b6e] mb-2">Kampanya Kapsamı</h3>
                  <ul className="space-y-2 text-sm list-none">
                    {['5.000 aileye acil gıda yardımı', '1.000 aileye kışlık giysi paketi', '500 aileye soba ve kömür yardımı', 'Suriye, Sudan ve Somali\'de saha çalışması'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="fas fa-check-circle text-[#059669]"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Her bağışınız, doğrudan bir ailenin sofrası, çocuğun sıcaklığı ya da bir annenin huzuru oluyor. Sizin desteğinizle bu misyonu tamamlayacağız.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-4">Saha Güncellemeleri</p>
              <div className="space-y-4">
                {updates.map((u, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-2 bg-[#059669] rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{u.date}</p>
                      <p className="text-sm text-gray-700 font-medium">{u.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-2">Merak Edilenler</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Sık Sorulan Sorular</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                <h4 className="font-bold text-[#0d3b6e] mb-2 flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#e67e22] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-[#059669] to-[#047857]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Sessiz Kalma, Harekete Geç!</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Her geçen gün, desteğini bekleyen bir aile var. Küçük bir katkı bile büyük bir fark yaratır.
          </p>
          <Link href="/bagis" className="inline-flex items-center gap-2 bg-white text-[#059669] font-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-xl">
            <i className="fas fa-hand-holding-heart"></i> Şimdi Bağış Yap
          </Link>
        </div>
      </section>
    </div>
  );
}