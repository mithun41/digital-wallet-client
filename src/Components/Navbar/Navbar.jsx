import React, { useState } from "react";
import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import navberImg from "../../assets/logo2.png";
import Theme from "../theme/Theme";

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-blue-600 text-white h-16 flex items-center px-6">
    <Theme></Theme>
      <div className="px-4 w-10/12 mx-auto lg:px-8 py-2 sm:py-2 lg:py-2">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center">
              <img
                src={navberImg}
                alt="PayNate Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>

            {!isLoggedIn && (
              <>
              <Link to='/dashboard' className="hover:text-gray-200 px-2 py-1 rounded block">
              Dashboard
              </Link>
                <Link
                  to="/wallet"
                  className="hover:text-gray-200 px-2 py-1 rounded block"
                  title="লগইন করলে এক্সেস পাবেন"
                >
                  Wallet
                </Link>
                <Link
                  to="/transfer"
                  className="hover:text-gray-200 px-2 py-1 rounded block"
                  title="লগইন করলে এক্সেস পাবেন"
                >
                  Transfer
                </Link>
                <Link
                  to="/rewards"
                  className="hover:text-gray-200 px-2 py-1 rounded block"
                  title="লগইন করলে এক্সেস পাবেন"
                >
                  Rewards
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200 block"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-500 px-4 py-1 rounded hover:bg-green-400 block"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-2xl"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Links */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2">
              <Link
                to="/"
                className="block px-2 py-1 hover:bg-blue-500 rounded"
              >
                Home
              </Link>

              {!isLoggedIn && (
                <>
                  <span
                    className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer"
                    title="লগইন করলে এক্সেস পাবেন"
                  >
                    Wallet
                  </span>
                  <span
                    className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer"
                    title="লগইন করলে এক্সেস পাবেন"
                  >
                    Transfer
                  </span>
                  <span
                    className="block px-2 py-1 hover:bg-blue-500 rounded cursor-pointer"
                    title="লগইন করলে এক্সেস পাবেন"
                  >
                    Rewards
                  </span>
                  <Link
                    to="/login"
                    className="block px-2 py-1 bg-white text-blue-600 rounded hover:bg-gray-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-2 py-1 bg-green-500 rounded hover:bg-green-400"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-20 right-0 h-full w-1/2 bg-gray-600 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="mt-2 px-4 space-y-4">
          <Link to="/" className="block hover:bg-gray-100 rounded px-2 py-1">
            Home
          </Link>

          {!isLoggedIn && (
            <>
              <span
                className="block hover:bg-blue-500 rounded px-2 py-1 cursor-pointer"
                title="লগইন করলে এক্সেস পাবেন"
              >
                Wallet
              </span>
              <span
                className="block hover:bg-blue-500 rounded px-2 py-1 cursor-pointer"
                title="লগইন করলে এক্সেস পাবেন"
              >
                Transfer
              </span>
              <span
                className="block hover:bg-blue-500 rounded px-2 py-1 cursor-pointer"
                title="লগইন করলে এক্সেস পাবেন"
              >
                Rewards
              </span>
              <Link
                to="/login"
                className="block bg-white text-blue-600 text-center rounded hover:bg-gray-200 px-2 py-1"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block bg-green-500 text-center rounded hover:bg-green-400 px-2 py-1"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
