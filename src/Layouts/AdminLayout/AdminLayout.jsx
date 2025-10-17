import React, { useEffect, useState } from "react";
import { NavLink, Outlet, Link } from "react-router";
import {
  Users,
  BarChart2,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo2.png";
import Theme from "../../Components/theme/Theme";
import { MdSupport } from "react-icons/md";

const menuItems = [
  { name: "Overview", path: "/admin/dashboard", icon: <BarChart2 size={20} /> },
  { name: "Users", path: "/admin/dashboard/users", icon: <Users size={20} /> },
  {
    name: "Transactions",
    path: "/admin/dashboard/transactions",
    icon: <CreditCard size={20} />,
  },
  {
    name: "Loan List",
    path: "/admin/dashboard/loans",
    icon: <FileText size={20} />,
  },
  { name: "Reports", path: "/admin/reports", icon: <FileText size={20} /> },
  { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  { name: "Support", path: "/dashboard/live-chat", icon: <MdSupport size={20} /> },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduxUser = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(() => {
    return reduxUser || JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    if (reduxUser) {
      setUser(reduxUser);
      localStorage.setItem("user", JSON.stringify(reduxUser)); // persist
    }
  }, [reduxUser]);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed lg:static top-0 left-0 z-40 bg-white dark:bg-gray-800 shadow-md transition-all duration-300 flex flex-col
        ${sidebarOpen ? "w-64" : "w-20"} 
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        h-screen`}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="flex items-center gap-2 overflow-hidden transition-all"
          >
            <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
            {sidebarOpen && (
              <span className="text-xl font-bold dark:text-gray-200">
                Admin
              </span>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 dark:text-gray-300 hidden lg:block"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-gray-600 dark:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu + Logout */}
        <div className="flex flex-col justify-start flex-1 overflow-y-auto p-3">
          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                onClick={() => setMobileOpen(false)} // mobile এ ক্লিক করলে বন্ধ হবে
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-purple-100 dark:bg-purple-900 text-purple-600"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`
                }
              >
                {item.icon}
                {sidebarOpen && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>

          {/* Logout */}
          <button className="flex items-center gap-2 mt-4 text-red-500 hover:text-red-600">
            <LogOut size={20} /> {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* ===== Overlay (Mobile) ===== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* ===== Main Content ===== */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Navbar */}
        <nav className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Admin Dashboard
            </h1>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <Theme></Theme>
            <div className="hidden sm:block text-right">
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {user?.name || "Admin User"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Balance: ${user?.balance || "0.00"}
              </p>
            </div>
            <img
              src={user?.photo || "https://i.ibb.co/5GzXkwq/user.png"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
            />
          </div>
        </nav>

        {/* Main Page Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
