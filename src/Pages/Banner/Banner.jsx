import React from "react";
import { ArrowRight, Sparkles, Zap, Shield, CreditCard } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/90hTgmP6/Blog-imagery-Digital-Wallet-Banner-1200x560.webp')",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { 
            transform: translateY(50px) scale(0.95);
          }
          to { 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideUpText {
          from { 
            transform: translateY(30px);
          }
          to { 
            transform: translateY(0);
          }
        }
        
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        
        @keyframes fadeScale {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.2);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes floatCard {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          25% { 
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% { 
            transform: translateY(-15px) rotate(-2deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-20px);
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes ping {
          0% { transform: scale(1); }
          75%, 100% { transform: scale(2); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes colorChange {
          0%, 100% { border-color: rgba(103, 232, 249, 0.5); }
          33% { border-color: rgba(34, 211, 238, 0.5); }
          66% { border-color: rgba(6, 182, 212, 0.5); }
        }
        
        @keyframes twinkle {
          0%, 100% { transform: scale(0); }
          50% { transform: scale(1); }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); }
          100% { transform: scale(1.5); }
        }
        
        @keyframes morphShape {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        
        .animate-slide-up-text {
          animation: slideUpText 1.2s ease-out 0.3s backwards;
        }
        
        .animate-rotate-ring {
          animation: rotateRing 6s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotateReverse 8s linear infinite;
        }
        
        .animate-pulse-ring {
          animation: pulseRing 3s ease-in-out infinite;
        }
        
        .animate-fade-scale {
          animation: fadeScale 4s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradientShift 5s linear infinite;
        }
        
        .animate-float-card {
          animation: floatCard 5s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-spin {
          animation: spin 3s linear infinite;
        }
        
        .animate-color-change {
          animation: colorChange 6s ease-in-out infinite;
        }
        
        .animate-twinkle-1 {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-twinkle-2 {
          animation: twinkle 3s ease-in-out infinite 0.5s;
        }
        
        .animate-twinkle-3 {
          animation: twinkle 2.5s ease-in-out infinite 1s;
        }
        
        .animate-ripple {
          animation: ripple 3s ease-out infinite;
        }
        
        .animate-morph {
          animation: morphShape 10s ease-in-out infinite;
        }
        
        .hover-scale:hover {
          transform: scale(1.1);
          box-shadow: 0px 0px 30px rgba(34,211,238,0.8);
        }
        
        .hover-scale:active {
          transform: scale(0.95);
        }
        
        .hover-scale {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 z-0"></div>

      {/* 🔹 Multiple Animated Rings */}
      <div className="absolute top-10 left-10 w-14 h-14 border-4 border-green-300 rounded-full animate-rotate-ring"></div>
      <div className="absolute top-10 left-10 w-14 h-14 border-4 border-green-400/30 rounded-full animate-ping"></div>

      <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-green-400/40 rounded-full animate-pulse-ring"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-green-300/20 rounded-full animate-ripple"></div>

      <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-green-400/30 rounded-full animate-fade-scale"></div>

      {/* 🔹 Extra Decorative Rings */}
      <div className="absolute top-1/2 left-10 w-20 h-20 border-2 border-green-400/30 rounded-full animate-rotate-reverse"></div>
      <div className="absolute bottom-1/3 right-10 w-28 h-28 border border-green-300/20 rounded-full animate-color-change"></div>
      <div className="absolute top-20 right-1/3 w-16 h-16 border-2 border-green-500/40 rounded-full animate-pulse-ring"></div>

      {/* 🔹 Morphing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-500/10 animate-morph blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-green-500/10 animate-morph blur-3xl" style={{animationDelay: '3s'}}></div>

      {/* 🔹 Twinkling Stars */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-300 rounded-full animate-twinkle-1"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-green-300 rounded-full animate-twinkle-2"></div>
      <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-green-300 rounded-full animate-twinkle-3"></div>
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-twinkle-1" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/2 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-twinkle-2" style={{animationDelay: '2s'}}></div>

      {/* 🔹 Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5"></div>

      {/* 🔹 Floating Icons */}
      <div className="absolute top-1/4 left-20 animate-float" style={{animationDelay: '0s'}}>
        <Sparkles className="text-green-400" size={24} />
      </div>
      <div className="absolute top-1/2 right-20 animate-float" style={{animationDelay: '1s'}}>
        <Zap className="text-green-400" size={28} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float" style={{animationDelay: '2s'}}>
        <Shield className="text-green-400" size={20} />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-bounce">
        <CreditCard className="text-green-300" size={22} />
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up">
          The Future of <br />
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-teal-400 bg-clip-text text-transparent animate-gradient-shift inline-block">
            Digital Wallets
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up-text">
          Experience next-level security, instant transfers, and seamless
          payments — all in one wallet.
        </p>

        <div className="animate-slide-up-text" style={{animationDelay: '0.5s'}}>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-lg font-semibold text-white shadow-lg hover-scale relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <ArrowRight size={20} className="relative z-10 animate-wiggle" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500"></div>
          </button>
        </div>
      </div>

        {/* 🔹 Floating Card Mockup with Extra Animation */}
      <div className="absolute bottom-10 right-10 hidden md:block animate-float-card  animate-slide-in-right" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
        <div className="w-64 h-40 bg-white/90 backdrop-green-md rounded-2xl shadow-xl p-4 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full green-xl animate-pulse-ring"></div>
          <h3 className="text-gray-800 font-semibold mb-2 relative z-10">PayMate Balance</h3>
          <p className="text-3xl font-bold text-green-600 relative z-10">$5,420.50</p>
          <p className="text-sm text-gray-500 mt-2 relative z-10">Updated just now</p>
          <div className="absolute bottom-2 right-2">
            <Sparkles className="text-green-500 animate-spin" size={16} />
          </div>
        </div>
      </div>

      {/* 🔹 Left Side Feature Cards */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-slide-in-left" style={{animationDelay: '0.8s'}}>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/20 backdrop-blur-md rounded-xl p-4 border border-green-400/30 w-48 animate-float">
          <Shield className="text-green-400 mb-2" size={24} />
          <p className="text-white font-semibold text-sm">Bank-Level Security</p>
          <p className="text-gray-300 text-xs mt-1">256-bit encryption</p>
        </div>
      </div>

      {/* 🔹 Top Right Notification */}
      <div className="absolute top-20 right-20 hidden lg:block animate-slide-in-right" style={{animationDelay: '1s'}}>
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/20 backdrop-blur-md rounded-lg p-3 border border-teal-400/30 w-44 animate-bounce">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            <p className="text-white font-semibold text-xs">Instant Transfer</p>
          </div>
          <p className="text-green-300 text-xs mt-1">Under 5 seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;