"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { api, getUser } from "@/lib/api";
import { FormInput } from "@/components/form/FormInput";

const categories = ["Men", "Women", "Unisex", "Featured", "Combos", "Joggers"];

export default function NewProductPage() {
  const router = useRouter();
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!user || user.role !== "VENDOR") {
    router.push("/auth/signin");
    return null;
  }

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
    const sizesStr = (form.elements.namedItem("sizes") as HTMLInputElement).value;
    const colorsStr = (form.elements.namedItem("colors") as HTMLInputElement).value;

    const res = await api.vendor.products.create({
      title, price, category, brand: brand || undefined,
      description: description || undefined,
      discount: discount || undefined,
      sizes: sizesStr ? sizesStr.split(",").map((s: string) => s.trim()) : undefined,
      colors: colorsStr ? colorsStr.split(",").map((c: string) => c.trim()) : undefined,
    });

    if (res.success) {
      router.push("/vendor/products");
    } else {
      setError(res.error || "Failed to create product");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Add Product</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <FormInput label="Title" name="title" required />
        <FormInput label="Price" name="price" type="number" step="0.01" required />
        <div className="space-y-1.5">
          <label className="text-sm">Category</label>
          <select name="category" className="select select-bordered w-full" required>
            <option value="">Select category</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <FormInput label="Brand (optional)" name="brand" />
        <div className="space-y-1.5">
          <label className="text-sm">Description (optional)</label>
          <textarea name="description" rows={3} className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-violet-500/30 resize-none" />
        </div>
        <FormInput label="Discount % (optional)" name="discount" type="number" min="0" max="100" />
        <FormInput label="Sizes (comma-separated, e.g. S,M,L,XL)" name="sizes" />
        <FormInput label="Colors (comma-separated hex, e.g. #000,#fff)" name="colors" />

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
