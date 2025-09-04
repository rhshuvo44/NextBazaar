"use client";

import { InputHTMLAttributes, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  isPassword?: boolean;
};

export function FormInput({ label, error, isPassword, ...rest }: Props) {
  const [show, setShow] = useState(false);
  const type = isPassword ? (show ? "text" : "password") : rest.type || "text";

  return (
    <div className="space-y-1.5">
      <label className="text-sm">{label}</label>
      <div className="relative">
        <input
          {...rest}
          type={type}
          className="w-full h-12 rounded-xl border px-4 pr-12 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <FiEyeOff size={18} /> : <BsEye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
