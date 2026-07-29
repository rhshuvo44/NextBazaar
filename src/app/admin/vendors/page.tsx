"use client";

import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { FaExclamationTriangle } from "react-icons/fa";

interface Vendor {
  id: string;
  name: string;
  email: string;
  shopName: string;
  shopDescription: string;
  vendorStatus: string;
  createdAt: string;
}

const statusColor: Record<string, string> = {
  PENDING: "badge-warning",
  APPROVED: "badge-success",
  SUSPENDED: "badge-error",
};

export default function AdminVendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fetchVendors = useCallback(() => {
    api.admin.vendors.list(filter || undefined).then((res) => {
      if (res.success && res.data) {
        setVendors(res.data);
      } else {
        setError(res.error || "Failed to load vendors");
      }
      setLoading(false);
    });
  }, [filter]);

  useEffect(() => {
    fetchVendors();
  }, [fetchVendors]);

  const handleApprove = async (id: string) => {
    const res = await api.admin.vendors.approve(id);
    if (res.success) {
      setSuccessMsg("Vendor approved");
      fetchVendors();
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
      setError(res.error || "Approve failed");
    }
  };

  const handleSuspend = async (id: string) => {
    const res = await api.admin.vendors.suspend(id);
    if (res.success) {
      setSuccessMsg("Vendor suspended");
      fetchVendors();
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
      setError(res.error || "Suspend failed");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Vendors ({vendors.length})</h1>
        <div className="flex gap-2 flex-wrap">
          {["", "PENDING", "APPROVED", "SUSPENDED"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
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
      {successMsg && <div className="alert alert-success text-sm">{successMsg}</div>}

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => <div key={i} className="skeleton h-14 w-full rounded-lg" />)}
        </div>
      ) : vendors.length === 0 ? (
        <div className="text-center py-16 text-base-content/60">
          <p className="text-lg font-medium">No vendors found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Store</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.id}>
                  <td>
                    <p className="font-medium">{v.shopName}</p>
                    {v.name && <p className="text-sm text-base-content/60">{v.name}</p>}
                  </td>
                  <td className="text-sm">{v.email}</td>
                  <td><span className={`badge badge-sm ${statusColor[v.vendorStatus] || "badge-ghost"}`}>{v.vendorStatus}</span></td>
                  <td className="text-sm text-base-content/60">{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    {v.vendorStatus === "PENDING" && (
                      <button onClick={() => handleApprove(v.id)} className="btn btn-xs btn-success">Approve</button>
                    )}
                    {v.vendorStatus === "APPROVED" && (
                      <button onClick={() => handleSuspend(v.id)} className="btn btn-xs btn-error">Suspend</button>
                    )}
                    {v.vendorStatus === "SUSPENDED" && (
                      <button onClick={() => handleApprove(v.id)} className="btn btn-xs btn-success">Reactivate</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
