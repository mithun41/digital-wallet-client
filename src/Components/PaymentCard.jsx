import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PaymentCard = () => {
  const payments = [
    {
      name: "Electricity",
      icon: "⚡",
      color: "from-yellow-400 to-yellow-600",
      bgGlow: "group-hover:shadow-yellow-500/50",
      path: "/electricity",
    },
    {
      name: "Internet",
      icon: "📡",
      color: "from-red-400 to-red-600",
      bgGlow: "group-hover:shadow-red-500/50",
      path: "/internet",
    },
    {
      name: "Voucher",
      icon: "🎫",
      color: "from-green-400 to-green-600",
      bgGlow: "group-hover:shadow-green-500/50",
      path: "/voucher",
    },
    {
      name: "Assurance",
      icon: "🛡️",
      color: "from-pink-400 to-pink-600",
      bgGlow: "group-hover:shadow-pink-500/50",
      path: "/assurance",
    },
    {
      name: "Merchant",
      icon: "🏪",
      color: "from-green-500 to-green-700",
      bgGlow: "group-hover:shadow-green-600/50",
      path: "/merchant",
    },
    {
      name: "Mobile Credit",
      icon: "📱",
      color: "from-blue-400 to-blue-600",
      bgGlow: "group-hover:shadow-blue-500/50",
      path: "/mobile-credit",
    },
    {
      name: "Bill",
      icon: "🧾",
      color: "from-orange-400 to-orange-600",
      bgGlow: "group-hover:shadow-orange-500/50",
      path: "/bill",
    },
    {
      name: "More",
      icon: "⋯",
      color: "from-indigo-400 to-indigo-600",
      bgGlow: "group-hover:shadow-indigo-500/50",
      path: "/more",
    },
  ];

  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
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
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative max-w-10/12 mx-auto px-4 py-16" ref={ref}>
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-500  mb-3"
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
      >
        {payments.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <button
              onClick={() => console.log(`Navigate to ${item.path}`)}
              className={`group relative w-full bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:shadow-2xl ${item.bgGlow} border border-gray-100 dark:border-gray-700 hover:border-transparent cursor-pointer`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon wrapper with gradient and animation */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative  md:w-24 md:h-24 flex items-center justify-center mb-5 rounded-2xl bg-gradient-to-br ${item.color} text-white text-4xl md:text-5xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <span className="relative z-10">{item.icon}</span>
              </motion.div>

              {/* Card name */}
              <span className="relative z-10 text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {item.name}
              </span>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PaymentCard;