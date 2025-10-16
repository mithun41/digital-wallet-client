import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiHome } from "react-icons/fi";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 rounded-2xl bg-gray-800/40 shadow-2xl backdrop-blur-lg max-w-lg w-full"
      >
        {/* Animated 404 Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-2xl font-semibold"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-3 text-gray-300"
        >
          Oops! The page you’re looking for doesn’t exist in your Digital
          Wallet.
        </motion.p>

        {/* Illustration (Animated SVG) */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="mt-8 flex justify-center"
        >
          {/* <img
            src="https://www.setra.com/hubfs/Sajni/crc_error.jpg"
            alt="404 illustration"
            className="w-60"
          /> */}
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold text-gray-900 bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg hover:scale-105 transition-transform"
          >
            <FiHome size={22} />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error;
