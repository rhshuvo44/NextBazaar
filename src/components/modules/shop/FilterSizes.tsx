"use client";

interface FilterSizesProps {
  selectedSizes: string[];
  onToggleSize: (size: string) => void;
}

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

const FilterSizes = ({ selectedSizes, onToggleSize }: FilterSizesProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3 text-lg">Sizes</h3>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => onToggleSize(s)}
            className={`btn btn-sm rounded-lg ${
              selectedSizes.includes(s) ? "btn-primary" : "btn-outline"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSizes;
