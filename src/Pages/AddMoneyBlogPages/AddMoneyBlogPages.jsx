import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaCreditCard, FaCheckCircle } from "react-icons/fa";

const AddMoneyBlogPages = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Add Money – Step by Step Guide 💰
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Follow these quick steps to top up your digital wallet securely and
            instantly.
          </p>
        </motion.div>

        {/* Blog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-8 border border-green-200 dark:border-gray-700"
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              Adding money to your wallet is super simple and secure. Here’s how
              you can do it in just a few easy steps:
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <FaMoneyBillWave className="text-green-600 mt-1" />
                <span>
                  Go to the <strong>“Add Money”</strong> section from your home
                  dashboard.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCreditCard className="text-green-600 mt-1" />
                <span>
                  Enter your <strong>desired amount</strong> and choose a
                  payment method — Bank or Card.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  Click <strong>“Confirm”</strong> and complete your secure
                  transaction.
                </span>
              </li>
            </ol>

            <div className="mt-8 bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-green-500">
              <p className="text-green-800 dark:text-green-300 font-semibold text-lg flex items-center gap-2">
                <FaCheckCircle /> Your wallet balance will update instantly! 🎉
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Need help? Contact our <span className="text-green-600 font-medium">24/7 Support</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AddMoneyBlogPages;
