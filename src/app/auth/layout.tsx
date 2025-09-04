import "@/app/globals.css";
export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
