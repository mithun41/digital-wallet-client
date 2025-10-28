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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-600 dark:bg-primary shadow-md transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16 sm:h-18 md:h-20 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-medium text-sm lg:text-base">
          <Link to="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link to="/blogs" className="hover:text-gray-200 transition-colors">
            Blogs
          </Link>

          <Link
            to={isLoggedIn ? "/rewards" : "#"}
            className={`hover:text-gray-200 transition-colors ${
              !isLoggedIn ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            Rewards
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="report"
                className="hover:text-gray-200 transition-colors"
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
                      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white"
                    />
                  ) : (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 text-gray-700 font-semibold flex items-center justify-center border-2 border-white">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 sm:w-52 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold">{user?.name}</p>
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
                      className="block px-4 py-2 hover:bg-gray-100 font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      📊 Dashboard
                    </Link>
                    {user?.role !== "admin" && (
                      <Link
                        to="/dashboard/profile"
                        className="block px-4 py-2 hover:bg-gray-100 font-medium"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        👤 Profile
                      </Link>
                    )}
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-green-600 px-3 py-1.5 lg:px-4 lg:py-2 rounded hover:bg-gray-100 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 px-3 py-1.5 lg:px-4 lg:py-2 rounded hover:bg-green-400 transition-colors font-medium"
              >
                Signup
              </Link>
            </>
          )}

          <Theme />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-green-700 text-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 space-y-3 font-medium text-base">
          <Link
            to="/"
            className="hover:bg-green-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-green-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="hover:bg-green-600 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="hover:bg-green-600 rounded px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                📊 Dashboard
              </Link>
              <Link
                to="/dashboard/profile"
                className="hover:bg-green-600 rounded px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                👤 Profile
              </Link>
              <Link
                to="/rewards"
                className="hover:bg-green-600 rounded px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                🎁 Rewards
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-red-500 rounded px-3 py-2 hover:bg-red-600 text-left transition"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-green-600 text-center rounded px-3 py-2 hover:bg-gray-100 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-center rounded px-3 py-2 hover:bg-green-400 font-medium"
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
