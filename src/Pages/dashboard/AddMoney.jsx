// src/components/AddMoney.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const AddMoney = () => {
  const [selectedSource, setSelectedSource] = useState(""); // "card" or "account"
  const [amount, setAmount] = useState("");

  const [bank, setBank] = useState(""); // new: selected bank name
  const [details, setDetails] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userCards, setUserCards] = useState([]);

  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // 🔹 Fetch user's saved cards
  useEffect(() => {
    if (!user?.phone || !token) return;
    axios
      .get(`https://digital-wallet-server-tau.vercel.app/api/cards/by-phone/${user.phone}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserCards(res.data || []))
      .catch((err) => console.error("Failed to fetch cards:", err));
  }, [user, token]);

  // 🔹 Format card number every 4 digits automatically
  const handleCardInput = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    const formatted = value.replace(/(.{4})/g, "$1 ").trim();
    setDetails(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid amount.",
      });
      return;
    }
    if (!details) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please provide payment details.",
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Password Required",
        text: "Please enter your password.",
      });
      return;
    }

    if (selectedSource === "card") {
      const matchedCard = userCards.find(
        (c) => c.number.replace(/\s+/g, "") === details.replace(/\s+/g, "")
      );
      if (!matchedCard) {
        Swal.fire({
          icon: "error",
          title: "Card Verification Failed",
          text: "This card number is not linked to your account.",
        });
        return;
      }
      if (matchedCard.balance < parseFloat(amount)) {
        Swal.fire({
          icon: "error",
          title: "Insufficient Balance",
          text: "Your selected card doesn't have enough money.",
        });
        return;
      }
    }

    try {
      setLoading(true);
      const payload = {
        amount: addAmount,
        // ensure backend receives 'card' when user selected card source
        method: selectedSource === "card" ? "card" : "bank",
        details,
        password,
        bank,
      };

      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/add-money",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await Swal.fire({
        icon: "success",
        title: "Money Added",
        text: res.data.message || "Your balance has been updated successfully!",
      });

      navigate("/dashboard/trans-history");
      setAmount("");
      setDetails("");
      setPassword("");
      setSelectedSource("");
      setBank("");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.response?.data?.message || "Failed to add money.",
      });
    } finally {
      setLoading(false);
    }
  };

  const bgStyle = {
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/009/097/172/non_2x/e-wallet-digital-wallet-application-internet-banking-online-payment-security-via-credit-card-online-money-transaction-concept-coin-icon-on-dark-background-eps10-illustration-free-vector.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // 🔹 List of Bangladeshi banks
  const bangladeshBanks = [
    "Dutch-Bangla Bank",
    "BRAC Bank",
    "City Bank",
    "Eastern Bank",
    "Islami Bank Bangladesh",
    "Sonali Bank",
    "United Commercial Bank",
    "Prime Bank",
    "Trust Bank",
    "Standard Chartered Bank",
    "Bank Asia",
    "Mutual Trust Bank",
    "NCC Bank",
    "One Bank",
    "IFIC Bank",
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Add Money</h2>

        {/* Step 1: Select Source */}
        {!selectedSource && (
          <div className="space-y-4 text-center">
            <p className="text-gray-200 mb-4">
              Choose where to add money from:
            </p>
            <button
              onClick={() => setSelectedSource("card")}
              className="w-full cursor-pointer py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition"
            >
              From Card
            </button>
            <button
              onClick={() => setSelectedSource("account")}
              className="w-full cursor-pointer py-3 rounded-lg bg-green-600 hover:bg-green-500 font-semibold transition"
            >
              From Account
            </button>
          </div>
        )}

        {/* Step 2: Show form if a source is selected */}
        {selectedSource && (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {selectedSource === "account" && (
              <>
                {/* Dropdown of Banks */}
                <div>
                  <select
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" className="text-black">
                      Select Bank
                    </option>
                    {bangladeshBanks.map((b, i) => (
                      <option key={i} value={b} className="text-black">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Payment method (bKash/Nagad) */}
              </>
            )}

            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <input
                type="text"
                value={details}
                onChange={
                  selectedSource === "card"
                    ? handleCardInput
                    : (e) => setDetails(e.target.value)
                }
                maxLength="19"
                className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={
                  selectedSource === "card"
                    ? "Enter your card number"
                    : "Enter your bank account number "
                }
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your wallet password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Confirm Add Money"}
            </button>

            <button
              type="button"
              onClick={() => setSelectedSource("")}
              className="w-full cursor-pointer py-3 rounded-lg bg-gray-500 hover:bg-gray-400 text-white font-semibold transition"
            >
              Go Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddMoney;
