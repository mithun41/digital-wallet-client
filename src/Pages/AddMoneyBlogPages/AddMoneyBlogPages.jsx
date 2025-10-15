import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaCreditCard, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";

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
            Follow these simple steps to securely add money to your Digital Wallet and enjoy seamless transactions anytime, anywhere.
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
              Adding money to your wallet is quick, secure, and convenient. Whether you’re topping up for daily payments, bill settlements, or shopping, the process takes less than a minute.
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <FaMoneyBillWave className="text-green-600 mt-1" />
                <span>
                  Go to the <strong>“Add Money”</strong> section on your home dashboard. You’ll find it under the main <strong>Wallet</strong> menu.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCreditCard className="text-green-600 mt-1" />
                <span>
                  Enter your <strong>desired amount</strong> (minimum BDT 100) and select a payment method — <strong>Bank Transfer</strong>, <strong>Debit/Credit Card</strong>, or <strong>Mobile Banking</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaShieldAlt className="text-green-600 mt-1" />
                <span>
                  Verify your details carefully and confirm that your payment channel is <strong>secure and verified</strong> by your provider.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  Click <strong>“Confirm”</strong> to process your transaction. The system will automatically update your wallet balance once the payment is successful.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-green-600 mt-1" />
                <span>
                  In case of network delay, please wait a few seconds — your funds are securely processing and will reflect soon.
                </span>
              </li>
            </ol>

            {/* Tips Section */}
            <div className="mt-10 bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-green-500">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                💡 Pro Tips for a Smooth Transaction
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Always double-check your entered amount before confirming.</li>
                <li>Make sure your internet connection is stable during payment.</li>
                <li>Use your registered card or bank account for faster verification.</li>
                <li>If a transaction fails, do not retry immediately — wait for confirmation or check your transaction history.</li>
              </ul>
            </div>

            <div className="mt-8 bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-green-500">
              <p className="text-green-800 dark:text-green-300 font-semibold text-lg flex items-center gap-2">
                <FaCheckCircle /> Your wallet balance will update instantly once payment is confirmed! 🎉
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
            Need help? Contact our <span className="text-green-600 font-medium">24/7 Support</span> or visit the <span className="font-medium text-green-600">Help Center</span> for detailed FAQs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AddMoneyBlogPages;
