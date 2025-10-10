import React from "react";
import { NavLink, Outlet, Link } from "react-router";
import {
  Users,
  BarChart2,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";
import logo from "../../assets/logo2.png";



const menuItems = [
  { name: "Overview", path: "/admin", icon: <BarChart2 size={20} /> },
  { name: "Users", path: "/admin/dashboard/users", icon: <Users size={20} /> },
  {
    name: "Transactions",
    path: "/admin/dashboard/transactions",
    icon: <CreditCard size={20} />,
  },
  { name: "KYC Requests", path: "/admin/kyc", icon: <Shield size={20} /> },
  { name: "Reports", path: "/admin/reports", icon: <FileText size={20} /> },
  { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-4">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold dark:text-gray-200">Admin</span>
        </Link>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg ${
                  isActive
                    ? "bg-purple-100 dark:bg-purple-900 text-purple-600"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button className="mt-6 flex items-center gap-2 text-red-500 hover:text-red-600">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
