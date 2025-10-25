import Categories from "@/components/ui/Categories";
import { products } from "@/data/data";

const CategoriesMen = () => {
  const categoriesMen = products.filter((p) => p.category === "Men");
  return <Categories title="Categories For Men" data={categoriesMen} />;
};

export default CategoriesMen;
