import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  Smartphone,
  CreditCard,
  DollarSign,
  Home,
  Landmark,
} from "lucide-react";
import { FaCrown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Theme from "../../Components/theme/Theme";
import PayBill from "../../Pages/dashboard/PayBill";
import { CiMoneyBill } from "react-icons/ci";
import Logo from "../../Components/Navbar/Logo";

// Sidebar Menu Config
const menuItems = [
  {
    name: "Transaction",
    path: "/dashboard/trans-history",
    icon: <CreditCard size={24} />,
  },
  { name: "Profile", path: "/dashboard/profile", icon: <User size={24} /> },
  {
    name: "Add Money",
    path: "/dashboard/addMoney",
    icon: <DollarSign size={24} />,
  },
  {
    name: "Send Money",
    path: "/dashboard/send-money",
    icon: <DollarSign size={24} />,
  },
  {
    name: "Mobile Recharge",
    path: "/dashboard/mobileRecharge",
    icon: <Smartphone size={24} />,
  },
  {
    name: "CashOut",
    path: "/dashboard/cashOut",
    icon: <DollarSign size={24} />,
  },
  {
    name: "MyCard",
    path: "/dashboard/mycard",
    icon: <CreditCard size={24} />,
  },
  {
    name: "PayBill",
    path: "/dashboard/pay-bill",
    icon: <CiMoneyBill size={24} />,
  },
  {
    name: "Loan",
    path: "/dashboard/loan",
    icon: <CiMoneyBill size={24} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings size={24} />,
  },
];

// Upgrade Card Config
const upgradeCard = {
  title: "Premium",
  desc: "Unlock premium features and get more benefits by upgrading your account.",
  icon: <FaCrown className="w-6 h-6 text-yellow-400" />,
  buttonText: "Upgrade Now",
};

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Navbar */}
      <header className="w-full fixed top-0 z-50 flex items-center justify-between bg-green-600 dark:bg-primary shadow-md px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <Logo></Logo>
        </Link>

        {/*show balance  */}

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-1 focus:ring-purple-400
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

          {/* User Info */}
          {user && (
            <div className="flex items-center gap-3">
              <img
                src={user.photo || "https://i.pravatar.cc/40"}
                alt={user.name || "User"}
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
              />
              <div className="text-right hidden sm:block">
                <p className="font-medium text-gray-200 dark:text-gray-200">
                  {user.name || "Guest User"}
                </p>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {user.phone || "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-14 md:w-64 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto flex flex-col items-center md:items-start">
          {/* Title (Desktop only) */}
          <Link
            to={"/dashboard"}
            className="hidden md:block text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          >
            Dashboard Overview
          </Link>

          <nav className="space-y-4 w-full">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"} // just Home route e end use kora
                className={({ isActive }) =>
                  `flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 py-2 
                  hover:bg-purple-100 dark:hover:bg-purple-900
                  ${
                    isActive
                      ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.icon}
                <span className="hidden md:block">{item.name}</span>
              </NavLink>
            ))}

            {/* Logout */}
            <button className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-500">
              <LogOut size={24} />
              <span className="hidden md:block">Logout</span>
            </button>
          </nav>

          {/* Upgrade Card (Desktop only) */}
          <div className="hidden md:block mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md w-full">
            <div className="flex items-center gap-2 mb-2">
              {upgradeCard.icon}
              <h4 className="text-lg font-semibold">{upgradeCard.title}</h4>
            </div>
            <p className="text-sm text-white/80 mb-4">{upgradeCard.desc}</p>
            <button className="w-full py-2 bg-white text-blue-600 hover:bg-black hover:text-white cursor-pointer text-sm font-medium rounded-lg transition">
              {upgradeCard.buttonText}
            </button>
          </div>
        </aside>

        {/* Page Outlet */}
        <main className="flex-1 px-2 py-4 text-gray-800 dark:text-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
