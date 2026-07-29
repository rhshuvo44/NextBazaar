"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormInput } from "../form/FormInput";
import { api } from "@/lib/api";

const NewPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const otp = searchParams.get("otp") || "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await api.auth.resetPassword({ email, otp, password });
    if (res.success) {
      router.push("/auth/signin");
    } else {
      setError(res.error || "Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <FormInput
        placeholder="Enter your new password"
        label="Password"
        name="password"
        isPassword
      />
      <FormInput
        placeholder="Enter your Confirm password"
        label="Confirm password"
        name="confirmPassword"
        isPassword
      />
      <button
        type="submit"
        className="btn btn-primary h-12 rounded-xl text-white font-medium hover:bg-violet-500 transition disabled:opacity-70 capitalize"
      >
        {loading ? "Resetting password..." : "Reset Password"}
      </button>
    </form>
  );
};

export default NewPasswordForm;
