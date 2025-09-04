import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { limelight } from "@/DB/data";
const Limelight = () => {
  return (
    <section className="py-10">
      <SectionTitle title="In The Limelight" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {limelight.map((item, i) => (
          <ProductCard
            key={i}
            src={item.src}
            title={item.title}
            href="/shop"
            price={item.price}
            brand={item.brand}
            wishlist={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Limelight;
