"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { arrivals } from "@/DB/data";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewArrival = () => {
  return (
    <div className="py-10">
      <SectionTitle title="New Arrivals" />
      <div className="relative px-10">
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
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
          loop={true}
          speed={800}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation, Autoplay]}
        >
          {arrivals.map(({ src, title }, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 shadow-sm h-60 w-64 ">
                <figure className="h-48 w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="py-4 px-2">
                  <h2 className="card-title text-base">{title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <button className="custom-prev absolute top-1/2 -left-4 z-10 text-xl text-neutral cursor-pointer">
          <FaArrowLeft />
        </button>
        <button className="custom-next absolute top-1/2 -right-4 z-10 text-xl text-neutral cursor-pointer">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
