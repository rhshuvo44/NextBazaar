"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/data";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductDetail({ slug }: { slug: string }) {
  const product = products.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="text-gray-500">The product you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-base-200">
          <Image
            src={product.src}
            alt={product.title}
            fill
            className="object-cover"
          />
          {product.discount && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {product.brand && (
            <p className="text-sm uppercase tracking-wider text-gray-500">{product.brand}</p>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-4">
            {product.discount ? (
              <>
                <span className="text-3xl font-bold text-primary">
                  ${(parseFloat(product.price || "0") * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">${product.price}</span>
                <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">
                  Save {product.discount}%
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">${product.price}</span>
            )}
          </div>

          {product.description && (
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === s
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === c ? "border-primary scale-110" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: c }}
                    aria-label={`Color ${c}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className={`btn flex-1 gap-2 ${addedToCart ? "btn-success" : "btn-primary"}`}
            >
              {addedToCart ? (
                <><FaCheck /> Added to Cart</>
              ) : (
                <><FaShoppingCart /> Add to Cart</>
              )}
            </button>
            <button className="btn btn-outline btn-square" aria-label="Add to Wishlist">
              <CiHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">More {product.category} Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} wishlist />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
