import React from "react";
import { useParams, Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
        id: 1,
        title: "Secure Transactions",
        image: "https://i.ibb.co.com/99BCbzH0/blog-july.jpg",
        desc: "End-to-end encryption to keep your money safe.",
        rating: "4.9",
        users: "10K+",
        price: "Free",
        trending: true,
    },
    {
        id: 2,
        title: "Bill Payments",
        image: "https://i.ibb.co.com/MWrpdhH/1140-smartphone-digital-wallet.jpg",
        desc: "Pay utility bills, recharge & more in one place.",
        rating: "4.8",
        users: "8K+",
        price: "From $1",
        trending: true,
    },
    {
        id: 3,
        title: "Cash Out & Transfer",
        image: "https://i.ibb.co.com/N27QYtZN/photo-1599050751795-6cdaafbc2319.jpg",
        desc: "Withdraw or send money instantly to anyone.",
        rating: "4.7",
        users: "12K+",
        price: "From $0.5",
        trending: false,
    },
    {
        id: 4,
        title: "Rewards & Cashback",
        image: "https://i.ibb.co.com/mV94fgn0/rewards-pic-1.webp",
        desc: "Earn cashback & rewards on every payment.",
        rating: "4.6",
        users: "7K+",
        price: "Free",
        trending: true,
    },
    {
        id: 5,
        title: "International Transfer",
        image: "https://i.ibb.co.com/hxtkt9Jh/istockphoto-1936794592-612x612.jpg",
        desc: "Send money abroad securely and fast.",
        rating: "4.8",
        users: "9K+",
        price: "From $2",
        trending: false,
    },
    {
        id: 6,
        title: "QR Payments",
        image: "https://i.ibb.co.com/1tSTdk3Y/Europe-interoperability-mobile-wallets-QR-codes.webp",
        desc: "Scan & pay anywhere with QR code.",
        rating: "4.9",
        users: "15K+",
        price: "Free",
        trending: true,
    },
];

const FeatureDetails = () => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === parseInt(id));

  React.useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  const displayFeature =
    feature || {
      title: "All Features",
      image: "https://i.ibb.co.com/k6RPtLL/default-feature.jpg",
      desc: "Explore all our amazing PayMate features — Secure Payments, Quick Transfers, QR Pay, Rewards & much more — built to make your digital experience effortless and secure.",
      rating: "4.8",
      users: "50K+",
      price: "Varies",
    };

  return (
    <div
      data-aos="fade-up"
      className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img
          src={displayFeature.image}
          alt={displayFeature.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          {displayFeature.title}
        </h1>
        <p className="text-gray-700 mb-6">{displayFeature.desc}</p>

        <div className="flex justify-center md:justify-start gap-6 text-gray-600 text-sm mb-6">
          <span>⭐ {displayFeature.rating}</span>
          <span>👥 {displayFeature.users}</span>
          <span>💲 {displayFeature.price}</span>
        </div>

        <Link to="/" className="inline-block">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureDetails;
