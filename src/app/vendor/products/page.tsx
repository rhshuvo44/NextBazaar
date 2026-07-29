"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api, getUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function VendorProductsPage() {
  const router = useRouter();
  const user = getUser();
  const [products, setProducts] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== "VENDOR") { router.push("/auth/signin"); return; }
    api.vendor.products.list().then((res) => {
      if (res.success && res.data) setProducts(res.data as Record<string, unknown>[]);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    const res = await api.vendor.products.delete(id);
    if (res.success) setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) return <div className="p-10 text-center">Loading products...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Products</h1>
        <Link href="/vendor/products/new" className="btn btn-primary">+ Add Product</Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No products yet.</p>
          <Link href="/vendor/products/new" className="btn btn-primary mt-4">Add Your First Product</Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id as string}>
                  <td className="font-medium">{p.title as string}</td>
                  <td>${p.price as string}</td>
                  <td>{p.category as string}</td>
                  <td>{p.discount ? `${p.discount}%` : "—"}</td>
                  <td className="flex gap-2">
                    <Link href={`/vendor/products/${p.id}/edit`} className="btn btn-sm btn-outline">Edit</Link>
                    <button onClick={() => handleDelete(p.id as string)} className="btn btn-sm btn-outline btn-error">Delete</button>
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
