// App.jsx
import { Link } from "react-router";
import React from "react";
import {
  FaBolt,
  FaWifi,
  FaTicketAlt,
  FaShieldAlt,
  FaStore,
  FaMobileAlt,
  FaFileInvoice,
  FaEllipsisH,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PaymentCard = () => {
  const payments = [
    {
      name: "Electricity",
      icon: <FaBolt />,
      color: "from-yellow-400 to-yellow-600",
      path: "/electricity",
    },
    {
      name: "Internet",
      icon: <FaWifi />,
      color: "from-red-400 to-red-600",
      path: "/internet",
    },
    {
      name: "Voucher",
      icon: <FaTicketAlt />,
      color: "from-green-400 to-green-600",
      path: "/voucher",
    },
    {
      name: "Assurance",
      icon: <FaShieldAlt />,
      color: "from-pink-400 to-pink-600",
      path: "/assurance",
    },
    {
      name: "Merchant",
      icon: <FaStore />,
      color: "from-green-500 to-green-700",
      path: "/merchant",
    },
    {
      name: "Mobile Credit",
      icon: <FaMobileAlt />,
      color: "from-blue-400 to-blue-600",
      path: "/mobile-credit",
    },
    {
      name: "Bill",
      icon: <FaFileInvoice />,
      color: "from-orange-400 to-orange-600",
      path: "/bill",
    },
    {
      name: "More",
      icon: <FaEllipsisH />,
      color: "from-indigo-400 to-indigo-600",
      path: "/more",
    },
  ];

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" ref={ref}>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Payment List
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {payments.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link
              to={item.path}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500"
            >
              {/* Icon wrapper with gradient */}
              <div
                className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br ${item.color} text-white text-2xl shadow-md`}
              >
                {item.icon}
              </div>

              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {item.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PaymentCard;
