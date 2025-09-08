"use client";
import { useState } from "react";

const FilterPrice = () => {
  const [minPrice, setMinPrice] = useState(70);
  const [maxPrice, setMaxPrice] = useState(600);

  // Slider change handlers
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) setMaxPrice(value);
  };

  // Input field change handlers
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value < maxPrice) setMinPrice(value);
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 1000 && value > minPrice) setMaxPrice(value);
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-4 text-2xl border-b-2 border-accent">
        Price
      </h3>
      <div className="w-full max-w-md mx-auto">
        {/* Slider container */}
        <div className="relative w-full h-2 bg-gray-300 rounded-lg">
          {/* Highlighted range */}
          <div
            className="absolute h-2 bg-purple-600 rounded-lg"
            style={{
              left: `${(minPrice / 1000) * 100}%`,
              right: `${100 - (maxPrice / 1000) * 100}%`,
            }}
          ></div>

          {/* Min thumb */}
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinChange}
            className="absolute top-[-2px] w-full appearance-none bg-transparent pointer-events-auto"
          />

          {/* Max thumb */}
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute top-[-2px] w-full appearance-none bg-transparent pointer-events-auto"
          />
        </div>

        {/* Values */}
        <div className="flex justify-between mt-6 gap-4">
          <input
            type="number"
            value={minPrice}
            onChange={handleMinInput}
            className="input input-bordered w-24 text-center"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxInput}
            className="input input-bordered w-24 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
