"use client";

import { BannerSectionProps, PolymorphicButtonProps } from "@/types";
import Image from "next/image";
import PolymorphicButton from "./PolymorphicButton";
import useInView from "@/lib/useInView";

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
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`relative min-h-[95vh] ${minHeight} sm:h-[80vh] overflow-hidden flex p-4 text-white mt-16`}
    >
      <div className="absolute inset-0 ">
        <Image
          src={image}
          alt={typeof title === "string" ? title : "Banner image"}
          fill
          priority
          className="object-cover"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70`}
          style={{ opacity: overlayOpacity }}
        />
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-start justify-center">
        <h3 className={`text-[32px] font-light mb-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}>{brand}</h3>
        <h1
          className={`text-xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold mb-4 drop-shadow-lg text-left py-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          {title}
        </h1>
        {subtitle && (
          <h3
            className={`text-md sm:text-lg md:text-xl mb-6 font-light ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            {subtitle}
          </h3>
        )}

        {buttons.length > 0 && (
          <div
            className={`flex flex-wrap items-center justify-center gap-4 sm:flex-col md:flex-row md:gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
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
                className={`${btn.className || ""}`}
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
