// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   UserPlusIcon,
//   CreditCardIcon,
//   ArrowsRightLeftIcon,
//   BanknotesIcon,
//   ShieldCheckIcon,
//   ChartBarIcon,
//   CheckCircleIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/outline";
// import { Link } from "react-router";

// const steps = [
//   {
//     id: 1,
//     title: "Sign Up & Verify",
//     description:
//       "Create your account with email verification and complete KYC for enhanced security and higher transaction limits.",
//     img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
//     animation: "fade-up",
//     icon: <UserPlusIcon className="h-8 w-8 text-white" />,
//     badge: "/myCardBlog",

//   },
//   {
//     id: 2,
//     title: "Add Money & Manage Cards",
//     description:
//       "Link your bank accounts and cards, add funds to your wallet, and set up multiple payment methods for convenience.",
//     img: "https://i.ibb.co.com/d0FQXXP2/images-11-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
//     animation: "fade-up",
//     icon: <CreditCardIcon className="h-8 w-8 text-white" />,
//     badge: "Step 2",
//   },
//   {
//     id: 3,
//     title: "Pay & Transfer Instantly",
//     description:
//       "Make payments, transfer funds, pay bills, and track all transactions with real-time notifications and detailed history.",
//     img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
//     animation: "fade-up",
//     icon: <ArrowsRightLeftIcon className="h-8 w-8 text-white" />,
//     badge: "Step 3",
//   },
//   {
//     id: 4,
//     title: "Apply for Instant Loans",
//     description:
//       "Get quick loans with competitive rates. Apply in minutes, get approved instantly, and receive funds directly to your wallet.",
//     img: "https://i.ibb.co.com/MDJRV1n8/images-10-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
//     animation: "fade-up",
//     icon: <BanknotesIcon className="h-8 w-8 text-white" />,
//     badge: "Step 4",
//   },
//   {
//     id: 5,
//     title: "Advanced Security Features",
//     description:
//       "Bank-level encryption, biometric authentication, and real-time fraud detection keep your money and data completely secure.",
//     img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
//     animation: "fade-up",
//     icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
//     badge: "Step 5",
//   },
//   {
//     id: 6,
//     title: "Track & Analyze Spending",
//     description:
//       "View detailed analytics, set budgets, get spending insights, and manage your finances with AI-powered recommendations.",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     animation: "fade-up",
//     icon: <ChartBarIcon className="h-8 w-8 text-white" />,
//     badge: "Step 6",
//   },
// ];

// const HowItWorks = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true });
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-7xl mx-auto text-center px-6">
//         {/* Heading */}
//         <div className="mb-16">
//           <div
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4"
//             data-aos="fade-down"
//           >
//             <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
//             <span className="text-sm font-medium text-green-700 dark:text-green-300">
//               Simple & Secure Process
//             </span>
//           </div>
//           <h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
//             data-aos="fade-down"
//           >
//             How <span className="text-green-500">PayMate</span> Works
//           </h2>
//           <p
//             className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
//             data-aos="fade-up"
//           >
//             Everything you need for smart digital payments and financial management
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               data-aos={step.animation}
//               data-aos-delay={index * 100}
//               className="relative rounded-3xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-500 transform hover:scale-105 overflow-hidden group hover:shadow-2xl border border-gray-100 dark:border-gray-700"
//             >
//               {/* Badge */}
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
//                   {step.badge}
//                 </span>
//               </div>

//               {/* Image */}
//               <div className="relative w-full h-56 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
//                 <img
//                   src={step.img}
//                   alt={step.title}
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute bottom-4 right-4 z-20">
//                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 shadow-xl group-hover:scale-110 transition-transform duration-300">
//                     {step.icon}
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors duration-300">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
//                   {step.description}
//                 </p>

//                 {/* Button → Route to Details */}
//                 <Link
//                   to={`/myCardBlog/${step.id}`}
//                   className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import React, { useEffect, useState } from "react";
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
  XMarkIcon,
} from "@heroicons/react/24/outline";


const steps = [
  {
    id: 1,
    title: "Send Money & Card",
    description:
      "Transfer money instantly to anyone and manage your virtual or physical cards with complete control and security.",
    img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    animation: "fade-up",
    icon: <UserPlusIcon className="h-8 w-8 text-white" />,
    badge: "Step 1",
    details: {
      fullDescription: "Our My Card feature provides you with a complete virtual and physical card management system. You can create multiple cards for different purposes, set spending limits, and control your finances with ease.",
      features: [
        "Instant virtual card generation",
        "Physical card delivery within 3-5 days",
        "Customize card design and colors",
        "Set transaction limits per card",
        "Freeze/unfreeze cards anytime",
        "Real-time transaction notifications"
      ],
      benefits: "Manage all your payment cards in one secure place with full control over spending and security."
    }
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
    details: {
      fullDescription: "Adding money to your PayMate wallet is quick and secure. Connect multiple funding sources and enjoy seamless transactions across all platforms.",
      features: [
        "Add money via bank transfer",
        "Credit/Debit card linking",
        "UPI and mobile banking support",
        "Auto-reload when balance is low",
        "Instant deposit confirmation",
        "Multi-currency wallet support"
      ],
      benefits: "Never worry about payment failures. Keep your wallet loaded with multiple funding options."
    }
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
    details: {
      fullDescription: "Experience lightning-fast payments and transfers with PayMate. Send money to anyone, anywhere, anytime with just a few taps.",
      features: [
        "Instant money transfer to any bank",
        "QR code payments at stores",
        "Bill payments (electricity, water, internet)",
        "Mobile recharge and DTH",
        "Split bills with friends",
        "Request money feature"
      ],
      benefits: "Complete all your payment needs from a single app with zero hassle and maximum speed."
    }
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
    details: {
      fullDescription: "Need quick cash? PayMate offers instant personal loans with minimal documentation and competitive interest rates. Get approved in minutes!",
      features: [
        "Loans from $100 to $10,000",
        "Instant approval in 2 minutes",
        "Flexible repayment options (3-36 months)",
        "No hidden charges",
        "Competitive interest rates starting at 8%",
        "Pre-approved loan offers for eligible users"
      ],
      benefits: "Access emergency funds instantly without any paperwork hassle or long waiting periods."
    }
  },
  {
    id: 5,
    title: "Education Fee Features",
    description:
      "Pay education fees seamlessly with flexible payment options, EMI plans, and exclusive discounts for students.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    animation: "fade-up",
    icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
    badge: "Step 5",
    details: {
      fullDescription: "Your security is our top priority. PayMate uses military-grade encryption and advanced fraud detection to protect every transaction.",
      features: [
        "256-bit SSL encryption",
        "Biometric login (fingerprint/face ID)",
        "Two-factor authentication (2FA)",
        "Real-time fraud alerts",
        "Transaction PIN protection",
        "Automatic logout on suspicious activity"
      ],
      benefits: "Sleep peacefully knowing your money is protected by industry-leading security protocols."
    }
  },
  {
    id: 6,
    title: "CashOut & Transactions",
    description:
      "Withdraw money anytime to your bank account and track all your transactions with detailed reports and statements.",
    img: "https://i.postimg.cc/wTX4wh52/wallet.png",
    animation: "fade-up",
    icon: <ChartBarIcon className="h-8 w-8 text-white" />,
    badge: "Step 6",
    details: {
      fullDescription: "Take control of your finances with powerful analytics and insights. PayMate helps you understand where your money goes and how to save more.",
      features: [
        "Categorized spending reports",
        "Monthly budget planning",
        "AI-powered savings suggestions",
        "Custom spending alerts",
        "Export transaction history",
        "Visual charts and graphs"
      ],
      benefits: "Make smarter financial decisions with data-driven insights and personalized recommendations."
    }
  },
];
const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const openModal = (step) => {
    setSelectedStep(step);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedStep(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="max-w-11/12 mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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

          {/* Steps Grid */}
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

                  <button 
                    onClick={() => openModal(step)}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2 group/btn text-sm sm:text-base"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Accent Line */}
                <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-14" data-aos="fade-up" data-aos-delay="400">
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              No credit card required • Free to start • Setup in 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    {selectedStep.icon}
                  </div>
                  <div>
                    <span className="text-white/80 text-sm font-medium">{selectedStep.badge}</span>
                    <h3 className="text-2xl font-bold text-white">{selectedStep.title}</h3>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Full Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Overview</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedStep.details.fullDescription}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedStep.details.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  Why Choose This?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedStep.details.benefits}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button 
                  onClick={closeModal}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Got It!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default HowItWorks;
