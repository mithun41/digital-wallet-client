// src/Pages/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
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
import axiosSecure from "../../axiosSecure/useAxiosSecure";

const COLORS = ["#22C55E", "#6366F1", "#EF4444"]; // Cash In, Send, Cash Out

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, transactionsRes] = await Promise.all([
          axiosSecure.get("/api/admin/users"),
          axiosSecure.get("/api/transactions/admin"),
        ]);
        setUsers(
          Array.isArray(usersRes.data)
            ? usersRes.data
            : usersRes.data.users || []
        );
        setTransactions(
          Array.isArray(transactionsRes.data)
            ? transactionsRes.data
            : transactionsRes.data.transactions || []
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosSecure]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-600 dark:text-gray-300">
        Loading dashboard...
      </div>
    );

  const totalUsers = users.length;
  const cashIn = transactions
    .filter((t) => t.type === "addMoney")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const sendMoney = transactions
    .filter((t) => t.type === "sendMoney")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const cashOut = transactions
    .filter((t) => t.type === "cashout")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const summaryCards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <Users className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Cash In",
      value: `৳${cashIn}`,
      icon: <ArrowDownCircle className="w-6 h-6" />,
      color: "green",
    },
    {
      title: "Send Money",
      value: `৳${sendMoney}`,
      icon: <DollarSign className="w-6 h-6" />,
      color: "indigo",
    },
    {
      title: "Cash Out",
      value: `৳${cashOut}`,
      icon: <ArrowUpCircle className="w-6 h-6" />,
      color: "red",
    },
  ];

  const chartData = [
    { name: "Cash In", value: cashIn },
    { name: "Send Money", value: sendMoney },
    { name: "Cash Out", value: cashOut },
  ];

  const lastTransactions = [...transactions]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center justify-between transition-colors duration-300"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {card.title}
              </h2>
              <p className="text-2xl font-bold">{card.value}</p>
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
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition-colors duration-300">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
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
              <Tooltip formatter={(value) => `৳${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Transactions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition-colors duration-300">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
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
                {lastTransactions.map((tx, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="p-3">{tx.senderName}</td>
                    <td className="p-3">
                      {tx.type === "addMoney"
                        ? "Cash In"
                        : tx.type === "sendMoney"
                        ? "Send Money"
                        : "Cash Out"}
                    </td>
                    <td className="p-3 font-semibold">৳{tx.amount}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tx.status === "success"
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {tx.status === "success" ? "Completed" : "Pending"}
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
