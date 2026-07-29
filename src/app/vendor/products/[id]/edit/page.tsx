"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api, getUser } from "@/lib/api";
import { FormInput } from "@/components/form/FormInput";

const categories = ["Men", "Women", "Unisex", "Featured", "Combos", "Joggers"];

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    if (!user || user.role !== "VENDOR") { router.push("/auth/signin"); return; }
    api.products.getById(id).then((res) => {
      if (res.success && res.data) setProduct(res.data as Record<string, unknown>);
      else setError("Product not found");
      setFetching(false);
    });
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLSelectElement).value;
    const brand = (form.elements.namedItem("brand") as HTMLInputElement).value;
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value;
    const discount = parseInt((form.elements.namedItem("discount") as HTMLInputElement).value || "0", 10);

    const res = await api.vendor.products.update(id, {
      title, price, category, brand: brand || undefined,
      description: description || undefined,
      discount: discount || undefined,
    });

    if (res.success) {
      router.push("/vendor/products");
    } else {
      setError(res.error || "Failed to update product");
    }
    setLoading(false);
  }

  if (fetching) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <FormInput label="Title" name="title" defaultValue={product.title as string} required />
        <FormInput label="Price" name="price" type="number" step="0.01" defaultValue={product.price as string} required />
        <div className="space-y-1.5">
          <label className="text-sm">Category</label>
          <select name="category" className="select select-bordered w-full" defaultValue={product.category as string} required>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <FormInput label="Brand" name="brand" defaultValue={product.brand as string} />
        <div className="space-y-1.5">
          <label className="text-sm">Description</label>
          <textarea name="description" rows={3} className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-violet-500/30 resize-none" defaultValue={product.description as string} />
        </div>
        <FormInput label="Discount %" name="discount" type="number" min="0" max="100" defaultValue={String(product.discount || 0)} />

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
