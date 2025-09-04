"use client";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";

const VerificationForm = () => {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: call your API
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
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
