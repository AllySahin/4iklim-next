import Image from 'next/image';
import Link from 'next/link';

const amounts = ['50 ₺', '100 ₺', '250 ₺', '500 ₺', '1.000 ₺'];

const trustItems = [
  { icon: 'fa-shield-halved', title: 'Güvenli Ödeme', desc: '256-bit SSL şifreleme ile korunan ödeme altyapısı' },
  { icon: 'fa-file-invoice', title: 'Şeffaf Raporlama', desc: 'Tüm bağışların kullanımı yıllık faaliyet raporuyla açıklanır' },
  { icon: 'fa-award', title: 'Denetimli Dernek', desc: 'İçişleri Bakanlığı denetimine tabi kamu yararına dernek statüsü' },
  { icon: 'fa-receipt', title: 'Vergi Avantajı', desc: 'Bağışlarınız gelir vergisinden düşülebilir (Bkz. GVK Md.89)' },
];

const banks = [
  { name: 'Ziraat Bankası', iban: 'TR12 0001 0000 0000 0000 0000 01', swift: 'TCZBTR2A', logo: 'fa-building-columns' },
  { name: 'Kuveyt Türk', iban: 'TR34 0002 0000 0000 0000 0000 02', swift: 'KTEFTRIS', logo: 'fa-building-columns' },
  { name: 'Türkiye Finans', iban: 'TR56 0003 0000 0000 0000 0000 03', swift: 'AFKBTRIS', logo: 'fa-building-columns' },
];

export default function Bagis() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1920&q=80"
          alt="Bağış"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#059669]/90 to-[#0d3b6e]/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-white/70 text-sm mb-2 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              Bağış Yap
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bağış Yapın</h1>
            <p className="text-white/85 max-w-2xl text-lg">
              Yapacağınız her bağış, bir ihtiyaç sahibinin hayatında kalıcı bir değişime dönüşür.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '12.500+', label: 'Desteklenen Kişi' },
            { val: '₺8.4M+', label: 'Toplam Bağış' },
            { val: '%94', label: 'Sahaya Ulaşan Bağış' },
            { val: '18 Ülke', label: 'Ulaştığımız Coğrafya' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-[#059669]">{s.val}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Donation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Donation Form - 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#0d3b6e] mb-2">Bağış Miktarı Seçin</h2>
              <p className="text-gray-500 text-sm mb-8">Tek seferlik veya aylık düzenli bağış yapabilirsiniz.</p>

              {/* Frequency Tabs */}
              <div className="flex gap-3 mb-7">
                <button className="flex-1 py-2.5 bg-[#059669] text-white font-semibold rounded-full text-sm transition-colors">
                  Tek Seferlik
                </button>
                <button className="flex-1 py-2.5 border-2 border-[#059669] text-[#059669] font-semibold rounded-full text-sm hover:bg-[#059669]/10 transition-colors">
                  Aylık Düzenli
                </button>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {amounts.map((a, i) => (
                  <button
                    key={i}
                    className={`py-3 rounded-xl font-bold text-sm border-2 transition-all ${i === 1 ? 'bg-[#059669] border-[#059669] text-white shadow-md' : 'border-gray-200 text-gray-700 hover:border-[#059669] hover:text-[#059669]'}`}
                  >
                    {a}
                  </button>
                ))}
                <button className="py-3 rounded-xl font-semibold text-sm border-2 border-dashed border-gray-300 text-gray-500 hover:border-[#059669] hover:text-[#059669] transition-all col-span-1">
                  Diğer
                </button>
              </div>

              {/* Custom Amount Input */}
              <div className="relative mb-7">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₺</span>
                <input
                  type="number"
                  placeholder="Miktar girin..."
                  className="w-full pl-9 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#059669] text-gray-700 font-semibold"
                />
              </div>

              {/* Area Selection */}
              <div className="mb-7">
                <label className="block text-sm font-semibold text-gray-600 mb-2">Bağış Alanı</label>
                <select className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#059669] text-gray-700">
                  <option>En İhtiyaçlı Alana (Genel)</option>
                  <option>Gıda Yardımı</option>
                  <option>Eğitim Projeleri</option>
                  <option>Sağlık Hizmetleri</option>
                  <option>Su & Sanitasyon</option>
                  <option>Afet Yardımı</option>
                </select>
              </div>

              {/* Payment Button */}
              <button className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-[#059669]/30">
                <i className="fas fa-lock text-base"></i>
                Güvenli Bağış Yap
              </button>

              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <i className="fas fa-shield-halved text-[#059669]"></i>
                256-bit SSL ile korunan güvenli ödeme altyapısı
              </p>
            </div>

            {/* Sidebar - 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* SMS */}
              <div className="bg-[#0d3b6e] text-white rounded-2xl p-7 text-center">
                <i className="fas fa-comment-sms text-4xl text-[#e67e22] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">SMS ile Bağış</h3>
                <p className="text-white/75 text-sm mb-5">Tüm operatörlerden kolayca bağış yapın</p>
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <p className="text-2xl font-bold tracking-wider mb-1"><span className="text-[#e67e22]">BAGIS</span></p>
                  <p className="text-sm text-white/70">yazıp gönderin</p>
                  <div className="w-8 h-px bg-white/30 mx-auto my-3"></div>
                  <p className="text-4xl font-bold text-[#e67e22]">4444</p>
                  <p className="text-sm text-white/70 mt-1">numarasına</p>
                </div>
                <p className="text-xs text-white/50">Her SMS = 50 ₺ bağış</p>
              </div>

              {/* Bank Accounts */}
              <div className="bg-white rounded-2xl shadow-md p-7">
                <h3 className="text-lg font-bold text-[#0d3b6e] mb-1 flex items-center gap-2">
                  <i className="fas fa-building-columns text-[#e67e22]"></i> Banka Hesapları
                </h3>
                <p className="text-xs text-gray-500 mb-5">Havale/EFT için aşağıdaki IBAN numaralarını kullanın.</p>
                <div className="space-y-3">
                  {banks.map((b, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="font-bold text-[#0d3b6e] text-sm mb-1">{b.name}</p>
                      <p className="font-mono text-xs text-gray-600 mb-1">{b.iban}</p>
                      <p className="text-xs text-gray-400">SWIFT: {b.swift}</p>
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 pt-1">Alıcı: <strong>4 İklim İnsani Yardım Derneği</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#e67e22] uppercase tracking-widest mb-2">Neden Güvenli?</p>
            <h2 className="text-3xl font-bold text-[#0d3b6e]">Bağışınız Emin Ellerde</h2>
            <div className="w-16 h-1 bg-[#e67e22] mx-auto rounded mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trustItems.map((t, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#059669]/20 transition-colors">
                  <i className={`fas ${t.icon} text-2xl text-[#059669]`}></i>
                </div>
                <h4 className="font-bold text-[#0d3b6e] mb-2">{t.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}