"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { FormInput } from "@/components/form/FormInput";

export default function VendorSignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const shopName = (form.elements.namedItem("shopName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const shopDescription = (form.elements.namedItem("shopDescription") as HTMLInputElement)?.value || "";

    const res = await api.auth.vendorSignup({ email, password, shopName, shopDescription });
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Something went wrong");
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="bg-base-100 p-8 rounded-2xl shadow-md max-w-md w-full text-center space-y-4">
          <div className="text-5xl">🎉</div>
          <h1 className="text-2xl font-bold">Registration Submitted!</h1>
          <p className="text-gray-500">
            Your vendor application is pending review. We&apos;ll notify you once it&apos;s approved.
          </p>
          <Link href="/" className="btn btn-primary w-full">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="bg-base-100 p-8 rounded-2xl shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2">Sell on NextBazaar</h1>
        <p className="text-gray-500 text-sm mb-6">Register your store and start selling today.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <FormInput label="Store Name" name="shopName" placeholder="Your brand/store name" required />
          <FormInput label="Email address" name="email" type="email" required />
          <FormInput label="Password" name="password" isPassword required />
          <div className="space-y-1.5">
            <label className="text-sm">Store Description (optional)</label>
            <textarea
              name="shopDescription"
              rows={3}
              className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition resize-none"
              placeholder="Tell us about your store..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Register Store"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have a store? <Link href="/auth/signin" className="underline text-violet-600">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
