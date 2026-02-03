import React from 'react';
// Import Swiper React components
{/* swiper/react provides the wrapper components */}
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      title: "Summer Collection 2026",
      subtitle: "Get up to 50% off on all summer wear",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070",
      title: "Next-Gen Tech",
      subtitle: "Explore the latest gadgets and accessories",
      buttonText: "Explore Tech",
    },
  ];

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
 <SwiperSlide key={slide.id}>
    <div 
      className="relative w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${slide.image}')` }} // Note the single quotes added
    >
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;