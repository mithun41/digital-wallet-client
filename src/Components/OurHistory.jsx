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
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";

const OurHistory = () => {
  const achievements = [
    {
      year: 2020,
      title: "Project Kickoff",
      description:
        "Started the journey to build a secure and user-friendly digital wallet platform.",
      image:
        "https://i.postimg.cc/135Kf80C/pt452-Project-Kickoff1920x1080-q-BRXz-KR.webp",
    },
    {
      year: 2021,
      title: "First 10K Users",
      description:
        "Reached 10,000 active users within the first year of launch.",
      image:
        "https://i.postimg.cc/7P58TL97/Earn-Pool-Launch-1706777991YV8Sf7u-PPE-g-ID-7.webp",
    },
    {
      year: 2022,
      title: "New Features",
      description:
        "Introduced mobile recharge, bill payment, and instant money transfer features.",
      image:
        "https://i.postimg.cc/KYhsqndB/edit-first-needs-art-my-x-favorite-new-android-15-features.avif",
    },
    {
      year: 2023,
      title: "1 Million Transactions",
      description:
        "Crossed 1M successful transactions milestone, proving reliability and trust.",
      image:
        "https://i.postimg.cc/23RPCkR3/Merchant-Payment-Solution-from-Modefin.jpg",
    },
    {
      year: 2024,
      title: "Merchant Payments",
      description:
        "Launched QR-code based merchant payment system across major retail shops.",
      image: "https://i.postimg.cc/T1VXLLck/Fr6v-Vkga-QAAb2ls.jpg",
    },
    {
      year: 2025,
      title: "Digital Wallet Leader",
      description:
        "Recognized as one of the leading digital wallet solutions in the country.",
      image: "https://i.postimg.cc/CLnhY5DB/Digital-Wallet-6.png",
    },
  ];

  const colors = [
    { from: "from-blue-600", to: "to-purple-600" },
    { from: "from-emerald-500", to: "to-teal-600" },
    { from: "from-orange-500", to: "to-red-600" },
    { from: "from-pink-500", to: "to-rose-600" },
    { from: "from-indigo-600", to: "to-blue-700" },
    { from: "from-amber-500", to: "to-yellow-600" },
  ];

  return (
    <div className="relative max-w-11/12 mx-auto mt-10 px-4 sm:px-6 lg:px-10 pb-16 lg:pb-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-3 sm:mb-4 backdrop-blur-sm border border-green-500/30">
          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
          <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400">
            Journey to Excellence
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-green-500 font-extrabold mb-3 sm:mb-4 px-4">
          Our Achievements
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          A timeline of milestones that shaped our journey to becoming a trusted
          financial platform
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 35 },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="!pb-14 sm:!pb-16"
      >
        {achievements.map((achievement, index) => {
          const colorScheme = colors[index % colors.length];
          return (
            <SwiperSlide key={index} className="!h-auto">
              <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-900">
                {/* Image */}
                <div className="relative h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colorScheme.from}/50 ${colorScheme.to}/50`}
                  ></div>
                  <div className="absolute bottom-2 left-3 sm:left-4 text-white font-semibold text-base sm:text-lg md:text-xl">
                    {achievement.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} bg-clip-text text-transparent`}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                  <div
                    className={`mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} rounded-full`}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="pagination-pre absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
      </button>

      <button className="pagination-next absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
      </button>

      <div className="swiper-pagination !bottom-0"></div>
    </div>
  );
};

export default OurHistory;
