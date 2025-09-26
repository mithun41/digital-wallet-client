import React from "react";
import { Wallet, CreditCard, CheckCircle, Gift } from "lucide-react";

const DashboardUser = ({ user }) => {
  const actions = [
    { icon: <Wallet className="w-6 h-6 text-white" />, label: "Add Money", color: "from-blue-500 to-indigo-600" },
    { icon: <CreditCard className="w-6 h-6 text-white" />, label: "Send Money", color: "from-green-400 to-green-600" },
    { icon: <CheckCircle className="w-6 h-6 text-white" />, label: "View Statements", color: "from-purple-500 to-pink-500" },
    { icon: <Gift className="w-6 h-6 text-white" />, label: "Rewards", color: "from-yellow-400 to-orange-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome, <span className="text-indigo-600">{user?.name || "User"}</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Your personal wallet dashboard at a glance.
        </p>
      </div>

      {/* Balance Card */}
      <div className="max-w-md mx-auto mb-12 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl text-white shadow-lg text-center">
        <p className="text-lg">Current Balance</p>
        <h2 className="text-3xl font-bold mt-2">
          {user?.balance} {user?.currency}
        </h2>
        <p className="mt-2">Status: {user?.status}</p>
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform bg-gradient-to-r ${action.color}`}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-white/20">
              {action.icon}
            </div>
            <p className="text-white font-medium">{action.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions Placeholder */}
      <div className="p-6 bg-white rounded-3xl shadow-md max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        <p className="text-gray-500">Your latest transactions will appear here.</p>
      </div>
    </div>
  );
};

export default DashboardUser;
