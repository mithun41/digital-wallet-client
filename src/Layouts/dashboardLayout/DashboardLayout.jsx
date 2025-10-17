import React, { useState } from "react";
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
  Menu,
  X,
  HandCoins,
  Wallet,
  Building2,
  Phone,
} from "lucide-react";
import { FaCrown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Theme from "../../Components/theme/Theme";
import { CiMoneyBill } from "react-icons/ci";
import Logo from "../../Components/Navbar/Logo";

// Sidebar Menu Config
const menuItems = [
  { name: "Overview", path: "/dashboard", icon: <Home size={22} /> },
  {
    name: "Transactions",
    path: "/dashboard/trans-history",
    icon: <Wallet size={22} />,
  },
  { name: "Profile", path: "/dashboard/profile", icon: <User size={22} /> },
  {
    name: "Add Money",
    path: "/dashboard/addMoney",
    icon: <HandCoins size={22} />,
  },
  {
    name: "Send Money",
    path: "/dashboard/send-money",
    icon: <DollarSign size={22} />,
  },
  {
    name: "Mobile Recharge",
    path: "/dashboard/mobileRecharge",
    icon: <Phone size={22} />,
  },
  {
    name: "Cash Out",
    path: "/dashboard/cashOut",
    icon: <Landmark size={22} />,
  },
  {
    name: "My Card",
    path: "/dashboard/mycard",
    icon: <CreditCard size={22} />,
  },
  {
    name: "Pay Bill",
    path: "/dashboard/pay-bill",
    icon: <CiMoneyBill size={24} />,
  },
  {
    name: "Education",
    path: "/dashboard/education",
    icon: <CiMoneyBill size={24} />,
  },
  {
    name: "Loan",
    path: "/dashboard/loan",
    icon: <CiMoneyBill size={24} />,
  },
  { name: "Loan", path: "/dashboard/loan", icon: <Building2 size={22} /> },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings size={22} />,
  },
];

const upgradeCard = {
  title: "Premium",
  desc: "Unlock premium features and get more benefits by upgrading your account.",
  icon: <FaCrown className="w-6 h-6 text-yellow-400" />,
  buttonText: "Upgrade Now",
};

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Navbar */}
      <header className="w-full fixed top-0 z-50 flex items-center justify-between bg-green-600 dark:bg-primary shadow-md px-4 md:px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-white"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Middle: Search (hidden on mobile) */}
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

        {/* Right: Icons + Theme + User */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Notification */}
          <div className="relative cursor-pointer">
            <Bell size={22} className="text-white" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              5
            </span>
          </div>

          {/* Theme Toggle */}
          <Theme />

          {/* User Info */}
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.photo || "https://i.pravatar.cc/40"}
                alt={user.name || "User"}
                className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">
                  {user.name || "Guest"}
                </p>
                <p className="text-xs text-gray-200">{user.phone || "N/A"}</p>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar (desktop & mobile overlay) */}
        <aside
          className={`fixed md:static top-0 left-0 z-40 h-full md:h-auto bg-white dark:bg-gray-800 shadow-lg p-4 transition-transform transform 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 w-56 md:w-64`}
        >
          <div className="hidden md:block text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Dashboard Overview
          </div>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition 
                  ${
                    isActive
                      ? "bg-purple-100 dark:bg-purple-900 border-r-4 border-purple-500 text-purple-600"
                      : "text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                  }`
                }
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            ))}

            {/* Logout */}
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-500">
              <LogOut size={22} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>

          {/* Upgrade Card (Desktop Only) */}
          <div className="hidden md:block mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
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
        <main className="flex-1 px-3 md:px-6 py-4 text-gray-800 dark:text-gray-200">
          <Outlet />
        </main>
      </div>

      {/* Bottom Nav (mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg flex justify-around py-2 border-t dark:border-gray-700">
        {menuItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive
                  ? "text-green-600 dark:text-purple-400"
                  : "text-gray-600 dark:text-gray-300"
              }`
            }
          >
            {item.icon}
            <span className="text-[11px]">{item.name.split(" ")[0]}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardLayout;
