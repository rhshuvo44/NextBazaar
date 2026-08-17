"use client";

import PolymorphicButton from "@/components/ui/PolymorphicButton";
import { deals } from "@/data/data";
import Image from "next/image";
import useInView from "@/lib/useInView";

const Deal = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {deals.map((deal, index) => (
          <div key={index} className="relative flex p-4 text-white h-96 overflow-hidden rounded-xl group">
            <div className="absolute inset-0">
              <Image
                src={deal.src}
                alt={deal.brand ? `${deal.brand} ${deal.title ?? "image"}` : `${deal.title ?? "image"}`}
                fill
                priority
                className="object-cover object-left-bottom transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4 flex flex-col items-start justify-center">
              <h3 className="text-xl font-light mb-2">{deal.brand}</h3>
              <h1
                className={`text-gradient text-xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg text-left py-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "both" }}
              >
                {deal.title}
              </h1>
              <h3
                className={`text-md sm:text-lg md:text-xl mb-6 font-light ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 * index + 0.1}s`, animationFillMode: "both" }}
              >
                {deal.description}
              </h3>
              <PolymorphicButton
                href="/shop"
                text="Explore Items"
                variant="outline"
                color="primary"
                ariaLabel="Explore Items"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deal;
