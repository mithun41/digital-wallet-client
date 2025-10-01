import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CashoutStep2 = ({ onCashoutSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { merchantPhone, amount, note } = location.state || {};
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!merchantPhone || !amount) {
    navigate("/dashboard/cashout");
  }

  const handleConfirm = async () => {
    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Password required",
        text: "Please enter your password",
      });
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/cashout",
        { merchantPhone, amount: parseFloat(amount), note, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await Swal.fire({
        icon: "success",
        title: "Cashout Successful",
        text: res.data.message || "Your cashout was successful",
      });

      if (onCashoutSuccess) onCashoutSuccess(); // optional: parent refresh

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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Cashout - Step 2</h2>
        <p className="text-gray-300 mb-4">
          Amount: ৳{amount} <br />
          Merchant: {merchantPhone} <br />
          Note: {note || "No note"}
        </p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 mb-4"
        />
        <div className="flex justify-between gap-2">
          <button
            onClick={() => navigate("/dashboard/cashout")}
            className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 text-white"
          >
            Back
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold"
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashoutStep2;
