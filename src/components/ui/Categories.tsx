import type { Categories } from "@/types";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
const Categories = ({ title, data }: { title: string; data: Categories[] }) => {
  return (
    <section className="py-10">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-2">
        {data?.map((item, index) => (
          <ProductCard
            key={index}
            src={item.src}
            title={item.title}
            href="/shop"
            showArrow={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
