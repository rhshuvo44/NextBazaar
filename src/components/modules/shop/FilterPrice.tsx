"use client";

interface FilterPriceProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (val: number) => void;
  onMaxChange: (val: number) => void;
}

const FilterPrice = ({ minPrice, maxPrice, onMinChange, onMaxChange }: FilterPriceProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) onMinChange(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) onMaxChange(value);
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3 text-lg">Price</h3>
      <div className="relative h-2 bg-base-300 rounded-full">
        <div
          className="absolute h-2 bg-primary rounded-full"
          style={{
            left: `${(minPrice / 200) * 100}%`,
            width: `${((maxPrice - minPrice) / 200) * 100}%`,
          }}
        />
        <input
          type="range"
          min="0"
          max="200"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute top-[-6px] w-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="200"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute top-[-6px] w-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
      <div className="flex justify-between mt-3 text-sm font-medium">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
};

export default FilterPrice;
