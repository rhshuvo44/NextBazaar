"use client";
import { useEffect, useState } from "react";
import { api, getUser } from "@/lib/api";
import { useRouter } from "next/navigation";

const statuses = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];

export default function VendorOrdersPage() {
  const router = useRouter();
  const user = getUser();
  const [orders, setOrders] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== "VENDOR") { router.push("/auth/signin"); return; }
    api.vendor.orders.list().then((res) => {
      if (res.success && res.data) setOrders(res.data as Record<string, unknown>[]);
      setLoading(false);
    });
  }, []);

  const updateStatus = async (orderId: string, itemIdx: number, status: string) => {
    await api.vendor.orders.updateItemStatus(orderId, itemIdx, status);
    api.vendor.orders.list().then((res) => {
      if (res.success && res.data) setOrders(res.data as Record<string, unknown>[]);
    });
  };

  if (loading) return <div className="p-10 text-center">Loading orders...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400 py-20">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const items = order.items as { title: string; price: string; quantity: number; vendorId?: string }[];
            const vendorStatuses = order.vendorStatuses as Record<string, string> || {};

            return (
              <div key={order.id as string} className="bg-base-100 border rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order #{String(order.id).slice(-8)}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt as string).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`badge ${(order.status as string) === "PENDING" ? "badge-warning" : "badge-success"}`}>
                    {order.status as string}
                  </span>
                </div>

                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price}</td>
                        <td>
                          <select
                            className="select select-bordered select-xs"
                            value={vendorStatuses[user?.id || ""] || "PENDING"}
                            onChange={(e) => updateStatus(order.id as string, idx, e.target.value)}
                          >
                            {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="text-right font-bold mt-4">Total: ${order.total as string}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
