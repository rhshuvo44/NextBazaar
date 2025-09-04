export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-16">{children}</section>;
}
