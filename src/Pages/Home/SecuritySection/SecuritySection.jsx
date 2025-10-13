import React, { useState, useEffect } from "react";
import { Lock, Shield, Smartphone, Bell } from "lucide-react";

const SecuritySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Lock size={40} />,
      title: "Encrypted Transactions",
      description:
      "All your sensitive data, including transaction details and account credentials, are protected with industry-standard AES-256 end-to-end encryption. This ensures your digital wallet remains completely secure from unauthorized access or data breaches.",
    },
    {
      icon: <Shield size={40} />,
      title: "Advanced Security",
      description:
      "Stay protected with multi-layered security that includes two-factor authentication, biometric verification, and AI-driven fraud detection. Our system constantly monitors unusual activities to prevent unauthorized transactions and safeguard your assets.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Device Management",
      description:
      "View and control all logged-in devices from one place. You can remotely sign out from any session, manage trusted devices, and get instant updates on new logins to ensure your account always stays under your control.",
    },
    {
      icon: <Bell size={40} />,
      title: "Instant Notifications",
    description:
      "Receive real-time push notifications and in-app alerts for every transaction, login attempt, or account change. Stay informed and take immediate action if something doesn’t look right — your awareness is your strongest security.",
  
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
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        {/* Section Heading */}
      <div className="text-center mb-16 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
          <Shield size={18} />
          <span>Security & Trust</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          Bank-Grade Protection
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
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
                 "linear-gradient(to right, rgba(16, 231, 95, 0.15), #fcf9f9ff 20%, #f6f2f2ff 50%, rgba(34, 216, 101, 0.15))",
                 }}
                >
                  <div className="rounded-3xl p-10 md:p-10  h-full nter">
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



