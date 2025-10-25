import React, { useState, useEffect } from 'react';
import { FaLock, FaMoneyBillWave, FaExchangeAlt, FaWallet } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OurMission() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <FaMoneyBillWave />, label: "Send Money", color: 'from-pink-500 to-rose-500', position: 0 },
    { icon: <FaExchangeAlt />, label: "Transactions", color: 'from-yellow-400 to-orange-500', position: 90 },
    { icon: <FaLock />, label: "Security", color: 'from-blue-500 to-cyan-400', position: 180 },
    { icon: <FaWallet />, label: "Balance", color: 'from-green-500 to-lime-400', position: 270 },
  ];

  const shapes = [
    { icon: '▲', color: 'text-pink-400', position: 30, size: 'text-lg' },
    { icon: '◆', color: 'text-yellow-400', position: 100, size: 'text-sm' },
    { icon: '●', color: 'text-blue-400', position: 150, size: 'text-lg' },
    { icon: '■', color: 'text-green-400', position: 210, size: 'text-sm' },
    { icon: '▲', color: 'text-cyan-400', position: 280, size: 'text-lg' },
  ];

  const getOrbitPosition = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
  };

  return (
    <div className="my-16 relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-10/12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 z-10" data-aos="fade-right">
          <h3 className="text-green-500 text-xl sm:text-2xl font-semibold tracking-wide uppercase" data-aos="fade-up" data-aos-delay="100">
            Our Future Mission
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="200">
            Building the Future of <span className='text-green-500'>Digital Finance</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black dark:text-white leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Our vision is to make every transaction faster, safer, and more 
            accessible for everyone. Like bKash, we aim to empower millions 
            through a seamless digital wallet where financial control is in 
            your hands — from instant transfers to real-time balance and 
            top-level security.
          </p>
        </div>

        {/* Right Animated Orbit */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center" data-aos="fade-left">
          
          {/* Center Logo */}
          <div className="absolute z-20 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-green-600 to-emerald-800 rounded-full flex flex-col items-center justify-center shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
            <FaWallet className="text-white text-4xl sm:text-5xl mb-1 sm:mb-2" />
            <p className="text-white font-semibold text-xs sm:text-sm">Digital Wallet</p>
          </div>

          {/* Orbit Rings */}
          <div className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-dashed border-green-500 rounded-full" data-aos="zoom-out" data-aos-delay="300"></div>
          <div className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 border-2 border-dashed border-green-500 rounded-full" data-aos="zoom-out" data-aos-delay="200"></div>

          {/* Orbiting Feature Icons */}
          {features.map((item, index) => {
            const angle = rotation + item.position;
            const radius = (index % 2 === 0 ? 120 : 180) + (window.innerWidth >= 1024 ? 70 : window.innerWidth >= 640 ? 50 : 0);
            const pos = getOrbitPosition(angle, radius);
            return (
              <div
                key={index}
                className="absolute w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-100"
                style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
              >
                <div className={`w-12 sm:w-16 md:w-16 h-12 sm:h-16 md:h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl md:text-2xl shadow-xl`}>
                  {item.icon}
                </div>
                <p className="text-xs sm:text-sm md:text-xs text-center mt-1">{item.label}</p>
              </div>
            );
          })}

          {/* Floating shapes */}
          {shapes.map((shape, index) => {
            const angle = rotation * 1.5 + shape.position;
            const radius = index % 2 === 0 ? 80 : 140;
            const pos = getOrbitPosition(angle, radius);
            return (
              <div
                key={`shape-${index}`}
                className={`absolute ${shape.color} ${shape.size} transform -translate-x-1/2 -translate-y-1/2 opacity-70 transition-all duration-100`}
                style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
              >
                {shape.icon}
              </div>
            );
          })}

          {/* Glow Effect */}
          <div className="absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
