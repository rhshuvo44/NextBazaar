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
  const [scrolled, setScrolled] = useState(false);
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const iconBase =
    "p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95";

  return (
    <nav
      className={`glass fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-soft-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gradient animate-gradient"
          >
            NextBazaar
          </Link>

          <div className="hidden md:flex space-x-6 ml-10 text-base-content">
            {navLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                  isActive(nav.path)
                    ? "text-primary font-bold active"
                    : "hover:text-primary"
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
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-base-100/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all duration-300 border border-transparent focus:border-primary/30"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="hidden md:flex items-center space-x-1 text-base-content">
            {rl && (
              <Link href={rl.href}>
                <div
                  className={`${iconBase} ${
                    isActive(rl.href) ? "text-primary" : "hover:bg-base-300"
                  }`}
                >
                  <rl.icon className="cursor-pointer text-xl" />
                </div>
              </Link>
            )}

            <Link href="/wishlist">
              <div
                className={`${iconBase} ${
                  isActive("/wishlist")
                    ? "text-red-500"
                    : "hover:bg-base-300 hover:text-red-500"
                }`}
              >
                <FaHeart className="cursor-pointer text-xl" />
              </div>
            </Link>

            <div className="relative cursor-pointer">
              <Link href="/cart">
                <div
                  className={`${iconBase} ${
                    isActive("/cart")
                      ? "text-blue-500"
                      : "hover:bg-base-300 hover:text-blue-500"
                  }`}
                >
                  <FaShoppingCart className="text-xl cursor-pointer " />
                </div>
              </Link>
              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center animate-pop-in shadow"
                >
                  {cartCount}
                </span>
              )}
            </div>

            <Link href={user ? "/account" : "/auth/signin"}>
              <div
                className={`${iconBase} ${
                  isActive("/account") || isActive("/auth/signin")
                    ? "text-green-500"
                    : "hover:bg-base-300 hover:text-green-500"
                }`}
              >
                <FaUser className="cursor-pointer text-xl " />
              </div>
            </Link>

            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl cursor-pointer p-2 hover:text-primary transition-colors"
              aria-label="Toggle menu"
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
        <div className="px-4 pb-4 space-y-4 text-base-content">
          <div className="flex flex-col space-y-2 text-base-content">
            {rl && (
              <Link
                href={rl.href}
                className="block px-2 py-1 rounded hover:bg-base-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {rl.label}
              </Link>
            )}
            {navLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`block px-2 py-1 rounded transition-all duration-200 ${
                  isActive(nav.path)
                    ? "bg-primary text-white font-semibold shadow-lg"
                    : "hover:bg-base-300 hover:translate-x-1"
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
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex justify-around text-xl mt-4">
            <Link href="/wishlist" onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`${iconBase} ${
                  isActive("/wishlist") ? "text-red-500" : "hover:bg-base-300"
                }`}
              >
                <FaHeart className="cursor-pointer text-xl hover:text-red-500" />
              </div>
            </Link>

            <div className="relative cursor-pointer">
              <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                <div
                  className={`${iconBase} ${
                    isActive("/cart") ? "text-blue-500" : "hover:bg-base-300"
                  }`}
                >
                  <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-500" />
                </div>
              </Link>
              {cartCount > 0 && (
                <span
                  key={`m-${cartCount}`}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center animate-pop-in shadow"
                >
                  {cartCount}
                </span>
              )}
            </div>

            <Link
              href={user ? "/account" : "/auth/signin"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className={`${iconBase} ${
                  isActive("/account") || isActive("/auth/signin")
                    ? "text-green-500"
                    : "hover:bg-base-300"
                }`}
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