"use client";
import { useState, useMemo } from "react";
import PriceTable from "@/components/modules/shop/PriceTable";
import ProductGrid from "@/components/modules/shop/ProductGrid";
import SEOText from "@/components/modules/shop/SEOText";
import Sidebar from "@/components/modules/shop/Sidebar";
import Tabs from "@/components/modules/shop/Tabs";
import CategoryHero from "@/components/modules/shop/CategoryHero";
import { products } from "@/data/data";
import { SortOption, ShopFilters } from "@/types";
import TeesTShirt from "@/assets/images/home/Tees&T-Shirt.jpg";

const defaultFilters: ShopFilters = {
  categories: [],
  priceRange: [0, 200],
  colors: [],
  sizes: [],
  dressStyles: [],
};

export default function WomenPage() {
  const [activeSort, setActiveSort] = useState<SortOption>("New");
  const [filters, setFilters] = useState<ShopFilters>(defaultFilters);

  const toggleArray = (key: keyof ShopFilters, val: string) =>
    setFilters((prev) => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter((v) => v !== val)
        : [...(prev[key] as string[]), val],
    }));

  const categoriesWomen = products.filter((p) => p.category === "Women");

  const filtered = useMemo(() => {
    let result = [...categoriesWomen];
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 200) {
      result = result.filter((p) => {
        const price = parseFloat(p.price || "0");
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
    }
    if (filters.sizes.length > 0) {
      result = result.filter((p) => p.sizes?.some((s) => filters.sizes.includes(s)));
    }
    return result;
  }, [filters, categoriesWomen]);

  return (
    <div>
      <CategoryHero
        image={TeesTShirt}
        title="Women's Collection"
        subtitle="Elegant · Trendy · Timeless"
        description="Discover styles that speak volumes — from everyday essentials to statement pieces."
        ctaText="Shop Women"
        gradient="from-black/50 via-black/30 to-transparent"
      />
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6 py-10">
        <Sidebar
          minPrice={filters.priceRange[0]}
          maxPrice={filters.priceRange[1]}
          selectedColors={filters.colors}
          selectedSizes={filters.sizes}
          selectedStyles={filters.dressStyles}
          onMinPriceChange={(val) => setFilters((p) => ({ ...p, priceRange: [val, p.priceRange[1]] }))}
          onMaxPriceChange={(val) => setFilters((p) => ({ ...p, priceRange: [p.priceRange[0], val] }))}
          onToggleColor={(c) => toggleArray("colors", c)}
          onToggleSize={(s) => toggleArray("sizes", s)}
          onToggleStyle={(s) => toggleArray("dressStyles", s)}
          onReset={() => setFilters(defaultFilters)}
        />
        <main className="col-span-12 md:col-span-9">
          <Tabs category="Women" activeSort={activeSort} onSortChange={setActiveSort} />
          <ProductGrid products={filtered} loading={false} />
        </main>
      </div>
      <SEOText
        title="All Women's Clothing at Best Price"
        description="Discover the best deals on women's clothing at our online store."
      />
      <PriceTable
        products={filtered}
        title="All Women's Clothing at Best Price"
        tableTitle="Women's"
      />
    </div>
  );
}
