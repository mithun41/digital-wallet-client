import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const MobileCard = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#1A0033] via-[#330066] to-[#590080] text-white px-4 py-16 lg:px-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 opacity-20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 opacity-20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Left Content */}
      <div className="flex-1 max-w-lg space-y-6 z-10 text-center lg:text-left mb-12 lg:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold leading-tight"
        >
          Our Easy Steps For <span className="text-[#9F7AEA]">SignUp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 mx-auto lg:mx-0 max-w-md"
        >
          Follow these simple steps to quickly create your account, set up your
          preferences, and start using our platform seamlessly. No hassle, no
          confusion—just a few easy actions to get you started.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mx-auto lg:mx-0 max-w-md"
        >
          {[
            "Sign in with Mobile Number",
            "User Configuration",
            "Select Country Location",
            "Enter the Transaction",
            "Enjoy the Full Access",
            "Complete Setup",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 text-gray-200 text-lg"
            >
              <FaCheckCircle className="text-[#9F7AEA]" /> {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
        >
          <a
            href="/signup"
            className="bg-[#9F7AEA] hover:bg-[#805AD5] px-8 py-3 rounded-full font-semibold shadow-lg transition-all text-white text-lg"
          >
            SignUp Now
          </a>
          <a
            href="/get-started"
            className="border border-[#9F7AEA] hover:bg-[#9F7AEA]/20 px-8 py-3 rounded-full font-semibold transition-all text-[#9F7AEA] text-lg"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Right Content - Phone Mockup */}
      <div className="flex-1 relative hidden lg:flex justify-center items-center z-10 min-h-[600px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-80 h-[580px] rounded-[3rem] bg-[#0A0D18] p-4 shadow-2xl overflow-hidden border-8 border-gray-700/50"
        >
          {/* Top Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-800 rounded-full z-20"></div>

          {/* Phone Screen */}
          <div className="relative h-full w-full rounded-[2.5rem] bg-black text-white p-6 pt-12 flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold">9:41</span>
              <div className="flex items-center space-x-1">
                <span className="w-4 h-3 bg-white rounded-[2px]"></span>
                <span className="w-1 h-3 bg-white rounded-[2px]"></span>
                <span className="w-1 h-3 bg-gray-500 rounded-[2px]"></span>
              </div>
            </div>

            {/* Welcome & Balance */}
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm">Welcome.</p>
              <h3 className="text-white text-xl font-bold mb-1">Mike Joe</h3>
              <h2 className="text-white text-4xl font-bold mt-2">
                $1450.<span className="text-gray-400 text-3xl">00</span>
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around mb-8">
              {[
                { icon: "💰", label: "Incomes" },
                { icon: "📊", label: "Expenses" },
                { icon: "💳", label: "Cards" },
                { icon: "•••", label: "More" },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center justify-center space-y-1 text-sm text-gray-400"
                >
                  <span className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Last Activity */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-400 text-sm">Last Activity</p>
                <a href="#" className="text-[#9F7AEA] text-sm">
                  See All
                </a>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-lg">
                      N
                    </div>
                    <div>
                      <p className="font-semibold">Netflix Subscription</p>
                      <p className="text-gray-500 text-xs">Just now</p>
                    </div>
                  </div>
                  <span className="font-bold">-$5.00</span>
                </div>
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-lg">
                      🛒
                    </div>
                    <div>
                      <p className="font-semibold">Monthly Shopping</p>
                      <p className="text-gray-500 text-xs">Just now</p>
                    </div>
                  </div>
                  <span className="font-bold">-$120.90</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileCard;
