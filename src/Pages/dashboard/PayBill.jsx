import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import axiosSecure from "../../axiosSecure/useAxiosSecure";

const PayBill = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [details, setDetails] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid amount",
      });
      return;
    }
    if (!details) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please provide payment details",
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Password Required",
        text: "Please enter your account password to confirm",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axiosSecure.post("api/pay-bill", {
        amount: addAmount,
        method,
        details,
        password,
      });

      // ✅ Success alert
      await Swal.fire({
        icon: "success",
        title: "Money Added",
        text: res.data.message || "Your balance has been updated successfully!",
      });

      // ✅ redirect to transaction history page
      navigate("/dashboard/trans-history");

      setAmount("");
      setDetails("");
      setPassword("");
    } catch (err) {
      // ❌ Error alert
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.response?.data?.message || "Failed to pay bill",
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

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Pay Bill</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="electricity-bill" className="text-black">
                Electricity Bill
              </option>
              <option value="gash-bill" className="text-black">
                Gash Bill
              </option>
              <option value="net-bill" className="text-black">
                Net Bill
              </option>
            </select>
          </div>

          <div>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter you account number"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "pay bill"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayBill;
