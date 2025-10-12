import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const CashoutStep2 = ({ onCashoutSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { merchantPhone, amount, note } = location.state || {};

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [merchantInfo, setMerchantInfo] = useState(null);

  // ✅ লগইন করা ইউজারের ফোন
  const myPhone = useSelector((state) => state.auth.user?.phone);

  const fullPhone = merchantPhone?.startsWith("+88")
    ? merchantPhone
    : `+88${merchantPhone}`;

  useEffect(() => {
    if (!merchantPhone || !amount) {
      navigate("/dashboard/cashout");
      return;
    }

    const fetchMerchant = async () => {
      try {
        // ❌ নিজের number block
        if (myPhone && (myPhone === merchantPhone || myPhone === fullPhone)) {
          Swal.fire({
            icon: "error",
            title: "Invalid Action",
            text: "You cannot cashout to your own number",
          });
          navigate("/dashboard/cashout");
          return;
        }

        const token = localStorage.getItem("token");
        const res = await axios.post(
          "http://localhost:5000/api/users/check-user",
          { phone: fullPhone },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.exists) {
          setMerchantInfo(res.data.user);
        } else {
          Swal.fire({
            icon: "error",
            title: "Invalid Merchant",
            text: "No merchant found with this number",
          });
          navigate("/dashboard/cashout");
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load merchant info",
        });
        navigate("/dashboard/cashout");
      }
    };

    fetchMerchant();
  }, [merchantPhone, amount, navigate, fullPhone, myPhone]);

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
        "http://localhost:5000/api/transactions/cashout",
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
      <div className="absolute inset-0 bg-black/30 "></div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">💳 Cashout</h2>

        {merchantInfo ? (
          <>
            <div className="text-gray-200 mb-6 text-center">
              <span className="block mb-1">
                Amount: <strong>৳{amount}</strong>
              </span>
              <span className="block mb-3">Merchant:</span>

              <div className="flex items-center justify-center gap-3 bg-white/10 p-3 rounded-lg">
                <img
                  src={merchantInfo.photo || "https://via.placeholder.com/50"}
                  alt="Merchant"
                  className="w-12 h-12 rounded-full object-cover border border-white/30"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {merchantInfo.name || "Unknown Merchant"}
                  </h3>
                  <p className="text-gray-300">{merchantInfo.phone}</p>
                </div>
              </div>

              <span className="block mt-3">Note: {note || "No note"}</span>
            </div>

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
          </>
        ) : (
          <p className="text-center text-gray-300">Loading merchant info...</p>
        )}
      </div>
    </div>
  );
};

export default CashoutStep2;
