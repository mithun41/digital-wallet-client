
// src/pages/DashboardHome.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowDownCircle,
  ArrowDownNarrowWide,
  FileText,
  QrCode,
  Send,
  Star,
  Wallet,
  PlusCircle,
  X,
} from "lucide-react";
import { Link } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import {
  FaRegCreditCard,
  FaUser,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const DashboardHome = () => {
  // NOTE: match your MyCard selector shape
  const { user, token } = useSelector((state) => state.auth || {});
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    number: "",
    type: "Visa",
    holder: "",
    expiry: new Date(),
  });

  // Helper (same as in your MyCard)
  const formatCardNumber = (value) =>
    value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "number") value = formatCardNumber(value);
    setFormData({ ...formData, [name]: value });
  };

  // Fetch cards exactly like MyCard (by phone, with token)
  useEffect(() => {
    if (!user?.phone) {
      setCards([]);
      return;
    }

    axios
      .get(
        `https://digital-wallet-server-tau.vercel.app/api/cards/by-phone/${user.phone}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setCards(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch cards:", err);
      });
  }, [user, token]);

  // Add card (same payload shape & expiry formatting as in MyCard)
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

      // API in MyCard returned data.card — accommodate both shapes
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
      Swal.fire("Error", err.response?.data?.message || "Failed to save card", "error");
    }
  };

  /* ------------------ Dashboard UI (top sections omitted for brevity) ------------------ */
  // For conciseness this file keeps your original top sections — only the "My Cards"
  // area and the modal/form were updated to match MyCard.

  // (You can keep your existing topCards, quickActions, transactions arrays here.)
  // I'll reuse minimal placeholders so the file runs standalone.
  const topCards = [
    { title: "Wallet Balance", value: "$5,000.00", change: "+12.5%", color: "blue", icon: <Wallet className="w-5 h-5" /> },
    { title: "Send Money", value: "$1,250.00", change: "+5.4%", color: "indigo", icon: <Send className="w-5 h-5" /> },
    { title: "Receive Money", value: "$3,200.00", change: "-2.1%", color: "green", icon: <ArrowDownCircle className="w-5 h-5" /> },
    { title: "Loyalty Points", value: "480", change: "+3.9%", color: "purple", icon: <Star className="w-5 h-5" /> },
  ];

  const quickActions = [
    { name: "Send Money", path: "/dashboard/sendMoney", icon: <Send className="h-6 w-6" />, color: "indigo" },
    { name: "Add Money", path: "/dashboard/addMoney", icon: <PlusCircle className="h-6 w-6" />, color: "green" },
    { name: "Pay Bill", path: "/dashboard/payBill", icon: <FileText className="h-6 w-6" />, color: "purple" },
    { name: "QR Scan", path: "/dashboard/qrScan", icon: <QrCode className="h-6 w-6" />, color: "red" },
  ];

  const transactions = [
    { type: "Money Receive", desc: "From John Doe", time: "Friday, 2:30 PM", amount: "+$250.00", status: "Complete", color: "green", icon: <ArrowDownNarrowWide className="w-5 h-5" /> },
    { type: "Money Sent", desc: "To Alice Smith", time: "Thursday, 4:10 PM", amount: "-$120.00", status: "Pending", color: "red", icon: <Send className="w-5 h-5" /> },
    { type: "Bill Payment", desc: "Electricity Bill", time: "Thursday, 10:00 AM", amount: "-$90.00", status: "Complete", color: "purple", icon: <FileText className="w-5 h-5" /> },
    { type: "QR Payment", desc: "Coffee Shop", time: "Wednesday, 6:45 PM", amount: "-$15.00", status: "Complete", color: "blue", icon: <QrCode className="w-5 h-5" /> },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Top cards (kept as-is for your dashboard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {topCards.map((card) => (
          <div key={card.title} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 bg-${card.color}-100 dark:bg-${card.color}-900 text-${card.color}-600 dark:text-${card.color}-400 rounded-lg`}>{card.icon}</div>
              <span className={`${card.change.includes("+") ? "text-green-500" : "text-red-500"} text-sm font-medium`}>{card.change}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 px-1">{card.value}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm px-1">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Quick actions and balance (keep your layout) */}
      <div className="grid grid-cols-1 mb-8 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.name} to={action.path} className="bg-white dark:bg-gray-800 p-3 text-center flex flex-col items-center shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-md transition rounded-lg">
                <div className={`bg-${action.color}-100 dark:bg-${action.color}-900 text-${action.color}-600 dark:text-${action.color}-400 py-3 px-2 mb-2 rounded-md`}>{action.icon}</div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">{action.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r rounded-lg from-indigo-500 to-purple-600 shadow-md p-4 h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Wallet</h3>
              <span className="p-2 text-white"><Wallet /></span>
            </div>
            <p className="text-white/80 mb-2 text-md">Available Balance</p>
            <div className="text-white font-bold text-2xl mb-4"><span className="text-yellow-300">$5,000.00</span></div>
            <div className="flex gap-2">
              <Link to="/dashboard/addMoney" className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center">Add Money</Link>
              <Link to="/dashboard/cashOut" className="flex-1 py-1.5 text-xs rounded-lg bg-purple-400 font-semibold text-white cursor-pointer shadow hover:bg-purple-600 transition text-center">Cashout</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions + My Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 py-6 px-4 space-y-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Recent Transactions</h2>
            <button className="text-blue-500 underline cursor-pointer hover:no-underline text-sm">View All</button>
          </div>

          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`bg-${tx.color}-200 dark:bg-${tx.color}-900 text-${tx.color}-600 dark:text-${tx.color}-400 p-2 rounded-full`}>{tx.icon}</div>
                  <div className="leading-tight">
                    <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{tx.type}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.desc}</p>
                    <span className="text-xs text-gray-400">{tx.time}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <h2 className={`text-base font-bold ${tx.color === "green" ? "text-green-600" : tx.color === "red" ? "text-red-600" : tx.color === "purple" ? "text-purple-600" : "text-blue-600"}`}>{tx.amount}</h2>
                  <p className={`px-3 py-0.5 rounded-lg text-xs font-medium ${tx.color === "green" ? "bg-green-200 text-green-600 dark:bg-green-900" : tx.color === "red" ? "bg-red-200 text-red-600 dark:bg-red-900" : tx.color === "purple" ? "bg-purple-200 text-purple-600 dark:bg-purple-900" : "bg-blue-200 text-blue-600 dark:bg-blue-900"}`}>{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Cards */}
        <div className="lg:col-span-2 relative">
          <div className="rounded-lg shadow-md p-4 h-full flex flex-col justify-start bg-white dark:bg-gray-800">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">My Cards</h2>
      <button onClick={() => setShowForm(true)} className="text-blue-500 cursor-pointer hover:underline">+ Add Card</button>
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
            // Card backgrounds based on type
            const cardBackgrounds = {
              Visa: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa_card.png",
              Mastercard: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mastercard-logo.png",
              Amex: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
              Default: "https://via.placeholder.com/400x250",
            };
            const cardLogos = {
              Visa: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
              Mastercard: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
              Amex: "https://i.ibb.co.com/DH9V2qtW/american.png",
            Discover:"https://i.ibb.co.com/TxVN7SSB/dscvr.jpg"
            };

            const bg =  cardBackgrounds.Default;
            const logo = cardLogos[card.type];

            return (
              <motion.div
                key={card._id ?? i}
                className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-[350px] md:w-[380px]  lg:w-[400px] h-[220px] lg:h-[250px]  aspect-[16/10] text-white"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {/* Overlay for text visibility */}
                <div className="absolute inset-0 bg-black/25 rounded-3xl"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col  justify-between h-full p-6">
                  <div className="flex justify-between items-center mb-6 ">
                    <h2 className="text-2xl font-bold">{card.type || "Card"}</h2>
                    {logo && <img src={logo} alt={card.type} className="h-10" />}
                  </div>

                  <div className="text-xl tracking-widest font-mono mb-4">
                    **** **** **** {card.number?.slice(-4) || "####"}
                  </div>

                  <div className="flex justify-between text-sm font-semibold">
                    <div>
                      <p className="text-gray-200 dark:text-gray-300">Card Holder</p>
                      <p>{card.holder || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-gray-200 dark:text-gray-300">Expiry</p>
                      <p>{card.expiry || "--/--"}</p>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">No cards added yet.</p>
        )}
      </motion.div>
    </AnimatePresence>
  </div>

          {/* Add Card Modal - matches MyCard's form fields & DatePicker */}
          <AnimatePresence>
            {showForm && (
              <motion.div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md relative" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
                  <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>

                  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Add New Card</h2>

                  <form onSubmit={handleAddCard} className="space-y-3">
                    {/* Card Number */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Card Number</label>
                      <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3">
                        <FaRegCreditCard className="text-gray-500 mr-2" />
                        <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="1234 5678 9012 3456" className="w-full p-3 rounded-lg text-black dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-300" required />
                      </div>
                    </div>

                    {/* Card Type */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Card Type</label>
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700">
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Amex">American Express</option>
                        <option value="Discover">Discover</option>
                      </select>
                    </div>

                    {/* Card Holder */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Card Holder</label>
                      <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3">
                        <FaUser className="text-gray-500 mr-2" />
                        <input type="text" name="holder" value={formData.holder} onChange={handleChange} placeholder="John Doe" className="w-full p-3 rounded-lg text-black dark:text-white bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-300" required />
                      </div>
                    </div>

                    {/* Expiry (DatePicker like MyCard) */}
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Expiry Date</label>
                      <DatePicker selected={formData.expiry} onChange={(date) => setFormData({ ...formData, expiry: date })} dateFormat="MM/yy" showMonthYearPicker className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700" placeholderText="MM/YY" required />
                    </div>

                    <div className="flex gap-3">
                      <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 transition font-semibold">Save Card</button>
                      <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-md py-2 transition font-semibold">Cancel</button>
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

