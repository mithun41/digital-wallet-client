import React from "react";
import { FaWallet, FaMoneyBillWave, FaGift, FaExchangeAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Add Money",
      description: "Top up your wallet instantly from your bank account or card.",
      icon: <FaMoneyBillWave />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Send Money",
      description: "Transfer funds to friends, family, or merchants securely.",
      icon: <FaExchangeAlt />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Wallet",
      description: "Check your wallet balance and manage your funds easily.",
      icon: <FaWallet />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Rewards",
      description: "Earn cashback and rewards on your transactions.",
      icon: <FaGift />,
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">What You Can Do</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${feature.color} text-white text-2xl`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
