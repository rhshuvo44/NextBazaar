"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/lib/api";
import { FaTachometerAlt, FaBox, FaClipboardList, FaStore, FaUsers, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: FaTachometerAlt },
  { href: "/admin/products", label: "Products", icon: FaBox },
  { href: "/admin/orders", label: "Orders", icon: FaClipboardList },
  { href: "/admin/vendors", label: "Vendors", icon: FaStore },
  { href: "/admin/users", label: "Users", icon: FaUsers },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = getUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "ADMIN") router.push("/");
  }, [user, router]);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div className="min-h-screen flex flex-col mt-16">
      <div className="drawer lg:drawer-open">
        <input
          id="admin-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={sidebarOpen}
          onChange={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="drawer-content flex flex-col">
          <div className="lg:hidden flex items-center gap-3 p-4 border-b border-base-300 bg-base-200">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="btn btn-ghost btn-sm">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <span className="font-semibold">Admin Panel</span>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </div>

        <div className="drawer-side z-40">
          <label htmlFor="admin-drawer" className="drawer-overlay" onClick={() => setSidebarOpen(false)} />
          <aside className="bg-base-200 text-base-content w-64 min-h-full flex flex-col border-r border-base-300">
            <div className="p-4 border-b border-base-300">
              <Link href="/admin" className="text-xl font-bold">Admin Panel</Link>
            </div>
            <nav className="flex-1 p-2 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-content shadow"
                        : "hover:bg-base-300 text-base-content/80 hover:text-base-content"
                    }`}
                  >
                    <item.icon className="text-lg" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-base-300">
              <Link href="/" className="text-sm text-base-content/60 hover:text-primary transition-colors">
                ← Back to Store
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
