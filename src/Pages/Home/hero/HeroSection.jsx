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
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes shine {
          to { transform: translateX(200%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-slideDown { animation: slideDown 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out 0.2s both; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .animate-shine { animation: shine 3s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      <div
        className="relative text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500 bg-cover bg-center overflow-hidden "
        style={{
          backgroundImage:
            "url('https://zdblogs.zohowebstatic.com/sites/payments/academy/files/04_2.png')",
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-[#06923E]/30 dark:from-black/70 dark:via-black/60 dark:to-[#FF6600]/20"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#06923E]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6600]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fadeIn">
                <div className="inline-block px-4 py-2 bg-[#06923E]/20 dark:bg-[#69F27E]/20 rounded-full mb-4 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-[#06923E] dark:text-[#69F27E]">
                    ✨ Trusted by 10M+ Users
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-white drop-shadow-lg mb-2 animate-slideDown">
                    Experience the
                  </span>
                  <span className="block bg-gradient-to-r from-[#06923E] via-[#69F27E] to-[#06923E] dark:from-[#69F27E] dark:via-[#FFA347] dark:to-[#FF6600] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Future of Finance
                  </span>
                </h1>

                <p className="mt-6 max-w-lg mx-auto text-base sm:text-lg md:text-xl lg:mx-0 text-gray-100 dark:text-gray-200 leading-relaxed">
                  Your all-in-one digital wallet for secure, instant, and
                  effortless transactions. Manage your money with ease.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start items-center text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Bank-level Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Instant Transfers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Right Content: Animated Wallet */}
              <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm sm:w-96 h-[480px] sm:h-[520px] perspective-1000">
                  {/* Main wallet card */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 hover:scale-[1.02] transition-all duration-700 animate-float">
                    {/* Top bar */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#06923E] to-[#069240] dark:from-[#69F27E] dark:to-[#06923E] rounded-t-3xl flex items-center justify-between px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        <span className="text-white font-bold text-sm">
                          My Wallet
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      </div>
                    </div>

                    {/* Wallet Screen */}
                    <div className="absolute inset-0 top-16 rounded-b-3xl bg-gradient-to-b from-[#F5F7FA] via-white to-gray-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 flex flex-col p-6 sm:p-8 items-center justify-center space-y-6 transition-all duration-500">
                      {/* Icon container with morphing effect */}
                      <div className="relative">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center bg-gradient-to-br from-[#06923E]/20 via-[#06923E]/10 to-transparent shadow-xl border border-[#06923E]/20 dark:border-[#69F27E]/20 backdrop-blur-sm">
                          <svg
                            key={currentFeatureIndex}
                            className="w-14 h-14 sm:w-16 sm:h-16 text-[#06923E] dark:text-[#69F27E] drop-shadow-lg transition-all duration-500 animate-scaleIn"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            {currentFeature.icon}
                          </svg>
                        </div>
                        {/* Orbiting dots */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6600] dark:bg-[#FFA347] rounded-full animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#06923E] dark:bg-[#69F27E] rounded-full animate-pulse"></div>
                      </div>

                      {/* Feature title */}
                      <h3
                        key={`title-${currentFeatureIndex}`}
                        className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-[#06923E] to-[#069240] dark:from-[#69F27E] dark:to-[#FFA347] bg-clip-text text-transparent animate-fadeIn"
                      >
                        {currentFeature.title}
                      </h3>

                      {/* Feature description */}
                      <p
                        key={`description-${currentFeatureIndex}`}
                        className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-300 leading-relaxed px-4 animate-fadeIn"
                      >
                        {currentFeature.description}
                      </p>

                      {/* Progress dots */}
                      <div className="flex gap-2 mt-4">
                        {features.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              index === currentFeatureIndex
                                ? "w-8 bg-[#06923E] dark:bg-[#69F27E]"
                                : "w-2 bg-gray-300 dark:bg-gray-600"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Animated glow effect */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#06923E]/30 via-[#FF6600]/30 to-[#06923E]/30 blur-2xl opacity-50 animate-pulse"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shine"></div>
                    </div>
                  </div>

                  {/* Background cards for depth */}
                  <div className="absolute top-8 -right-4 w-full h-full bg-gradient-to-br from-gray-200/40 to-gray-300/40 dark:from-gray-700/40 dark:to-gray-800/40 rounded-3xl blur-sm -z-10 rotate-6"></div>
                  <div className="absolute top-4 -right-2 w-full h-full bg-gradient-to-br from-gray-300/30 to-gray-400/30 dark:from-gray-600/30 dark:to-gray-700/30 rounded-3xl blur-md -z-20 rotate-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
