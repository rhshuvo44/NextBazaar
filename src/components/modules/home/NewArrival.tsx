"use client";
import CategoryCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { products } from "@/DB/data";
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
          {products.slice(0, 10).map(({ src, title }, index) => (
            <SwiperSlide key={index}>
              <CategoryCard src={src} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <button className="custom-prev absolute top-1/2 -left-4 z-10 text-xl text-base-content cursor-pointer">
          <FaArrowLeft />
        </button>
        <button className="custom-next absolute top-1/2 -right-4 z-10 text-xl text-base-content cursor-pointer">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
