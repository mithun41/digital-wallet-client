// src/components/MyCard.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DatePicker from "react-datepicker";
import {
  FaRegCreditCard,
  FaUser,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const MyCard = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    number: "",
    type: "Visa",
    holder: "",
    expiry: new Date(),
  });

  const { user, token } = useSelector((state) => state.auth);

  const formatCardNumber = (value) =>
    value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "number") value = formatCardNumber(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCard = async (e) => {
    e.preventDefault();
    if (!user?.phone) return alert("User phone not found");

    try {
      const { data } = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/cards",
        {
          ...formData,
          phone: user.phone,
          expiry: formData.expiry.toLocaleDateString("en-US", {
            month: "2-digit",
            year: "2-digit",
          }),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCards([...cards, data.card]);
      setFormData({ number: "", type: "Visa", holder: "", expiry: new Date() });
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save card");
    }
  };

  useEffect(() => {
    if (!user?.phone) return;

    axios
      .get(`https://digital-wallet-server-tau.vercel.app/api/cards/by-phone/${user.phone}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCards(res.data))
      .catch((err) => console.error(err));
  }, [user, token]);

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          💳 My Cards
        </h1>

        {/* Saved Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card._id}
              className="relative rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            >
              <div className="absolute inset-0 bg-black/10 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">{card.type || "Card"}</h2>
                  {card.type === "Visa" ? <FaCcVisa size={40} /> : <FaCcMastercard size={40} />}
                </div>
                <div className="text-xl tracking-widest font-mono mb-6">
                  **** **** **** {card.number ? card.number.slice(-4) : "####"}
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
            </div>
          ))}
        </div>

        {/* Add Card Button / Form */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-emerald-500 hover:to-teal-600 hover:scale-105 transition-all"
            >
              ➕ Add New Card
            </button>
          ) : (
            <form
              onSubmit={handleAddCard}
              className="bg-white/20 dark:bg-gray-800/70 p-6 rounded-3xl shadow-2xl backdrop-blur-md max-w-md mx-auto space-y-5 transition-all"
            >
              {/* Card Number */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Card Number
                </label>
                <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3">
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
                <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Card Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700"
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="Amex">American Express</option>
                  <option value="Discover">Discover</option>
                </select>
              </div>

              {/* Card Holder */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Card Holder
                </label>
                <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3">
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

              {/* Expiry Date */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Expiry Date
                </label>
                <DatePicker
                  selected={formData.expiry}
                  onChange={(date) => setFormData({ ...formData, expiry: date })}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                  className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700"
                  placeholderText="MM/YY"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center pt-2">
                <button
                  type="submit"
                  className="bg-green-500 px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition-all"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-red-500 px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCard;
