import Categories from "@/components/ui/Categories";
import { categoriesMen } from "@/DB/data";

const CategoriesMen = () => {
  return <Categories title="Categories For Men" data={categoriesMen} />;
};

export default CategoriesMen;
