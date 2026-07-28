import Image from "next/image";
import { StaticImageData } from "next/image";
import PolymorphicButton from "@/components/ui/PolymorphicButton";
import { FaLongArrowAltRight } from "react-icons/fa";

interface CategoryHeroProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
  gradient?: string;
  textColor?: string;
  align?: "left" | "center" | "right";
}

const CategoryHero = ({
  image,
  title,
  subtitle,
  description,
  ctaText,
  ctaHref = "/shop",
  gradient = "from-black/70 via-black/50 to-black/70",
  textColor = "text-white",
  align = "left",
}: CategoryHeroProps) => {
  const alignClass = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <section className="relative min-h-[60vh] sm:h-[65vh] overflow-hidden flex mt-16">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      </div>
      <div className={`relative z-10 px-6 sm:px-12 lg:px-20 flex flex-col justify-center w-full ${alignClass} ${textColor}`}>
        <p className="text-sm sm:text-base uppercase tracking-widest mb-2 font-light opacity-80">{subtitle}</p>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg max-w-3xl">{title}</h1>
        {description && (
          <p className="text-sm sm:text-lg max-w-xl opacity-90 mb-6">{description}</p>
        )}
        {ctaText && (
          <PolymorphicButton
            href={ctaHref}
            text={ctaText}
            icon={FaLongArrowAltRight}
            variant="solid"
            color="primary"
            ariaLabel={ctaText}
          />
        )}
      </div>
    </section>
  );
};

export default CategoryHero;
