import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaUserCircle,
  FaWallet,
  FaMobileAlt,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-[#06923E] min-h-screen text-white">
      {/* Toggle for mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-[#06923E] w-full lg:hidden shadow-md">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-bold text-lg">🌿 Dashboard</div>
        </div>

        {/* Page Content Outlet */}
        <div className="p-6 bg-white text-black min-h-screen rounded-tl-2xl shadow-inner">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-[#06923E] text-white min-h-full w-80 p-6 pt-10 space-y-3 shadow-lg">
          {/* Navigation Items */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaUserCircle /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/AddMoney"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaWallet /> Add Money
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/MobileRecharge"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaMobileAlt /> Mobile Recharge
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/transaction"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaExchangeAlt /> Transaction
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cashOut"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-white text-[#06923E] font-semibold"
                    : "hover:bg-[#057a33]"
                }`
              }
            >
              <FaMoneyBillWave /> CashOut
            </NavLink>
          </li>
          <li>
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 bg-red-600 hover:bg-red-700 transition-all text-white font-semibold">
              <FaSignOutAlt /> LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;