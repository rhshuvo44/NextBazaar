"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
  imageSrc,
  title,
  subTitle,
}: {
  children: ReactNode;
  imageSrc?: string | StaticImageData;
  title?: string;
  subTitle?: string;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side: image for large screens */}
      {imageSrc && (
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src={imageSrc}
            alt="auth side"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {/* Right side: form */}
      <div className="flex w-full lg:w-1/2">
        <div className="w-full p-8">
          {title && <h1 className="text-3xl font-semibold mb-2">{title}</h1>}
          {subTitle && (
            <p className="text-xs mb-6">{subTitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
