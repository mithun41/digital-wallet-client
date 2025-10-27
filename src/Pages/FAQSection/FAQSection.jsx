import { useState } from "react";
import { Plus, Minus, Shield, Zap, Users, Headphones } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a digital wallet and how does it work?",
      answer:
        "A digital wallet is a secure platform that allows you to store money, make online payments, and manage your transactions digitally. You can link your bank account or card, add funds, and use it for seamless transactions anytime, anywhere.",
      icon: Zap,
    },
    {
      question: "Is my money safe in the digital wallet?",
      answer:
        "Absolutely. Your wallet is protected with end-to-end encryption, biometric authentication, and AI-powered fraud detection. Even if your device is lost, your funds remain safe and accessible through verified recovery methods.",
      icon: Shield,
    },
    {
      question: "How can I add or withdraw money?",
      answer:
        "You can add funds using your bank account, credit/debit card, or mobile banking. Withdrawals can be made directly to your bank account or through supported cash-out agents instantly.",
      icon: Users,
    },
    {
      question: "Can I send money to other users?",
      answer:
        "Yes, you can instantly transfer money to any registered user using their wallet ID, phone number, or QR code. Transfers are processed securely in real-time with zero hidden fees.",
      icon: Users,
    },
    {
      question: "What should I do if I face a transaction issue?",
      answer:
        "If a transaction fails or is delayed, you can contact our support team via in-app chat or email. Refunds for unsuccessful transactions are automatically processed within 24–48 hours.",
      icon: Headphones,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-[#0a0a0f] dark:via-[#0f0f1a] dark:to-[#0c1810]">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - FAQ Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  FAQ
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Find quick answers about how our digital wallet works, security
                features, and how you can manage your transactions safely and
                efficiently.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                      isOpen
                        ? "border-green-500/50 shadow-lg shadow-green-500/10 dark:shadow-green-500/5"
                        : "border-slate-200 dark:border-white/10 hover:border-green-500/30 dark:hover:border-green-500/30"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full px-6 py-5 flex items-start gap-4 text-left transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 dark:from-green-500/20 dark:via-emerald-500/20 dark:to-green-500/20"
                          : "bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-green-500 shadow-lg shadow-green-500/30"
                            : "bg-slate-100 dark:bg-slate-800 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/20"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors ${
                            isOpen
                              ? "text-white"
                              : "text-slate-600 dark:text-gray-400 group-hover:text-green-500"
                          }`}
                        />
                      </div>

                      {/* Question */}
                      <div className="flex-1 min-w-0">
                        <span
                          className={`block font-semibold text-base sm:text-lg pr-4 transition-colors ${
                            isOpen
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Toggle Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-green-500 rotate-180 shadow-md"
                            : "bg-slate-100 dark:bg-slate-800 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/20"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus
                            className={`w-4 h-4 transition-colors ${
                              isOpen
                                ? "text-white"
                                : "text-slate-600 dark:text-gray-400 group-hover:text-green-500"
                            }`}
                          />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-6 py-5 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-white/5">
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
                Still have questions? We're here to help!
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                <Headphones className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:sticky lg:top-24 lg:self-start">
            <div className="relative w-full max-w-lg">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>

              {/* Floating Badge - positioned above image */}
              <div className="absolute -top-4 -right-4 z-20 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    24/7 Support
                  </span>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent pointer-events-none z-10"></div>
                <img
                  src="https://i.postimg.cc/9XLsvSh7/FAQ.png"
                  alt="Digital wallet illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
