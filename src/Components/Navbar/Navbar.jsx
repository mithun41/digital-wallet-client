import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 flex">
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              PayMate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>

            {!isLoggedIn && (
              <>
                <span className="hover:text-gray-200 cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Wallet
                </span>
                <span className="hover:text-gray-200 cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Transfer
                </span>
                <span className="hover:text-gray-200 cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Rewards
                </span>

                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-500 px-4 py-1 rounded hover:bg-green-400"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className="block px-2 py-1 hover:bg-blue-500 rounded">
              Home
            </Link>

            {!isLoggedIn && (
              <>
                <span className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Wallet
                </span>
                <span className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Transfer
                </span>
                <span className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer" title="লগইন করলে এক্সেস পাবেন">
                  Rewards
                </span>
                <Link to="/login" className="block px-2 py-1 bg-white text-blue-600 rounded hover:bg-gray-200">
                  Login
                </Link>
                <Link to="/signup" className="block px-2 py-1 bg-green-500 rounded hover:bg-green-400">
                  Signup
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
