import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductCard = ({
  src,
  title,
  href,
  price,
  brand,
  showArrow,
  wishlist,
}: ProductCardProps) => {
  return (
    <div
      className="
        bg-base-100 shadow-sm relative rounded-xl overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:-translate-y-1
      "
    >
      {/* Wishlist Icon (Product Mode) */}
      {wishlist && (
        <button
          aria-label="Add to Wishlist"
          className="
            bg-white absolute top-3 right-3 rounded-full p-2 shadow
            transition-colors duration-300
            hover:bg-red-100 z-50 cursor-pointer
          "
        >
          <CiHeart
            className="
              text-lg text-black 
              transition-colors duration-300
              hover:text-red-500
            "
          />
        </button>
      )}

      {/* Image */}
      <figure
        className="
          h-48 w-full overflow-hidden relative
        "
      >
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="
            w-full h-full object-cover rounded-xl
            transition-transform duration-500 ease-in-out
            group-hover:scale-110
          "
        />
      </figure>

      {/* Content */}
      <div className="p-3 mt-2">
        {showArrow ? (
          <>
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base font-semibold">{title}</h2>
              <Link
                href={href || "#"}
                className="
                  text-gray-600 hover:text-primary 
                  transition-colors duration-300
                "
              >
                <FaLongArrowAltRight />
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-1">Explore Now!</p>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base font-semibold">{title}</h2>
              {price && (
                <p
                  className="
                    bg-accent text-white px-2 py-0.5 rounded-md font-bold text-sm
                    transition-all duration-300
                    hover:bg-accent/80
                  "
                >
                  ${price}
                </p>
              )}
            </div>
            {brand && <p className="text-sm text-gray-500 mt-1">{brand}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
