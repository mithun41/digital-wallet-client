import React from "react";
import { FaLock, FaShieldAlt, FaMobileAlt, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Security & Trust
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Every layer of PayMate is built with enterprise-grade protection to
          keep your money and data secure.
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-900/70 
                         border border-gray-200 dark:border-gray-700 
                         backdrop-blur-lg rounded-3xl p-8 text-center 
                         shadow-lg transition-all duration-300"
            >
              {/* Icon Animation */}
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            rounded-full bg-gradient-to-br ${feature.color} 
                            text-white text-3xl`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SecuritySection;
