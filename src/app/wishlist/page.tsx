"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { fetchWishlist, removeWishlistItem } from "@/lib/slices/wishlistSlice";

export default function WishlistPage() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((s) => s.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleRemove = (productId: string) => {
    dispatch(removeWishlistItem(productId));
  };

  if (loading && items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-16">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 mt-16 px-4">
        <FaHeart className="text-6xl text-base-content/20" />
        <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
        <p className="text-base-content/60">Save items you love and find them here later.</p>
        <Link href="/shop" className="btn btn-primary">
          <FaArrowLeft /> Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 mt-16">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Wishlist ({items.length})</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.productId}
              className="relative group bg-base-100 border border-base-300 rounded-2xl overflow-hidden"
            >
              <Link href={`/shop/${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="aspect-square relative bg-base-200">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-base-content/20 text-sm">
                      No image
                    </div>
                  )}
                </div>
              </Link>

              <button
                onClick={() => handleRemove(item.productId)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 shadow transition"
                aria-label="Remove from wishlist"
              >
                <FaTrash className="text-sm text-red-500" />
              </button>

              <div className="p-3">
                <Link href={`/shop/${item.title.toLowerCase().replace(/\s+/g, "-")}`} className="font-semibold text-sm line-clamp-1 hover:text-primary">
                  {item.title}
                </Link>
                <p className="text-primary font-bold text-sm mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
