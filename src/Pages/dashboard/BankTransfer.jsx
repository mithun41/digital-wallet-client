import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const BankTransfer = () => {
  const [step, setStep] = useState(0); // Step 0: choose type
  const [sendType, setSendType] = useState(""); // "card" or "bank"

  const [cardNumber, setCardNumber] = useState("");
  const [receiverInfo, setReceiverInfo] = useState(null);
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // For bank transfer
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

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

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
  };

  // 🔹 Step 1 (Send Type) → Next
  const handleSelectType = (type) => {
    setSendType(type);
    setStep(1);
  };

  // 🔹 Step 1 for Card
  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    if (sendType === "card") {
      if (!cardNumber || cardNumber.replace(/\s/g, "").length !== 16) {
        setError("Enter a valid 16-digit card number");
        return;
      }
    } else if (sendType === "bank") {
      if (!bankName) {
        setError("Select a bank name");
        return;
      }
      if (!accountNumber || accountNumber.length < 10) {
        setError("Enter a valid account number");
        return;
      }
    }

    if (!amount || parsedAmount <= 0) {
      setError("Enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (sendType === "card") {
        const res = await axios.post(
          "https://digital-wallet-server-tau.vercel.app/api/cards/check-card",
          { cardNumber: cardNumber.replace(/\s/g, "") },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.exists) {
          setReceiverInfo(res.data.user);
          setStep(2);
        } else {
          setError("Card not found in our database");
        }
      } else {
        // Bank transfers skip user lookup — go directly to confirm
        setStep(2);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Confirm
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (sendType === "card") {
        await axios.post(
          "https://digital-wallet-server-tau.vercel.app/api/transactions/send-to-card",
          {
            cardNumber: cardNumber.replace(/\s/g, ""),
            amount: parsedAmount,
            fee: transactionFee,
            password,
            note,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else if (sendType === "bank") {
        await axios.post("https://digital-wallet-server-tau.vercel.app/api/transactions/send-to-bank", {
  bankAccount: accountNumber, // 🔹 match backend field
  amount: parsedAmount,
  fee: transactionFee,
  password,
  note,
}, { headers: { Authorization: `Bearer ${token}` } });
      }

      await Swal.fire({
        icon: "success",
        title: "Transaction Successful",
        text:
          sendType === "card"
            ? `${parsedAmount} sent to ${receiverInfo.name} (+ Fee: ${transactionFee})`
            : `${parsedAmount} sent to ${bankName} account ${accountNumber.slice(
                -4
              )} (+ Fee: ${transactionFee})`,
      });

      setCardNumber("");
      setReceiverInfo(null);
      setAmount("");
      setPassword("");
      setNote("");
      setBankName("");
      setAccountNumber("");
      setStep(0);
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

  const banks = [
    "Dutch-Bangla Bank",
    "BRAC Bank",
    "City Bank",
    "United Commercial Bank",
    "Islami Bank Bangladesh",
    "Sonali Bank",
    "Prime Bank",
    "Eastern Bank",
    "Trust Bank",
    "SouthEast Bank",
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl max-w-md w-full text-white">
        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {["Type", "Details", "Confirm"].map((label, i) => (
            <div
              key={label}
              className={`flex-1 text-center border-b-2 pb-1 ${
                step === i
                  ? "border-yellow-400 font-bold text-yellow-300"
                  : "border-gray-600 text-gray-400"
              }`}
            >
              {i + 1}. {label}
            </div>
          ))}
        </div>

        {/* Step 0: Choose Type */}
        {step === 0 && (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-extrabold text-yellow-300 mb-4">
              Select Transfer Type
            </h2>

            <button
              onClick={() => handleSelectType("card")}
              className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold transition"
            >
              Send to Card
            </button>

            <button
              onClick={() => handleSelectType("bank")}
              className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold transition"
            >
              Send to Bank Account
            </button>
          </div>
        )}

        {/* Step 1: Details */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-yellow-300">
              {sendType === "card" ? "Card Transfer" : "Bank Transfer"}
            </h2>

            {sendType === "card" ? (
              <>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(formatCardNumber(e.target.value))
                  }
                  maxLength={19}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </>
            ) : (
              <>
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black text-white outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Bank</option>
                  {banks.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Bank Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </>
            )}

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

        {/* Step 2: Confirm */}
        {step === 2 && (
          <form onSubmit={handleConfirm} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-yellow-300">
              Confirm Transaction
            </h2>

            {sendType === "card" ? (
              <p className="text-gray-300 text-center">
                Sending <strong>{formatCurrency(parsedAmount)}</strong> to:
              </p>
            ) : (
              <p className="text-gray-300 text-center">
                Sending <strong>{formatCurrency(parsedAmount)}</strong> to{" "}
                <strong>{bankName}</strong> account ending in{" "}
                {accountNumber.slice(-4)}
              </p>
            )}

            {sendType === "card" && (
              <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg">
                <img
                  src={
                    receiverInfo?.photo || "https://via.placeholder.com/50"
                  }
                  alt="Receiver"
                  className="w-14 h-14 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <h3 className="font-semibold text-lg text-yellow-200">
                    {receiverInfo?.name || "Unknown"}
                  </h3>
                  <p className="text-gray-300">
                    {receiverInfo?.cardNumber || "**** **** **** ****"}
                  </p>
                </div>
              </div>
            )}

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

export default BankTransfer;
