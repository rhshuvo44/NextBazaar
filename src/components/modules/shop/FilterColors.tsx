"use client";
import { useState } from "react";

const colors = ["#6a0dad", "#000000", "#ff0000", "#ffa500", "#000080"];

const FilterColors = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-4 text-2xl border-b-2 border-accent">
        Colors
      </h3>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? "border-black" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterColors;
