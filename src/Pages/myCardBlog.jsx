import React from "react";
import { useParams, Link } from "react-router";
import { 
  ArrowLeftIcon, 
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "My Card - Digital & Physical Payment Solution",
    description: "Get instant virtual cards and premium physical cards delivered to your doorstep.",
    img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    intro: "PayMate's My Card feature lets you create, customize, and control multiple payment cards from a single dashboard.",
    sections: [
      {
        heading: "Virtual Cards",
        content: "Create unlimited virtual cards instantly for online shopping and subscriptions.",
        features: ["Instant card generation", "Custom spending limits", "Disposable one-time cards"]
      },
      {
        heading: "Physical Cards",
        content: "Order personalized cards with contactless payment and EMV chip security.",
        features: ["NFC contactless payment", "Works worldwide", "Free delivery in 3-5 days"]
      }
    ],
    benefits: ["Complete card control", "Real-time fraud detection", "No annual fees"]
  },
  {
    id: 2,
    title: "Add Money & Manage Cards",
    description: "Keep your wallet loaded with multiple funding sources managed from one place.",
    img: "https://i.ibb.co.com/d0FQXXP2/images-11-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    intro: "Never run out of balance with PayMate's flexible wallet management system.",
    sections: [
      {
        heading: "Multiple Add Money Options",
        content: "Load your wallet instantly through various payment methods.",
        features: ["Bank transfer (NEFT/IMPS)", "Credit/Debit cards", "UPI payments"]
      },
      {
        heading: "Auto-Reload Feature",
        content: "Set automatic wallet reload when balance drops below threshold.",
        features: ["Set minimum balance", "Choose reload amount", "Pause anytime"]
      }
    ],
    benefits: ["Instant balance updates", "Multiple payment methods", "Secure card storage"]
  },
  {
    id: 3,
    title: "Pay & Transfer Instantly",
    description: "Send money, pay bills, and make purchases in seconds with lightning-fast processing.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    intro: "Complete any transaction in seconds. Pay friends, shop online, or settle bills effortlessly.",
    sections: [
      {
        heading: "Instant Money Transfer",
        content: "Send money to anyone instantly via mobile number, email, or QR code.",
        features: ["Transfer to any bank", "Free PayMate user transfers", "QR code payments"]
      },
      {
        heading: "Bill Payments",
        content: "Pay all bills from one app with automatic reminders.",
        features: ["Electricity & water bills", "Mobile recharge", "Credit card payments"]
      }
    ],
    benefits: ["Zero P2P transfer fees", "Lightning-fast processing", "Real-time tracking"]
  },
  {
    id: 4,
    title: "Apply for Instant Loans",
    description: "Get quick loans up to ৳500,000. Apply in minutes, get approved instantly.",
    img: "https://i.ibb.co.com/MDJRV1n8/images-10-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg",
    intro: "Need quick cash? Get instant loans with minimal documentation and competitive rates.",
    sections: [
      {
        heading: "Quick Application",
        content: "100% digital process with instant eligibility check.",
        features: ["Minimal documentation", "Apply in 3 minutes", "No physical verification"]
      },
      {
        heading: "Flexible Options",
        content: "Choose loan amount and tenure that suits your needs.",
        features: ["৳5,000 to ৳500,000", "3-36 months tenure", "8% interest rate"]
      }
    ],
    benefits: ["Instant approval in 2 minutes", "No collateral required", "Zero hidden charges"]
  },
  {
    id: 5,
    title: "Advanced Security Features",
    description: "Military-grade security with multiple layers of protection for every transaction.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    intro: "Bank-level encryption and AI-powered fraud detection keep your money completely safe.",
    sections: [
      {
        heading: "Encryption & Authentication",
        content: "Highest security standards with multiple verification layers.",
        features: ["256-bit SSL encryption", "Biometric login", "Two-factor authentication"]
      },
      {
        heading: "Fraud Detection",
        content: "AI monitors every transaction 24/7 to prevent suspicious activities.",
        features: ["Real-time fraud alerts", "Automatic blocking", "Geographic anomaly detection"]
      }
    ],
    benefits: ["Industry-leading security", "Proactive fraud prevention", "24/7 monitoring"]
  },
  {
    id: 6,
    title: "Track & Analyze Spending",
    description: "AI-powered analytics to understand spending habits and achieve financial goals.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    intro: "Get complete visibility into spending patterns with actionable insights and recommendations.",
    sections: [
      {
        heading: "Smart Categorization",
        content: "Transactions automatically sorted into 20+ categories.",
        features: ["Auto-categorize spending", "Custom categories", "Monthly breakdowns"]
      },
      {
        heading: "Budget & Goals",
        content: "Set budgets and track financial goals with real-time alerts.",
        features: ["Category-wise budgets", "Real-time alerts", "Savings goal tracking"]
      }
    ],
    benefits: ["Complete financial visibility", "Data-driven decisions", "Achieve goals faster"]
  }
];

const MyCardBlog = () => {
  const { id } = useParams();
  const step = steps.find((item) => item.id === parseInt(id));

  if (!step) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center py-20 px-6">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Feature Not Found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <ArrowLeftIcon className="h-5 w-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-600 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <SparklesIcon className="h-7 w-7 text-white" />
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              Feature Guide
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {step.title}
          </h1>
          
          <p className="text-lg text-white/90 max-w-3xl">
            {step.description}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-16">
        <img
          src={step.img}
          alt={step.title}
          className="w-full h-[350px] object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          {step.intro}
        </p>

        {/* Content Sections */}
        {step.sections.map((section, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {section.heading}
              </h2>
            </div>
            
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-12">
              {section.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-12">
              {section.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-800"
                >
                  <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 mb-10 border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Benefits
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {step.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-white dark:bg-gray-800/50 p-3 rounded-lg"
              >
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-6">
            Experience the power of PayMate today!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Explore More Features
            <ArrowLeftIcon className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">2M+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">24/7</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">256-bit</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardBlog;