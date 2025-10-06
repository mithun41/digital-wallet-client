
import React from "react";
import { FaLock, FaShieldAlt, FaMobileAlt, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const SecuritySection = () => {
  const features = [
    {
      icon: <FaLock />,
      title: "Encrypted Transactions",
      description:
        "Your data and funds are protected by end-to-end AES-256 encryption.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Advanced Security",
      description:
        "Two-factor authentication and fraud detection keep your wallet safe.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "Device Management",
      description:
        "Manage trusted devices and sessions directly from your dashboard.",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      icon: <FaBell />,
      title: "Instant Notifications",
      description:
        "Stay informed with instant transaction and security alerts on every device.",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Security & Trust
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Every layer of PayMate is built with enterprise-grade protection to
          keep your money and data secure.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            className="relative bg-white/80 dark:bg-gray-900/70 
                       border border-gray-200 dark:border-gray-700 
                       backdrop-blur-lg rounded-3xl p-8 text-center 
                       shadow-lg transition-all duration-300"
          >
            <motion.div
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                          rounded-full bg-gradient-to-br ${feature.color} text-white text-2xl`}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SecuritySection;

