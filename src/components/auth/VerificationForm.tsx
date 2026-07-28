"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormInput } from "../form/FormInput";
import { api } from "@/lib/api";

const VerificationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const otp = (form.elements.namedItem("otp") as HTMLInputElement).value;

    const res = await api.auth.verifyOtp({ email, otp });
    if (res.success) {
      router.push(`/auth/new-password?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`);
    } else {
      setError(res.error || "Invalid code");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <FormInput
        placeholder="Enter your verification code"
        label="Verification Code"
        name="otp"
        type="text"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary h-12 rounded-xl text-white font-medium hover:bg-violet-500 transition disabled:opacity-70 capitalize"
      >
        {loading ? "verifying code..." : "verify code"}
      </button>
    </form>
  );
};

export default VerificationForm;
