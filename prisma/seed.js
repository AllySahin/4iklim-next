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
      slug: 'depremzede-konteyner-ev',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      category: 'Barınma',
      categoryColor: 'bg-blue-600',
      title: 'Depremzede Ailelere Konteyner Ev Projesi',
      status: 'Devam Ediyor',
      location: 'Hatay, Kahramanmaraş',
      target: '500 aile',
      reached: '347 aile',
      percent: 69,
      description: 'Depremin yıkıcı etkisiyle evsiz kalan ailelere, onurlu ve güvenli bir barınma imkânı sunmak amacıyla hayata geçirilen konteyner kent projemiz devam etmektedir.',
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
