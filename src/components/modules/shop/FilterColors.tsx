"use client";
import { useState } from "react";

const colors = [
  { name: "Purple", bg: "bg-purple-600" },
  { name: "Black", bg: "bg-black" },
  { name: "Red", bg: "bg-red-600" },
  { name: "Orange", bg: "bg-orange-500" },
  { name: "Navy", bg: "bg-blue-900" },
  { name: "White", bg: "bg-white border" },
  { name: "Brown", bg: "bg-yellow-800" },
  { name: "Green", bg: "bg-green-600" },
  { name: "Yellow", bg: "bg-yellow-400" },
  { name: "Grey", bg: "bg-gray-400" },
  { name: "Pink", bg: "bg-pink-400" },
  { name: "Blue", bg: "bg-blue-500" },
];

const FilterColors = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (name: string) => {
    if (selectedColors.includes(name)) {
      setSelectedColors(selectedColors.filter((c) => c !== name));
    } else {
      setSelectedColors([...selectedColors, name]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-4 text-2xl border-b-2 border-accent">
        Colors
      </h3>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => toggleColor(color.name)}
            className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer
              ${
                selectedColors.includes(color.name)
                  ? "border-black scale-110"
                  : "border-gray-300"
              }
            `}
          >
            <span
              className={`block w-full h-full rounded-full ${color.bg}`}
            ></span>
          </button>
        ))}
      </div>
      {selectedColors.length > 0 && (
        <p className="mt-4 text-gray-600">
          Selected: {selectedColors.join(", ")}
        </p>
      )}
    </div>
  );
};

export default FilterColors;
