import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Wallet,
  Send,
  CreditCard,
  Receipt,
  Shield,
  FileText,
} from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const features = [
    {
      id: 1,
      title: "Wallet Management",
      desc: "Add, withdraw, and track balances in real-time with multiple wallet support.",
      icon: <Wallet className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Fund Transfers",
      desc: "Send money instantly via phone, email, or QR with confirmation & receipt.",
      icon: <Send className="w-8 h-8 text-green-500" />,
    },
    {
      id: 3,
      title: "Merchant Payments",
      desc: "Pay businesses securely with QR codes or merchant IDs for contactless transactions.",
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
    },
    {
      id: 4,
      title: "Bill Payments & Recharges",
      desc: "Pay electricity, gas, water bills, and mobile top-ups with recurring payments.",
      icon: <Receipt className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 5,
      title: "Transaction History",
      desc: "Filter, track, and export statements with analytics and reporting.",
      icon: <FileText className="w-8 h-8 text-red-500" />,
    },
    {
      id: 6,
      title: "Advanced Security",
      desc: "OTP + PIN protection with fraud detection alerts and encryption.",
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Why Choose PayMate?
        </h2>
        <p className="text-gray-600">
          Experience the future of digital payments with our secure financial
          tools.
        </p>
      </div>

      {/* grid layout */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        data-aos="fade-up"
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start hover:shadow-xl transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
