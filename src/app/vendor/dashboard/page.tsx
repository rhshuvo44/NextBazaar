"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api, getUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function VendorDashboardPage() {
  const router = useRouter();
  const user = getUser();
  const [stats, setStats] = useState<{ productCount: number; orderCount: number; revenue: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== "VENDOR") { router.push("/auth/signin"); return; }
    api.vendor.dashboard().then((res) => {
      if (res.success && res.data) setStats(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-10 text-center">Loading dashboard...</div>;
  if (!stats) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
          <p className="text-gray-500">{user?.shopName || "Your Store"}</p>
        </div>
        <Link href="/vendor/products/new" className="btn btn-primary">+ Add Product</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-base-100 rounded-2xl shadow-sm border p-6">
          <p className="text-gray-500 text-sm">Products</p>
          <p className="text-4xl font-bold mt-1">{stats.productCount}</p>
        </div>
        <div className="bg-base-100 rounded-2xl shadow-sm border p-6">
          <p className="text-gray-500 text-sm">Orders</p>
          <p className="text-4xl font-bold mt-1">{stats.orderCount}</p>
        </div>
        <div className="bg-base-100 rounded-2xl shadow-sm border p-6">
          <p className="text-gray-500 text-sm">Revenue</p>
          <p className="text-4xl font-bold mt-1">${stats.revenue.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/vendor/products" className="block bg-base-100 rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Manage Products</h3>
          <p className="text-gray-500 text-sm">View, edit, and add products to your store.</p>
        </Link>
        <Link href="/vendor/orders" className="block bg-base-100 rounded-2xl shadow-sm border p-6 hover:shadow-md transition">
          <h3 className="font-semibold text-lg">View Orders</h3>
          <p className="text-gray-500 text-sm">Manage incoming orders and update status.</p>
        </Link>
      </div>
    </div>
  );
}
