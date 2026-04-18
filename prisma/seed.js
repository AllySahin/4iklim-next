const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // --- Admin User ---
  const hashedPassword = await bcrypt.hash('admin123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'admin@4iklim.org' },
    update: {},
    create: {
      email: 'admin@4iklim.org',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  });
  console.log('Admin user created:', user.email);

  // --- Slides ---
  const slides = [
    {
      image: '/images/slider-1.jpg',
      title: 'Dört İklimde Umut Taşıyoruz',
      subtitle: 'İnsanlık için, her mevsim',
      description: 'Yurdun dört bir köşesinde ve dünyanın her yerinde ihtiyaç sahiplerine uzanıyor, yaşam koşullarını iyileştiriyor ve onlara umut oluyoruz.',
      ctaText: 'Bağış Yap',
      ctaLink: '/bagis',
      order: 1,
      isActive: true,
    },
    {
      image: '/images/slider-2.jpg',
      title: 'Kış Aylarında Yanınızdayız',
      subtitle: 'Gıda ve yakacak yardımı',
      description: 'Kış aylarında ihtiyaç sahibi ailelere gıda paketi ve yakacak yardımı ulaştırıyoruz. Siz de bu güzel dayanışmanın bir parçası olun.',
      ctaText: 'Projelerimiz',
      ctaLink: '/projeler',
      order: 2,
      isActive: true,
    },
    {
      image: '/images/slider-3.jpg',
      title: 'Eğitime Destek Olun',
      subtitle: 'Her çocuk eğitim hakkına sahiptir',
      description: 'İhtiyaç sahibi öğrencilere kırtasiye malzemesi, okul çantası ve eğitim desteği sağlıyoruz. Geleceğe birlikte yatırım yapalım.',
      ctaText: 'Gönüllü Ol',
      ctaLink: '/gonullu',
      order: 3,
      isActive: true,
    },
  ];

  for (const slide of slides) {
    await prisma.slide.create({ data: slide });
  }
  console.log(`${slides.length} slide created`);

  // --- Project ---
  const projects = [
    {
      slug: 'ogrenci-burslari',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      category: 'Eğitim',
      categoryColor: 'bg-orange-600',
      title: 'Öğrenci Bursları',
      status: 'Devam Ediyor',
      location: 'Türkiye',
      target: '100 öğrenci',
      reached: '68 öğrenci',
      percent: 68,
      description: 'İhtiyaç sahibi öğrencilere eğitim bursu sağlayarak geleceklerine yatırım yapıyoruz. Öğrencilerin eğitim hayatlarını destekliyor, başarılı bir gelecek için onlara umut oluyoruz.',
      isActive: true,
    },
    {
      slug: 'kira-yardimi',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      category: 'Barınma',
      categoryColor: 'bg-green-600',
      title: 'Kira Yardımı',
      status: 'Devam Ediyor',
      location: 'Türkiye',
      target: '50 aile',
      reached: '32 aile',
      percent: 64,
      description: 'Barınma sıkıntısı çeken ailelere düzenli kira desteği sunuyoruz. Ailelerin güvenli ve onurlu bir şekilde yaşamalarını sağlıyoruz.',
      isActive: true,
    },
    {
      slug: 'ihtiyac-sahipleri',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      category: 'Gıda Yardımı',
      categoryColor: 'bg-blue-600',
      title: 'İhtiyaç Sahiplerine Destek',
      status: 'Devam Ediyor',
      location: 'Türkiye',
      target: '500 aile',
      reached: '387 aile',
      percent: 77,
      description: 'Gıda, giyim ve diğer temel ihtiyaçlar için destek sağlıyoruz. İhtiyaç sahibi aileler için düzenli paket yardımları yapıyor, yaşam koşullarını iyileştiriyoruz.',
      isActive: true,
    },
    {
      slug: 'afrikada-kuran-dagitimi',
      image: 'https://images.unsplash.com/photo-1546447640-c6e5c6b65b77?auto=format&fit=crop&w=800&q=80',
      category: 'Eğitim',
      categoryColor: 'bg-purple-600',
      title: "Afrika'da Kuran Dağıtımı",
      status: 'Devam Ediyor',
      location: 'Fildişi Sahili, Senegal, Uganda',
      target: '5000 Kuran',
      reached: '3420 Kuran',
      percent: 68,
      description: "Afrika ülkelerinde Kuran-ı Kerim dağıtımı ve din eğitimi programları yürütüyoruz. Müslüman kardeşlerimizin dini bilgilerine erişimini kolaylaştırıyoruz.",
      isActive: true,
    },
    {
      slug: 'su-kuyusu',
      image: 'https://images.unsplash.com/photo-1541697563196-36eac85a5b6a?auto=format&fit=crop&w=800&q=80',
      category: 'Su & Sanitasyon',
      categoryColor: 'bg-cyan-600',
      title: 'Su Kuyusu Açma',
      status: 'Devam Ediyor',
      location: 'Afrika',
      target: '30 kuyu',
      reached: '18 kuyu',
      percent: 60,
      description: 'Temiz suya erişimi olmayan bölgelerde su kuyuları açıyor, hayat kaynağı oluyoruz. Her kuyu, binlerce insanın temiz suya erişimini sağlıyor.',
      isActive: true,
    },
    {
      slug: 'medrese-cami-yapimi',
      image: 'https://images.unsplash.com/photo-1564769610726-5k39b5e3e5e3?auto=format&fit=crop&w=800&q=80',
      category: 'İnşaat',
      categoryColor: 'bg-teal-600',
      title: 'Medrese ve Cami Yapımı',
      status: 'Devam Ediyor',
      location: 'Afrika',
      target: '5 bina',
      reached: '2 bina',
      percent: 40,
      description: 'Eğitim ve ibadet merkezleri inşa ederek kalıcı katkılar sunuyoruz. Medrese ve cami yapımı ile hem eğitim hem de ibadet ihtiyaçlarına çözüm üretiyoruz.',
      isActive: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }
  console.log(`${projects.length} project created`);

  // --- Gallery Images ---
  const galleryImages = [
    { src: '/images/galeri-1.jpg', category: 'Gıda Yardımı', title: 'Ramazan Gıda Dağıtımı', location: 'İdlib, Suriye', span: 'col-span-2 row-span-2', order: 1 },
    { src: '/images/galeri-school.jpg', category: 'Eğitim', title: 'Okul Açılışı', location: 'Niamey, Nijer', span: '', order: 2 },
    { src: '/images/galeri-3.jpg', category: 'Sağlık', title: 'Mobil Klinik', location: 'Mogadişu, Somali', span: '', order: 3 },
    { src: '/images/galeri-4.jpg', category: 'Gıda Yardımı', title: 'Kış Gıda Paketi', location: 'Ankara, Türkiye', span: '', order: 4 },
    { src: '/images/galeri-5.jpg', category: 'Su & Sanitasyon', title: 'Kuyu Açılışı', location: 'Darfur, Sudan', span: '', order: 5 },
    { src: '/images/galeri-classroom.jpg', category: 'Eğitim', title: 'Sınıf İnşaatı', location: 'Adana, Türkiye', span: 'col-span-2', order: 6 },
    { src: '/images/galeri-7.jpg', category: 'Afet', title: 'Deprem Yardımı', location: 'Hatay, Türkiye', span: '', order: 7 },
    { src: '/images/galeri-8.jpg', category: 'Gıda Yardımı', title: 'Gönüllü Koordinasyon', location: 'İstanbul, Türkiye', span: '', order: 8 },
    { src: '/images/galeri-9.jpg', category: 'Sağlık', title: 'Aşı Kampanyası', location: 'Bağdat, Irak', span: '', order: 9 },
    { src: '/images/galeri-10.jpg', category: 'Su & Sanitasyon', title: 'Su Şebekesi Kurulumu', location: "N'Djamena, Chad", span: '', order: 10 },
    { src: '/images/galeri-11.jpg', category: 'Eğitim', title: 'Gönüllü Eğitim Programı', location: 'İzmir, Türkiye', span: 'col-span-2', order: 11 },
  ];

  for (const img of galleryImages) {
    await prisma.galleryImage.create({ data: img });
  }
  console.log(`${galleryImages.length} gallery images created`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
