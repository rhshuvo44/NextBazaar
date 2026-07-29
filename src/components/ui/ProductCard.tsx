"use client";

import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaLongArrowAltRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { toggleWishlistItem } from "@/lib/slices/wishlistSlice";

const staggerClass = [
  "",
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
  "animate-delay-5",
  "animate-delay-6",
  "animate-delay-7",
  "animate-delay-8",
];

const ProductCard = ({
  id,
  src,
  title,
  href,
  price,
  brand,
  showArrow,
  wishlist,
  discount,
  shopName,
  staggerIndex,
}: ProductCardProps & { staggerIndex?: number }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);
  const saved = id ? items.some((i) => i.productId === String(id)) : false;
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const linkHref = href || `/shop/${slug}`;
  const animDelay = staggerIndex !== undefined ? staggerClass[staggerIndex % staggerClass.length] : "";

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!id) return;
    const imageUrl = typeof src === "string" ? src : src.src;
    dispatch(toggleWishlistItem({
      productId: String(id),
      title,
      price: price || "0",
      image: imageUrl,
    }));
  };

  return (
    <Link href={linkHref} className={`block animate-fade-in-up ${animDelay}`}>
      <div className="bg-base-100 shadow-sm relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group">
        {wishlist && (
          <button
            aria-label={saved ? "Remove from Wishlist" : "Add to Wishlist"}
            onClick={handleToggleWishlist}
            className="bg-white absolute top-3 right-3 rounded-full p-2 shadow transition-colors duration-300 hover:bg-red-100 z-10 cursor-pointer"
          >
            {saved ? (
              <FaHeart className="text-lg text-red-500" />
            ) : (
              <CiHeart className="text-lg text-black transition-colors duration-300 hover:text-red-500" />
            )}
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
              {shopName && <p className="text-xs text-gray-400 mt-0.5">Sold by {shopName}</p>}
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
