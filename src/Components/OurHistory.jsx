import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { ArrowLeft, ArrowRight, TrendingUp, Award, Zap } from "lucide-react";

const OurHistory = () => {
  const achievements = [
    {
      year: 2020,
      title: "Project Kickoff",
      description:
        "Started the journey to build a secure and user-friendly digital wallet platform.",
      highlight: "Idea to Reality",
      image: "https://source.unsplash.com/600x400/?startup,team",
      icon: "🚀",
    },
    {
      year: 2021,
      title: "First 10K Users",
      description:
        "Reached 10,000 active users within the first year of launch.",
      highlight: "10K+ Users",
      image: "https://source.unsplash.com/600x400/?users,people",
      icon: "👥",
    },
    {
      year: 2022,
      title: "New Features",
      description:
        "Introduced mobile recharge, bill payment, and instant money transfer features.",
      highlight: "Feature Expansion",
      image: "https://source.unsplash.com/600x400/?technology,app",
      icon: "⚡",
    },
    {
      year: 2023,
      title: "1 Million Transactions",
      description:
        "Crossed 1M successful transactions milestone, proving reliability and trust.",
      highlight: "1M+ Transactions",
      image: "https://source.unsplash.com/600x400/?finance,money",
      icon: "💰",
    },
    {
      year: 2024,
      title: "Merchant Payments",
      description:
        "Launched QR-code based merchant payment system across major retail shops.",
      highlight: "Pay Anywhere",
      image: "https://source.unsplash.com/600x400/?shopping,qr",
      icon: "🏪",
    },
    {
      year: 2025,
      title: "Digital Wallet Leader",
      description:
        "Recognized as one of the leading digital wallet solutions in the country.",
      highlight: "National Recognition",
      image: "https://source.unsplash.com/600x400/?award,trophy",
      icon: "🏆",
    },
  ];

  const colors = [
    { from: "from-blue-600", to: "to-purple-600", glow: "blue" },
    { from: "from-emerald-500", to: "to-teal-600", glow: "emerald" },
    { from: "from-orange-500", to: "to-red-600", glow: "orange" },
    { from: "from-pink-500", to: "to-rose-600", glow: "pink" },
    { from: "from-indigo-600", to: "to-blue-700", glow: "indigo" },
    { from: "from-amber-500", to: "to-yellow-600", glow: "amber" },
  ];

  return (
    <>
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #10b981;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 6px;
          background: linear-gradient(90deg, #10b981, #14b8a6);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-10 pb-16 lg:pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 backdrop-blur-sm border border-green-500/30">
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              Journey to Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl text-green-500 font-extrabold text-center mb-4">
            Our Achievements
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of milestones that shaped our journey to becoming a
            trusted financial platform
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".pagination-next",
              prevEl: ".pagination-pre",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 25 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 35 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="!pb-16"
          >
            {achievements.map((achievement, index) => {
              const colorScheme = colors[index % colors.length];
              return (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="group relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-900">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${colorScheme.from} ${colorScheme.to} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}
                      ></div>

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50`}
                        >
                          <span
                            className={`text-lg font-bold bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} bg-clip-text text-transparent`}
                          >
                            {achievement.year}
                          </span>
                        </div>
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-2xl animate-float-up border-2 border-white/50">
                          {achievement.icon}
                        </div>
                      </div>

                      {/* Highlight Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div
                          className={`px-4 py-2 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} rounded-xl shadow-xl backdrop-blur-sm`}
                        >
                          <div className="flex items-center justify-center gap-2 text-white font-bold text-sm">
                            <Zap className="w-4 h-4" />
                            <span>{achievement.highlight}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      {/* Decorative corner */}
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} opacity-5 rounded-bl-full`}
                      ></div>

                      <h3
                        className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}
                      >
                        {achievement.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        className={`mt-4 h-1 w-16 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} rounded-full group-hover:w-full transition-all duration-500`}
                      ></div>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    ></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="pagination-pre absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 border-2 border-green-500/20">
            <ArrowLeft className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button className="pagination-next absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 border-2 border-green-500/20">
            <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Pagination */}
          <div className="swiper-pagination !bottom-0"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Years", value: "5+", icon: "📅" },
            { label: "Users", value: "100K+", icon: "👥" },
            { label: "Transactions", value: "5M+", icon: "💳" },
            { label: "Awards", value: "12+", icon: "🏆" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div
                  className="text-3xl mb-2 animate-float-up"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurHistory;
