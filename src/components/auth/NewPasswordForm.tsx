"use client";
import { FormEvent, useState } from "react";
import { FormInput } from "../form/FormInput";
const NewPasswordForm = () => {
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
