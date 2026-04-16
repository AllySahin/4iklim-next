'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/images/slider-1.jpg',
    title: 'Dört İklimde Umut Taşıyoruz',
    subtitle: 'İnsanlık için, her mevsim',
    description: 'Yurdun dört bir köşesinde ve dünyanın her yerinde ihtiyaç sahiplerine uzanıyor, yaşam koşullarını iyileştiriyor ve onlara umut oluyoruz.',
    cta: 'Bağış Yap',
    ctaLink: '/bagis'
  },
  {
    image: '/images/slider-2.jpg',
    title: 'Kış Aylarında Yanınızdayız',
    subtitle: 'Gıda ve yakacak yardımı',
    description: 'Kış aylarında ihtiyaç sahibi ailelere gıda paketi ve yakacak yardımı ulaştırıyoruz. Siz de bu güzel dayanışmanın bir parçası olun.',
    cta: 'Projelerimiz',
    ctaLink: '/projeler'
  },
  {
    image: '/images/slider-3.jpg',
    title: 'Eğitime Destek Olun',
    subtitle: 'Her çocuk eğitim hakkına sahiptir',
    description: 'İhtiyaç sahibi öğrencilere kırtasiye malzemesi, okul çantası ve eğitim desteği sağlıyoruz. Geleceğe birlikte yatırım yapalım.',
    cta: 'Gönüllü Ol',
    ctaLink: '/gonullu'
  }
];

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="hero-swiper"
        style={{ 
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as any}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
              <div className="relative h-full container mx-auto px-4">
                <div className="flex items-center h-full">
                  <div className="max-w-2xl text-white">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-[#e67e22] text-white text-sm font-semibold rounded-full">
                      ❤ {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        href={slide.ctaLink}
                        className={`inline-block px-8 py-3.5 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg ${
                          slide.cta === 'Gönüllü Ol' 
                            ? 'bg-[#059669] hover:bg-[#047857]' 
                            : 'bg-[#e67e22] hover:bg-[#ca6f1e]'
                        }`}
                      >
                        {slide.cta}
                      </Link>
                      <Link 
                        href="/hakkimizda"
                        className="inline-block px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                      >
                        Bizi Tanıyın
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-white shadow-lg -mt-16 relative z-10 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          <div className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-1">12.500+</div>
            <div className="text-sm text-gray-600">Yardım Edilen Aile</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-1">48</div>
            <div className="text-sm text-gray-600">Tamamlanan Proje</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-1">320+</div>
            <div className="text-sm text-gray-600">Gönüllü</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0d3b6e] mb-1">15</div>
            <div className="text-sm text-gray-600">Yıl Tecrübe</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        .hero-swiper .swiper-pagination {
          bottom: 30px;
        }
      `}</style>
    </div>
  );
}
