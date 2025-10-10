import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import navberImg from "../../assets/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import Theme from "../theme/Theme";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const isLoggedIn = !!user;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-primary dark:bg-green-600 text-white h-16 flex items-center px-6">
      <div className="px-4 w-10/12 mx-auto lg:px-8 py-2">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={navberImg}
              alt="PayNate Logo"
              className="h-30 w-22  object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-gray-200 px-2 py-1 rounded  `}
             
              title={isLoggedIn ? "" : ""}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className={`hover:text-gray-200 px-2 py-1 rounded`} 
              
              title={isLoggedIn ? "" : ""}
            >
              Blogs
            </Link>
            <Link
              to={isLoggedIn ? "/rewards" : "#"}
              className={`hover:text-gray-200 px-2 py-1 rounded ${
                !isLoggedIn ? "cursor-not-allowed" : ""
              }`}
              title={isLoggedIn ? "" : ""}
            >
              Rewards
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                {/* User Photo */}
                {user.photo && (
                  <img
                    src={user.photo}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                )}
                <Link
                  to={
                    user?.role === "admin" ? "/admin/dashboard" : "/dashboard"
                  }
                  className="hover:text-gray-200 px-2 py-1 rounded"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
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
            <Theme></Theme>
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

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-16 bg-blue-600 w-full text-white px-4 py-4 space-y-2 z-40 fixed top-16 left-0">
          <Link to="/" className="block hover:bg-blue-500 rounded px-2 py-1">
            Home
          </Link>
          <span
            className={`block px-2 py-1 rounded hover:bg-blue-500 ${
              !isLoggedIn ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            }`}
          >
            Wallet
          </span>
          <span
            className={`block px-2 py-1 rounded hover:bg-blue-500 ${
              !isLoggedIn ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            }`}
          >
            Blogs
          </span>
          <span
            className={`block px-2 py-1 rounded hover:bg-blue-500 ${
              !isLoggedIn ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            }`}
          >
            Rewards
          </span>

          {isLoggedIn ? (
            <>
              {user.photo && (
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white mx-auto"
                />
              )}
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="block text-center hover:bg-blue-500 rounded px-2 py-1"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block bg-white text-blue-600 text-center rounded px-2 py-1 hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block bg-green-500 text-center rounded px-2 py-1 hover:bg-green-400"
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
