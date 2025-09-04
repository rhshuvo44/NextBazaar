"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavbarFooterWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Hide Navbar/Footer for /auth/* pages
  const hideLayout = pathname?.startsWith("/auth");

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
