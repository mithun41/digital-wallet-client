import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Search } from "lucide-react";

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/admin",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const txns = data.transactions || [];
      setTransactions(txns);
      setFilteredTransactions(txns);
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to fetch transactions",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Filter transactions by phone number
  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = transactions.filter(
      (t) =>
        t.senderPhone?.toLowerCase().includes(lower) ||
        t.receiverPhone?.toLowerCase().includes(lower)
    );
    setFilteredTransactions(filtered);
  }, [search, transactions]);

  // Handle transaction actions (approve, reject, refund)
  const handleAction = async (transactionId, action) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `https://digital-wallet-server-tau.vercel.app/api/transactions/${transactionId}/${action}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Swal.fire("Success", `Transaction ${action}d successfully`, "success");
      fetchTransactions(); // refresh list
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || `Failed to ${action} transaction`,
        "error"
      );
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-600 dark:text-gray-300">
        Loading transactions...
      </div>
    );

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">All Transactions</h2>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Search by phone number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
              focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-purple-500 
              shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left rounded-lg shadow bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Sender</th>
              <th className="p-3">Receiver</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <tr
                  key={t._id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3">{t.senderPhone || "-"}</td>
                  <td className="p-3">{t.receiverPhone || "-"}</td>
                  <td className="p-3 font-semibold">৳{t.amount}</td>
                  <td className="p-3 capitalize">{t.type}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        t.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          : t.status === "success"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {new Date(t.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 flex flex-wrap gap-2">
                    {t.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleAction(t._id, "approve")}
                          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(t._id, "reject")}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {t.status === "success" && t.type === "sendMoney" && (
                      <button
                        onClick={() => handleAction(t._id, "refund")}
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                      >
                        Refund
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTransactions;
