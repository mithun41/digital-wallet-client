import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };
  return (
    <div className="flex gap-10 min-h-[calc(100vh-100px)] w-12/12 mx-auto relative">
      <div className=" w-2/12 bg-gray-700 py-10">
        <div className=" flex-col gap-5 text-white text-center px-5 xl:px-10  hidden lg:flex">
          <Link
            to="/dashboard"
            className="hover:text-gray-200 px-5 py-1 bg-[#155DFC] rounded block"
          >
            Home
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
<<<<<<< HEAD
            className={`lg:hidden  z-10   fixed bg-gray-700/50 backdrop-blur p-5 rounded-2xl  flex flex-col gap-5     transition-all duration-300     ${menuBar
              ? "left-10 top-38 opacity-100"
              : "-left-20 top-38 opacity-0"
              }  `}
=======
            className={`lg:hidden  z-10   fixed bg-gray-700/50 backdrop-blur p-5 rounded-2xl  flex flex-col gap-5     transition-all duration-300     ${
              menuBar
                ? "left-10 top-38 opacity-100"
                : "-left-20 top-38 opacity-0"
            }  `}
>>>>>>> da7072d76b733ed89529a5135ff988d10c0475c3
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
      </div>
      <div className="flex-1 flex items-center justify-center mt-8 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;