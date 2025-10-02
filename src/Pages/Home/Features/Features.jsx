// src/components/Features.jsx
import React, { useEffect } from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaGift,
  FaExchangeAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const features = [
    {
      title: "Add Money",
      description:
        "Top up your wallet instantly from your bank account or card.",
      icon: <FaMoneyBillWave />,
      link: "/add_money",
    },
    {
      title: "Send Money",
      description: "Transfer funds to friends, family, or merchants securely.",
      icon: <FaExchangeAlt />,
      link: "/send_money",
    },
    {
      title: "Wallet",
      description: "Check your wallet balance and manage your funds easily.",
      icon: <FaWallet />,
      link: "/wallet",
    },
    {
      title: "Rewards",
      description: "Earn cashback and rewards on your transactions.",
      icon: <FaGift />,
      link: "/rewards",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Animation variants
  const getCardVariants = (isLeft) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" ref={ref}>
      <h2 className="text-3xl md:text-4xl text-green-700 font-extrabold text-center mb-12">
        Explore Our Features
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-green-300 -translate-x-1/2"></div>

        <div className="space-y-12">
          {features.map((f, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className="relative w-full"
                initial="hidden"
                animate={controls}
                variants={getCardVariants(isLeft)}
              >
                {/* Number circle */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-green-600 flex items-center justify-center font-bold text-green-600 shadow">
                    {idx + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="pt-6 md:pt-0">
                  <div
                    className={`md:flex md:items-start ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className={`md:w-5/12 ${
                        isLeft ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <Link
                        to={f.link}
                        className="block border border-green-600 rounded-xl shadow-md p-6 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
                      >
                        <div className="flex items-center space-x-4 text-green-600">
                          <div className="text-3xl">{f.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold">{f.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {f.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
