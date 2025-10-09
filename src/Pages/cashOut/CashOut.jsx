import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import QrCodeScanner from "../../Components/scaner/QrCodeScanner";

const CashOut = () => {
  const [merchantPhone, setMerchantPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(""); // UI error message
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)

  console.log(openModal);

  const handleNext = async () => {
    setError(""); // reset error

    if (!merchantPhone) {
      setError("Merchant phone is required");
      return;
    }
    if (!amount) {
      setError("Amount is required");
      return;
    }

    const fullPhone = merchantPhone.startsWith("+88")
      ? merchantPhone
      : `+88${merchantPhone}`;

    try {
      setLoading(true);

      // check user exists (example: replace with your API route)
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/users/check-user",
        { phone: fullPhone },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.exists) {
        navigate("/dashboard/cashout/confirm", {
          state: { merchantPhone: fullPhone, amount, note },
        });
      } else {
        setError("Merchant not found with this phone number");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const bgStyle = {
    backgroundImage:
      "url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-transferring-coins-between-mobile-phones-a-3d-render-of-mobile-wallet-image_3788460.jpg')",
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
        <h2 className="text-3xl font-bold text-center mb-6">Cashout</h2>

        <div className="flex items-center bg-white/20 rounded-lg overflow-hidden mb-4">
          <span className="px-3 text-gray-300">+88</span>
          <input
            type="text"
            placeholder="01XXXXXXXXX"
            value={merchantPhone}
            onChange={(e) => {
              let val = e.target.value.replace(/\D/g, "");
              setMerchantPhone(val);
            }}
            className="flex-1 bg-transparent px-3 py-2 text-white placeholder-gray-300 outline-none"
            required
          />
        </div>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
          required
        />

        <textarea
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
          rows={3}
        />

        {/* error message UI */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleNext}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold transition disabled:opacity-50"
        >
          {loading ? "Checking..." : "Next"}
        </button>
         <div className="divider">OR</div>
         <button onClick={() => setOpenModal(true)} type="button" className="border border-yellow-400 rounded p-2 cursor-pointer font-bold">Scan the QR Code</button>
      </div>
      {
        openModal && <QrCodeScanner onClose={() => setOpenModal(false)}></QrCodeScanner>
      }
    </div>
  );
};

export default CashOut;
