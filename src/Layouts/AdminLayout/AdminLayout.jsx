import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import {
  Users,
  BarChart2,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { MdSupport } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Theme from "../../Components/theme/Theme";
import Logo from "../../Components/Navbar/Logo";
import { logout } from "../../redux/features/authSlice";

const menuItems = [
  { name: "Overview", path: "/admin/dashboard", icon: <BarChart2 size={22} /> },
  { name: "Users", path: "/admin/dashboard/users", icon: <Users size={22} /> },
  {
    name: "Transactions",
    path: "/admin/dashboard/transactions",
    icon: <CreditCard size={22} />,
  },
  {
    name: "Loan List",
    path: "/admin/dashboard/loans",
    icon: <FileText size={22} />,
  },
  {
    name: "Reports",
    path: "/admin/dashboard/reports",
    icon: <FileText size={22} />,
  },

  {
    name: "Merchant Requests",
    path: "/admin/dashboard/merchants",
    icon: <Users size={20} />,
  },
];

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const reduxUser = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(
    () => reduxUser || JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxUser) {
      setUser(reduxUser);
      localStorage.setItem("user", JSON.stringify(reduxUser));
    }
  }, [reduxUser]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* ===== Navbar ===== */}
      <header className="fixed top-0 w-full z-50 bg-green-600 dark:bg-purple-800 shadow-md flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Menu + Logo */}
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

        {/* Right: Notifications + Theme + User Info */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden">
            {" "}
            <Theme />
          </div>
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.photo || "https://i.ibb.co/5GzXkwq/user.png"}
                alt={user.name || "Admin"}
                className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
              />
              <div className="hidden sm:block text-white">
                <p className="text-sm font-semibold">{user.name || "Admin"}</p>
                <p className="text-xs text-gray-200">
                  Balance: ${user.balance || "0.00"}
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ===== Sidebar + Main ===== */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 z-40 h-full md:h-auto p-5 bg-white dark:bg-gray-800 shadow-lg w-56 sm:w-64 transform transition-transform duration-300 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="hidden md:block text-lg font-semibold mb-6 text-gray-700 dark:text-gray-200">
            Admin Panel
          </div>

          <nav className="space-y-2 overflow-y-auto max-h-[80vh] custom-scrollbar pt-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-green-100 dark:bg-purple-900 border-r-4 border-green-500 dark:border-purple-500 text-green-700 dark:text-purple-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            ))}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 mt-4 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900 transition"
            >
              <LogOut size={22} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-3 sm:px-5 md:px-8 py-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav (optional, can remove for admin) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg flex justify-around py-2">
        {menuItems.slice(0, 4).map((item) => (
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
            <span className="text-[11px] mt-0.5">
              {item.name.split(" ")[0]}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminLayout;
