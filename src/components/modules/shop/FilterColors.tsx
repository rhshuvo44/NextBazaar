"use client";

interface FilterColorsProps {
  selectedColors: string[];
  onToggleColor: (color: string) => void;
}

const colors = [
  { hex: "#6a0dad", label: "Purple" },
  { hex: "#000000", label: "Black" },
  { hex: "#ff0000", label: "Red" },
  { hex: "#ffa500", label: "Orange" },
  { hex: "#000080", label: "Navy" },
  { hex: "#ffffff", label: "White" },
  { hex: "#3C4242", label: "Gray" },
];

const FilterColors = ({ selectedColors, onToggleColor }: FilterColorsProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3 text-lg">Colors</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map(({ hex, label }) => (
          <button
            key={hex}
            onClick={() => onToggleColor(hex)}
            className={`w-7 h-7 rounded-full border-2 transition-all ${
              selectedColors.includes(hex)
                ? "border-primary scale-110 ring-2 ring-primary/30"
                : "border-gray-300 hover:border-gray-500"
            }`}
            style={{ backgroundColor: hex }}
            aria-label={label}
            title={label}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterColors;
