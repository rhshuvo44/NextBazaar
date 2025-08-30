import { CategoryCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const CategoryCard = ({
  src,
  title,
  href = "#",
  showArrow = false,
}: CategoryCardProps) => {
  return (
    <div className="bg-base-100 shadow-sm">
      <figure className="h-48 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-2">
        {/* Conditional rendering for the "Explore Now" and arrow icon */}
        {showArrow ? (
          <div className="flex justify-between items-center">
            <h2 className="card-title text-base">{title}</h2>
            <Link href={href || "#"} className="hover:text-primary">
              <FaLongArrowAltRight />
            </Link>
          </div>
        ) : (
          <h2 className="card-title text-base">{title}</h2>
        )}
        {showArrow && <p className="text-sm text-gray-500">Explore Now!</p>}
      </div>
    </div>
  );
};

export default CategoryCard;
