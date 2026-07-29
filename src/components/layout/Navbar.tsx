"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaStore,
} from "react-icons/fa";
import { getUser, api } from "@/lib/api";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const user = getUser();

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    if (user) {
      api.cart.get().then((res) => {
        if (res.success && res.data) setCartCount(res.data.itemCount);
      });
    }
  }, [user]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/shop/men", label: "Men" },
    { path: "/shop/women", label: "Women" },
    { path: "/shop/combos", label: "Combos" },
    { path: "/shop/joggers", label: "Joggers" },
  ];

  const isActive = (href: string) => pathname === href;

  const roleLinks = () => {
    if (!user) return null;
    if (user.role === "VENDOR") {
      return { href: "/vendor/dashboard", label: "Dashboard", icon: FaStore };
    }
    if (user.role === "ADMIN") {
      return { href: "/admin/vendors", label: "Vendors", icon: FaStore };
    }
    return null;
  };

  const rl = roleLinks();

  return (
    <nav className="bg-base-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-base-content">
            NextBazaar
          </Link>

          <div className="hidden md:flex space-x-6 ml-10 text-base-content">
            {navLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`hover:text-primary transition ${
                  isActive(nav.path)
                    ? "text-primary font-bold"
                    : "text-base-content"
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center w-1/3 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full pl-10 pr-3 py-2 rounded-md bg-base-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="hidden md:flex items-center space-x-2 text-base-content">
            {rl && (
              <Link href={rl.href}>
                <div
                  className={`p-2 rounded-full ${
                    isActive(rl.href) ? "text-violet-500" : "text-base-content"
                  } hover:bg-gray-200 hover:text-violet-500`}
                >
                  <rl.icon className="cursor-pointer text-xl" />
                </div>
              </Link>
            )}

            <Link href="/wishlist">
              <div
                className={`p-2 rounded-full ${
                  isActive("/wishlist") ? "text-red-500" : "text-base-content"
                } hover:bg-gray-200 hover:text-red-500`}
              >
                <FaHeart className="cursor-pointer text-xl" />
              </div>
            </Link>

            <div className="relative cursor-pointer">
              <Link href="/cart">
                <div
                  className={`p-2 rounded-full ${
                    isActive("/cart") ? "text-blue-500" : "text-base-content"
                  } hover:bg-gray-200 hover:text-blue-500`}
                >
                  <FaShoppingCart className="text-xl cursor-pointer " />
                </div>
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </div>

            <Link href={user ? "/account" : "/auth/signin"}>
              <div
                className={`p-2 rounded-full ${
                  isActive("/account") || isActive("/auth/signin")
                    ? "text-green-500"
                    : "text-base-content"
                } hover:bg-gray-200 hover:text-green-500`}
              >
                <FaUser className="cursor-pointer text-xl " />
              </div>
            </Link>

            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl cursor-pointer"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-4 bg-base-200 text-base-content">
          <div className="flex flex-col space-y-2 text-base-content">
            {rl && (
              <Link
                href={rl.href}
                className="block px-2 py-1 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {rl.label}
              </Link>
            )}
            {navLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`block px-2 py-1 rounded ${
                  isActive(nav.path)
                    ? "bg-primary text-white"
                    : "text-darkText dark:text-lightText hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
          </div>

          <div className="relative w-full mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full pl-10 pr-3 py-2 rounded-md bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex justify-around text-xl mt-4">
            <Link href="/wishlist" onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`p-2 rounded-full ${
                  isActive("/wishlist") ? "text-red-500" : "text-base-content"
                } hover:bg-gray-200`}
              >
                <FaHeart className="cursor-pointer text-xl hover:text-red-500" />
              </div>
            </Link>

            <div className="relative cursor-pointer">
              <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                <div
                  className={`p-2 rounded-full ${
                    isActive("/cart") ? "text-blue-500" : "text-base-content"
                  } hover:bg-gray-200`}
                >
                  <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-500" />
                </div>
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </div>

            <Link href={user ? "/account" : "/auth/signin"} onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`p-2 rounded-full ${
                  isActive("/account") || isActive("/auth/signin")
                    ? "text-green-500"
                    : "text-base-content"
                } hover:bg-gray-200`}
              >
                <FaUser className="cursor-pointer text-xl hover:text-green-500" />
              </div>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
