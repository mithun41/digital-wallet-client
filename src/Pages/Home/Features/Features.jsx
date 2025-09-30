import React from "react";
import { FaWallet, FaMoneyBillWave, FaGift, FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router";
import {  useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const Features = () => {
  const features = [
    { title: "Add Money", description: "Top up your wallet instantly from your bank account or card.", icon: <FaMoneyBillWave />, color: "from-green-400 to-green-600", link: '' },
    { title: "Send Money", description: "Transfer funds to friends, family, or merchants securely.", icon: <FaExchangeAlt />, color: "from-blue-400 to-blue-600", link: '/Send_money' },
    { title: "Wallet", description: "Check your wallet balance and manage your funds easily.", icon: <FaWallet />, color: "from-purple-400 to-purple-600", link: '' },
    { title: "Rewards", description: "Earn cashback and rewards on your transactions.", icon: <FaGift />, color: "from-yellow-400 to-yellow-500", link: '' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const CardContent = ({ feature }) => (
    <>
      <div
  className={`w-20 h-20 flex items-center justify-center mb-5 rounded-full bg-gradient-to-br ${feature.color} text-white text-3xl shadow-md`}
>
  {feature.icon}
</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
    </>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" ref={ref}>
      <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-14">Explore Our Features</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={cardVariants}>
            {feature.link ? (
              <Link
                to={feature.link}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500"
              >
                <CardContent feature={feature} />
              </Link>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500">
                <CardContent feature={feature} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;