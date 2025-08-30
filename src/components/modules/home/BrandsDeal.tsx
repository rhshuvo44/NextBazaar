"use client";
import { clients } from "@/DB/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandsDeal = () => {
  return (
    <section className="bg-gray-800 text-gray-300 py-12 px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Top Brands Deal
        </h2>
        <p>
          Up To <span className="text-[#FBD103]">60%</span> off on brands
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
              <div className="rounded-lg shadow-md transition-transform hover:scale-105 duration-300 p-4 h-32 cursor-pointer">
                <figure className="">
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
