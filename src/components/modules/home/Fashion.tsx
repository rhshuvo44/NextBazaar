import Image from "next/image";
import React from "react";
import fashion_banner from "@/assets/images/home/fashion_banner.jpg";
import fashon1 from "@/assets/images/home/fashon1.jpg";
import PolymorphicButton from "@/components/ui/PolymorphicButton";
import { FaLongArrowAltRight } from "react-icons/fa";
const Fashion = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-stretch">
      {/* Left side: Text and button with image background */}
      <div
        className="flex-1 bg-cover bg-center p-8 md:p-16 flex flex-col justify-center items-start text-white relative w-full min-h-screen lg:h-auto"
        style={{ backgroundImage: `url(${fashion_banner.src})` }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 space-y-4 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            WE MADE YOUR EVERYDAY FASHION BETTER!
          </h2>
          <p className="text-lg md:text-xl font-light mb-4">
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          {/* Your PolymorphicButton component here */}
          <PolymorphicButton
            text="Shop Now"
            href="shop"
            variant="solid"
            color="primary"
            icon={FaLongArrowAltRight}
            ariaLabel="Shop page"
          />
        </div>
      </div>

      {/* Right side: Group of people image */}
      <div className="flex-1 relative w-full min-h-screen lg:h-auto">
        <Image
          src={fashon1.src}
          alt="Group of friends showing off new fashion"
          fill
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
    </section>
  );
};

export default Fashion;
