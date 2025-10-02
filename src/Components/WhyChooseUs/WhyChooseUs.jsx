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
  Gift,
  Headphones,
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
      icon: <Wallet className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: "Fund Transfers",
      desc: "Send money instantly via phone, email, or QR with confirmation & receipt.",
      icon: <Send className="w-8 h-8 text-green-500 dark:text-green-400" />,
    },
    {
      id: 3,
      title: "Merchant Payments",
      desc: "Pay businesses securely with QR codes or merchant IDs for contactless transactions.",
      icon: <CreditCard className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    },
    {
      id: 4,
      title: "Bill Payments & Recharges",
      desc: "Pay electricity, gas, water bills, and mobile top-ups with recurring payments.",
      icon: <Receipt className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
    },
    {
      id: 5,
      title: "Transaction History",
      desc: "Filter, track, and export statements with analytics and reporting.",
      icon: <FileText className="w-8 h-8 text-red-500 dark:text-red-400" />,
    },
    {
      id: 6,
      title: "Advanced Security",
      desc: "OTP + PIN protection with fraud detection alerts and encryption.",
      icon: <Shield className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      id: 7,
      title: "Rewards & Cashback",
      desc: "Earn cashback and loyalty rewards on every successful transaction.",
      icon: <Gift className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    },
    {
      id: 8,
      title: "24/7 Customer Support",
      desc: "Get instant help through chat, email, or phone anytime, anywhere.",
      icon: <Headphones className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          Why Choose PayMate?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Experience the future of digital payments with our secure financial tools.
        </p>
      </div>

      {/* Grid Section */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-xl p-5 sm:p-6 flex flex-col items-start hover:shadow-xl dark:hover:shadow-gray-600 transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
