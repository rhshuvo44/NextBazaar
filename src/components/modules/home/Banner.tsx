"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerSection from "@/components/ui/BannerSection";
import { homeBanner } from "@/DB/data";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      role="region"
      aria-label="Home page banner carousel"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className} custom-pagination">${index + 1}</span>`,
      }}
      speed={800}
      modules={[Pagination, Autoplay]}
    >
      {homeBanner.map(({ src, brand, title, description }, index) => (
        <SwiperSlide key={index}>
          <BannerSection
            image={src}
            title={title}
            brand={brand}
            subtitle={description}
            buttons={[
              {
                text: "Shop Now",
                href: "shop",
                variant: "solid",
                color: "primary",
                icon: FaLongArrowAltRight,
                ariaLabel: "Shop page",
              },
            ]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
