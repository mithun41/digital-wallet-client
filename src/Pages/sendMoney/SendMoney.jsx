import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";
import Swal from "sweetalert2";

const SendMoney = () => {
  const [receiverPhone, setReceiverPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMoney = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://digital-wallet-server-tau.vercel.app/api/transactions/send",
        { receiverPhone, amount: parseFloat(amount), note },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(res.data.message);

      // ✅ SweetAlert success popup
      Swal.fire({
        icon: "success",
        title: "Transaction Successful 🎉",
        text: `You have sent ৳${amount} to ${receiverPhone}`,
        showConfirmButton: false,
        timer: 3000,
      });

      // reset form
      setReceiverPhone("");
      setAmount("");
      setNote("");
      dispatch(fetchUser());
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong";
      setMessage(errorMsg);

      // ❌ Error alert
      Swal.fire({
        icon: "error",
        title: "Transaction Failed",
        text: errorMsg,
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Send Money
      </h2>

      <form onSubmit={handleSendMoney} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Receiver Phone
          </label>
          <input
            type="text"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
            placeholder="+8801XXXXXXXXX"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Money"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm font-medium text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
};

export default SendMoney;
