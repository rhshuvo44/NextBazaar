"use client";
import { useEffect, useState } from "react";
import { api, getUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AdminVendorsPage() {
  const router = useRouter();
  const user = getUser();
  const [vendors, setVendors] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const fetchVendors = () => {
    api.admin.vendors.list(filter || undefined).then((res) => {
      if (res.success && res.data) setVendors(res.data as Record<string, unknown>[]);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!user || user.role !== "ADMIN") { router.push("/"); return; }
    fetchVendors();
  }, [filter]);

  const handleApprove = async (id: string) => {
    await api.admin.vendors.approve(id);
    fetchVendors();
  };

  const handleSuspend = async (id: string) => {
    await api.admin.vendors.suspend(id);
    fetchVendors();
  };

  if (loading) return <div className="p-10 text-center">Loading vendors...</div>;

  const statusColor: Record<string, string> = {
    PENDING: "badge-warning",
    APPROVED: "badge-success",
    SUSPENDED: "badge-error",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Vendors</h1>
        <div className="flex gap-2">
          {["", "PENDING", "APPROVED", "SUSPENDED"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`btn btn-sm ${filter === s ? "btn-primary" : "btn-outline"}`}
            >
              {s || "All"}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
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
              <tr key={v.id as string}>
                <td>
                  <p className="font-medium">{v.shopName as string}</p>
                  {(v.name as string) && <p className="text-sm text-gray-500">{v.name as string}</p>}
                </td>
                <td>{v.email as string}</td>
                <td><span className={`badge ${statusColor[v.vendorStatus as string] || "badge-ghost"}`}>{v.vendorStatus as string}</span></td>
                <td>{new Date(v.createdAt as string).toLocaleDateString()}</td>
                <td className="flex gap-2">
                  {v.vendorStatus === "PENDING" && (
                    <button onClick={() => handleApprove(v.id as string)} className="btn btn-sm btn-success">Approve</button>
                  )}
                  {v.vendorStatus === "APPROVED" && (
                    <button onClick={() => handleSuspend(v.id as string)} className="btn btn-sm btn-error">Suspend</button>
                  )}
                  {v.vendorStatus === "SUSPENDED" && (
                    <button onClick={() => handleApprove(v.id as string)} className="btn btn-sm btn-success">Reactivate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
