"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CheckEmail = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return (
    <div className="space-y-4">
      <Link
        href={`/auth/verification?email=${encodeURIComponent(email)}`}
        className="btn btn-primary w-full h-12 rounded-xl text-white font-medium hover:bg-violet-500 transition capitalize"
      >
        Enter Verification Code
      </Link>
      <p className="text-sm text-center">
        Back to{" "}
        <Link href="/auth/signin" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default CheckEmail;
