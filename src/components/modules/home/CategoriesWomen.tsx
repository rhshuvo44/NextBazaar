import Categories from "@/components/ui/Categories";
import { categoriesWomen } from "@/DB/data";

const CategoriesWomen = () => {
  return <Categories title="Categories For Women" data={categoriesWomen} />;
};

export default CategoriesWomen;
