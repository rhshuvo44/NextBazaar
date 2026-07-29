import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextBazaar - Shop",
  description: "Browse our collection of apparel and accessories.",
};

export default function ShopRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
