import React from "react";
import { User, Wallet, Activity, CheckCircle, TrendingUp } from "lucide-react";

const DashboardAdmin = () => {
  const stats = [
    { icon: <User className="w-6 h-6 text-white" />, label: "Active Users", value: "12,450", color: "from-blue-500 to-indigo-600" },
    { icon: <Wallet className="w-6 h-6 text-white" />, label: "Wallets Created", value: "3,875", color: "from-green-400 to-green-600" },
    { icon: <Activity className="w-6 h-6 text-white" />, label: "Transactions", value: "25,320", color: "from-yellow-400 to-yellow-500" },
    { icon: <CheckCircle className="w-6 h-6 text-white" />, label: "Success Rate", value: "99.9%", color: "from-purple-500 to-pink-500" },
  ];

  const activities = [
    { title: "New User Signups", value: "+320", icon: <User className="w-5 h-5 text-indigo-600" />, color: "bg-indigo-100" },
    { title: "Completed Transactions", value: "+1,024", icon: <CheckCircle className="w-5 h-5 text-green-600" />, color: "bg-green-100" },
    { title: "Revenue Growth", value: "+8.5%", icon: <TrendingUp className="w-5 h-5 text-yellow-600" />, color: "bg-yellow-100" },
    { title: "Pending Actions", value: "12", icon: <Activity className="w-5 h-5 text-red-600" />, color: "bg-red-100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome Back to <span className="text-indigo-600">PayMate Dashboard</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Monitor platform performance and gain insights at a glance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform bg-gradient-to-r ${stat.color}`}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-white/20">
              {stat.icon}
            </div>
            <div>
              <p className="text-white font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recent Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow ${activity.color}`}
          >
            <div className="p-3 rounded-full bg-white/50 mr-3">
              {activity.icon}
            </div>
            <div>
              <p className="text-gray-700 font-medium">{activity.title}</p>
              <p className="text-lg font-bold text-gray-900">{activity.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl text-white shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Boost Your Platform</h3>
        <p className="mb-4 text-lg">
          Explore analytics, track performance, and maximize user engagement.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default DashboardAdmin;
