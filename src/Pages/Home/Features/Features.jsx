import React from "react";
import { FaWallet, FaMoneyBillWave, FaGift, FaExchangeAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Add Money",
      description: "Top up your wallet instantly from your bank account or card.",
      icon: <FaMoneyBillWave className="text-3xl text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Send Money",
      description: "Transfer funds to friends, family, or merchants securely.",
      icon: <FaExchangeAlt className="text-3xl text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Wallet",
      description: "Check your wallet balance and manage your funds easily.",
      icon: <FaWallet className="text-3xl text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Rewards",
      description: "Earn cashback and rewards on your transactions.",
      icon: <FaGift className="text-3xl text-white" />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What You Can Do</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${feature.bgColor}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
