import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1635764700453-a95c4d37e5f9?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1635764700569-a99a5d9c2aec?auto=format&fit=crop&w=600&q=80",
    description: "Door Dent Repair"
  },
  {
    before: "https://images.unsplash.com/photo-1597687210367-a4915552d886?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    description: "Hail Damage Repair"
  },
  {
    before: "https://images.unsplash.com/photo-1589641841159-0576c850d2f1?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80",
    description: "Bumper Dent Repair"
  },
  {
    before: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    description: "Side Panel Repair"
  },
  {
    before: "https://images.unsplash.com/photo-1589641841159-0576c850d2f1?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80",
    description: "Minor Collision Repair"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Gallerija</h2>
          {/* <p className="text-lg text-gray-400">See the amazing transformations we achieve</p> */}
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="gallery-swiper"
        >
          {beforeAfterImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-4 pb-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt="Before" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover" 
                    />
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full">
                    Prieš
                    </span>
                  </div>
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt="After" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover" 
                    />
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full">
                      Po
                    </span>
                  </div>
                </div>
                <p className="text-center text-lg font-medium text-white">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}