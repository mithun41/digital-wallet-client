import React from "react";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-fixed bg-center bg-cover px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/90hTgmP6/Blog-imagery-Digital-Wallet-Banner-1200x560.webp')",
      }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 z-0"></div>

      {/* 🔹 Decorative Rings (hidden on mobile) */}
      <div className="hidden md:block absolute top-10 left-10 w-12 sm:w-14 h-12 sm:h-14 border-4 border-green-300 rounded-full animate-[spin_6s_linear_infinite]"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-2 border-green-400/40 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>

      {/* 🔹 Floating Icons */}
      <div className="hidden sm:block absolute top-1/4 left-8 animate-[float_3s_ease-in-out_infinite]">
        <Sparkles className="text-green-400" size={20} />
      </div>
      <div className="hidden lg:block absolute top-1/2 right-10 animate-[float_3s_ease-in-out_infinite]">
        <Zap className="text-green-400" size={24} />
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center text-white max-w-2xl sm:max-w-3xl px-2">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6 animate-[fadeInUp_1s_ease-out]">
          The Future of <br />
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-teal-400 bg-clip-text text-transparent animate-[gradientShift_5s_linear_infinite] inline-block">
            Digital Wallets
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 animate-[fadeInUp_1.2s_ease-out]">
          Experience next-level security, instant transfers, and seamless
          payments — all in one wallet.
        </p>

        <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300">
          <span>Get Started</span>
          <ArrowRight
            size={18}
            className="sm:size-20 animate-[wiggle_1s_ease-in-out_infinite]"
          />
        </button>
      </div>

      {/* 🔹 Floating Card (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-8 sm:bottom-10 right-6 sm:right-10 animate-[float_5s_ease-in-out_infinite]">
        <div className="w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-green-500/20 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
          <h3 className="text-gray-800 font-semibold mb-1 text-sm sm:text-base">
            PayMate Balance
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
            $5,420.50
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            Updated just now
          </p>
          <div className="absolute bottom-2 right-2">
            <Sparkles className="text-green-500 animate-spin" size={14} />
          </div>
        </div>
      </div>

      {/* 🔹 Left Card */}
      <div className="hidden lg:block absolute bottom-8 sm:bottom-10 left-6 sm:left-10 animate-[float_4s_ease-in-out_infinite]">
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-green-400/30 w-36 sm:w-40 md:w-48">
          <Shield className="text-green-400 mb-2" size={22} />
          <p className="text-white font-semibold text-xs sm:text-sm">
            Bank-Level Security
          </p>
          <p className="text-gray-300 text-[10px] sm:text-xs mt-1">
            256-bit encryption
          </p>
        </div>
      </div>

      {/* 🔹 Top Notification */}
      <div className="hidden xl:block absolute top-20 right-16 animate-[bounce_2s_ease-in-out_infinite]">
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 backdrop-blur-md rounded-lg p-3 border border-teal-400/30 w-36 sm:w-40 md:w-44">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-400" size={18} />
            <p className="text-white font-semibold text-xs sm:text-sm">
              Instant Transfer
            </p>
          </div>
          <p className="text-green-300 text-[10px] sm:text-xs mt-1">
            Under 5 seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
