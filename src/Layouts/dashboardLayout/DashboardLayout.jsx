import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Bell, User, Settings, LogOut, Search, Smartphone, CreditCard, DollarSign } from "lucide-react";
import logo from '../../assets/logo2.png'
import { useSelector } from "react-redux";
import Theme from "../../Components/theme/Theme";


const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Navbar - Fixed Top */}
      <header className="w-full fixed top-0 z-50 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-purple-400
              bg-white dark:bg-gray-700 dark:text-gray-200
              dark:border-gray-600"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
            />
          </div>

          {/* Notification */}
          <div className="relative cursor-pointer">
            <Bell size={22} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              5
            </span>
          </div>

          {/* Theme Toggle */}
          <Theme />

          {/* User Info + Image */}
          {user && (
            <div className="flex items-center gap-3">
              {user.photo ? (
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
                />
              ) : (
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Default User"
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
                />
              )}
              <div className="text-right hidden sm:block">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {user.name || "Guest User"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.phone || "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </header>


      {/* Main Content (Sidebar + Page) */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Dashboard Overview
          </h3>
          <nav className="space-y-2">

            <NavLink
              to="/dashboard/transaction"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <CreditCard size={18} /> Transaction
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <User size={18} /> Profile
            </NavLink>

            <NavLink
              to="/dashboard/addMoney"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <DollarSign size={18} /> Add Money
            </NavLink>

            <NavLink
              to="/dashboard/mobileRecharge"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <Smartphone size={18} /> Mobile Recharge
            </NavLink>

            <NavLink
              to="/dashboard/cashOut"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <DollarSign size={18} /> CashOut
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 
                 hover:bg-purple-100 dark:hover:bg-purple-900 
                 ${isActive
                  ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                  : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              <Settings size={18} /> Settings
            </NavLink>

            {/* Logout Button */}
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-500">
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 text-gray-800 dark:text-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
