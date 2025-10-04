import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const CashoutStep2 = ({ onCashoutSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { merchantPhone, amount, note } = location.state || {};
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Redux থেকে ইউজারের নাম্বার নেয়া
  const userPhone = useSelector((state) => state.auth.user?.phone);

  const fullPhone = merchantPhone?.startsWith("+88")
    ? merchantPhone
    : `+88${merchantPhone}`;

  useEffect(() => {
    if (!merchantPhone || !amount) {
      navigate("/dashboard/cashout");
    }
  }, [merchantPhone, amount, navigate]);

  const handleConfirm = async () => {
    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Password required",
        text: "Please enter your password",
      });
      return;
    }

    // নিজের নাম্বারে cashout ব্লক
    if (userPhone && (userPhone === merchantPhone || userPhone === fullPhone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Transaction",
        text: "You cannot cashout to your own number.",
      });
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/cashout",
        {
          merchantPhone: fullPhone,
          amount: parseFloat(amount),
          note,
          password,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await Swal.fire({
        icon: "success",
        title: "Cashout Successful",
        text: res.data.message || "Your cashout was successful",
      });

      if (onCashoutSuccess) onCashoutSuccess();

      navigate("/dashboard/trans-history");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Cashout Failed",
        text:
          err.response?.data?.message ||
          "Incorrect password or something went wrong",
      });
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 relative"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-transferring-coins-between-mobile-phones-a-3d-render-of-mobile-wallet-image_3788460.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 "></div>

      {/* Glass Card */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">💳 Cashout</h2>
        <p className="text-gray-200 mb-6 text-center">
          <span className="block mb-1">
            Amount: <strong>৳{amount}</strong>
          </span>
          <span className="block mb-1">
            Merchant: <strong>{fullPhone}</strong>
          </span>
          <span className="block">Note: {note || "No note"}</span>
        </p>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
        />

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/dashboard/cashout")}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-600 hover:bg-gray-500 transition"
          >
            Back
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="flex-1 px-4 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashoutStep2;
