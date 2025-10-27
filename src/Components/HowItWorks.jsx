import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  UserPlusIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Sign Up & Verify",
    description:
      "Create your account with email verification and complete KYC for enhanced security and higher transaction limits.",
    img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    animation: "fade-up",
    icon: <UserPlusIcon className="h-8 w-8 text-white" />,
    badge: "Step 1",
  },
  {
    id: 2,
    title: "Add Money & Manage Cards",
    description:
      "Link your bank accounts and cards, add funds to your wallet, and set up multiple payment methods for convenience.",
    img: "https://i.ibb.co.com/d0FQXXP2/images-11-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-up",
    icon: <CreditCardIcon className="h-8 w-8 text-white" />,
    badge: "Step 2",
  },
  {
    id: 3,
    title: "Pay & Transfer Instantly",
    description:
      "Make payments, transfer funds, pay bills, and track all transactions with real-time notifications and detailed history.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    animation: "fade-up",
    icon: <ArrowsRightLeftIcon className="h-8 w-8 text-white" />,
    badge: "Step 3",
  },
  {
    id: 4,
    title: "Apply for Instant Loans",
    description:
      "Get quick loans with competitive rates. Apply in minutes, get approved instantly, and receive funds directly to your wallet.",
    img: "https://i.ibb.co.com/MDJRV1n8/images-10-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-up",
    icon: <BanknotesIcon className="h-8 w-8 text-white" />,
    badge: "Step 4",
  },
  {
    id: 5,
    title: "Advanced Security Features",
    description:
      "Bank-level encryption, biometric authentication, and real-time fraud detection keep your money and data completely secure.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    animation: "fade-up",
    icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
    badge: "Step 5",
  },
  {
    id: 6,
    title: "Track & Analyze Spending",
    description:
      "View detailed analytics, set budgets, get spending insights, and manage your finances with AI-powered recommendations.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    animation: "fade-up",
    icon: <ChartBarIcon className="h-8 w-8 text-white" />,
    badge: "Step 6",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-11/12 mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* 🔹 Section Header */}
        <div className="mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4"
            data-aos="fade-down"
          >
            <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Simple & Secure Process
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            How <span className="text-green-500">PayMate</span> Works
          </h2>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Everything you need for smart digital payments and financial management.
          </p>
        </div>

        {/* 🔹 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos={step.animation}
              data-aos-delay={index * 100}
              className="relative rounded-3xl shadow-md bg-white dark:bg-gray-800 transition-all duration-500 transform hover:scale-[1.03] overflow-hidden group hover:shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              {/* Step Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
                  {step.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                  src={step.img}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Icon */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {step.description}
                </p>

                <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2 group/btn text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Accent Line */}
              <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* 🔹 CTA Footer */}
        <div className="mt-14" data-aos="fade-up" data-aos-delay="400">
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            No credit card required • Free to start • Setup in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
