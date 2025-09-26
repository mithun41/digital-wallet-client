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
    <div className="drawer lg:drawer-open">
      {/* Toggle for mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
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
          <div className="mx-2 flex-1 px-2 font-bold">Dashboard</div>
        </div>

        {/* Page Content Outlet */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6 pt-10 space-y-3">
          {/* Navigation Items */}
          <li>
            <NavLink to="/dashboard" className="flex items-center gap-2">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-2"
            >
              <FaUserCircle /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/AddMoney"
              className="flex items-center gap-2"
            >
              <FaWallet /> Add Money
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/MobileRecharge"
              className="flex items-center gap-2"
            >
              <FaMobileAlt /> Mobile Recharge
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/transaction"
              className="flex items-center gap-2"
            >
              <FaExchangeAlt /> Transaction
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cashOut"
              className="flex items-center gap-2"
            >
              <FaMoneyBillWave /> CashOut
            </NavLink>
          </li>
          <li>
            <button className="flex items-center gap-2 text-red-500">
              <FaSignOutAlt /> LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
