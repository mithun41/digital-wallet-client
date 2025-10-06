<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======

import React from "react";
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
import { FaLock, FaShieldAlt, FaMobileAlt, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const SecuritySection = () => {
  const features = [
    {
      icon: <FaLock />,
      title: "Encrypted Transactions",
      description:
<<<<<<< HEAD
        "All your transactions are encrypted with industry-grade security to ensure maximum protection for your digital wallet.",
      color: "from-blue-500 to-blue-700",
      bg: "from-blue-100/30 to-blue-200/20 dark:from-blue-900/30 dark:to-blue-800/20",
=======
        "Your data and funds are protected by end-to-end AES-256 encryption.",
      color: "from-blue-500 to-indigo-600",
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
    },
    {
      icon: <FaShieldAlt />,
      title: "Advanced Security",
      description:
<<<<<<< HEAD
        "Our wallet uses advanced authentication methods like 2FA and biometric login to keep your assets safe.",
      color: "from-green-500 to-green-700",
      bg: "from-green-100/30 to-green-200/20 dark:from-green-900/30 dark:to-green-800/20",
=======
        "Two-factor authentication and fraud detection keep your wallet safe.",
      color: "from-green-500 to-emerald-600",
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
    },
    {
      icon: <FaMobileAlt />,
      title: "Device Management",
      description:
<<<<<<< HEAD
        "Manage your connected devices, approve new logins, and stay in control of your account access anytime.",
      color: "from-purple-500 to-purple-700",
      bg: "from-purple-100/30 to-purple-200/20 dark:from-purple-900/30 dark:to-purple-800/20",
=======
        "Manage trusted devices and sessions directly from your dashboard.",
      color: "from-purple-500 to-fuchsia-600",
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
    },
    {
      icon: <FaBell />,
      title: "Instant Notifications",
      description:
<<<<<<< HEAD
        "Stay informed with instant push notifications for every transaction and security event.",
      color: "from-yellow-400 to-yellow-600",
      bg: "from-yellow-100/30 to-yellow-200/20 dark:from-yellow-900/30 dark:to-yellow-800/20",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % securityFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [securityFeatures.length]);

  const variants = {
    enter: { opacity: 0, x: 150, scale: 0.95 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -150, scale: 0.95 },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-11/12 mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-500 dark:text-green mb-14">
          🔐 Security & Trust
        </h2>

        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`w-full max-w-11/12 bg-gradient-to-br ${securityFeatures[activeIndex].bg} 
                backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-center gap-10`}
            >
              {/* Icon Section */}
              <motion.div
                className={`flex-shrink-0 w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br ${securityFeatures[activeIndex].color} text-white text-6xl shadow-lg`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {securityFeatures[activeIndex].icon}
              </motion.div>

              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <motion.h3
                  className="text-3xl font-semibold text-gray-900 dark:text-white mb-4"
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
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {securityFeatures[activeIndex].description}
                </p>
              </div>
=======
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
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
            </motion.div>
          </AnimatePresence>
        </div>

<<<<<<< HEAD
        {/* Slide Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {securityFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-green-500 scale-125"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
=======
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
>>>>>>> 93c5d04651ef3686750918f4cd3c29cdb87b5790
    </section>
  );
};

export default SecuritySection;

