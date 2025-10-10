import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import navberImg from "../../assets/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import Theme from "../theme/Theme";

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

  // Dropdown বাইরে ক্লিক করলে বন্ধ হবে
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
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-primary dark:bg-green-600 text-white h-16 flex items-center px-6">
      <div className="px-4 w-10/12 mx-auto lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={navberImg}
              alt="PayMate Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link
              to={isLoggedIn ? "/about" : "#"}
              className={`hover:text-gray-200 px-2 py-1 rounded transition-colors ${
                !isLoggedIn ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              About
            </Link>
            <Link
              to={isLoggedIn ? "/transfer" : "#"}
              className={`hover:text-gray-200 px-2 py-1 rounded transition-colors ${
                !isLoggedIn ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              Transfer
            </Link>
            <Link
              to={isLoggedIn ? "/rewards" : "#"}
              className={`hover:text-gray-200 px-2 py-1 rounded transition-colors ${
                !isLoggedIn ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              Rewards
            </Link>

            {isLoggedIn ? (
              <>
                {/* Dashboard Link */}
                <Link
                  to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                  className="hover:text-gray-200 px-2 py-1 rounded transition-colors"
                >
                  Dashboard
                </Link>

                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="hover:text-gray-200 px-2 py-1 rounded transition-colors"
                >
                  Profile
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
                        className="w-10 h-10 rounded-full object-cover border-2 border-white"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold border-2 border-white">
                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-semibold text-gray-700">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email || ""}
                        </p>
                      </div>
                      <Link
                        to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        📊 Dashboard
                      </Link>
                      <Link
                        to="dashboard/profile"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        👤 Profile
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium transition-colors"
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
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-500 px-4 py-2 rounded hover:bg-green-400 transition-colors font-medium"
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
              className="text-white focus:outline-none text-2xl"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-16 bg-blue-600 w-full text-white px-4 py-4 space-y-2 z-40 fixed top-16 left-0 shadow-lg">
          <Link 
            to="/" 
            className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/about"
                className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/transfer"
                className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Transfer
              </Link>
              <Link
                to="/rewards"
                className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Rewards
              </Link>
              <hr className="border-blue-500 my-2" />
              <div className="px-3 py-2 text-sm font-medium bg-blue-700 rounded">
                👋 {user?.name || "User"}
              </div>
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📊 Dashboard
              </Link>
              <Link
                to="/profile"
                className="block hover:bg-blue-500 rounded px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                👤 Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full bg-red-500 px-3 py-2 rounded hover:bg-red-600 transition-colors font-medium text-left"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block bg-white text-blue-600 text-center rounded px-3 py-2 hover:bg-gray-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block bg-green-500 text-center rounded px-3 py-2 hover:bg-green-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;