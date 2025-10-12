
// src/components/MyCard.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DatePicker from "react-datepicker";
import { FaRegCreditCard, FaUser } from "react-icons/fa";

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
        "http://localhost:5000/api/cards",
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
      .get(
        `http://localhost:5000/api/cards/by-phone/${user.phone}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => setCards(res.data))
      .catch((err) => console.error(err));
  }, [user, token]);

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 sm:mb-10">
          💳 My Cards
        </h1>

        {/* Saved Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 place-items-center">
  {cards.map((card) => {
    // Gradient backgrounds by card type
    const cardGradients = {
      Visa: "bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700",
      Mastercard: "bg-gradient-to-br from-red-500 via-yellow-500 to-orange-600",
      Amex: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600",
      Discover: "bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600",
      Default: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700",
    };

    const logo =
      card.type === "Visa"
        ? "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
        : card.type === "Mastercard"
        ? "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        : card.type === "Amex" || card.type === "American Express"
        ? "https://i.ibb.co.com/DH9V2qtW/american.png"
        : card.type === "Discover"
        ? "https://i.ibb.co.com/TxVN7SSB/dscvr.jpg"
        : null;

    const gradientClass =
      cardGradients[card.type] || cardGradients.Default;

    return (
      <div
        key={card._id}
        className={`relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-white w-full max-w-[400px] aspect-[16/10] overflow-hidden ${gradientClass}`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              {card.type || "Card"}
            </h2>
            {logo && (
              <img
                src={logo}
                alt={card.type}
                className="h-8 sm:h-10 object-contain drop-shadow-md bg-white/20 backdrop-blur-sm rounded-md p-1"
              />
            )}
          </div>

          <div className="text-lg sm:text-xl tracking-widest font-mono mb-3">
            **** **** **** {card.number ? card.number.slice(-4) : "####"}
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
            <div>
              <p className="text-white/70">Card Holder</p>
              <p>{card.holder || "N/A"}</p>
            </div>
            <div>
              <p className="text-white/70">Expiry</p>
              <p>{card.expiry || "--/--"}</p>
            </div>
          </div>

          <div className="text-xs sm:text-sm font-semibold mt-2">
            Balance: ৳{card.balance?.toLocaleString() || "0"}
          </div>
        </div>
      </div>
    );
  })}
</div>


        {/* Add Card Button / Form */}
        <div className="text-center">
          {!showForm ? (
            <div className="mt-6 md:mt-8 text-center">
  <button
    onClick={() => setShowForm(true)}
    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white cursor-pointer px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
  >
    + Add New Card
  </button>
</div>
          ) : (
            <form
  onSubmit={handleAddCard}
  className="bg-white/30 dark:bg-gray-800/80 p-7 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-lg w-full max-w-md mx-auto space-y-6 border border-white/20 dark:border-gray-700"
>
  {/* Heading */}
  <div className="text-center mb-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
      Add a New Payment Card
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      Enter your card details securely below
    </p>
  </div>

  {/* Card Number */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
      Card Number
    </label>
    <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3 border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-green-500 transition-all">
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
      className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
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
      Card Holder Name
    </label>
    <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg px-3 border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-green-500 transition-all">
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
      className="w-full p-3 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-green-500 transition-all"
      placeholderText="MM/YY"
      required
    />
  </div>

  {/* Buttons */}
  <div className="flex gap-4 justify-center pt-3">
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-2.5 rounded-lg font-semibold text-white transition-all shadow-md"
    >
      Save Card
    </button>
    <button
      type="button"
      onClick={() => setShowForm(false)}
      className="bg-red-500 hover:bg-red-600 px-6 sm:px-8 py-2.5 rounded-lg font-semibold text-white transition-all shadow-md"
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

