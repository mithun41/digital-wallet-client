import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const AddMoney = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // শুধু addMoney filter
      const addMoneyTxns = res.data.filter((t) => t.type === "addMoney");

      // debug log
      console.log("All Transactions:", res.data);
      console.log("Add Money Transactions:", addMoneyTxns);

      setTransactions(addMoneyTxns);
    } catch (err) {
      console.error("Fetch AddMoney Transactions Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Add Money Transactions
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : transactions.length === 0 ? (
        <p className="text-gray-400">No add money transactions found</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((t) => {
            const amount = Number(t.amount) || 0; // safe number
            const method = t.method || "Unknown";
            const details = t.details || "N/A";
            const status = t.status || "pending";
            const createdAt = t.createdAt
              ? format(new Date(t.createdAt), "MMM dd, yyyy 'at' hh:mm a")
              : "Unknown";

            return (
              <div
                key={t._id}
                className="flex justify-between items-center bg-gray-800/50 p-4 rounded-xl border border-gray-700"
              >
                <div>
                  <p className="font-semibold text-lg">
                    ৳{amount.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Method: {method} | Details: {details}
                  </p>
                  <p className="text-gray-400 text-sm">
                    ID: {t.transactionId || "N/A"}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold ${
                      status === "success"
                        ? "text-emerald-400"
                        : status === "pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {status.toUpperCase()}
                  </p>
                  <p className="text-gray-400 text-sm">{createdAt}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddMoney;
