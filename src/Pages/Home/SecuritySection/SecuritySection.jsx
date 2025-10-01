import React, { useState } from "react";
import { FaLock, FaShieldAlt, FaMobileAlt, FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "Encrypted Transactions",
      description:
        "All your transactions are encrypted with the latest security standards.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Wallet",
      description:
        "Two-factor authentication and strong password policies can protect your account.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "Device Management",
      description:
        "Control which devices can access your wallet and monitor login activity.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaBell />,
      title: "Instant Alerts",
      description:
        "Receive real-time notifications for every transaction to stay informed.",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % securityFeatures.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? securityFeatures.length - 1 : prev - 1
    );
  };

  // Animation for enter/exit
  const variants = {
    enter: { opacity: 0, x: 100, filter: "blur(8px)" },
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -100, filter: "blur(8px)" },
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold text-center mb-12">Security & Trust</h2>

      <div className="relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="relative p-8 rounded-2xl shadow-xl flex flex-col items-center text-center w-full max-w-md 
                       bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 
                       border border-gray-200 dark:border-gray-700 transition-colors"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {/* Focused card has live animation */}
            <motion.div
              className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${securityFeatures[activeIndex].color} text-white text-2xl`}
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {securityFeatures[activeIndex].icon}
            </motion.div>

            <motion.h3
              className="text-xl font-semibold mb-2"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {securityFeatures[activeIndex].title}
            </motion.h3>

            <p className="text-gray-600 dark:text-gray-300">
              {securityFeatures[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow p-3 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow p-3 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default SecuritySection;
