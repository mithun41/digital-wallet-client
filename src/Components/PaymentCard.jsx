import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PaymentCard = () => {
  const payments = [
    { name: "Electricity", icon: "⚡", color: "from-yellow-400 to-yellow-600", bgGlow: "group-hover:shadow-yellow-500/50", path: "/electricity" },
    { name: "Internet", icon: "📡", color: "from-red-400 to-red-600", bgGlow: "group-hover:shadow-red-500/50", path: "/internet" },
    { name: "Voucher", icon: "🎫", color: "from-green-400 to-green-600", bgGlow: "group-hover:shadow-green-500/50", path: "/voucher" },
    { name: "Assurance", icon: "🛡️", color: "from-pink-400 to-pink-600", bgGlow: "group-hover:shadow-pink-500/50", path: "/assurance" },
    { name: "Merchant", icon: "🏪", color: "from-green-500 to-green-700", bgGlow: "group-hover:shadow-green-600/50", path: "/merchant" },
    { name: "Mobile Credit", icon: "📱", color: "from-blue-400 to-blue-600", bgGlow: "group-hover:shadow-blue-500/50", path: "/mobile-credit" },
    { name: "Bill", icon: "🧾", color: "from-orange-400 to-orange-600", bgGlow: "group-hover:shadow-orange-500/50", path: "/bill" },
    { name: "More", icon: "⋯", color: "from-indigo-400 to-indigo-600", bgGlow: "group-hover:shadow-indigo-500/50", path: "/more" },
  ];

  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative max-w-11/12 mx-auto px-4 py-16" ref={ref}>
      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3"
        >
          Payment Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg"
        >
          Fast, secure, and convenient payment solutions
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7"
        variants={containerVariants}
        initial="hidden"
        animate={controls}

        // border border-transparent hover:border-green-500



      >
        {payments.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <button
              onClick={() => console.log(`Navigate to ${item.path}`)}
              className={`group relative w-full bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-lg 
  dark:shadow-gray-900/50 flex flex-col items-center text-center overflow-hidden transition-all 
  duration-500 hover:shadow-2xl ${item.bgGlow} border border-gray-100 dark:border-gray-700 
  hover:border-green-500 cursor-pointer`}

              // className={`group  relative w-full  bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-lg 
              //   dark:shadow-gray-900/50 flex flex-col items-center text-center overflow-hidden transition-all 
              //   duration-500 hover:shadow-2xl  ${item.bgGlow} border border-gray-100 dark:border-gray-700 
              //   hover:border-transparent cursor-pointer`}
            >
              {/* Icon wrapper */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative w-16 h-16 md:w-18 md:h-18  flex items-center justify-center mb-4 rounded-2xl bg-gradient-to-br ${item.color} text-white text-3xl md:text-4xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}
              >
                <span className="relative z-10">{item.icon}</span>
              </motion.div>

              {/* Card name */}
              <span className="relative z-10 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {item.name}
              </span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PaymentCard;