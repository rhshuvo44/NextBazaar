"use client";

import { SortOption } from "@/types";

const Tabs = ({
  category,
  activeSort,
  onSortChange,
}: {
  category: string;
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}) => {
  const tabs: SortOption[] = ["New", "Recommended"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <h2 className="text-2xl font-bold">{category} Clothing</h2>
      <div className="flex gap-1 bg-base-200 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSortChange(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
              activeSort === tab
                ? "bg-base-100 text-base-content shadow-sm"
                : "text-gray-500 hover:text-base-content"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
