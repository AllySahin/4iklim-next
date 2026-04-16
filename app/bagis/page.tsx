'use client';

import Image from 'next/image';
import Link from 'next/link';

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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0d3b6e] mb-4">Hesap Bilgilerimiz</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Bağışlarınızı aşağıdaki hesap numaralarına havale veya EFT yoluyla yapabilirsiniz. 
                Bağışınızın kaydedilmesi için lütfen açıklama kısmına ad-soyad ve telefon numaranızı yazınız.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#e67e22]/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-building-columns text-[#e67e22] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d3b6e]">Banka Hesaplarımız</h3>
                  <p className="text-sm text-gray-500">Havale/EFT için aşağıdaki IBAN numaralarını kullanabilirsiniz</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {banks.map((b, i) => (
                  <div key={i} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#059669] transition-all group">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0d3b6e] rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`fas ${b.logo} text-white`}></i>
                        </div>
                        <div>
                          <p className="font-bold text-[#0d3b6e] text-lg">{b.name}</p>
                          <p className="text-xs text-gray-500">SWIFT: {b.swift}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(b.iban)}
                        className="px-3 py-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 opacity-0 group-hover:opacity-100"
                        title="IBAN'ı Kopyala"
                      >
                        <i className="fas fa-copy"></i> Kopyala
                      </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">IBAN Numarası</p>
                      <p className="font-mono text-sm md:text-base font-bold text-gray-700 tracking-wider break-all">{b.iban}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-[#0d3b6e] p-5 rounded-lg">
                <div className="flex gap-3">
                  <i className="fas fa-info-circle text-[#0d3b6e] mt-1"></i>
                  <div>
                    <p className="font-bold text-[#0d3b6e] mb-1 text-sm">Hesap Adı</p>
                    <p className="text-gray-700 font-semibold">4 İklim İnsani Yardım Derneği</p>
                    <p className="text-xs text-gray-500 mt-2">
                      <i className="fas fa-check-circle text-[#059669] mr-1"></i>
                      Tüm bağışlarınız vergi muafiyetinden yararlanır (GVK Md.89)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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