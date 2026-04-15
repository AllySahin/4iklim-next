export default function Gonullu() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d3b6e] mb-4">Gönüllü Olun</h1>
          <div className="w-24 h-1 bg-[#059669] mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İyilik hareketine katılarak mazlumların yüzündeki tebessümün sebebi siz olabilirsiniz. Aramıza katılın!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numaranız</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]" placeholder="05XX XXX XX XX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresiniz</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]" placeholder="ornek@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hangi alanda gönüllü olmak istersiniz?</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]">
                  <option>Saha Çalışmaları ve Yardım Dağıtımı</option>
                  <option>Eğitim ve Rehberlik</option>
                  <option>Organizasyon ve Etkinlik Planlama</option>
                  <option>Dijital Medya ve İletişim</option>
                  <option>Tercüme</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kendinizden kısaca bahseder misiniz?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]" placeholder="Tecrübeleriniz ve derneğimize katabileceğiniz değerler..."></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="kvkk" className="mt-1 mr-2 text-[#059669]" />
                <label htmlFor="kvkk" className="text-sm text-gray-600">
                  Kişisel verilerimin KVKK kapsamında işlenmesini ve dernek faaliyetleri hakkında tarafımla iletişime geçilmesini kabul ediyorum.
                </label>
              </div>

              <button type="button" className="w-full py-4 bg-[#059669] text-white font-bold rounded-lg hover:bg-[#047857] transition-colors text-lg">
                Başvurumu Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}