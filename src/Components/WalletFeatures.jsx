import React, { useEffect } from "react";
import { Link } from "react-router";

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
    image:
      "https://i.ibb.co.com/1tSTdk3Y/Europe-interoperability-mobile-wallets-QR-codes.webp",
    desc: "Scan & pay anywhere with QR code.",
    rating: "4.9",
    users: "15K+",
    price: "Free",
    trending: true,
  },
];

export default function WalletFeatures() {
  return (
    <section className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-green-500 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Popular Wallet Features
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          Explore the most loved features of PayMate Digital Wallet — secure,
          fast, and built for everyone.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {features.map((item, i) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transform transition duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-0 p-4 sm:p-5 text-white w-full">
              {item.trending && (
                <span className="bg-orange-500 text-xs px-2 py-1 rounded-full font-medium inline-block">
                  🔥 Trending
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold mt-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1 line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 mt-2 text-xs sm:text-sm text-gray-300">
                <span>⭐ {item.rating}</span>
                <span>{item.users} users</span>
              </div>
              <p className="text-base sm:text-lg font-semibold mt-2">
                {item.price}
              </p>

              <Link to={`/feature/${item.id}`}>
                <button className="mt-3 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-white text-gray-900 font-medium rounded-full shadow hover:bg-green-600 hover:text-white transition">
                  Try Now →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
