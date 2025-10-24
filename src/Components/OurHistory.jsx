import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Calendar, Award } from "lucide-react";

const OurHistory = () => {

  const achievements = [
    {
      "year": 2020,
      "title": "Project Kickoff",
      "description": "Started the journey to build a secure and user-friendly digital wallet platform.",
      "highlight": "Idea to Reality",
      "image": "https://i.postimg.cc/135Kf80C/pt452-Project-Kickoff1920x1080-q-BRXz-KR.webp"
    },
    {
      "year": 2021,
      "title": "First 10K Users",
      "description": "Reached 10,000 active users within the first year of launch.",
      "highlight": "10K+ Users",
      "image": "https://i.postimg.cc/7P58TL97/Earn-Pool-Launch-1706777991YV8Sf7u-PPE-g-ID-7.webp"
    },
    {
      "year": 2022,
      "title": "New Features",
      "description": "Introduced mobile recharge, bill payment, and instant money transfer features.",
      "highlight": "Feature Expansion",
      "image": "https://i.postimg.cc/C1pDC9gr/images-3.jpg"
    },
    {
      "year": 2023,
      "title": "1 Million Transactions",
      "description": "Crossed 1M successful transactions milestone, proving reliability and trust.",
      "highlight": "1M+ Transactions",
      "image": "https://i.postimg.cc/T1VXLLck/Fr6v-Vkga-QAAb2ls.jpg"
    },
    {
      "year": 2024,
      "title": "Merchant Payments",
      "description": "Launched QR-code based merchant payment system across major retail shops.",
      "highlight": "Pay Anywhere",
      "image": "https://i.postimg.cc/23RPCkR3/Merchant-Payment-Solution-from-Modefin.jpg"
    },
    {
      "year": 2025,
      "title": "Digital Wallet Leader",
      "description": "Recognized as one of the leading digital wallet solutions in the country.",
      "highlight": "National Recognition",
      "image": "https://i.postimg.cc/CLnhY5DB/Digital-Wallet-6.png"
    }
  ]

  const colors = [
    "from-blue-500 via-blue-600 to-purple-600",
    "from-green-500 via-emerald-500 to-teal-600",
    "from-orange-500 via-red-500 to-pink-600",
    "from-purple-500 via-pink-500 to-rose-600",
    "from-cyan-500 via-blue-500 to-indigo-600",
    "from-amber-500 via-orange-500 to-red-600",
  ];


  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 md:py-16 lg:py-20">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Our Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3">
            Our Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            A timeline of milestones that shaped our journey to excellence
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
              rotate: 8,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
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
              640: { 
                slidesPerView: 2, 
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 6,
                  depth: 150,
                }
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 8,
                  depth: 200,
                }
              }
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="!pb-14 md:!pb-16"
          >
            {
              achievements.map((achievement, index) => {
                const gradient = colors[index % colors.length]
                return (
                  <SwiperSlide key={index} className="!h-auto">
                    <div className={`relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br ${gradient} group h-full flex flex-col`}>
                      {/* Image Container */}
                      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Highlight Badge */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                          <span className="text-white text-xs sm:text-sm font-semibold">
                            {achievement.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="p-5 sm:p-6 text-white flex-1 flex flex-col">
                        {/* Year Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full self-start mb-4 border border-white/30">
                          <Calendar className="w-4 h-4" />
                          <span className="text-lg sm:text-xl font-bold">{achievement.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                          {achievement.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed flex-1">
                          {achievement.description}
                        </p>

                        {/* Decorative Element */}
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-white/60"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }

            {/* Navigation Arrows */}
            <div className="pagination-pre absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-slate-800 p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </div>
            
            <div className="pagination-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-slate-800 p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </div>

            {/* Pagination */}
            <div className="swiper-pagination !bottom-0"></div>
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #10b981;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 5px;
        }

        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }
          
          .swiper-pagination-bullet-active {
            width: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default OurHistory;