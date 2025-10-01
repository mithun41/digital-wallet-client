import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CashOut = () => {
  const [merchantPhone, setMerchantPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!merchantPhone || !amount) {
      alert("Please enter merchant phone and amount");
      return;
    }
    navigate("/dashboard/cashout/confirm", {
      state: { merchantPhone, amount, note },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Cashout</h2>
        <input
          type="text"
          placeholder="Merchant Phone"
          value={merchantPhone}
          onChange={(e) => setMerchantPhone(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 mb-3"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 mb-3"
        />
        <input
          type="text"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 mb-4"
        />
        <button
          onClick={handleNext}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CashOut;
