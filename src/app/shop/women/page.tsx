"use client";
import PriceTable from "@/components/modules/shop/PriceTable";
import ProductGrid from "@/components/modules/shop/ProductGrid";
import SEOText from "@/components/modules/shop/SEOText";
import Sidebar from "@/components/modules/shop/Sidebar";
import Tabs from "@/components/modules/shop/Tabs";
import { products } from "@/DB/data";
export default function Products() {
  const categoriesWomen = products.filter((p) => p.category === "Women");
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6 py-10">
        <Sidebar />
        <main className="col-span-12 md:col-span-9">
          <Tabs category="Women" />
          <ProductGrid products={categoriesWomen} loading={false} />
        </main>
      </div>
      <SEOText
        title="All Women's Clothing at Best Price"
        description="Discover the best deals on women's clothing at our online store."
      />
      <PriceTable
        products={categoriesWomen}
        title="All Women's Clothing at Best Price"
        tableTitle="Women's"
      />
    </div>
  );
}
