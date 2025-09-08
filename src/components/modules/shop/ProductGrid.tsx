import ProductCard from "@/components/ui/ProductCard";
import { Limelight } from "@/types";

const ProductGrid = ({ products }: { products: Limelight[] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </div>
  );
};

export default ProductGrid;
