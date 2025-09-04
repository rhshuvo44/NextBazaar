"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
import { SocialButtons } from "../ui/SocialButtons";

export default function SignUpForm() {
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

        <p className="text-sm  text-center">
          Already have an account?{" "}
          <Link href="/auth/signin" className="underline">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}
