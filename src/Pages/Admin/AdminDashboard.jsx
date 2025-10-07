// src/Pages/admin/AdminDashboard.jsx
import React from "react";
import {
  Users,
  DollarSign,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart,
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Fake Data
const summaryCards = [
  {
    title: "Total Users",
    value: "1,245",
    icon: <Users className="w-6 h-6" />,
    color: "blue",
  },
  {
    title: "Total Transactions",
    value: "$125,400",
    icon: <DollarSign className="w-6 h-6" />,
    color: "green",
  },
  {
    title: "Cash In",
    value: "$65,000",
    icon: <ArrowDownCircle className="w-6 h-6" />,
    color: "indigo",
  },
  {
    title: "Cash Out",
    value: "$60,400",
    icon: <ArrowUpCircle className="w-6 h-6" />,
    color: "red",
  },
];

// Chart Data
const chartData = [
  { name: "Add Money", value: 4000 },
  { name: "Send Money", value: 3000 },
  { name: "Cash Out", value: 2000 },
  { name: "Mobile Recharge", value: 1000 },
];
const COLORS = ["#6366F1", "#22C55E", "#EF4444", "#F59E0B"];

// Recent Transactions (Dummy)
const transactions = [
  {
    id: 1,
    user: "John Doe",
    type: "Send Money",
    amount: "$250",
    status: "Completed",
  },
  {
    id: 2,
    user: "Alice Smith",
    type: "Add Money",
    amount: "$500",
    status: "Pending",
  },
  {
    id: 3,
    user: "David Kim",
    type: "Cash Out",
    amount: "$100",
    status: "Completed",
  },
  {
    id: 4,
    user: "Sophia Lee",
    type: "Mobile Recharge",
    amount: "$20",
    status: "Completed",
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {card.title}
              </h2>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {card.value}
              </p>
            </div>
            <div
              className={`p-3 rounded-full bg-${card.color}-100 text-${card.color}-600 dark:bg-${card.color}-900 dark:text-${card.color}-400`}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-md rounded-lg p-5">
          <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <BarChart className="w-5 h-5" /> Transactions Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Transactions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-5">
          <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="p-3">User</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-3">{tx.user}</td>
                    <td className="p-3">{tx.type}</td>
                    <td className="p-3 font-semibold">{tx.amount}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tx.status === "Completed"
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
