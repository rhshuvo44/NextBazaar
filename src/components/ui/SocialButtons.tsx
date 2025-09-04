"use client";

import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function SocialButtons({
  onGoogle,
  onTwitter,
}: {
  onGoogle?: () => void;
  onTwitter?: () => void;
}) {
  const base =
    "w-full border rounded-xl h-12 flex items-center justify-center gap-3 text-sm hover:shadow transition cursor-pointer";
  return (
    <div className="space-y-2 mb-2">
      <button onClick={onGoogle} className={base}>
        <FcGoogle className="text-xl" />
        Continue With Google
      </button>
      <button onClick={onTwitter} className={base}>
        <FaTwitter className="text-xl" />
        Continue With Twitter
      </button>
    </div>
  );
}
