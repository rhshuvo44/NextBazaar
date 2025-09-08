import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, index) => (
            <ProductCard key={index} {...p} wishlist={true} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </>
  );
};

export default ProductGrid;
