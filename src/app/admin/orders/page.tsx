"use client";

import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { FaExclamationTriangle } from "react-icons/fa";
import { OrderStatus } from "@/types";

interface Order {
  id: string;
  userId: string;
  items: { title: string; quantity: number }[];
  total: string;
  status: string;
  createdAt: string;
  user: { name?: string; email: string } | null;
}

const allStatuses = ["", "PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"] as const;

const statusColor: Record<string, string> = {
  PENDING: "badge-warning",
  PROCESSING: "badge-info",
  SHIPPED: "badge-primary",
  DELIVERED: "badge-success",
  CANCELLED: "badge-error",
};

const nextStatuses: Record<string, OrderStatus[]> = {
  PENDING: ["PROCESSING", "CANCELLED"],
  PROCESSING: ["SHIPPED", "CANCELLED"],
  SHIPPED: ["DELIVERED", "CANCELLED"],
  DELIVERED: [],
  CANCELLED: [],
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    const res = await api.admin.orders.list({ status: filter || undefined, page, limit: 15 });
    if (res.success && res.data) {
      setOrders(res.data.orders as unknown as Order[]);
      setTotal(res.data.total);
      setTotalPages(res.data.totalPages);
    } else {
      setError(res.error || "Failed to load orders");
    }
    setLoading(false);
  }, [filter, page]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusUpdate = async (id: string, status: string) => {
    setUpdating(id);
    const res = await api.admin.orders.updateStatus(id, status);
    if (res.success) {
      fetchOrders();
    } else {
      setError(res.error || "Failed to update status");
    }
    setUpdating(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Orders ({total})</h1>
        <div className="flex gap-2 flex-wrap">
          {allStatuses.map((s) => (
            <button
              key={s}
              onClick={() => { setFilter(s); setPage(1); }}
              className={`btn btn-xs ${filter === s ? "btn-primary" : "btn-outline"}`}
            >
              {s || "All"}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="alert alert-error text-sm">
          <FaExclamationTriangle />
          <span>{error}</span>
          <button onClick={() => setError("")} className="btn btn-ghost btn-xs">Dismiss</button>
        </div>
      )}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="skeleton h-16 w-full rounded-lg" />)}
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 text-base-content/60">
          <p className="text-lg font-medium">No orders found</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <p className="font-medium text-sm">{o.user?.name || "Unknown"}</p>
                      <p className="text-xs text-base-content/60">{o.user?.email}</p>
                    </td>
                    <td className="text-sm">
                      {o.items.slice(0, 2).map((item, idx) => (
                        <p key={idx} className="line-clamp-1">{item.title} x{item.quantity}</p>
                      ))}
                      {o.items.length > 2 && <p className="text-xs text-base-content/40">+{o.items.length - 2} more</p>}
                    </td>
                    <td className="font-medium">${parseFloat(o.total).toFixed(2)}</td>
                    <td><span className={`badge badge-sm ${statusColor[o.status] || "badge-ghost"}`}>{o.status}</span></td>
                    <td className="text-sm text-base-content/60">{new Date(o.createdAt).toLocaleDateString()}</td>
                    <td>
                      {nextStatuses[o.status] && nextStatuses[o.status].length > 0 ? (
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                            {updating === o.id ? <span className="loading loading-spinner loading-xs" /> : "Update"}
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow border border-base-300">
                            {nextStatuses[o.status].map((ns) => (
                              <li key={ns}>
                                <button onClick={() => handleStatusUpdate(o.id, ns)} className="text-sm">
                                  Mark {ns}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <span className="text-xs text-base-content/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="btn btn-sm">Previous</button>
              <span className="flex items-center text-sm text-base-content/60">Page {page} of {totalPages}</span>
              <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)} className="btn btn-sm">Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
