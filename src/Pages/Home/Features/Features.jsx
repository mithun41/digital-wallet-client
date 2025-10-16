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
      title: "Instant Add Money",
      description:
        "Deposit funds into your wallet instantly using your bank account, debit, or credit card. Safe, fast, and hassle-free.",
      icon: <FaMoneyBillWave />,
      link: "/add_money",
    },
    {
      title: "Send & Receive Money",
      description:
        "Transfer money to anyone, anytime. Enjoy lightning-fast transactions with full security and transparency.",
      icon: <FaExchangeAlt />,
      link: "/send_money",
    },
    {
      title: "Smart Digital Wallet",
      description:
        "Track your spending, manage multiple currencies, and stay in control of your balance — all in one place.",
      icon: <FaWallet />,
      link: "/wallet",
    },
    {
      title: "Exclusive Rewards",
      description:
        "Earn cashback, discounts, and loyalty points on every transaction. Turn your payments into opportunities.",
      icon: <FaGift />,
      link: "/rewards",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

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
        Explore Our Powerful Features
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
                {/* Step Number */}
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
                        className="block border border-green-600 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-gray-900"
                      >
                        <div className="flex items-center space-x-4 text-green-600">
                          <div className="text-3xl">{f.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold">{f.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
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
