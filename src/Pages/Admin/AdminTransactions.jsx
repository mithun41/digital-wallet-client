import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setTransactions(data.transactions || []);
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
    return <p className="text-center mt-10">Loading transactions...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Transactions</h2>
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
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
          {transactions.map((t) => (
            <tr key={t._id} className="border-t dark:border-gray-700">
              <td className="p-3">{t.senderPhone || "-"}</td>
              <td className="p-3">{t.receiverPhone || "-"}</td>
              <td className="p-3">${t.amount}</td>
              <td className="p-3">{t.type}</td>
              <td className="p-3">{t.status || "Pending"}</td>
              <td className="p-3">{new Date(t.createdAt).toLocaleString()}</td>
              <td className="p-3 flex gap-2">
                {t.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleAction(t._id, "approve")}
                      className="px-2 py-1 bg-green-500 text-white rounded text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(t._id, "reject")}
                      className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                    >
                      Reject
                    </button>
                  </>
                )}
                {t.status === "success" && t.type === "sendMoney" && (
                  <button
                    onClick={() => handleAction(t._id, "refund")}
                    className="px-2 py-1 bg-yellow-500 text-white rounded text-sm"
                  >
                    Refund
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransactions;
