"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
import { SocialButtons } from "../ui/SocialButtons";
import { api, setToken, setUser } from "@/lib/api";

export default function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await api.auth.signin({ email, password });
    if (res.success && res.data) {
      setToken(res.data.token);
      setUser(res.data.user);
      router.push("/");
    } else {
      setError(res.error || "Invalid email or password");
    }
    setLoading(false);
  }

  return (
    <>
      <SocialButtons />
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-500">OR</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <form onSubmit={onSubmit} className="space-y-2">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <FormInput label="User name or email address" name="email" />
        <div className="space-y-2">
          <FormInput label="Password" name="password" isPassword />
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <Link href="/auth/reset-password" className="hover:underline">
              Forget your password
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition disabled:opacity-70"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
