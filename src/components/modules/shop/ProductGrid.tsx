import ProductCard from "@/components/ui/ProductCard";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";
import { Product } from "@/types";

const ProductGrid = ({
  products,
  loading,
  cardVariant,
}: {
  products: Product[];
  loading: boolean;
  cardVariant?: "default" | "compact" | "promo" | "sporty";
}) => {
  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-lg">No products match your filters.</p>
        <p className="text-gray-400 text-sm mt-1">Try adjusting your selection.</p>
      </div>
    );
  }

  const gridCols = cardVariant === "compact"
    ? "grid sm:grid-cols-3 lg:grid-cols-4 gap-4"
    : "grid sm:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridCols}>
      {products.map((p, index) => (
        <ProductCard key={index} {...p} wishlist />
      ))}
    </div>
  );
};

export default ProductGrid;
