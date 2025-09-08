import Categories from "@/components/ui/Categories";
import { products } from "@/DB/data";

const CategoriesWomen = () => {
  const categoriesWomen = products.filter((p) => p.category === "Women");
  return <Categories title="Categories For Women" data={categoriesWomen} />;
};

export default CategoriesWomen;
