"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
import { SocialButtons } from "../ui/SocialButtons";
export default function SignInForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: call your API
    setTimeout(() => setLoading(false), 800);
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
        <FormInput label="User name or email address" name="email" />
        <div className="space-y-2">
          <FormInput label="Password" name="password" isPassword />
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <Link href="/forgot-password" className=" hover:underline">
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

        <p className="text-sm  text-center">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
