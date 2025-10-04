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

  // লগইন করা ইউজারের ফোন Redux থেকে নিলাম
  const senderPhone = useSelector((state) => state.auth.user?.phone);

  // ✅ Step 1 → Receiver check
  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    if (!receiverPhone) {
      setError("Receiver phone is required");
      return;
    }
    if (!amount) {
      setError("Amount is required");
      return;
    }

    const fullPhone = receiverPhone.startsWith("+88")
      ? receiverPhone
      : `+88${receiverPhone}`;

    // ❌ নিজের নাম্বারে টাকা পাঠানো ব্লক
    if (
      senderPhone &&
      (fullPhone === senderPhone || fullPhone === `+88${senderPhone}`)
    ) {
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
        "https://digital-wallet-server-tau.vercel.app/api/users/check-user",
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

  // ✅ Step 2 → Confirm & send
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const fullPhone = receiverPhone.startsWith("+88")
        ? receiverPhone
        : `+88${receiverPhone}`;

      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/send-money",
        {
          receiverPhone: fullPhone,
          amount: parseFloat(amount),
          note,
          password,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await Swal.fire({
        icon: "success",
        title: "Transaction Successful",
        text: res.data.message || "Your money has been sent successfully!",
      });

      // Reset form
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
      <div className="absolute inset-0 bg-black/30 "></div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>

            <div className="flex items-center bg-white/20 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-300">+88</span>
              <input
                type="text"
                placeholder="01XXXXXXXXX"
                value={receiverPhone}
                onChange={(e) => {
                  const num = e.target.value.replace(/\D/g, "");
                  setReceiverPhone(num);
                }}
                className="flex-1 bg-transparent outline-none px-3 py-2 text-white placeholder-gray-300"
              />
            </div>

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400"
            />

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold transition disabled:opacity-50"
            >
              {loading ? "Checking..." : "Next"}
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleConfirm} className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Confirm</h2>
            <p className="text-gray-200 text-center">
              Sending <strong>৳{amount}</strong> to:
            </p>

            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
              <img
                src={receiverInfo?.photo || "https://via.placeholder.com/50"}
                alt="Receiver"
                className="w-12 h-12 rounded-full object-cover border border-white/30"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {receiverInfo?.name || "Unknown User"}
                </h3>
                <p className="text-gray-300">{receiverInfo?.phone}</p>
              </div>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              placeholder="Note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400"
              rows={3}
            />

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-lg bg-gray-600 hover:bg-gray-500 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold transition disabled:opacity-50"
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
