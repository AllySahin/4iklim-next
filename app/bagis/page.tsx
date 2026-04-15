import Link from 'next/link';

export default function Bagis() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d3b6e] mb-4">Bağış Yapın</h1>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yapacağınız her bağış, bir ihtiyaç sahibinin hayatında kalıcı bir değişime dönüşüyor. Destekleriniz için teşekkür ederiz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#059669]">
            <div className="text-center mb-6">
              <i className="fa-solid fa-credit-card text-4xl text-[#059669] mb-4"></i>
              <h2 className="text-2xl font-bold text-[#0d3b6e]">Online Bağış</h2>
              <p className="text-gray-600 mt-2">Kredi kartınız ile güvenli bir şekilde hızlıca bağış yapabilirsiniz.</p>
            </div>
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#059669] text-white font-bold rounded-lg hover:bg-[#047857] transition-colors">
                Kredi Kartı ile Bağış Yap
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#0d3b6e]">
            <div className="text-center mb-6">
              <i className="fa-solid fa-building-columns text-4xl text-[#0d3b6e] mb-4"></i>
              <h2 className="text-2xl font-bold text-[#0d3b6e]">Banka Hesaplarımız</h2>
              <p className="text-gray-600 mt-2">Havale ve EFT işlemleriniz için hesap numaralarımız.</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-bold text-[#0d3b6e] mb-1">Ziraat Bankası (TR)</p>
                <p className="text-sm text-gray-500 font-mono">TR12 0001 0000 0000 0000 0000 01</p>
                <p className="text-xs text-gray-400 mt-1">Alıcı: 4 İklim İnsani Yardım Derneği</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-bold text-[#0d3b6e] mb-1">Kuveyt Türk (TR)</p>
                <p className="text-sm text-gray-500 font-mono">TR34 0002 0000 0000 0000 0000 02</p>
                <p className="text-xs text-gray-400 mt-1">Alıcı: 4 İklim İnsani Yardım Derneği</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 bg-[#0d3b6e] text-white p-8 rounded-xl shadow-md text-center">
          <i className="fa-solid fa-comment-sms text-4xl mb-4 text-[#e67e22]"></i>
          <h2 className="text-2xl font-bold mb-2">SMS Bağışı</h2>
          <p className="mb-4">Tüm operatörlerden <strong className="text-[#e67e22]">BAGIS</strong> yazıp <strong className="text-[#e67e22]">4444</strong>'e SMS göndererek 50 TL bağışta bulunabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}