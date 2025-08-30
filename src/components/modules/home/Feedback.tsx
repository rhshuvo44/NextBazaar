"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { feedbacks } from "@/DB/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Feedback = () => {
  return (
    <section className="py-10">
      <SectionTitle title="Feedback" />

      <div className="h-80">
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
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          loop={true}
          speed={800}
          pagination={true}
          modules={[Pagination, Autoplay]}
        >
          {feedbacks.map(({ src, name, description, rating }, index) => (
            <SwiperSlide key={index}>
              <div className="h-72 flex flex-col shadow-2xl p-4">
                <div className="flex flex-row justify-between">
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <Image src={src} alt="" />
                    </div>
                  </div>
                  <p className="flex">
                    {Array.from({ length: rating }, (_, index) => (
                      <FaStar key={index} className="text-yellow-300" />
                    ))}
                  </p>
                </div>
                <div className="mt-3">
                  <h3 className=" mb-2">{name}</h3>
                  <p className="text-left text-sm">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
