import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Sign Up & Verify",
    description:
      "Create your account with email verification and complete KYC for enhanced security and higher transaction limits.",
    img: "https://i.ibb.co.com/MDJRV1n8/images-10-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-up",
  },
  {
    id: 2,
    title: "Add Money & Manage Cards",
    description:
      "Link your bank accounts and cards, add funds to your wallet, and set up multiple payment methods for convenience.",
    img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    animation: "fade-right",
  },
  {
    id: 3,
    title: "Pay, Transfer & Track Securely",
    description:
      "Make payments, transfer funds, pay bills, and track all transactions with real-time notifications and detailed history.",
    img: "https://i.ibb.co.com/d0FQXXP2/images-11-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    animation: "fade-left",
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

<<<<<<< HEAD
    return (
        <section className="py-10">
            <div className="max-w-10/12 mx-auto text-center px-4">
                <h2
                    className="text-2xl md:text-3xl font-bold text-secondary mb-2"
                    data-aos="fade-down"
                >
                    How PayMate Works
                </h2>
                <p className="text-secondary mb-10" data-aos="fade-up">
                    Get started in just 3 simple steps
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div>
                            <div className="w-12 h-12 mx-auto mt-4 flex items-center justify-center p-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg mb-5">
                                {step.id}
                            </div>
                            <div

                                data-aos={step.animation}
                                className=" rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 overflow-hidden "
                            >

                                <div className="relative w-full h-48 mt-4">
                                    <img
                                        src={step.img}
                                        alt={step.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-secondary">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-secondary">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
=======
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
          data-aos="fade-down"
        >
          How PayMate Works
        </h2>
        <p className="text-gray-600 mb-10" data-aos="fade-up">
          Get started in just 3 simple steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="w-12 h-12 mx-auto mt-4 flex items-center justify-center p-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg mb-5">
                {step.id}
              </div>
              <div
                data-aos={step.animation}
                className=" rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 overflow-hidden "
              >
                <div className="relative w-full h-48 mt-4">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
>>>>>>> 4c2e2dd49c76510fb38c588ad3a092b637346c5d
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
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
