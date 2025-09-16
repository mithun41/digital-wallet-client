import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold">PayMate</h2>
            <p className="text-sm mt-2 text-gray-200">
              A smart way to manage your money. Safe, fast, and reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-200">
                  Signup
                </Link>
              </li>
              <li>
                <span
                  className="hover:text-gray-200 cursor-pointer"
                  title="লগইন করলে এক্সেস পাবেন"
                >
                  Wallet
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">Email: paymate.support@gmail.com</p>
            <p className="text-sm">Phone: +8801711121212</p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} PayMate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
