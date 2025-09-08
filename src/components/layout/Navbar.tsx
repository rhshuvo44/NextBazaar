"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/shop/men", label: "Men" },
    { path: "/shop/women", label: "Women" },
    { path: "/shop/combos", label: "Combos" },
    { path: "/shop/joggers", label: "Joggers" },
  ];
  // Function to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-base-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-base-content">
            NextBazaar
          </Link>

          {/* Desktop Menu */}
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
                {nav.path === "/"
                  ? "Home"
                  : nav.label.replace("/", "").charAt(0).toUpperCase() +
                    nav.label.slice(1)}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center w-1/3 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 rounded-md bg-base-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-2 text-base-content">
            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <div
                className={`p-2 rounded-full ${
                  isActive("/wishlist") ? "text-red-500" : "text-base-content"
                } hover:bg-gray-200 hover:text-red-500`}
              >
                <FaHeart className="cursor-pointer text-xl" />
              </div>
            </Link>

            {/* Shopping Cart Icon with count */}
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
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

            {/* User Account Icon */}
            <Link href="/account">
              <div
                className={`p-2 rounded-full ${
                  isActive("/account") ? "text-green-500" : "text-base-content"
                } hover:bg-gray-200 hover:text-green-500`}
              >
                <FaUser className="cursor-pointer text-xl " />
              </div>
            </Link>

            {/* Theme Toggle (assuming it's a separate component) */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-base-200 text-base-content">
          <div className="flex flex-col space-y-2 text-base-content">
            {navLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`block px-2 py-1 rounded ${
                  isActive(nav.path)
                    ? "bg-primary text-white"
                    : "text-darkText dark:text-lightText hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {nav.path === "/"
                  ? "Home"
                  : nav.label.replace("/", "").charAt(0).toUpperCase() +
                    nav.label.slice(1)}
              </Link>
            ))}
          </div>

          <div className="relative w-full mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 rounded-md bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex justify-around text-xl mt-4">
            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <div
                className={`p-2 rounded-full ${
                  isActive("/wishlist") ? "text-red-500" : "text-base-content"
                } hover:bg-gray-200`}
              >
                <FaHeart className="cursor-pointer text-xl hover:text-red-500" />
              </div>
            </Link>

            {/* Shopping Cart Icon with count */}
            <div className="relative cursor-pointer">
              <Link href="/cart">
                <div
                  className={`p-2 rounded-full ${
                    isActive("/cart") ? "text-blue-500" : "text-base-content"
                  } hover:bg-gray-200`}
                >
                  <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-500" />
                </div>
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

            {/* User Account Icon */}
            <Link href="/account">
              <div
                className={`p-2 rounded-full ${
                  isActive("/account") ? "text-green-500" : "text-base-content"
                } hover:bg-gray-200`}
              >
                <FaUser className="cursor-pointer text-xl hover:text-green-500" />
              </div>
            </Link>

            {/* Theme Toggle (assuming it's a separate component) */}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
