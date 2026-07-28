"use client";

interface DressStyleProps {
  selectedStyles: string[];
  onToggleStyle: (style: string) => void;
}

const dressStyles = [
  { name: "Casual", icon: "👕" },
  { name: "Formal", icon: "👔" },
  { name: "Party", icon: "🎉" },
  { name: "Gym", icon: "💪" },
];

const DressStyle = ({ selectedStyles, onToggleStyle }: DressStyleProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3 text-lg">Dress Style</h3>
      <div className="space-y-1">
        {dressStyles.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => onToggleStyle(name)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedStyles.includes(name)
                ? "bg-primary/10 text-primary border border-primary/30"
                : "hover:bg-base-200 border border-transparent"
            }`}
          >
            {icon} {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DressStyle;
