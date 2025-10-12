import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SendMoney = () => {
  const [step, setStep] = useState(1);
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverInfo, setReceiverInfo] = useState(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const senderPhone = useSelector((state) => state.auth.user?.phone);

  // Transaction fee
  const parsedAmount = parseFloat(amount) || 0;
  const transactionFee = parsedAmount > 0 ? 5 : 0;
  const totalDeduction = parsedAmount + transactionFee;

  const bgStyle = {
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/009/097/172/non_2x/e-wallet-digital-wallet-application-internet-banking-online-payment-security-via-credit-card-online-money-transaction-concept-coin-icon-on-dark-background-eps10-illustration-free-vector.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const getFullPhone = (phone) =>
    phone.startsWith("+88") ? phone : `+88${phone}`;

  // Step 1 → check receiver
  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    if (!receiverPhone) {
      setError("Receiver phone is required");
      return;
    }
    if (!amount || parsedAmount <= 0) {
      setError("Enter a valid amount");
      return;
    }

    const fullPhone = getFullPhone(receiverPhone);

    if (fullPhone === senderPhone || fullPhone === getFullPhone(senderPhone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Transaction",
        text: "You cannot send money to your own number.",
      });
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/users/check-user",
        { phone: fullPhone },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.exists) {
        setReceiverInfo(res.data.user);
        setStep(2);
      } else {
        setError("Receiver not found with this phone number");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 → confirm & send
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const fullPhone = getFullPhone(receiverPhone);

      await axios.post(
        "http://localhost:5000/api/transactions/send-money",
        {
          receiverPhone: fullPhone,
          amount: parsedAmount, // main amount
          fee: transactionFee, // fee separately
          note,
          password,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await Swal.fire({
        icon: "success",
        title: "Transaction Successful",
        text: `${parsedAmount} sent to ${receiverInfo.name} (+ Fee: ${transactionFee})`,
      });

      setReceiverPhone("");
      setReceiverInfo(null);
      setAmount("");
      setNote("");
      setPassword("");
      setStep(1);
      dispatch(fetchUser());
      navigate("/dashboard/trans-history");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Transaction Failed",
        text: err.response?.data?.message || "Something went wrong",
      });
      setError(err.response?.data?.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => `৳${parseFloat(value).toFixed(2)}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl max-w-md w-full text-white">
        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          <div
            className={`flex-1 text-center border-b-2 pb-1 ${
              step === 1
                ? "border-yellow-400 font-bold text-yellow-300"
                : "border-gray-600 text-gray-400"
            }`}
          >
            1. Details
          </div>
          <div
            className={`flex-1 text-center border-b-2 pb-1 ${
              step === 2
                ? "border-yellow-400 font-bold text-yellow-300"
                : "border-gray-600 text-gray-400"
            }`}
          >
            2. Confirm
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-yellow-300">
              Send Money
            </h2>

            <div className="flex items-center bg-white/20 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-300">+88</span>
              <input
                type="text"
                placeholder="01XXXXXXXXX"
                value={receiverPhone}
                onChange={(e) =>
                  setReceiverPhone(e.target.value.replace(/\D/g, ""))
                }
                className="flex-1 bg-transparent outline-none px-3 py-2 text-white placeholder-gray-300"
              />
            </div>

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {parsedAmount > 0 && (
              <div className="p-3 bg-white/10 rounded-lg text-sm text-gray-200">
                <p className="flex justify-between">
                  <span>Amount:</span>
                  <span>{formatCurrency(parsedAmount)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Fee:</span>
                  <span>{formatCurrency(transactionFee)}</span>
                </p>
                <p className="flex justify-between font-bold text-yellow-300">
                  <span>Total Deduction:</span>
                  <span>{formatCurrency(totalDeduction)}</span>
                </p>
              </div>
            )}

            {error && <p className="text-red-400 text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold transition disabled:opacity-50"
            >
              {loading ? "Checking..." : "Next"}
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleConfirm} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-yellow-300">
              Confirm Transaction
            </h2>
            <p className="text-gray-300 text-center">
              Sending <strong>{formatCurrency(parsedAmount)}</strong> to:
            </p>

            <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg">
              <img
                src={receiverInfo?.photo || "https://via.placeholder.com/50"}
                alt="Receiver"
                className="w-14 h-14 rounded-full border-2 border-yellow-400"
              />
              <div>
                <h3 className="font-semibold text-lg text-yellow-200">
                  {receiverInfo?.name || "Unknown"}
                </h3>
                <p className="text-gray-300">{receiverInfo?.phone}</p>
              </div>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              placeholder="Note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
              rows={3}
            />

            {error && <p className="text-red-400 text-center">{error}</p>}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-lg bg-gray-600 hover:bg-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold"
              >
                {loading ? "Sending..." : "Confirm"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
