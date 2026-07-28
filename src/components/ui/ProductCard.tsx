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
  discount,
}: ProductCardProps) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const linkHref = href || `/shop/${slug}`;

  return (
    <Link href={linkHref} className="block">
      <div className="bg-base-100 shadow-sm relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
        {wishlist && (
          <button
            aria-label="Add to Wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="bg-white absolute top-3 right-3 rounded-full p-2 shadow transition-colors duration-300 hover:bg-red-100 z-10 cursor-pointer"
          >
            <CiHeart className="text-lg text-black transition-colors duration-300 hover:text-red-500" />
          </button>
        )}

        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{discount}%
          </span>
        )}

        <figure className="h-48 w-full overflow-hidden relative">
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </figure>

        <div className="p-3 mt-2">
          {showArrow ? (
            <>
              <div className="flex justify-between items-center">
                <h2 className="card-title text-base font-semibold">{title}</h2>
                <FaLongArrowAltRight className="text-gray-600 hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-sm text-gray-500 mt-1">Explore Now!</p>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h2 className="card-title text-base font-semibold">{title}</h2>
                {price && (
                  <div className="text-right">
                    {discount ? (
                      <>
                        <p className="text-primary font-bold text-sm">
                          ${(parseFloat(price) * (1 - discount / 100)).toFixed(2)}
                        </p>
                        <p className="text-gray-400 text-xs line-through">${price}</p>
                      </>
                    ) : (
                      <p className="bg-accent text-white px-2 py-0.5 rounded-md font-bold text-sm transition-all duration-300 hover:bg-accent/80">
                        ${price}
                      </p>
                    )}
                  </div>
                )}
              </div>
              {brand && <p className="text-sm text-gray-500 mt-1">{brand}</p>}
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
