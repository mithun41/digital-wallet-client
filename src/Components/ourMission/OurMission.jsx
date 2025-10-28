import React, { useState, useEffect } from "react";
import {
  FaLock,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaWallet,
} from "react-icons/fa";

export default function OurMission() {
  const [rotation, setRotation] = useState(0);
  const [screenSize, setScreenSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else if (window.innerWidth < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaMoneyBillWave />,
      label: "Send Money",
      color: "from-pink-500 to-rose-500",
      position: 0,
    },
    {
      icon: <FaExchangeAlt />,
      label: "Transactions",
      color: "from-yellow-400 to-orange-500",
      position: 90,
    },
    {
      icon: <FaLock />,
      label: "Security",
      color: "from-blue-500 to-cyan-400",
      position: 180,
    },
    {
      icon: <FaWallet />,
      label: "Balance",
      color: "from-green-500 to-lime-400",
      position: 270,
    },
  ];

  const shapes = [
    { icon: "▲", color: "text-pink-400", position: 30, size: "text-lg" },
    { icon: "◆", color: "text-yellow-400", position: 100, size: "text-sm" },
    { icon: "●", color: "text-blue-400", position: 150, size: "text-lg" },
    { icon: "■", color: "text-green-400", position: 210, size: "text-sm" },
    { icon: "▲", color: "text-cyan-400", position: 280, size: "text-lg" },
  ];

  const getOrbitPosition = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
  };

  const getResponsiveRadius = (baseRadius, isOuter) => {
    if (screenSize === "sm") {
      return baseRadius * 0.7;
    } else if (screenSize === "md") {
      return baseRadius * 0.85;
    }
    return baseRadius;
  };

  return (
    <div className="my-16 relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-10/12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
          <h3 className="text-green-500 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide uppercase">
            Our Future Mission
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
            Building the Future of{" "}
            <span className="text-green-500">Digital Finance</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-black dark:text-white leading-relaxed">
            Our vision is to make every transaction faster, safer, and more
            accessible for everyone. Like bKash, we aim to empower millions
            through a seamless digital wallet where financial control is in your
            hands — from instant transfers to real-time balance and top-level
            security.
          </p>
        </div>

        {/* Right Animated Orbit */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
          {/* Center Logo */}
          <div className="absolute z-20 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-green-600 to-emerald-800 rounded-full flex flex-col items-center justify-center shadow-2xl">
            <FaWallet className="text-white text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2" />
            <p className="text-white font-semibold text-[10px] sm:text-xs lg:text-sm">
              Digital Wallet
            </p>
          </div>

          {/* Orbit Rings */}
          <div
            className="absolute border-2 border-dashed border-green-500 rounded-full"
            style={{
              width:
                screenSize === "sm"
                  ? "240px"
                  : screenSize === "md"
                  ? "320px"
                  : "384px",
              height:
                screenSize === "sm"
                  ? "240px"
                  : screenSize === "md"
                  ? "320px"
                  : "384px",
            }}
          ></div>
          <div
            className="absolute border-2 border-dashed border-green-500 rounded-full"
            style={{
              width:
                screenSize === "sm"
                  ? "160px"
                  : screenSize === "md"
                  ? "240px"
                  : "320px",
              height:
                screenSize === "sm"
                  ? "160px"
                  : screenSize === "md"
                  ? "240px"
                  : "320px",
            }}
          ></div>

          {/* Orbiting Feature Icons */}
          {features.map((item, index) => {
            const angle = rotation + item.position;
            const baseRadius = index % 2 === 0 ? 120 : 180;
            const radius = getResponsiveRadius(baseRadius, index % 2 !== 0);
            const pos = getOrbitPosition(angle, radius);
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-100"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  width:
                    screenSize === "sm"
                      ? "56px"
                      : screenSize === "md"
                      ? "64px"
                      : "96px",
                  height:
                    screenSize === "sm"
                      ? "56px"
                      : screenSize === "md"
                      ? "64px"
                      : "96px",
                }}
              >
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-xl`}
                  style={{
                    width:
                      screenSize === "sm"
                        ? "40px"
                        : screenSize === "md"
                        ? "48px"
                        : "64px",
                    height:
                      screenSize === "sm"
                        ? "40px"
                        : screenSize === "md"
                        ? "48px"
                        : "64px",
                    fontSize:
                      screenSize === "sm"
                        ? "16px"
                        : screenSize === "md"
                        ? "20px"
                        : "24px",
                  }}
                >
                  {item.icon}
                </div>
                <p
                  className="text-center mt-1 text-black dark:text-white font-medium"
                  style={{
                    fontSize:
                      screenSize === "sm"
                        ? "9px"
                        : screenSize === "md"
                        ? "11px"
                        : "12px",
                  }}
                >
                  {item.label}
                </p>
              </div>
            );
          })}

          {/* Floating shapes */}
          {shapes.map((shape, index) => {
            const angle = rotation * 1.5 + shape.position;
            const baseRadius = index % 2 === 0 ? 80 : 140;
            const radius = getResponsiveRadius(baseRadius, index % 2 !== 0);
            const pos = getOrbitPosition(angle, radius);
            return (
              <div
                key={`shape-${index}`}
                className={`absolute ${shape.color} ${shape.size} transform -translate-x-1/2 -translate-y-1/2 opacity-70 transition-all duration-100`}
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                }}
              >
                {shape.icon}
              </div>
            );
          })}

          {/* Glow Effect */}
          <div
            className="absolute bg-green-500/30 rounded-full blur-3xl animate-pulse"
            style={{
              width:
                screenSize === "sm"
                  ? "128px"
                  : screenSize === "md"
                  ? "160px"
                  : "192px",
              height:
                screenSize === "sm"
                  ? "128px"
                  : screenSize === "md"
                  ? "160px"
                  : "192px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
