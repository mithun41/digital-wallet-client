import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Features for animation
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
    }, 1500); // ⏩ এখন প্রতি 2.5 সেকেন্ডে পরিবর্তন হবে

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[currentFeatureIndex];

  return (
    <div className="bg-[##DBEAFE] text-base-content min-h-screen transition-colors duration-500">
      {/* Hero Section Container */}
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 dark:from-primary/30 dark:via-base-300 dark:to-secondary/30"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block">Experience the</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Future of Finance
                </span>
              </h1>
              <p className="mt-4 max-w-md mx-auto sm:text-lg lg:mx-0 opacity-90">
                Your all-in-one digital wallet for secure, instant, and
                effortless transactions. Manage your money with ease.
              </p>
              <div className="mt-6">
                <button className="btn btn-primary btn-lg rounded-xl shadow-md hover:scale-105 transition-transform dark:text-black">
                  🚀 Get Started
                </button>
              </div>
            </div>

            {/* Right Content: Animated Wallet */}
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-80 h-[420px] bg-base-200/70 dark:bg-base-300/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-base-300 dark:border-base-100 hover:scale-105 transition-transform duration-500">
                {/* Wallet Screen */}
                <div className="absolute inset-4 rounded-2xl bg-base-100 dark:bg-base-200 flex flex-col p-6 items-center justify-center space-y-5 shadow-inner transition-all duration-500">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-primary/10 dark:bg-primary/20 shadow-lg">
                    <svg
                      key={currentFeatureIndex}
                      className="w-12 h-12 text-primary animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {currentFeature.icon}
                    </svg>
                  </div>
                  <h3
                    key={`title-${currentFeatureIndex}`}
                    className="text-lg font-bold text-center text-primary"
                  >
                    {currentFeature.title}
                  </h3>
                  <p
                    key={`description-${currentFeatureIndex}`}
                    className="text-sm text-center opacity-80"
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
