import React from "react";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterColors from "./FilterColors";
import FilterSizes from "./FilterSizes";
import DressStyle from "./DressStyle";

const Sidebar = () => {
  return (
    <aside className="col-span-12 md:col-span-3">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-accent">
        Filter
      </h2>
      <FilterCategory />
      <FilterPrice />
      <FilterColors />
      <FilterSizes />
      <DressStyle />
    </aside>
  );
};

export default Sidebar;
