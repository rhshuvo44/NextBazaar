"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaHeart,
  FaMoon,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white dark:bg-darkBg shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold dark:text-lightText">
            NextBazaar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ml-10 text-darkText dark:text-lightText">
            {["/", "/shop", "/men", "/women", "/combos","/Joggers"].map((href, i) => (
              <Link
                key={i}
                href={href}
                className={`hover:text-dark transition ${
                  isActive(href) ? "text-dark font-bold" : "text-neutral"
                }`}
              >
                {href === "/"
                  ? "Home"
                  : href.replace("/", "").charAt(0).toUpperCase() +
                    href.slice(2)}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md bg-[#f6f6f6] dark:bg-gray-700 text-darkText dark:text-lightText focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6 text-darkText dark:text-lightText">
            <FaHeart className="cursor-pointer text-xl" />
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
            <FaUser className="cursor-pointer text-xl" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded"
            >
              <FaMoon />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-darkText dark:text-lightText text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white dark:bg-darkBg">
          <div className="flex flex-col space-y-2 text-base">
            {["/", "/shop", "/about", "/contact"].map((href, i) => (
              <Link
                key={i}
                href={href}
                className={`block px-2 py-1 rounded ${
                  isActive(href)
                    ? "bg-primary text-white"
                    : "text-darkText dark:text-lightText hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {href === "/"
                  ? "Home"
                  : href.replace("/", "").charAt(0).toUpperCase() +
                    href.slice(2)}
              </Link>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="mt-4 w-full px-3 py-2 rounded-md bg-[#f6f6f6] dark:bg-gray-700 text-darkText dark:text-lightText focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />

          <div className="flex justify-around text-xl mt-4 text-darkText dark:text-lightText">
            <FaHeart className="cursor-pointer" />
            <div className="relative cursor-pointer">
              <FaShoppingCart />
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">
                2
              </span>
            </div>
            <FaUser className="cursor-pointer" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-darkText dark:text-lightText"
            >
              <FaMoon />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
