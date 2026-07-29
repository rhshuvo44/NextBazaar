"use client";

import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import Image from "next/image";
import { FaSearch, FaTrash, FaExclamationTriangle } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  brand?: string;
  price: string;
  category: string;
  discount: number;
  image?: string;
  shopName?: string;
  createdAt: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const res = await api.admin.products.list({ search: search || undefined, page, limit: 15 });
    if (res.success && res.data) {
      setProducts(res.data.products as unknown as Product[]);
      setTotal(res.data.total);
      setTotalPages(res.data.totalPages);
    } else {
      setError(res.error || "Failed to load products");
    }
    setLoading(false);
  }, [search, page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id: string) => {
    setDeleting(true);
    const res = await api.admin.products.delete(id);
    if (res.success) {
      setSuccessMsg("Product deleted");
      setDeleteTarget(null);
      fetchProducts();
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
      setError(res.error || "Delete failed");
    }
    setDeleting(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setPage(1);
      fetchProducts();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Products ({total})</h1>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="input input-bordered w-full pl-9 input-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
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
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="skeleton h-16 w-full rounded-lg" />)}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-base-content/60">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm mt-1">Try a different search term.</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Vendor</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        {p.image && (
                          <div className="w-10 h-10 rounded bg-base-300 overflow-hidden flex-shrink-0 relative">
                            <Image src={p.image} alt={p.title} fill className="object-cover" sizes="40px" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-sm line-clamp-1">{p.title}</p>
                          {p.brand && <p className="text-xs text-base-content/60">{p.brand}</p>}
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge-sm">{p.category}</span></td>
                    <td className="font-medium">${parseFloat(p.price).toFixed(2)}</td>
                    <td>{p.discount > 0 ? <span className="badge badge-sm badge-error">-{p.discount}%</span> : "—"}</td>
                    <td className="text-sm text-base-content/60">{p.shopName || "N/A"}</td>
                    <td>
                      <button
                        onClick={() => setDeleteTarget(p.id)}
                        className="btn btn-ghost btn-sm text-error"
                        title="Delete product"
                      >
                        <FaTrash />
                      </button>
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

      {deleteTarget && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Delete Product</h3>
            <p className="py-4 text-base-content/70">Are you sure you want to delete this product? This action cannot be undone.</p>
            <div className="modal-action">
              <button onClick={() => setDeleteTarget(null)} className="btn">Cancel</button>
              <button onClick={() => handleDelete(deleteTarget)} disabled={deleting} className="btn btn-error">
                {deleting ? <span className="loading loading-spinner loading-sm" /> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
