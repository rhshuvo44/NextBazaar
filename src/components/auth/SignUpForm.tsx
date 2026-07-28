"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
import { SocialButtons } from "../ui/SocialButtons";
import { api, setToken } from "@/lib/api";

export default function SignUpForm() {
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

    const res = await api.auth.signup({ email, password });
    if (res.success && res.data) {
      setToken(res.data.token);
      router.push("/");
    } else {
      setError(res.error || "Something went wrong");
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
        <FormInput label="Email address" name="email" type="email" />
        <FormInput label="Password" name="password" isPassword />

        <label className="flex items-start gap-2 text-sm ">
          <input type="checkbox" className="mt-1 checkbox checkbox-sm" />I agree
          to the{" "}
          <a className="underline" href="/terms">
            Terms
          </a>{" "}
          &{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/auth/signin" className="underline">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}
