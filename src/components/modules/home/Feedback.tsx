"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { feedbacks } from "@/data/data";
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
          aria-label="Customer feedback carousel"
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
              <div className="h-72 flex flex-col bg-base-100 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 rounded-2xl p-4 border border-base-300">
                <div className="flex flex-row justify-between">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-base-100 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={src}
                        alt={`${name} avatar`}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <p className="flex gap-0.5">
                    {Array.from({ length: rating }, (_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-300 animate-pop-in"
                        style={{ animationDelay: `${0.08 * i}s` }}
                      />
                    ))}
                  </p>
                </div>
                <div className="mt-3">
                  <h3 className=" mb-2 font-semibold">{name}</h3>
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
