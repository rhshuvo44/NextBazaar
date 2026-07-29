"use client";

import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterColors from "./FilterColors";
import FilterSizes from "./FilterSizes";
import DressStyle from "./DressStyle";

interface SidebarProps {
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  selectedStyles: string[];
  onMinPriceChange: (val: number) => void;
  onMaxPriceChange: (val: number) => void;
  onToggleColor: (color: string) => void;
  onToggleSize: (size: string) => void;
  onToggleStyle: (style: string) => void;
  onReset: () => void;
}

const Sidebar = ({
  minPrice,
  maxPrice,
  selectedColors,
  selectedSizes,
  selectedStyles,
  onMinPriceChange,
  onMaxPriceChange,
  onToggleColor,
  onToggleSize,
  onToggleStyle,
  onReset,
}: SidebarProps) => {
  const hasActiveFilters = selectedColors.length > 0 || selectedSizes.length > 0 || selectedStyles.length > 0 || minPrice > 0 || maxPrice < 200;

  return (
    <aside className="col-span-12 md:col-span-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        {hasActiveFilters && (
          <button onClick={onReset} className="text-sm text-primary hover:underline cursor-pointer">
            Reset All
          </button>
        )}
      </div>
      <div className="space-y-1">
        <FilterCategory />
        <div className="divider my-2" />
        <FilterPrice minPrice={minPrice} maxPrice={maxPrice} onMinChange={onMinPriceChange} onMaxChange={onMaxPriceChange} />
        <div className="divider my-2" />
        <FilterColors selectedColors={selectedColors} onToggleColor={onToggleColor} />
        <div className="divider my-2" />
        <FilterSizes selectedSizes={selectedSizes} onToggleSize={onToggleSize} />
        <div className="divider my-2" />
        <DressStyle selectedStyles={selectedStyles} onToggleStyle={onToggleStyle} />
      </div>
    </aside>
  );
};

export default Sidebar;
