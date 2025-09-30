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
import AddMoney from "../Pages/dashboard/AddMoney";
import MobileRecharge from "../Pages/dashboard/MobileRecharge";
import Error from "../Components/Error/Error";
import TransactionHistory from "../Pages/dashboard/TransactionHistory/TransactionHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: Register },

      {
        path: "Send_money",
        Component: SendMoney,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          { index: true, Component: DashboardHome },
          { path: "transaction", Component: Transaction },
          { path: "profile", Component: Profile },
          { path: "cashOut", Component: DashboardCashOut },
          { path: "addMoney", Component: AddMoney },
          { path: "mobileRecharge", Component: MobileRecharge },
          { path: "trans-history", Component: TransactionHistory },
        ],
      },
    ],
  },
]);
