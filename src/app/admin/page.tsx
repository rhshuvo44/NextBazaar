"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";
import { FaBox, FaClipboardList, FaDollarSign, FaUsers, FaStore, FaExclamationTriangle } from "react-icons/fa";

interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  totalUsers: number;
  totalVendors: number;
  pendingVendors: number;
  ordersByStatus: Record<string, number>;
  recentOrders: {
    id: string;
    total: string;
    status: string;
    createdAt: string;
    user: { name?: string; email: string } | null;
  }[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.admin.dashboard.getStats().then((res) => {
      if (res.success && res.data) {
        setStats(res.data);
      } else {
        setError(res.error || "Failed to load dashboard");
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-8 w-64" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="skeleton h-28 rounded-xl" />)}
        </div>
        <div className="skeleton h-64 rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <FaExclamationTriangle />
        <span>{error}</span>
        <button onClick={() => window.location.reload()} className="btn btn-sm">Retry</button>
      </div>
    );
  }

  if (!stats) return null;

  const statusColor: Record<string, string> = {
    PENDING: "badge-warning",
    PROCESSING: "badge-info",
    SHIPPED: "badge-primary",
    DELIVERED: "badge-success",
    CANCELLED: "badge-error",
  };

  const cards = [
    { label: "Total Products", value: stats.totalProducts, icon: FaBox, color: "bg-blue-500" },
    { label: "Total Orders", value: stats.totalOrders, icon: FaClipboardList, color: "bg-green-500" },
    { label: "Total Revenue", value: `$${stats.totalRevenue.toFixed(2)}`, icon: FaDollarSign, color: "bg-yellow-500" },
    { label: "Total Users", value: stats.totalUsers, icon: FaUsers, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-base-content/60">
          <FaStore />
          <span>{stats.totalVendors} vendors ({stats.pendingVendors} pending)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="stat bg-base-100 border border-base-300 rounded-xl shadow-sm">
            <div className={`stat-figure text-3xl ${card.color} text-white rounded-xl p-2`}>
              <card.icon />
            </div>
            <div className="stat-title text-base-content/60">{card.label}</div>
            <div className="stat-value text-2xl">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-base-100 border border-base-300 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          {stats.recentOrders.length === 0 ? (
            <p className="text-base-content/60 text-sm">No orders yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentOrders.map((o) => (
                    <tr key={o.id}>
                      <td>{o.user?.name || o.user?.email || "Unknown"}</td>
                      <td>${parseFloat(o.total).toFixed(2)}</td>
                      <td><span className={`badge badge-sm ${statusColor[o.status] || "badge-ghost"}`}>{o.status}</span></td>
                      <td className="text-sm text-base-content/60">{new Date(o.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <Link href="/admin/orders" className="btn btn-ghost btn-sm mt-4">View all orders →</Link>
        </div>

        <div className="bg-base-100 border border-base-300 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Orders by Status</h2>
          {Object.keys(stats.ordersByStatus).length === 0 ? (
            <p className="text-base-content/60 text-sm">No orders yet.</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(stats.ordersByStatus).map(([status, count]) => (
                <div key={status} className="flex items-center justify-between">
                  <span className={`badge ${statusColor[status] || "badge-ghost"}`}>{status}</span>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
