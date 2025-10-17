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
import LiveChat from "../Components/liveChat/LiveChat";
import EducationFeeCalculator from "../Pages/dashboard/EducationFeeCalculator/EducationFeeCalculator";
import Report from "../Components/Report/Report";


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
      {path: "/report", Component:Report},

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
          { path: "banktransfer", Component: BankTransfer },
          { path: "mobileRecharge", Component: MobileRecharge },
          { path: "trans-history", Component: TransactionHistory },
          { path: "send-money", Component: SendMoney },
          { path: "pay-bill", Component: PayBill },
          {path: 'live-chat', Component: LiveChat},
          { path: "loan", Component: LoanPage },
          {path:"education",Component: EducationFeeCalculator},
        ],
      },
    ],
  },
  {
    path: "/admin/dashboard",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      { path: "users", Component: Users },
      { path: "transactions", Component: AdminTransactions },
      { path: "loans", Component: AdminLoanList },
    ],
  },
]);
