import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const banners = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/bVGMZCn/images-15-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    alt: "PayMate Digital Wallet",
    title: "PayMate",
    subtitle:
      "A Secure Digital Wallet Platform built with cutting-edge MERN Stack technology.",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/CKfG5YgN/images-19-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    alt: "Powerful Features",
    title: "Powerful Features",
    subtitle:
      "Everything you need for seamless digital payments and financial management.",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/Gj65TZq/images-21-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    alt: "Modern Tech Stack",
    title: "Modern Tech Stack",
    subtitle:
      "Built with industry-leading technologies for scalability, performance, and security.",
  },
  {
    id: 4,
    image:
      "https://i.ibb.co.com/twqLywWz/images-23-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    alt: "Built For Everyone",
    title: "Built For Everyone",
    subtitle:
      "Designed to serve diverse user groups with tailored financial solutions.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () =>
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === banners.length - 1 ? 0 : current + 1);

  return (
    <>
      <div
        className="relative w-full h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden  shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="relative max-w-2xl px-4">
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-2xl ${
                    index === current ? "animate-slideIn" : ""
                  }`}
                >
                  {banner.title}
                </h2>
                <p
                  className={`text-base sm:text-lg md:text-xl font-medium mb-6 drop-shadow-lg ${
                    index === current ? "animate-slideIn" : ""
                  }`}
                >
                  {banner.subtitle}
                </p>
                <div className="text-center">
                  <button
                    className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                      index === current ? "animate-bounceIn" : ""
                    }`}
                  >
                    <span className="text-white">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900/90 p-3 md:p-4 rounded-full text-white z-10 transition-all duration-300 hover:scale-110 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900/90 p-3 md:p-4 rounded-full text-white z-10 transition-all duration-300 hover:scale-110 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-sm ${
                index === current
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300/60 hover:bg-gray-200/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
}










//  import { Wallet, Shield, Lock, Fingerprint, CreditCard, ArrowUpRight, ArrowDownLeft, TrendingUp } from 'lucide-react';

// function Banner() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>

//       <div className="absolute top-20 left-10 opacity-10">
//         <Shield className="w-32 h-32 text-white" />
//       </div>
//       <div className="absolute bottom-20 right-20 opacity-10">
//         <Lock className="w-24 h-24 text-white" />
//       </div>
//       <div className="absolute top-40 right-40 opacity-10">
//         <Fingerprint className="w-28 h-28 text-white" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8 text-white z-10">
//             <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//               Your Smart Digital Wallet for{' '}
//               <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
//                 Everyday Payments
//               </span>
//             </h1>

//             <p className="text-xl text-blue-100 leading-relaxed font-light max-w-lg">
//               Secure, Fast, and Effortless Transactions — Anytime, Anywhere.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//                 Get Started
//               </button>
//               <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>

//             <div className="flex gap-8 pt-8">
//               <div className="flex items-center gap-2">
//                 <Shield className="w-5 h-5 text-cyan-400" />
//                 <span className="text-sm text-blue-100">Bank-level Security</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Lock className="w-5 h-5 text-cyan-400" />
//                 <span className="text-sm text-blue-100">Encrypted</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-cyan-400" />
//                 <span className="text-sm text-blue-100">Instant Transfers</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative lg:h-[600px] flex items-center justify-center">
//             <div className="absolute top-10 left-10 animate-float">
//               <div className="w-32 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-2xl transform rotate-12 opacity-90 backdrop-blur-sm"></div>
//             </div>
//             <div className="absolute bottom-20 left-0 animate-float-delay-1">
//               <div className="w-28 h-18 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl shadow-2xl transform -rotate-6 opacity-90"></div>
//             </div>
//             <div className="absolute top-20 right-10 animate-float-delay-2">
//               <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-xl">
//                 $
//               </div>
//             </div>

//             <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl p-4 border-8 border-gray-900">
//               <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden">
//                 <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 w-full"></div>

//                 <div className="p-6 space-y-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <Wallet className="w-6 h-6 text-cyan-400" />
//                       <span className="text-white font-bold text-lg">PayMate</span>
//                     </div>
//                     <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-full"></div>
//                   </div>

//                   <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-6 shadow-xl">
//                     <div className="text-blue-200 text-sm mb-2">Total Balance</div>
//                     <div className="text-white text-4xl font-bold mb-4">$24,580.00</div>
//                     <div className="flex items-center gap-2 text-green-300 text-sm">
//                       <TrendingUp className="w-4 h-4" />
//                       <span>+12.5% this month</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-all">
//                       <ArrowUpRight className="w-6 h-6" />
//                       <span className="text-sm font-semibold">Send</span>
//                     </button>
//                     <button className="bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-all">
//                       <ArrowDownLeft className="w-6 h-6" />
//                       <span className="text-sm font-semibold">Receive</span>
//                     </button>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="text-gray-400 text-sm font-semibold">Recent Transactions</div>

//                     <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                         <ArrowDownLeft className="w-5 h-5 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-white text-sm font-semibold">Payment Received</div>
//                         <div className="text-gray-400 text-xs">Today, 2:30 PM</div>
//                       </div>
//                       <div className="text-green-400 font-bold">+$850</div>
//                     </div>

//                     <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
//                       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//                         <CreditCard className="w-5 h-5 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-white text-sm font-semibold">Shopping</div>
//                         <div className="text-gray-400 text-xs">Yesterday</div>
//                       </div>
//                       <div className="text-gray-300 font-bold">-$124</div>
//                     </div>

//                     <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
//                       <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
//                         <ArrowUpRight className="w-5 h-5 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-white text-sm font-semibold">Transfer Sent</div>
//                         <div className="text-gray-400 text-xs">2 days ago</div>
//                       </div>
//                       <div className="text-gray-300 font-bold">-$500</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
//             <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;