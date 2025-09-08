"use client";
import PriceTable from "@/components/modules/shop/PriceTable";
import ProductGrid from "@/components/modules/shop/ProductGrid";
import SEOText from "@/components/modules/shop/SEOText";
import Sidebar from "@/components/modules/shop/Sidebar";
import Tabs from "@/components/modules/shop/Tabs";
import { limelight } from "@/DB/data";
export default function Products() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6 py-10">
        <Sidebar />
        <main className="col-span-12 md:col-span-9">
          <Tabs />
          <ProductGrid products={limelight} />
        </main>
      </div>
      <SEOText />
      <PriceTable />
    </div>
  );
}
