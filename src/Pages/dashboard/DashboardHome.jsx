import {
  ArrowDownCircle,
  ArrowDownNarrowWide,
  FileText,
  QrCode,
  Send,
  Star,
  Wallet,
  PlusCircle,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Top Cards Config
const topCards = [
  { title: "Wallet Balance", value: "$5,000.00", change: "+12.5%", color: "blue", icon: <Wallet className="w-5 h-5" /> },
  { title: "Send Money", value: "$1,250.00", change: "+5.4%", color: "indigo", icon: <Send className="w-5 h-5" /> },
  { title: "Receive Money", value: "$3,200.00", change: "-2.1%", color: "green", icon: <ArrowDownCircle className="w-5 h-5" /> },
  { title: "Loyalty Points", value: "480", change: "+3.9%", color: "purple", icon: <Star className="w-5 h-5" /> },
];

// Quick Actions
const quickActions = [
  { name: "Send Money", path: "/dashboard/sendMoney", icon: <Send className="h-6 w-6" />, color: "indigo" },
  { name: "Add Money", path: "/dashboard/addMoney", icon: <PlusCircle className="h-6 w-6" />, color: "green" },
  { name: "Pay Bill", path: "/dashboard/payBill", icon: <FileText className="h-6 w-6" />, color: "purple" },
  { name: "QR Scan", path: "/dashboard/qrScan", icon: <QrCode className="h-6 w-6" />, color: "red" },
];

// Transactions
const transactions = [
  { type: "Money Receive", desc: "From John Doe", time: "Friday, 2:30 PM", amount: "+$250.00", status: "Complete", color: "green", icon: <ArrowDownNarrowWide className="w-5 h-5" /> },
  { type: "Money Sent", desc: "To Alice Smith", time: "Thursday, 4:10 PM", amount: "-$120.00", status: "Pending", color: "red", icon: <Send className="w-5 h-5" /> },
  { type: "Bill Payment", desc: "Electricity Bill", time: "Thursday, 10:00 AM", amount: "-$90.00", status: "Complete", color: "purple", icon: <FileText className="w-5 h-5" /> },
  { type: "QR Payment", desc: "Coffee Shop", time: "Wednesday, 6:45 PM", amount: "-$15.00", status: "Complete", color: "blue", icon: <QrCode className="w-5 h-5" /> },
];

// My Cards
const myCards = [
  { name: "Primary Card", number: "**** **** **** 4532", holder: "Sarah Johnson", expiry: "12/26", gradient: "from-gray-800 to-gray-900", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" },
  { name: "Global Payments", number: "**** **** **** 9876", holder: "Monir Hoss", expiry: "09/27", gradient: "from-indigo-600 to-purple-700", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "Travel Wallet", number: "**** **** **** 1111", holder: "Paynate Ltd", expiry: "05/28", gradient: "from-teal-500 to-emerald-600", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" },
];

const DashboardHome = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {topCards.map((card) => (
          <div key={card.title} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-4">
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 bg-${card.color}-100 dark:bg-${card.color}-900 text-${card.color}-600 dark:text-${card.color}-400 rounded-lg`}>
                {card.icon}
              </div>
              <span className={`text-${card.change.includes("+") ? "green" : "red"}-500 text-sm font-medium`}>
                {card.change}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 px-1">{card.value}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm px-1">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions + Balance */}
      <div className="grid grid-cols-1 mb-8 lg:grid-cols-6 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.name} to={action.path} className="bg-white dark:bg-gray-800 p-3 text-center flex flex-col items-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-md transition ">
                <div className={`bg-${action.color}-100 dark:bg-${action.color}-900 text-${action.color}-600 dark:text-${action.color}-400 py-3 px-2 mb-2 rounded-md`}>
                  {action.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">{action.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Balance Card */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r rounded-lg from-indigo-500 to-purple-600 shadow-md p-4 h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              <span className="p-2 text-white">
                <Wallet />
              </span>
            </div>
            <p className="text-white/80 mb-2 text-md">Available Balance</p>
            <div className="text-white font-bold text-2xl mb-4">
              <span className="text-yellow-300">$5,000.00</span>
            </div>
            <div className="flex gap-2">
              <Link
                to="/dashboard/addMoney"
                className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center"
              >
                Add Money
              </Link>

              <Link
                to="/dashboard/cashOut"
                className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center"
              >
                Cashout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions + My Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Recent Transactions</h2>
            <button className="text-blue-500 underline cursor-pointer hover:no-underline text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`bg-${tx.color}-200 dark:bg-${tx.color}-900 text-${tx.color}-600 dark:text-${tx.color}-400 p-2 rounded-full`}>
                    {tx.icon}
                  </div>
                  <div className="leading-tight">
                    <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{tx.type}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.desc}</p>
                    <span className="text-xs text-gray-400">{tx.time}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h2 className={`text-base font-bold text-${tx.color}-600`}>{tx.amount}</h2>
                  <p className={`bg-${tx.color}-200 dark:bg-${tx.color}-900 text-${tx.color}-600 dark:text-${tx.color}-400 px-3 py-0.5 rounded-lg text-xs font-medium`}>
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Cards */}
        <div className="lg:col-span-2">
          <div className="rounded-lg shadow-md p-4 h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">My Cards</h2>
              <span className="text-blue-500 cursor-pointer hover:underline">+ Add Card</span>
            </div>
            <div className="flex flex-col gap-4">
              {myCards.map((card, i) => (
                <div key={i} className={`bg-gradient-to-r ${card.gradient} rounded-xl p-4 shadow-lg text-white relative`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm">{card.name}</span>
                    <img src={card.logo} alt="Card Logo" className="h-5" />
                  </div>
                  <div className="tracking-widest text-lg font-semibold mb-6">{card.number}</div>
                  <div className="flex justify-between items-center text-sm">
                    <span>{card.holder}</span>
                    <span>{card.expiry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
