import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { Link, Outlet, useNavigate } from "react-router";

 
const DashboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => setMenuBar(!menuBar);
const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const menuItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Add Money", path: "/dashboard/AddMoney" },
    { name: "Mobile Recharge", path: "/dashboard/MobileRecharge" },
    { name: "Transaction", path: "/dashboard/transaction" },
    { name: "CashOut", path: "/dashboard/cashOut" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full mx-auto relative bg-gray-50 mb-10">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-blue-600 text-yellow-200 font-bold py-12 px-6 ">
        <h2 className="text-2xl font-bold mb-10 text-center">User Dashboard</h2>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="mb-4 px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition-all font-medium shadow-md text-center"
          >
            {item.name}
          </Link>
<<<<<<< HEAD
        ))}
        <button onClick={handleLogout} className="mt-auto px-6 py-3 bg-red-500 rounded-xl hover:bg-red-600 transition-all shadow-md font-medium">
          LogOut
        </button>
=======
          <Link
            to="/dashboard/profile"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            Profile
          </Link>

          <Link
            to="/dashboard/AddMoney"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            Add Money
          </Link>

          <Link
            to="/dashboard/MobileRecharge"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            Mobile Recharge
          </Link>

          <Link
            to="/dashboard/transaction"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            Transaction
          </Link>

          <Link
            to="/dashboard/cashOut"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            CashOut
          </Link>
          <button className="hover:text-gray-200 cursor-pointer px-5 py-1 bg-[#155DFC] rounded block">
            LogOut
          </button>
        </div>

        {/* mobile */}
        <div onClick={handleMenuBar}>
          <div>
            {menuBar ? (
              <ImCross className="fixed top-20 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 ease-linear bg-[#155DFC] h-16 w-16 ml-10 p-3 rounded-full left-2 z-50 flex lg:hidden" />
            ) : (
              <CiMenuBurger className="fixed top-20 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 ease-linear bg-[#155DFC] h-16 w-16 ml-10 p-3 rounded-full left-2 z-50 flex lg:hidden" />
            )}
          </div>
          <div
            className={`lg:hidden  z-10   fixed bg-gray-700/50 backdrop-blur p-5 rounded-2xl  flex flex-col gap-5     transition-all duration-300     ${menuBar
              ? "left-10 top-38 opacity-100"
              : "-left-20 top-38 opacity-0"
              }  `}
            className={`lg:hidden  z-10   fixed bg-gray-700/50 backdrop-blur p-5 rounded-2xl  flex flex-col gap-5     transition-all duration-300     ${menuBar
                ? "left-10 top-38 opacity-100"
                : "-left-20 top-38 opacity-0"
              }  `}
          >
            <Link
              to="/dashboard"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              Home
            </Link>
            <Link
              to="/dashboard/transaction"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              Transaction
            </Link>
            <Link
              to="/dashboard/profile"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              Profile
            </Link>
            <Link
              to="/dashboard/AddMoney"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              Add Money
            </Link>

            <Link
              to="/dashboard/MobileRecharge"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              Mobile Recharge
            </Link>
            <Link
              to="/dashboard/cashOut"
              className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
            >
              CashOut
            </Link>
            <button className="hover:text-gray-200 cursor-pointer px-5 py-1 bg-[#155DFC] rounded block">
              LogOut
            </button>
          </div>
        </div>
>>>>>>> 45594902a381252228550d704f3b73ee536094b1
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden fixed top-6 left-4 z-50">
        {menuBar ? (
          <ImCross
            className="cursor-pointer text-white bg-indigo-600 p-3 rounded-full shadow-lg"
            size={40}
            onClick={handleMenuBar}
          />
        ) : (
          <CiMenuBurger
            className="cursor-pointer text-white bg-indigo-600 p-3 rounded-full shadow-lg"
            size={40}
            onClick={handleMenuBar}
          />
        )}
      </div>

      <div
        className={`lg:hidden fixed top-20 left-4 w-64 bg-gradient-to-b from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl flex flex-col gap-4 transition-all duration-300 ${
          menuBar ? "opacity-100 translate-x-0" : "-translate-x-80 opacity-0"
        }`}
      >
        <h2 className="text-xl font-bold text-white mb-4 text-center">
          User Dashboard
        </h2>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={handleMenuBar}
            className="px-4 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition-all font-medium text-center"
          >
            {item.name}
          </Link>
        ))}
        <button onClick={handleLogout} className="mt-auto px-4 py-3 bg-red-500 rounded-xl hover:bg-red-600 transition-all font-medium text-white">
          LogOut
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 mt-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
