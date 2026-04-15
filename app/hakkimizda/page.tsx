import Image from 'next/image';

export default function Hakkimizda() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Hakkımızda"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-6">Biz Kimiz?</h1>
            <div className="w-16 h-1 bg-[#e67e22] rounded mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                2010 yılında kurulan <strong>4 İklim İnsani Yardım Derneği</strong>, din, dil, ırk, mezhep ayrımı gözetmeksizin dünyanın dört bir yanındaki mazlum, mağdur ve muhtaç insanların yardımına koşmayı şiar edinmiş bir sivil toplum kuruluşudur.
              </p>
              <p>
                Çıktığımız bu iyilik yolculuğunda asıl gayemiz, sadece insanların geçici ihtiyaçlarını gidermek değil; kalıcı ve sürdürülebilir projeler üreterek onların kendi ayakları üzerinde durabilmelerine destek olmaktır.
              </p>
              
              <h2 className="text-2xl font-bold text-[#0d3b6e] mt-8 mb-4">Misyonumuz</h2>
              <p>
                Yeryüzünde adaletin ve iyiliğin hakim olması amacıyla; olağanüstü haller, savaşlar ve doğal afetler sebebiyle mağdur olmuş tüm insanlara en hızlı ve etkili şekilde insani yardım ulaştırmak; eğitim ve sağlık başta olmak üzere temel insan haklarının ihlal edilmesini önleyecek çalışmalar yapmak.
              </p>

              <h2 className="text-2xl font-bold text-[#0d3b6e] mt-8 mb-4">Vizyonumuz</h2>
              <p>
                Türkiye'nin ve dünyanın dört ikliminde, ulaşılmadık hiçbir muhtaç bölge bırakmamak ve şeffaflık ilkesinden ödün vermeden iyilik hareketini tüm dünyaya yayarak öncü bir insani yardım kuruluşu olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}