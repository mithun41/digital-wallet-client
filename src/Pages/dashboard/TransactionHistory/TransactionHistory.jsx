import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";
// Import icons (you'd typically use a library like 'lucide-react' or 'react-icons')
// For this example, I'll use simple emojis/unicode, but recommend using an icon library.

// --- UI Utility Components (Optional but good practice) ---

const StatCard = ({ icon, title, value, colorClass }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50 transition-all duration-300 hover:bg-gray-700/50">
    <div className={`text-3xl mb-3 ${colorClass}`}>{icon}</div>
    <div className="text-xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-gray-400 font-medium text-sm tracking-wider uppercase">
      {title}
    </div>
  </div>
);

// --- Main Component ---

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
      const res = await axios.get(
        "https://digital-wallet-server-tau.vercel.app/api/transactions",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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

  // Filtered transactions (use useMemo for performance)
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      if (filter === "send") return t.senderPhone === user.phone;
      if (filter === "receive") return t.receiverPhone === user.phone;
      return t.senderPhone === user.phone || t.receiverPhone === user.phone;
    });
  }, [transactions, filter, user]);

  // Calculate summary stats (use useMemo for performance)
  const summaryStats = useMemo(() => {
    const received = transactions
      .filter((t) => t.receiverPhone === user?.phone)
      .reduce((sum, t) => sum + t.amount, 0);

    const sent = transactions
      .filter((t) => t.senderPhone === user?.phone)
      .reduce((sum, t) => sum + t.amount, 0);

    return { received, sent, total: transactions.length };
  }, [transactions, user]);

  return (
    // Professional Dark Theme: Deep blue/black background
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2">
            Transaction <span className="text-cyan-400">Ledger</span>
          </h1>
          <p className="text-gray-400 text-lg font-normal">
            A secure and detailed overview of your digital wallet activity.
          </p>
        </div>

        {/* Summary Stats - Moved to the top for better visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon="⬇️"
            title="Total Received"
            value={`৳${summaryStats.received.toLocaleString()}`}
            colorClass="text-emerald-400"
          />
          <StatCard
            icon="⬆️"
            title="Total Sent"
            value={`৳${summaryStats.sent.toLocaleString()}`}
            colorClass="text-red-400"
          />
          <StatCard
            icon="📊"
            title="Total Transactions"
            value={summaryStats.total.toLocaleString()}
            colorClass="text-indigo-400"
          />
        </div>

        {/* Filter and List Container */}
        <div className="bg-gray-800/70 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-700/50">
          {/* Filter buttons - Cleaner look */}
          <div className="flex justify-start gap-3 mb-8 border-b border-gray-700 pb-4">
            {["all", "send", "receive"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 uppercase tracking-wider ${
                  filter === type
                    ? "bg-cyan-500 text-gray-900 shadow-md shadow-cyan-500/30"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Transaction list */}
          {loading ? (
            <p className="text-center text-gray-400 py-10">
              Loading transactions...
            </p>
          ) : filteredTransactions.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              No transactions found for the current filter.
            </p>
          ) : (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-3 custom-scrollbar">
              {filteredTransactions.map((t) => {
                const isSender = t.senderPhone === user.phone;
                const statusIcon = isSender ? "⬆️" : "⬇️";
                const typeText = isSender ? "Money Sent" : "Money Received";
                const counterParty = isSender ? t.receiverPhone : t.senderPhone;

                return (
                  <div
                    key={t._id}
                    className="flex items-center justify-between p-5 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 border border-gray-700 transition-all duration-300"
                  >
                    {/* Left side: Icon, Details */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                          isSender
                            ? "bg-red-900/50 text-red-300"
                            : "bg-emerald-900/50 text-emerald-300"
                        }`}
                      >
                        {statusIcon}
                      </div>

                      {/* Text details */}
                      <div>
                        <h4 className="font-bold text-lg text-white">
                          {typeText}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {isSender
                            ? `To: ${counterParty}`
                            : `From: ${counterParty}`}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {format(
                            new Date(t.createdAt),
                            "MMM dd, yyyy 'at' hh:mm a"
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Right side: Amount and Note */}
                    <div className="flex flex-col items-end">
                      <p
                        className={`font-extrabold text-2xl tracking-tight ${
                          isSender ? "text-red-400" : "text-emerald-400"
                        }`}
                      >
                        {isSender ? "-" : "+"} ৳{t.amount.toLocaleString()}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {t.note || "No note provided"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
