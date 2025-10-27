import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import {
  Bell,
  User,
  LogOut,
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
  BanknoteArrowUp,
  BanknoteArrowDown,
} from "lucide-react";
import { FaCrown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Theme from "../../Components/theme/Theme";
import { CiMoneyBill } from "react-icons/ci";
import Logo from "../../Components/Navbar/Logo";
import Notifications from "../../Pages/dashboard/Notifications/Notifications";
import { logout } from "../../redux/features/authSlice";
import Swal from "sweetalert2";
import axiosSecure from "../../axiosSecure/useAxiosSecure";

// Sidebar menu
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
    name: "Bank Transfer",
    path: "/dashboard/banktransfer",
    icon: <BanknoteArrowUp size={22} />,
  },
  {
    name: "Pay Bill",
    path: "/dashboard/pay-bill",
    icon: <CiMoneyBill size={24} />,
  },
  {
    name: "Education",
    path: "/dashboard/education",
    icon: <Building2 size={24} />,
  },
  {
    name: "Loan",
    path: "/dashboard/loan",
    icon: <BanknoteArrowDown size={24} />,
  },
];

// Upgrade card
const upgradeCard = {
  title: "Become A Merchant",
  desc: "Unlock premium features and get more benefits by upgrading your account.",
  icon: <FaCrown className="w-6 h-6 text-yellow-400" />,
  buttonText: "Upgrade Now",
};

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const transactions = useSelector((state) => state.transaction?.transactions);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [upgradeStatus, setUpgradeStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch upgrade request status for this user
  useEffect(() => {
    const fetchUpgradeStatus = async () => {
      if (!user?.phone) return;
      try {
        const res = await axiosSecure.get("/api/user/upgrade-requests");
        const userRequest = res.data.find((req) => req.phone === user.phone);
        if (userRequest) setUpgradeStatus(userRequest.status);
        else setUpgradeStatus(null);
      } catch (err) {
        console.error("Error fetching upgrade requests:", err);
      }
    };
    fetchUpgradeStatus();
  }, [user?.phone]);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Request merchant upgrade
  const handleUpgrade = async () => {
    if (!user?.name || !user?.phone || !user?.photo) {
      Swal.fire("Error", "Missing user info. Please log in again.", "error");
      return;
    }

    if (upgradeStatus) {
      Swal.fire("Info", "You have already sent a request.", "info");
      return;
    }

    try {
      const payload = {
        name: user.name,
        phone: user.phone,
        photo: user.photo,
      };
      const res = await axiosSecure.post("/api/user/applyupgrade", payload);
      Swal.fire(
        "Success",
        res.data.message || "Request sent successfully!",
        "success"
      );
      setUpgradeStatus("pending");
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-green-600 dark:bg-purple-800 shadow-md flex items-center justify-between px-4 md:px-8 py-3">
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

        <div className="flex items-center gap-4 md:gap-6">
          <Notifications transactions={transactions || []} />
          <Theme />
          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.photo || "https://i.pravatar.cc/40"}
                alt={user.name}
                className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
              />
              <div className="hidden sm:block text-white">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-200">{user.phone}</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar + Main */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 z-40 h-full md:h-auto p-5 bg-white dark:bg-gray-800 shadow-lg w-56 sm:w-64 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="hidden md:block text-lg font-semibold mb-6 text-gray-700 dark:text-gray-200">
            Dashboard Overview
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
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 mt-4 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900 transition"
            >
              <LogOut size={22} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>

          {/* Upgrade Card */}
          <div className="hidden md:block mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
            <div className="flex flex-col items-center gap-2 mb-2">
              {upgradeCard.icon}
              <h4 className="text-lg text-black font-bold">
                {upgradeCard.title}
              </h4>
            </div>
            <p className="text-xs text-white/90 mb-3">{upgradeCard.desc}</p>

            {upgradeStatus === "approved" ? (
              <p className="w-full py-2 text-center bg-green-500 text-white font-semibold text-sm rounded-lg">
                You are a Merchant
              </p>
            ) : upgradeStatus === "pending" ? (
              <p className="w-full py-2 text-center bg-yellow-500 text-white font-semibold text-sm rounded-lg">
                Request Sent (Pending)
              </p>
            ) : (
              <button
                onClick={handleUpgrade}
                className="w-full py-2 cursor-pointer bg-white text-blue-700 font-semibold text-sm rounded-lg hover:bg-black hover:text-white transition"
              >
                {upgradeCard.buttonText}
              </button>
            )}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 px-3 sm:px-5 md:px-8 py-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg flex justify-around py-2">
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
            <span className="text-[11px] mt-0.5">
              {item.name.split(" ")[0]}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardLayout;
