import Image from 'next/image';
import Link from 'next/link';

export default function Kampanya() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src="/images/banner1.png"
              alt="Kampanya Görseli"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="inline-block px-4 py-1.5 mb-4 bg-[#059669] text-white text-sm font-semibold rounded-full">
              Kış Kampanyası
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-6">Yorulmaya Değer: Kardeşin İçin Harekete Geç!</h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                "Yorulmaya Değer" diyerek çıktığımız bu yolda, uzak sınırların ötesindeki kardeşlerimizin dertlerine derman olmak için büyük bir kampanya başlatıyoruz. Yokluğun ve yoksulluğun hüküm sürdüğü topraklarda, sıcak bir yuvaya, temiz bir suya veya sadece karınlarını doyuracak temel gıdaya hasret milyonlarca insan var.
              </p>
              <p>
                Dört İklim İnsani Yardım Derneği olarak düzenlediğimiz bu büyük iyilik kampanyasında, acil yardım paketleriyle kardeşlerimizi ısıtmaya ve onlara umut aşılamaya gidiyoruz. Bu zorlu yolculukta ne kadar engelle karşılaşırsak karşılaşalım, onların bir tebessümü için <strong>yorulmaya değer</strong> diyoruz.
              </p>

              <div className="my-8 p-6 bg-blue-50 border-l-4 border-[#0d3b6e] rounded-r-lg">
                <h3 className="text-xl font-bold text-[#0d3b6e] mb-2">Nasıl Destek Olabilirsiniz?</h3>
                <p className="text-gray-700">
                  Kampanyamıza dilediğiniz miktarda bağış yaparak veya bu kampanyayı çevrenizle paylaşarak gönüllü elçimiz olabilirsiniz.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/bagis" className="px-8 py-4 bg-[#e67e22] text-white font-bold rounded-lg hover:bg-[#ca6f1e] transition-colors shadow-lg border-b-4 border-transparent hover:border-orange-700">
                  Hemen Bağış Yapın
                </Link>
                <Link href="/gonullu" className="px-8 py-4 bg-[#059669] text-white font-bold rounded-lg hover:bg-[#047857] transition-colors shadow-lg border-b-4 border-transparent hover:border-green-800">
                  Gönüllü Katılın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}