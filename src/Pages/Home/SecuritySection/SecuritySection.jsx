import React from "react";
import { FaLock, FaShieldAlt, FaMobileAlt, FaBell } from "react-icons/fa";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "Encrypted Transactions",
      description: "All your transactions are encrypted with the latest security standards.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Wallet",
      description: "Two-factor authentication and strong password policies protect your account.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "Device Management",
      description: "Control which devices can access your wallet and monitor login activity.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaBell />,
      title: "Instant Alerts",
      description: "Receive real-time notifications for every transaction to stay informed.",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Security & Trust</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {securityFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${feature.color} text-white text-2xl`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
