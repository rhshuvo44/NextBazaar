"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FormInput } from "../form/FormInput";
import Link from "next/link";
import { api } from "@/lib/api";

const ResetPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const res = await api.auth.forgotPassword({ email });
    if (res.success) {
      router.push(`/auth/check-email?email=${encodeURIComponent(email)}`);
    } else {
      setError(res.error || "Something went wrong");
    }
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-2">
        {error && <p className="text-red-500 text-sm">{error}</p>}
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
