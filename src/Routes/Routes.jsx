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
import AddMoney from "../Pages/dashboard/AddMoney";
import MobileRecharge from "../Pages/dashboard/MobileRecharge";
import MyCard from "../Pages/dashboard/MyCard";
import Error from "../Components/Error/Error";
import TransactionHistory from "../Pages/dashboard/TransactionHistory/TransactionHistory";
import CashOut from "../Pages/cashOut/CashOut";
import CashoutStep2 from "../Pages/cashOut/CashoutStep2";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signup", Component: Register },
      { path: "transaction", Component: Transaction },

      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, Component: DashboardHome },
          { path: "profile", Component: Profile },
          { path: "cashout", Component: CashOut },
          { path: "cashout/confirm", Component: CashoutStep2 },
          { path: "addMoney", Component: AddMoney },
          { path: "mycard", Component: MyCard },
          { path: "mobileRecharge", Component: MobileRecharge },
          { path: "trans-history", Component: TransactionHistory },
          { path: "send-money", Component: SendMoney },
        ],
      },
    ],
  },
]);
