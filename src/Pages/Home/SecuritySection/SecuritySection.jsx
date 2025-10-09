import React, { useState, useEffect } from "react";
import { Lock, Shield, Smartphone, Bell } from "lucide-react";

const SecuritySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Lock size={40} />,
      title: "Encrypted Transactions",
      description:
        "Your data and funds are protected by end-to-end AES-256 encryption ensuring maximum security.",
    },
    {
      icon: <Shield size={40} />,
      title: "Advanced Security",
      description:
        "Two-factor authentication and AI-based fraud detection keep your wallet safe from unauthorized access.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Device Management",
      description:
        "Easily manage trusted devices, active sessions, and logout remotely for complete control.",
    },
    {
      icon: <Bell size={40} />,
      title: "Instant Notifications",
      description:
        "Get real-time alerts for every transaction and login attempt to stay always informed.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="max-w-11/12 mx-auto px-6 py-20 overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 text-gray-600 dark:text-green-500 mb-4">
          Security & Trust
        </h2>
        <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto text-gray-600 text-gray-600 dark:text-white">
          Every layer of PayMate is built with enterprise-grade protection to
          keep your money and data secure.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="min-w-full px-4">
                {/* Gradient background similar to Subscription */}
                <div
                  className="rounded-3xl p-[1px]"
                  style={{
                 background:
                 "linear-gradient(to right, rgba(5, 95, 38, 0.15), #ffffff 20%, #ffffff 50%, rgba(8, 104, 43, 0.15))",
                 }}
                >
                  <div className="rounded-3xl p-8 md:p-10 bg-white/80 backdrop-blur-sm h-full">
                    <div className="flex items-center gap-8">
                      <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
                        {feature.icon}
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-green-500 shadow-lg"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
