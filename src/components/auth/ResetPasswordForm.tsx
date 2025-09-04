"use client";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
import Link from "next/link";
const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: call your API
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-2">
        <FormInput
          placeholder="Enter your Email"
          label="Email"
          name="email"
          type="email"
        />

        <button
          type="submit"
          className="btn btn-primary h-12 rounded-xl text-white font-medium hover:bg-violet-500 transition disabled:opacity-70 capitalize"
        >
          {loading ? "Sending Reset Link..." : "Send Reset Link"}
        </button>
        <p className="text-sm">
          Back to{" "}
          <Link href="/auth/signin" className="underline">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default ResetPasswordForm;
