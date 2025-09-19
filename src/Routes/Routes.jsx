import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import SendMoney from "../Pages/sendMoney/SendMoney";
import DashboardLayout from "../Layouts/dashboardLayout/DashboardLayout";
import DashboardHome from "../Pages/dashboard/DashboardHome";
import Transaction from "../Pages/dashboard/Transaction";
import Profile from "../Pages/dashboard/Profile";
import DashboardCashOut from "../Pages/dashboard/DashboardCashOut";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: Register },
      {
        path: 'Send_money', Component: SendMoney
      },
      {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: DashboardHome
          },
          {
            path: '/dashboard/transaction',
            Component: Transaction
          },
          {
            path: '/dashboard/Profile',
            Component: Profile
          },
          {
            path: '/dashboard/cashOut',
            Component: DashboardCashOut
          }
        ]
      }
    ],
  },
]);
