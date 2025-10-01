import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

// ====================================================================
// StatCard Component
// ====================================================================
const StatCard = ({ icon, title, value, colorClass }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50 transition-all duration-300"
  >
    <div className={`text-3xl mb-3 ${colorClass}`}>{icon}</div>
    <div className="text-xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-gray-400 font-medium text-sm tracking-wider uppercase">
      {title}
    </div>
  </motion.div>
);

// ====================================================================
// TransactionDetailModal Component
// ====================================================================
const TransactionDetailModal = ({ transaction, onClose, userPhone }) => {
  if (!transaction) return null;

  let title = "";
  let accountLabel = "";
  let accountNumber = "";
  let prefix = "";
  let amountColor = "";
  const note = transaction.note || "No note provided";

  if (transaction.type === "sendMoney") {
    if (transaction.senderPhone === userPhone) {
      title = "Send Money Details";
      accountLabel = "Receiver";
      accountNumber = transaction.receiverPhone;
      prefix = "-";
      amountColor = "text-red-400";
    } else {
      title = "Received Money Details";
      accountLabel = "Sender";
      accountNumber = transaction.senderPhone;
      prefix = "+";
      amountColor = "text-emerald-400";
    }
  } else if (transaction.type === "cashout") {
    title = "Cashout Details";
    accountLabel = transaction.merchantName;
    accountNumber = transaction.merchantPhone;
    prefix = "-";
    amountColor = "text-yellow-400";
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700/50"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-700 rounded-t-2xl">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-red-400 font-bold text-lg"
            >
              ❌
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-3">
            <div className="text-center border-b border-gray-700 pb-4">
              <p className="text-sm text-gray-400 mb-1">Amount</p>
              <p className={`text-3xl font-extrabold ${amountColor}`}>
                {prefix} ৳{transaction.amount.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-2 text-sm">
              <span className="text-gray-400 font-medium">{accountLabel}</span>
              <span className="font-semibold text-white">{accountNumber}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-2 text-sm">
              <span className="text-gray-400 font-medium">Transaction ID</span>
              <span className="font-semibold text-white">
                {transaction.transactionId}
              </span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-400 font-medium">Note</span>
              <span className="font-semibold text-white">{note}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-400 font-medium">Time</span>
              <span className="font-semibold text-white">
                {format(
                  new Date(transaction.createdAt),
                  "MMM dd, yyyy 'at' hh:mm a"
                )}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 p-4 border-t border-gray-700">
            <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm">
              🔁 Send Again
            </button>
            <button className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm">
              📤 Share
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ====================================================================
// TransactionHistory Component
// ====================================================================
const TransactionHistory = () => {
  const user = useSelector((state) => state.auth.user);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const openDetails = (t) => setSelectedTransaction(t);
  const closeDetails = () => setSelectedTransaction(null);

  const fetchTransactions = async () => {
    if (!user?.phone) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://digital-wallet-server-tau.vercel.app/api/transactions",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      if (filter === "send")
        return t.type === "sendMoney" && t.senderPhone === user.phone;
      if (filter === "receive")
        return t.type === "sendMoney" && t.receiverPhone === user.phone;
      if (filter === "cashout")
        return t.type === "cashout" && t.senderPhone === user.phone;
      return t.senderPhone === user.phone || t.receiverPhone === user.phone;
    });
  }, [transactions, filter, user]);

  const summaryStats = useMemo(() => {
    const received = transactions
      .filter((t) => t.type === "sendMoney" && t.receiverPhone === user?.phone)
      .reduce((sum, t) => sum + t.amount, 0);
    const sent = transactions
      .filter((t) => t.type === "sendMoney" && t.senderPhone === user?.phone)
      .reduce((sum, t) => sum + t.amount, 0);
    const cashouts = transactions
      .filter((t) => t.type === "cashout" && t.senderPhone === user?.phone)
      .reduce((sum, t) => sum + t.amount, 0);
    return { received, sent, cashouts, total: transactions.length };
  }, [transactions, user]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-2">
            Transaction <span className="text-cyan-400">Ledger</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Overview of your digital wallet activity
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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
            icon="🏧"
            title="Total Cashout"
            value={`৳${summaryStats.cashouts.toLocaleString()}`}
            colorClass="text-yellow-400"
          />
          <StatCard
            icon="📊"
            title="Total Transactions"
            value={summaryStats.total.toLocaleString()}
            colorClass="text-indigo-400"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-start gap-3 mb-6">
          {["all", "send", "receive", "cashout"].map((type) => (
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

        {/* Transaction List */}
        <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-3 custom-scrollbar">
          {loading ? (
            <p className="text-center text-gray-400 py-10">Loading...</p>
          ) : filteredTransactions.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              No transactions found
            </p>
          ) : (
            filteredTransactions.map((t) => {
              let title = "";
              let counterParty = "";
              let opponentImage = "";
              let amountColor = "";
              let prefix = "";

              if (t.type === "sendMoney") {
                if (t.senderPhone === user.phone) {
                  title = "Send Money";
                  counterParty = `To: ${t.receiverPhone}`;
                  opponentImage = t.receiverImage;
                  amountColor = "text-red-400";
                  prefix = "-";
                } else {
                  title = "Money Received";
                  counterParty = `From: ${t.senderPhone}`;
                  opponentImage = t.senderImage;
                  amountColor = "text-emerald-400";
                  prefix = "+";
                }
              } else if (t.type === "cashout") {
                title = "Cashout";
                counterParty = `${t.merchantName}`;
                opponentImage = t.merchantImage;
                amountColor = "text-yellow-400";
                prefix = "-";
              }

              return (
                <motion.button
                  key={t._id}
                  onClick={() => openDetails(t)}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-gray-800/50 hover:bg-gray-700/60 w-full text-left border border-gray-700 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={opponentImage || "/default-avatar.png"}
                      alt="User"
                      className="w-14 h-14 rounded-full border-2 border-gray-600 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg md:text-xl">{title}</h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        {counterParty}
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm">
                        ID: {t.transactionId}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {format(
                          new Date(t.createdAt),
                          "MMM dd, yyyy 'at' hh:mm a"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p
                      className={`font-extrabold text-2xl md:text-3xl ${amountColor}`}
                    >
                      {prefix} ৳{t.amount.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-sm md:text-base mt-1">
                      {t.note || "No note"}
                    </p>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>
      </div>

      {/* Modal */}
      <TransactionDetailModal
        transaction={selectedTransaction}
        onClose={closeDetails}
        userPhone={user?.phone}
      />
    </div>
  );
};

export default TransactionHistory;
