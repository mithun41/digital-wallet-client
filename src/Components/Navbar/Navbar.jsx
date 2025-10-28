import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import Theme from "../theme/Theme";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = !!user;

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const toggleButton = document.getElementById("mobile-toggle");

      if (
        isOpen &&
        mobileMenu &&
        !mobileMenu.contains(e.target) &&
        !toggleButton.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-600 dark:bg-primary shadow-md transition-all duration-300">
      <div className="max-w-11/12 mx-auto px-3 sm:px-4 md:px-6 lg:px-10 flex justify-between items-center h-14 sm:h-16 md:h-20 text-white">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 relative z-50 flex-shrink-0"
        >
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium text-sm xl:text-base">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="hover:text-gray-200 transition-colors whitespace-nowrap"
          >
            Blogs
          </Link>

          <Link
            to={isLoggedIn ? "/rewards" : "#"}
            className={`hover:text-gray-200 transition-colors whitespace-nowrap ${
              !isLoggedIn ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            Rewards
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/report"
                className="hover:text-gray-200 transition-colors whitespace-nowrap"
              >
                Report
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 focus:outline-none hover:opacity-80 transition-opacity"
                >
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt="Profile"
                      className="w-8 h-8 xl:w-10 xl:h-10 rounded-full object-cover border-2 border-white"
                    />
                  ) : (
                    <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-gray-100 text-gray-700 text-sm xl:text-base font-semibold flex items-center justify-center border-2 border-white">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 xl:w-52 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold truncate">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.email}
                      </p>
                    </div>
                    <Link
                      to={
                        user?.role === "admin"
                          ? "/admin/dashboard"
                          : "/dashboard"
                      }
                      className="block px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-green-600 px-3 xl:px-4 py-1.5 xl:py-2 rounded hover:bg-gray-100 transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 px-3 xl:px-4 py-1.5 xl:py-2 rounded hover:bg-green-400 transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                Signup
              </Link>
            </>
          )}

          <Theme />
        </div>

        {/* Mobile Menu Button & Theme */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3 relative z-50">
          <Theme />
          <button
            id="mobile-toggle"
            onClick={toggleMenu}
            className="focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt="Profile"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 text-gray-700 text-sm sm:text-base font-semibold flex items-center justify-center border-2 border-white">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
            ) : (
              <span className="text-white text-2xl sm:text-3xl">
                {isOpen ? <HiX /> : <HiMenu />}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-14 sm:top-16 left-0 w-full bg-green-700 dark:bg-slate-900 text-white shadow-lg transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 sm:py-5 space-y-2 sm:space-y-3 font-medium text-sm sm:text-base max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link
            to="/"
            className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/dashboard/profile"
                className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/rewards"
                className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Rewards
              </Link>
              <Link
                to="/report"
                className="hover:bg-green-600 dark:hover:bg-slate-800 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Report
              </Link>
              <div className="border-t border-green-600 dark:border-slate-700 my-2"></div>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-red-500 rounded px-3 py-2 hover:bg-red-600 text-left transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="border-t border-green-600 dark:border-slate-700 my-2"></div>
              <Link
                to="/login"
                className="bg-white text-green-600 text-center rounded px-3 py-2 hover:bg-gray-100 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-center rounded px-3 py-2 hover:bg-green-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
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
