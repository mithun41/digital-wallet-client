import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GraduationCap,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Calculator,
  CreditCard,
  Building,
} from "lucide-react";

const EducationFeeCalculator = () => {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [institution, setInstitution] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("wallet");

  const [originalAmount, setOriginalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const DISCOUNT_PERCENT = 5; // ৫% discount

  // 🔹 Calculate discount dynamically
  useEffect(() => {
    const amount = parseFloat(feeAmount) || 0;
    const discount = (amount * DISCOUNT_PERCENT) / 100;
    const total = amount - discount;
    setOriginalAmount(amount);
    setDiscountAmount(discount);
    setTotalAmount(total);
  }, [feeAmount]);

  // 🔹 Proceed button
  const handleProceed = () => {
    if (studentName && studentId && institution && feeAmount) {
      setShowModal(true);
    } else {
      alert("⚠️ Please fill all required fields!");
    }
  };

  // 🔹 Confirm payment
  const handleConfirm = async () => {
    setLoading(true);
    try {
      const paymentData = {
        studentName,
        studentId,
        institution,
        feeAmount: originalAmount,
        discountPercent: DISCOUNT_PERCENT,
        discountAmount,
        totalAmount,
        paymentMethod,
      };

      const res = await axios.post("https://digital-wallet-server-tau.vercel.app/api/education", paymentData);

      if (res.data.success) {
        setPaymentDone(true);
        console.log("✅ Payment Saved:", res.data);
      } else {
        alert("❌ Payment failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setPaymentDone(false);
        setShowModal(false);
        setStudentName("");
        setStudentId("");
        setInstitution("");
        setFeeAmount("");
        setPaymentMethod("wallet");
      }, 3000);
    }
  };

  const schools = [
    "Dhaka University",
    "BUET",
    "Chittagong University",
    "BRAC University",
    "North South University",
    "IUB",
    "Other",
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center py-12 px-4"
         style={{ backgroundImage: "url('https://i.postimg.cc/FzPP6WJd/shutterstock-520698799small.jpg')" }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-gray-800">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-green-600 to-green-600 p-4 rounded-3xl mb-4 text-white shadow-lg">
            <GraduationCap size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-3">
            Education Fee Payment
          </h1>
          <p className="text-gray-200 text-lg">
            Pay your tuition fees securely with digital wallet
          </p>
        </div>

        {/* Info Banner */}
        <div className="backdrop-blur-md border border-white/20 border-l-4 border-blue-600 p-4 mb-8 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-white font-semibold">Discount: {DISCOUNT_PERCENT}%</p>
            <p className="text-white text-sm">
              
              A {DISCOUNT_PERCENT}% discount will be deducted from your payment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2 backdrop-blur-md border border-white/20 text-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CreditCard size={28} className="text-white" />
              Payment Details
            </h2>

            <div className="space-y-5">
              <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)}
                     placeholder="Student Name *"
                     className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400" />

              <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)}
                     placeholder="Student ID *"
                     className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400" />

              <select value={institution} onChange={(e) => setInstitution(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-black outline-none focus:ring-2 focus:ring-green-400">
                <option value="">Select Institution *</option>
                {schools.map((school) => (
                  <option key={school} value={school}>{school}</option>
                ))}
              </select>

              <input type="number" value={feeAmount} onChange={(e) => setFeeAmount(e.target.value)}
                     placeholder="Fee Amount (BDT) *"
                     className="w-full px-3 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-green-400" />

              <div className="flex gap-4">
                {["wallet", "bank"].map((method) => (
                  <label key={method} className="flex-1 flex items-center justify-center gap-2 border-2 rounded-xl p-3 cursor-pointer">
                    <input type="radio" value={method} checked={paymentMethod === method} onChange={(e) => setPaymentMethod(e.target.value)} />
                    {method === "wallet" ? <CreditCard className="text-green-600" size={22} /> : <Building className="text-green-600" size={22} />}
                    <span className="capitalize font-semibold">{method}</span>
                  </label>
                ))}
              </div>

              <button onClick={handleProceed} className="w-full bg-gradient-to-r from-green-600 to-green-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                Proceed to Payment
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-1 bg-opacity-95 rounded-3xl backdrop-blur-md border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Calculator size={24} className="text-white" />
              Fee Summary
            </h3>
            <p className="text-white">Original: ৳ {originalAmount.toFixed(2)}</p>
            <p className="text-white">Discount: ৳ {discountAmount.toFixed(2)}</p>
            <p className="font-bold mt-2 text-white">Total: ৳ {totalAmount.toFixed(2)}</p>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl max-w-md w-full">
              {!paymentDone ? (
                <>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Confirm Payment</h3>
                  <p className="text-center mb-4 text-white">Student: {studentName} ({studentId})</p>
                  <p className="text-center mb-4 font-semibold text-white">Total: ৳ {totalAmount.toFixed(2)}</p>
                  <div className="flex gap-3">
                    <button onClick={() => setShowModal(false)} className="flex-1 bg-gray-200 py-3 rounded-xl">Cancel</button>
                    <button onClick={handleConfirm} disabled={loading} className="flex-1 bg-gradient-to-r from-green-500 to-green-500 text-white py-3 rounded-xl font-semibold">
                      {loading ? "Processing..." : "Confirm"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white">Payment Successful!</h3>
                  <p className="text-white font-semibold mt-2">Transaction ID generated ✅</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationFeeCalculator;
