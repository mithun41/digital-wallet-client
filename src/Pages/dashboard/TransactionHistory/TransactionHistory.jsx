import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const TransactionHistory = () => {
  const user = useSelector((state) => state.auth.user);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  // Fetch transactions
  const fetchTransactions = async () => {
    if (!user?.phone) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
    } catch (err) {
      console.error("Fetch Transactions Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  // Filter
  const filteredTransactions = transactions.filter((t) => {
    if (filter === "send") return t.senderPhone === user.phone;
    if (filter === "receive") return t.receiverPhone === user.phone;
    return t.senderPhone === user.phone || t.receiverPhone === user.phone;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transaction
            </span>{" "}
            <span className="text-white/90">History</span>
          </h1>
          <p className="text-white/70 text-lg font-medium">
            Track and manage your digital payments easily
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "send", "receive"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === type
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white/20 text-white/80 hover:bg-white/30 backdrop-blur-lg"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Transaction list */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl relative overflow-hidden">
          {loading ? (
            <p className="text-center text-white/80">Loading...</p>
          ) : filteredTransactions.length === 0 ? (
            <p className="text-center text-white/80">No transactions found</p>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredTransactions.map((t, index) => {
                const isSender = t.senderPhone === user.phone;
                return (
                  <div
                    key={t._id}
                    className="group flex items-center justify-between p-6 border border-white/20 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 relative overflow-hidden"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center gap-6 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg ${
                          isSender
                            ? "bg-gradient-to-br from-red-500 via-pink-500 to-rose-600"
                            : "bg-gradient-to-br from-emerald-500 via-green-500 to-cyan-500"
                        }`}
                      >
                        {isSender ? "↗" : "↙"}
                      </div>
                      <div>
                        <h4 className="font-black text-white text-xl mb-1">
                          {isSender ? "💸 Sent Money" : "💰 Received Money"}
                        </h4>
                        <p className="text-white/70 text-sm mb-1">
                          {t.note || "No note"}
                        </p>
                        <p className="text-white/50 text-xs">
                          {format(new Date(t.createdAt), "PPpp")}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`font-black text-2xl relative z-10 ${
                        isSender ? "text-red-400" : "text-emerald-400"
                      }`}
                    >
                      {isSender ? "-" : "+"}৳{t.amount.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Summary stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-100/20 to-cyan-100/20 rounded-2xl backdrop-blur-xl border border-white/20">
            <div className="text-2xl mb-2">💸</div>
            <div className="font-black text-emerald-300 text-lg">
              ৳
              {transactions
                .filter((t) => t.receiverPhone === user.phone)
                .reduce((sum, t) => sum + t.amount, 0)
                .toLocaleString()}
            </div>
            <div className="text-emerald-200 font-semibold text-sm">
              Total Received
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-red-100/20 to-pink-100/20 rounded-2xl backdrop-blur-xl border border-white/20">
            <div className="text-2xl mb-2">💰</div>
            <div className="font-black text-red-300 text-lg">
              ৳
              {transactions
                .filter((t) => t.senderPhone === user.phone)
                .reduce((sum, t) => sum + t.amount, 0)
                .toLocaleString()}
            </div>
            <div className="text-red-200 font-semibold text-sm">Total Sent</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-2xl backdrop-blur-xl border border-white/20">
            <div className="text-2xl mb-2">📈</div>
            <div className="font-black text-blue-300 text-lg">
              {transactions.length}
            </div>
            <div className="text-blue-200 font-semibold text-sm">
              Total Transactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
