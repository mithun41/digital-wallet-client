import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const features = [
    {
      title: "Send Money",
      description:
        "Instantly transfer funds to friends and family with just a few taps.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      ),
    },
    {
      title: "Add Money",
      description:
        "Effortlessly top up your wallet from your bank account or credit card.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      ),
    },
    {
      title: "Flexiload",
      description:
        "Recharge any mobile number quickly and securely, anytime, anywhere.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
    },
    {
      title: "All in One",
      description:
        "Your complete financial life in one secure and easy-to-use app.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z"
        />
      ),
    },
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentFeatureIndex];

  return (
    <div
      className="bg-base-100 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://zdblogs.zohowebstatic.com/sites/payments/academy/files/04_2.png')",
      }}
    >
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-black/40 dark:bg-black/50">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block text-[#06923E] dark:text-[#69F27E]">
                  Experience the
                </span>
                <span className="block text-[#FF6600] dark:text-[#FFA347]">
                  Future of Finance
                </span>
              </h1>
              <p className="mt-4 max-w-md mx-auto sm:text-lg lg:mx-0 opacity-90 text-gray-100 dark:text-gray-300">
                Your all-in-one digital wallet for secure, instant, and
                effortless transactions. Manage your money with ease.
              </p>
              <div className="mt-6">
                <button className="bg-[#FF6600] dark:bg-[#FFA347] text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#CC5200] dark:hover:bg-[#FF8C40] hover:scale-105 transition-transform duration-300 font-semibold">
                  🚀 Get Started
                </button>
              </div>
            </div>

            {/* Right Content: Animated Wallet */}
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-80 h-[420px] bg-white dark:bg-gray-800 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-[#06923E] hover:scale-105 transition-transform duration-500">
                {/* Wallet Screen */}
                <div className="absolute inset-4 rounded-2xl bg-[#F5F7FA] dark:bg-gray-700 flex flex-col p-6 items-center justify-center space-y-5 shadow-inner transition-all duration-500">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#06923E]/10 shadow-lg">
                    <svg
                      key={currentFeatureIndex}
                      className="w-12 h-12 text-[#06923E] dark:text-[#69F27E] animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {currentFeature.icon}
                    </svg>
                  </div>
                  <h3
                    key={`title-${currentFeatureIndex}`}
                    className="text-lg font-bold text-center text-[#06923E] dark:text-[#69F27E]"
                  >
                    {currentFeature.title}
                  </h3>
                  <p
                    key={`description-${currentFeatureIndex}`}
                    className="text-sm text-center text-gray-600 dark:text-gray-300 opacity-80"
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-3xl bg-[#06923E]/20 dark:bg-[#FF6600]/20 blur-2xl opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
