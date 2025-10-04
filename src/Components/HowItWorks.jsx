import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  UserPlusIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Sign Up & Verify",
    description:
      "Create your account with email verification and complete KYC for enhanced security and higher transaction limits.",
    img: "https://i.ibb.co.com/MDJRV1n8/images-10-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-up",
    icon: <UserPlusIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Add Money & Manage Cards",
    description:
      "Link your bank accounts and cards, add funds to your wallet, and set up multiple payment methods for convenience.",
    img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    animation: "fade-right",
    icon: <CreditCardIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "Pay, Transfer & Track Securely",
    description:
      "Make payments, transfer funds, pay bills, and track all transactions with real-time notifications and detailed history.",
    img: "https://i.ibb.co.com/d0FQXXP2/images-11-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-left",
    icon: <ArrowsRightLeftIcon className="h-8 w-8 text-white" />,
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
    <section className="py-16">
      <div className="max-w-11/12 mx-auto text-center px-4">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-green-600 mb-2"
          data-aos="fade-down"
        >
          How PayMate Works
        </h2>
        <p
          className="max-w-2xl mx-auto mb-12 text-gray-600"
          data-aos="fade-up"
        >
          Get started with your digital wallet in just 3 simple steps
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id}>
              {/* Top Icon */}
              <div className="flex justify-center mt-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Card */}
              <div
                data-aos={step.animation}
                className="rounded-2xl shadow-md bg-white transition-all duration-300 transform hover:scale-105 overflow-hidden group 
                           border border-transparent hover:border-green-500 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative w-full h-52 mt-4 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>

                  {/* CTA Button */}
                  <button className="mt-4 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow hover:from-purple-600 hover:to-indigo-600 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
