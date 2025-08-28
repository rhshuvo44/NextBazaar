"use client";

import { BannerSectionProps, PolymorphicButtonProps } from "@/types";
import Image from "next/image";
import PolymorphicButton from "./PolymorphicButton";

const BannerSection = ({
  image,
  brand,
  title,
  subtitle,
  buttons = [],
  overlayOpacity = 0.5,
  minHeight = "",
}: BannerSectionProps & {
  buttons?: PolymorphicButtonProps[];
  minHeight?: string;
}) => {
  return (
    <section
      className={`relative min-h-[95vh] ${minHeight} sm:h-[80vh] overflow-hidden flex p-4 text-white mt-16`}
    >
      {/* Background wrapper */}
      <div className="absolute inset-0 ">
        <Image
          src={image}
          alt={typeof title === "string" ? title : "Banner image"}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70`}
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-start justify-center">
        <h3 className="text-[32px] font-light mb-2 ">{brand}</h3>
        {/* Title */}
        <h1
          className="text-xl sm:text-4xl md:text-5xl lg:text-8xl  font-extrabold mb-4 drop-shadow-lg animate-fadeIn text-left py-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {title}
        </h1>
        {/* Subtitle */}
        {subtitle && (
          <h3
            className="text-md sm:text-lg md:text-xl font-rubik mb-6 font-light"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            {subtitle}
          </h3>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:flex-col md:flex-row md:gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            {buttons.map((btn, idx) => (
              <PolymorphicButton
                key={idx}
                href={btn.href}
                text={btn.text}
                icon={btn.icon}
                variant={btn.variant}
                color={btn.color}
                ariaLabel={btn.ariaLabel}
                className={`font-rubik ${btn.className || ""}`}
                isSubmitting={btn.isSubmitting || false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
