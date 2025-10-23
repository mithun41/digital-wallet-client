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
import AddMoneyBlog from "../Pages/Blog/addMoney/AddMoneyBlog";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Users from "../Pages/Admin/Users";
import AdminTransactions from "../Pages/Admin/AdminTransactions";
import PayBill from "../Pages/dashboard/PayBill";
import DigitalWalletBlog from "../Components/Blogs/DigitalWalletBlog";
import FeatureDetails from "../Pages/FeatureDetails/FeatureDetails";
import AboutSection from "../Pages/AboutSection/AboutSection";
import LoanPage from "../Pages/dashboard/Loan/LoanPage";
import AdminLoanList from "../Pages/Admin/AdminLoanList";
import BankTransfer from "../Pages/dashboard/BankTransfer";
import SendMoneyBlog from "../Pages/sendMoneyBlog/SendMoneyBlog";
import AddMoneyBlogPages from "../Pages/AddMoneyBlogPages/AddMoneyBlogPages";
import WalletBlogPage from "../Pages/WalletBlogPage/WalletBlogPage";
import RewardsSection from "../Pages/RewardsSection/RewardsSection";
import EducationFeeCalculator from "../Pages/dashboard/EducationFeeCalculator/EducationFeeCalculator";
import Report from "../Components/Report/Report";
import PrivetRoute from "../privetRoute/PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "blogs", Component: DigitalWalletBlog },
      { path: "signup", Component: Register },
      { path: "transaction", Component: Transaction },
      { path: "add-money-blog", Component: AddMoneyBlog },
      { path: "feature/:id", Component: FeatureDetails },
      { path: "about", Component: AboutSection },
      { path: "feature/:id", Component: FeatureDetails },
      { path: "about", Component: AboutSection },
      { path: "rewards", Component: RewardsSection },
      { path: "send_money", Component: SendMoneyBlog },
      { path: "/add_money", Component: AddMoneyBlogPages },
      { path: "/wallet", Component: WalletBlogPage },
      { path: "/report", Component: Report },

      {
        path: "/dashboard",
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
          { index: true, element: <PrivetRoute><DashboardHome></DashboardHome></PrivetRoute> },
          { path: "profile", element: <PrivetRoute><Profile></Profile></PrivetRoute> },
          { path: "cashout", element: <PrivetRoute><CashOut></CashOut></PrivetRoute>  },
          { path: "cashout/confirm", element: <PrivetRoute><CashoutStep2></CashoutStep2></PrivetRoute> },
          { path: "addMoney", element: <PrivetRoute><AddMoney></AddMoney></PrivetRoute> },
          { path: "mycard", element: <PrivetRoute><MyCard></MyCard></PrivetRoute> },
          { path: "banktransfer", element: <PrivetRoute><BankTransfer></BankTransfer></PrivetRoute> },
          { path: "mobileRecharge", element: <PrivetRoute><MobileRecharge></MobileRecharge></PrivetRoute> },
          { path: "trans-history", element: <PrivetRoute><TransactionHistory></TransactionHistory></PrivetRoute>},
          { path: "send-money", element: <PrivetRoute><SendMoney></SendMoney></PrivetRoute> },
          { path: "pay-bill", element: <PrivetRoute><PayBill></PayBill></PrivetRoute> },
          { path: "loan", element: <PrivetRoute><LoanPage></LoanPage></PrivetRoute> },
          { path: "education", element: <PrivetRoute><EducationFeeCalculator></EducationFeeCalculator></PrivetRoute> },
        ],
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <PrivetRoute><AdminLayout></AdminLayout></PrivetRoute>,
    children: [
      {
        index: true,
       element: <PrivetRoute><AdminDashboard></AdminDashboard></PrivetRoute>
      },
      { path: "users", element: <PrivetRoute><Users></Users></PrivetRoute>  },
      { path: "transactions", element: <PrivetRoute><AdminTransactions></AdminTransactions></PrivetRoute> },
      { path: "loans", element: <PrivetRoute><AdminLoanList></AdminLoanList></PrivetRoute> },
    ],
  },
]);
