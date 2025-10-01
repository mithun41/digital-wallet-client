import React from "react";
import { FaWallet, FaMoneyBillWave, FaGift, FaExchangeAlt } from "react-icons/fa";
// <<<<<<< HEAD
import { Link } from "react-router";
import {  useAnimation } from "framer-motion";
// >>>>>>> 7821e1eda25375449def8b2bae779baedbd6ade8
// >>>>>>> 2ba309432c6892ea94caa212c3723e2e15bd3584
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: "Add Money",
      description:
        "Top up your wallet instantly from your bank account or card.",
      icon: <FaMoneyBillWave />,
      color: "from-green-400 to-green-600",
      link: "",
    },
    {
      title: "Send Money",
      description: "Transfer funds to friends, family, or merchants securely.",
      icon: <FaExchangeAlt />,
      color: "from-blue-400 to-blue-600",
      link: "/Send_money",
    },
    {
      title: "Wallet",
      description: "Check your wallet balance and manage your funds easily.",
      icon: <FaWallet />,
      color: "from-purple-400 to-purple-600",
      link: "",
    },
    {
      title: "Rewards",
      description: "Earn cashback and rewards on your transactions.",
      icon: <FaGift />,
      color: "from-yellow-400 to-yellow-500",
      link: "",
    },
  ];

  return (
<<<<<<< HEAD
    <section className="max-w-10/12 mx-auto px-4 py-16" ref={ref}>
      <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-14">
        Explore Our Features
=======
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl text-primary font-bold text-center mb-12">
        What You Can Do
>>>>>>> 4c2e2dd49c76510fb38c588ad3a092b637346c5d
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Link
            to={feature.link}
            key={index}
            className="bg-cardColor p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${feature.color} text-white text-2xl`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sazzad text-sm">{feature.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
