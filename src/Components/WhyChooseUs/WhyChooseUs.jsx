import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const features = [
    {
      id: 1,
      title: "Wallet Management",
      desc: "Add, withdraw, and track balances in real-time with multiple wallet support.",
      img: "https://i.ibb.co.com/N232zqjH/wallet.jpg",
      highlight: "Popular",
      learnMore: "#",
      rating: 5,
      featuresList: ["Multi-wallet support", "Real-time updates", "Secure transactions"],
    },
    {
      id: 2,
      title: "Fund Transfers",
      desc: "Send money instantly via phone, email, or QR with confirmation & receipt.",
      img: "https://i.ibb.co.com/Fbx7McKD/fund.jpg",
      highlight: "Fast",
      learnMore: "#",
      rating: 4,
      featuresList: ["Instant transfer", "Multi-channel", "Confirmation receipt"],
    },
    {
      id: 3,
      title: "Merchant Payments",
      desc: "Pay businesses securely with QR codes or merchant IDs for contactless transactions.",
      img: "https://i.ibb.co.com/Dqs9qGW/paymentyh.jpg",
      highlight: "Secure",
      learnMore: "#",
      rating: 5,
      featuresList: ["Contactless", "QR code pay", "Encrypted payments"],
    },
    {
      id: 4,
      title: "Bill Payments & Recharges",
      desc: "Pay electricity, water bills, and mobile with recurring payments.",
      img: "https://i.ibb.co.com/MDkZ0nG1/Bill-Payments-Recharges.jpg",
      highlight: "Convenient",
      learnMore: "#",
      rating: 4,
      featuresList: ["Recurring payments", "Multiple billers", "Mobile recharge"],
    },
    {
      id: 5,
      title: "Transaction History",
      desc: "Filter, track, and export statements with analytics and reporting.",
      img: "https://i.ibb.co.com/S4mF3yjt/Capture.png",
      highlight: "Analytical",
      learnMore: "#",
      rating: 5,
      featuresList: ["Export CSV", "Analytics", "Filter by date"],
    },
    {
      id: 6,
      title: "Advanced Security",
      desc: "OTP + PIN protection with fraud detection alerts and encryption.",
      img: "https://i.ibb.co.com/gbq6Wx61/Advanced-Security.jpg",
      highlight: "Safe",
      learnMore: "#",
      rating: 5,
      featuresList: ["OTP + PIN", "Fraud alerts", "Encryption"],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-500">
      <div className="max-w-11/12 mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Why Choose PayMate?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Experience the future of digital payments with our secure financial tools.
        </p>
      </div>


      {/* grid layout */}
      <div className="max-w-11/12  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((item) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            className="group relative p-[2px]  rounded-xl transition-transform duration-300 hover:scale-105"
          >
            {/* Gradient Border Layer */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-x"></div>

            {/* Actual Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-start shadow-md group-hover:shadow-xl transition">
              
              {/* Image */}
              <div className="mb-4">
                <img src={item.img} alt={item.title} className=" w-full h-96" />
              </div>

              <div className="flex gap-40">
                {/* Highlight */}
                  <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded mb-2">
                 {item.highlight}
                 </span>

               {/* Rating */}
               <div className="flex mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < item.rating ? "opacity-100" : "opacity-30"}`}>
                    ★
                  </span>
                ))}
               </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.desc}</p>

              {/* Features List */}
              <ul className="text-gray-500 dark:text-gray-400 text-xs mb-2 list-disc list-inside">
                {item.featuresList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

             

              {/* Learn More Button */}
              <a
                href={item.learnMore}
                className="text-blue-500 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                Learn More
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
