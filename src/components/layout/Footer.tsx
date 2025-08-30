import apple from "@/assets/images/apple.png";
import google from "@/assets/images/google.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Need Help */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Need Help</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                FAQ&apos;s
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                nextbazaar Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                nextbazaar
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Collaboration
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Media
              </Link>
            </li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">More Info</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Term and Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Location & App */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Location</h4>
          <a href="mailto:support@euphoria.in">support@euphoria.in</a>
          <p className="text-sm my-4">
            Eklingpura Chouraha, Ahmedabad Main Road , (NH 8- Near Mahadev
            Hotel) Udaipur, India- 313002
          </p>
          <h4 className="font-semibold text-lg mb-4 text-white">
            Download The App
          </h4>
          <div className="flex flex-wrap gap-4 space-x-4">
            <Link href="#" className="w-28">
              <Image src={google} alt="Google Play" />
            </Link>
            <Link href="#" className="w-28">
              <Image src={apple} alt="App Store" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-sm text-gray-400">
          Copyright © {currentYear} NextBazaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
