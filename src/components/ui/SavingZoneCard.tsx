import { SavingZoneCardProps } from "@/types";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import PolymorphicButton from "./PolymorphicButton";

export default function SavingZoneCard({
  src,
  title,
  brand,
  description,
  className,
}: SavingZoneCardProps) {
  return (
    <div className={`relative h-96 w-full ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={src} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-end h-full px-8 md:px-16">
        <div className="text-white space-y-4">
          <h2 className="text-xl font-bold drop-shadow-lg">{title}</h2>
          <h3 className="text-lg font-light opacity-90">{brand}</h3>
          <h4 className="text-lg opacity-90">{description}</h4>

          <div className="py-4">
            <FaArrowDown className="text-4xl animate-bounce" />
          </div>

          <PolymorphicButton
            href="/shop"
            text="SHOP NOW"
            variant="outline"
            ariaLabel={`Shop now for ${title}`}
          />
        </div>
      </div>
    </div>
  );
}
