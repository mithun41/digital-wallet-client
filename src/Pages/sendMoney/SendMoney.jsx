import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const [step, setStep] = useState(1); // Step 1 = Receiver info, Step 2 = Confirm
  const [receiverPhone, setReceiverPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [password, setPassword] = useState(""); // confirm password
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Step 1 -> go to Step 2
  const handleNext = (e) => {
    e.preventDefault();
    if (!receiverPhone || !amount) {
      Swal.fire("Error", "Receiver phone & amount required", "error");
      return;
    }
    setStep(2);
  };

  // Step 2 -> Final send money
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/send-money",
        { receiverPhone, amount: parseFloat(amount), note, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Transaction Successful 🎉",
        text: `You sent ৳${amount} to ${receiverPhone}`,
        timer: 2500,
        showConfirmButton: false,
      });

      // Reset
      setReceiverPhone("");
      setAmount("");
      setNote("");
      setPassword("");
      setStep(1);

      // Refetch user & navigate
      dispatch(fetchUser());
      navigate("/dashboard/trans-history");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Transaction Failed",
        text: err.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Send Money
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Receiver Phone
            </label>
            <input
              type="text"
              value={receiverPhone}
              onChange={(e) => setReceiverPhone(e.target.value)}
              placeholder="+8801XXXXXXXXX"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleConfirm} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Confirm Transaction
          </h2>

          <p className="text-center text-gray-600">
            Sending <strong>৳{amount}</strong> to{" "}
            <strong>{receiverPhone}</strong>
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Note (optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
              rows="3"
            ></textarea>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Confirm"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SendMoney;
