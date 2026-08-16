"use client";

import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { FaExclamationTriangle } from "react-icons/fa";

interface AdminUser {
  id: string;
  name?: string;
  email: string;
  role: string;
  vendorStatus?: string;
  shopName?: string;
  createdAt: string;
}

const roleColor: Record<string, string> = {
  SUPER_ADMIN: "badge-error",
  ADMIN: "badge-warning",
  VENDOR: "badge-info",
  CUSTOMER: "badge-ghost",
};

const vendorStatusColor: Record<string, string> = {
  PENDING: "badge-warning",
  APPROVED: "badge-success",
  SUSPENDED: "badge-error",
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const res = await api.admin.users.list({ role: roleFilter || undefined, page, limit: 15 });
    if (res.success && res.data) {
      setUsers(res.data.users as unknown as AdminUser[]);
      setTotal(res.data.total);
      setTotalPages(res.data.totalPages);
    } else {
      setError(res.error || "Failed to load users");
    }
    setLoading(false);
  }, [roleFilter, page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Users ({total})</h1>
        <div className="flex gap-2 flex-wrap">
          {["", "CUSTOMER", "VENDOR", "ADMIN"].map((r) => (
            <button
              key={r}
              onClick={() => { setRoleFilter(r); setPage(1); }}
              className={`btn btn-xs ${roleFilter === r ? "btn-primary" : "btn-outline"}`}
            >
              {r || "All"}
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
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="skeleton h-14 w-full rounded-lg" />)}
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-16 text-base-content/60">
          <p className="text-lg font-medium">No users found</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Vendor Status</th>
                  <th>Shop</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="font-medium">{u.name || "—"}</td>
                    <td className="text-sm">{u.email}</td>
                    <td><span className={`badge badge-sm ${roleColor[u.role] || "badge-ghost"}`}>{u.role}</span></td>
                    <td>
                      {u.vendorStatus ? (
                        <span className={`badge badge-sm ${vendorStatusColor[u.vendorStatus] || "badge-ghost"}`}>{u.vendorStatus}</span>
                      ) : (
                        <span className="text-base-content/40 text-sm">—</span>
                      )}
                    </td>
                    <td className="text-sm text-base-content/60">{u.shopName || "—"}</td>
                    <td className="text-sm text-base-content/60">{new Date(u.createdAt).toLocaleDateString()}</td>
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
