// src/pages/DashboardHome.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowDownCircle,
  ArrowDownNarrowWide,
  FileText,
  QrCode,
  Send,
  Wallet,
  PlusCircle,
  X,
  Star, // Keep Star for loyalty points/generic icon if needed, though replaced in topCards
} from "lucide-react";
import { Link } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { FaRegCreditCard, FaUser } from "react-icons/fa";

const DashboardHome = () => {
  const { user, token } = useSelector((state) => state.auth || {});
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    number: "",
    type: "Visa",
    holder: "",
    expiry: new Date(),
  });

  // Format card number
  const formatCardNumber = (value) =>
    value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "number") value = formatCardNumber(value);
    setFormData({ ...formData, [name]: value });
  };

  // Fetch cards
  useEffect(() => {
    if (!user?.phone) return;
    axios
      .get(
        `https://digital-wallet-server-tau.vercel.app/api/cards/by-phone/${user.phone}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => setCards(res.data || []))
      .catch((err) => console.error("Failed to fetch cards:", err));
  }, [user, token]);

  // Fetch transactions
  useEffect(() => {
    if (!user?.phone) return;
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(
          "https://digital-wallet-server-tau.vercel.app/api/transactions",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const allTx = res.data || [];
        // Filter transactions relevant to the current user (sender or receiver)
        const userTx = allTx.filter(
          (tx) =>
            tx.senderPhone === user.phone || tx.receiverPhone === user.phone
        );
        // Sort by timestamp if available, for "Recent"
        userTx.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTransactions(userTx);
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
      }
    };
    fetchTransactions();
  }, [user, token]);

  // Add card
  const handleAddCard = async (e) => {
    e.preventDefault();
    if (!user?.phone) return alert("User phone not found");

    try {
      const payload = {
        ...formData,
        phone: user.phone,
        expiry: formData.expiry.toLocaleDateString("en-US", {
          month: "2-digit",
          year: "2-digit",
        }),
      };
      const { data } = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/cards",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const newCard = data.card ?? data;
      setCards((prev) => [...prev, newCard]);
      setFormData({
        number: "",
        type: "Visa",
        holder: "",
        expiry: new Date(),
      });
      setShowForm(false);
      Swal.fire("Success", "Card added successfully!", "success");
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to save card",
        "error"
      );
    }
  };

  // Calculate totals
  const sendTotal = transactions
    .filter((tx) => tx.senderPhone === user?.phone && tx.type === "sendMoney")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const receiveTotal = transactions
    .filter((tx) => tx.receiverPhone === user?.phone && tx.type === "sendMoney")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const cashOutTotal = transactions
    .filter((tx) => tx.type === "cashout" && tx.senderPhone === user?.phone)
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const addMoneyTotal = transactions
    .filter((tx) => tx.type === "addMoney" && tx.receiverPhone === user?.phone)
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const topCards = [
    {
      title: "Wallet Balance",
      value: `৳${(user?.balance || 0).toLocaleString()}`,
      color: "blue",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      title: "Send Money",
      value: `৳${sendTotal.toLocaleString()}`,
      color: "indigo",
      icon: <Send className="w-5 h-5" />,
    },
    {
      title: "Cash In",
      value: `৳${(receiveTotal + addMoneyTotal).toLocaleString()}`,
      color: "green",
      icon: <ArrowDownCircle className="w-5 h-5" />,
    },
    {
      title: "Cash Out",
      value: `৳${cashOutTotal.toLocaleString()}`,
      color: "purple",
      icon: <PlusCircle className="w-5 h-5" />,
    },
  ];

  const quickActions = [
    {
      name: "Send Money",
      path: "/dashboard/send-money",
      icon: <Send className="h-6 w-6" />,
      color: "indigo",
    },
    {
      name: "Add Money",
      path: "/dashboard/addMoney",
      icon: <PlusCircle className="h-6 w-6" />,
      color: "green",
    },
    {
      name: "Pay Bill",
      path: "/dashboard/pay-bill",
      icon: <FileText className="h-6 w-6" />,
      color: "purple",
    },
    {
      name: "Cashout",
      path: "/dashboard/cashout",
      icon: <Send className="h-6 w-6" />,
      color: "red",
    },
  ];

  // Map transactions for display (using simplified logic from the prompt's example)
  const transactionsList = transactions.slice(0, 4).map((tx) => {
    const isSender = tx.senderPhone === user?.phone;
    const isCashOut = tx.type === "cashout";
    const isAddMoney = tx.type === "addMoney";

    let typeLabel = "";
    let color = "";
    let icon = null;
    let desc = "";
    let sign = "";

    if (isAddMoney) {
      typeLabel = "Cash In";
      color = "green";
      icon = <ArrowDownNarrowWide className="w-5 h-5" />;
      desc = `From ${tx.source || "External Account"}`;
      sign = "+";
    } else if (isCashOut) {
      typeLabel = "Cash Out";
      color = "red";
      icon = <Send className="w-5 h-5" />;
      desc = `To ${tx.receiverName || "Agent"}`;
      sign = "-";
    } else if (tx.senderPhone === user?.phone && tx.type === "sendMoney") {
      typeLabel = "Send Money";
      color = "red";
      icon = <Send className="w-5 h-5" />;
      desc = `To ${tx.receiverName || tx.receiverPhone}`;
      sign = "-";
    } else if (tx.receiverPhone === user?.phone && tx.type === "sendMoney") {
      typeLabel = "Money Received";
      color = "green";
      icon = <ArrowDownNarrowWide className="w-5 h-5" />;
      desc = `From ${tx.senderName || tx.senderPhone}`;
      sign = "+";
    } else {
      // Default/Other transaction types (e.g., Pay Bill)
      typeLabel = "Bill Payment";
      color = "purple";
      icon = <FileText className="w-5 h-5" />;
      desc = tx.description || "Utility/Service";
      sign = "-";
    }

    const timeString = new Date(tx.createdAt).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateString = new Date(tx.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return {
      ...tx,
      type: typeLabel,
      desc: desc,
      time: `${dateString}, ${timeString}`,
      amount: `${sign}৳${Number(tx.amount).toLocaleString()}`,
      status: tx.status || "Complete", // Assuming complete for most history
      color: color,
      icon: icon,
    };
  });

  // Card Logos and Gradients
  const cardLogos = {
    Visa: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
    Mastercard:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    Amex: "https://i.ibb.co.com/DH9V2qtW/american.png",
    Discover: "https://i.ibb.co.com/TxVN7SSB/dscvr.jpg",
  };
  const cardGradients = {
    Visa: "bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700",
    Mastercard: "bg-gradient-to-br from-red-500 via-yellow-500 to-orange-600",
    Amex: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600",
    Discover: "bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600",
    Default: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700",
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen p-4">
      {/* === Summary Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {topCards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-4 rounded-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <div
                className={`p-2 bg-${card.color}-100 dark:bg-${card.color}-900 text-${card.color}-600 dark:text-${card.color}-400 rounded-lg`}
              >
                {card.icon}
              </div>
              {/* NOTE: Removed 'change' span as the updated data doesn't include it */}
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 px-1">
              {card.value}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm px-1">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* === Quick Actions + Wallet === */}
      <div className="grid grid-cols-1 mb-8 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.path}
                className="bg-white dark:bg-gray-800 p-3 text-center flex flex-col items-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-md transition rounded-lg"
              >
                <div
                  className={`bg-${action.color}-100 dark:bg-${action.color}-900 text-${action.color}-600 dark:text-${action.color}-400 py-3 px-2 mb-2 rounded-md`}
                >
                  {action.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {action.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r rounded-lg from-indigo-500 to-purple-600 shadow-md p-4 h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Wallet</h3>
              <span className="p-2 text-white">
                <Wallet />
              </span>
            </div>
            <p className="text-white/80 mb-2 text-md">Available Balance</p>
            <div className="text-white font-bold text-2xl mb-4">
              <span className="text-yellow-300">
                ৳{(user?.balance || 0).toLocaleString()}
              </span>
            </div>
            <div className="flex gap-2">
              <Link
                to="/dashboard/addMoney"
                className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center"
              >
                Add Money
              </Link>
              <Link
                to="/dashboard/cashOut"
                className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center"
              >
                Cashout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions + My Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Recent Transactions
            </h2>
            <Link
              to="/dashboard/trans-history"
              className="text-blue-500 underline cursor-pointer hover:no-underline text-sm"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {transactionsList.length > 0 ? (
              transactionsList.map((tx, i) => (
                <div
                  key={tx._id || i}
                  className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`bg-${tx.color}-200 dark:bg-${tx.color}-900 text-${tx.color}-600 dark:text-${tx.color}-400 p-2 rounded-full`}
                    >
                      {tx.icon}
                    </div>
                    <div className="leading-tight">
                      <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {tx.type}
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {tx.desc}
                      </p>
                      <span className="text-xs text-gray-400">{tx.time}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <h2
                      className={`text-base font-bold ${
                        tx.color === "green"
                          ? "text-green-600"
                          : tx.color === "red"
                          ? "text-red-600"
                          : tx.color === "purple"
                          ? "text-purple-600"
                          : "text-blue-600"
                      }`}
                    >
                      {tx.amount}
                    </h2>
                    <p
                      className={`px-3 py-0.5 rounded-lg text-xs font-medium ${
                        tx.color === "green"
                          ? "bg-green-200 text-green-600 dark:bg-green-900"
                          : tx.color === "red"
                          ? "bg-red-200 text-red-600 dark:bg-red-900"
                          : tx.color === "purple"
                          ? "bg-purple-200 text-purple-600 dark:bg-purple-900"
                          : "bg-blue-200 text-blue-600 dark:bg-blue-900"
                      }`}
                    >
                      {tx.status}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No recent transactions found.
              </p>
            )}
          </div>
        </div>

        {/* My Cards */}
        <div className="lg:col-span-2 relative">
          <div className="rounded-lg shadow-md p-4 h-full flex flex-col justify-start bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                My Cards
              </h2>
              <button
                onClick={() => setShowForm(true)}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                + Add Card
              </button>
            </div>

            <AnimatePresence>
              <motion.div
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {cards.length > 0 ? (
                  cards.map((card, i) => {
                    const gradientClass =
                      cardGradients[card.type] || cardGradients.Default;
                    const logo = cardLogos[card.type];

                    return (
                      <motion.div
                        key={card._id ?? i}
                        className={`relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full aspect-[16/10] text-white overflow-hidden ${gradientClass}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        {/* Subtle gradient overlay for depth */}
                        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-6">
                          <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold uppercase tracking-wide">
                              {card.type || "Card"}
                            </h2>
                            {logo && (
                              <img
                                src={logo}
                                alt={card.type}
                                className="h-8 object-contain bg-white/20 backdrop-blur-sm rounded-md p-1"
                              />
                            )}
                          </div>

                          <div className="text-xl tracking-widest font-mono mb-4">
                            **** **** **** {card.number?.slice(-4) || "####"}
                          </div>

                          <div className="flex justify-between text-sm font-semibold">
                            <div>
                              <p className="text-white/70">Card Holder</p>
                              <p className="text-white">
                                {card.holder || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-white/70">Expiry</p>
                              <p className="text-white">
                                {card.expiry || "--/--"}
                              </p>
                            </div>
                            <div className="">
                              {/* NOTE: Added a placeholder for balance if the API provides it */}
                              Balance: ৳{card.balance?.toLocaleString() || "0"}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                    No cards added yet.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Add Card Modal - matches MyCard's form fields & DatePicker */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative border border-gray-200 dark:border-gray-700"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                >
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Updated Heading */}
                  <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white tracking-wide">
                    Add a New Payment Card
                  </h2>

                  <form onSubmit={handleAddCard} className="space-y-5">
                    {/* Card Number */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Card Number
                      </label>
                      <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-3 border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-indigo-500">
                        <FaRegCreditCard className="text-gray-500 mr-2" />
                        <input
                          type="text"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-3 rounded-lg text-black dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Card Type */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Card Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg text-black dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Amex">American Express</option>
                        <option value="Discover">Discover</option>
                      </select>
                    </div>

                    {/* Card Holder */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Card Holder Name
                      </label>
                      <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-3 border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-indigo-500">
                        <FaUser className="text-gray-500 mr-2" />
                        <input
                          type="text"
                          name="holder"
                          value={formData.holder}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full p-3 rounded-lg text-black dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Expiry */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Expiry Date
                      </label>
                      <DatePicker
                        selected={formData.expiry}
                        onChange={(date) =>
                          setFormData({ ...formData, expiry: date })
                        }
                        dateFormat="MM/yy"
                        showMonthYearPicker
                        className="w-full p-3 rounded-lg text-black dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                        placeholderText="MM/YY"
                        required
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2.5 transition font-semibold shadow-sm"
                      >
                        Save Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-lg py-2.5 transition font-semibold shadow-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
