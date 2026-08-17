"use client";
import { clients } from "@/data/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandsDeal = () => {
  return (
    <section className="bg-gradient-to-r from-[#1c1830] via-[#3b2a63] to-[#1c1830] text-gray-200 py-12 px-8 relative overflow-hidden">
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
          Top Brands Deal
        </h2>
        <p className="animate-fade-in-up animate-delay-1">
          Up To <span className="text-[#FBD103] font-bold">60%</span> off on brands
        </p>
        <Swiper
          role="region"
          aria-label="Home page banner carousel"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          loop={true}
          speed={800}
          modules={[Autoplay]}
          className="mt-5"
        >
          {clients.map(({ src }, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-soft-lg p-4 h-32 cursor-pointer bg-white flex items-center justify-center">
                <figure className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={src}
                    alt="top brand deal"
                    className="object-fill"
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsDeal;
