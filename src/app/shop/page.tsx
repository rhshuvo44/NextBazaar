"use client";
import PriceTable from "@/components/modules/shop/PriceTable";
import ProductGrid from "@/components/modules/shop/ProductGrid";
import SEOText from "@/components/modules/shop/SEOText";
import Sidebar from "@/components/modules/shop/Sidebar";
import Tabs from "@/components/modules/shop/Tabs";
import { products } from "@/DB/data";
export default function Products() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6 py-10">
        <Sidebar />
        <main className="col-span-12 md:col-span-9">
          <Tabs category="All" />
          <ProductGrid products={products} loading={false} />
        </main>
      </div>
      <SEOText
        title="All Clothing at Best Price"
        description="Discover the best deals on women's clothing at our online store."
      />
      <PriceTable
        products={products}
        title="All Clothing at Best Price"
        tableTitle="All's"
      />
    </div>
  );
}
