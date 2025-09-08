"use client";
import PriceTable from "@/components/modules/shop/PriceTable";
import ProductGrid from "@/components/modules/shop/ProductGrid";
import SEOText from "@/components/modules/shop/SEOText";
import Sidebar from "@/components/modules/shop/Sidebar";
import Tabs from "@/components/modules/shop/Tabs";
import { products } from "@/DB/data";
export default function Products() {
  const categoriesMen = products.filter((p) => p.category === "Men");
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6 py-10">
        <Sidebar />
        <main className="col-span-12 md:col-span-9">
          <Tabs category="Men" />
          <ProductGrid products={categoriesMen} loading={false} />
        </main>
      </div>
      <SEOText
        title="All Men's Clothing at Best Price"
        description="Discover the best deals on men's clothing at our online store."
      />
      <PriceTable
        products={categoriesMen}
        title="All Men's Clothing at Best Price"
        tableTitle="Men's"
      />
    </div>
  );
}
