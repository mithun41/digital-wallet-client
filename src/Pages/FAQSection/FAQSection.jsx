import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqs = [
    {
      question: "What is a digital wallet and how does it work?",
      answer:
        "A digital wallet is a secure platform that allows you to store money, make online payments, and manage your transactions digitally. You can link your bank account or card, add funds, and use it for seamless transactions anytime, anywhere.",
    },
    {
      question: "Is my money safe in the digital wallet?",
      answer:
        "Absolutely. Your wallet is protected with end-to-end encryption, biometric authentication, and AI-powered fraud detection. Even if your device is lost, your funds remain safe and accessible through verified recovery methods.",
    },
    {
      question: "How can I add or withdraw money?",
      answer:
        "You can add funds using your bank account, credit/debit card, or mobile banking. Withdrawals can be made directly to your bank account or through supported cash-out agents instantly.",
    },
    {
      question: "Can I send money to other users?",
      answer:
        "Yes, you can instantly transfer money to any registered user using their wallet ID, phone number, or QR code. Transfers are processed securely in real-time with zero hidden fees.",
    },
    {
      question: "What should I do if I face a transaction issue?",
      answer:
        "If a transaction fails or is delayed, you can contact our support team via in-app chat or email. Refunds for unsuccessful transactions are automatically processed within 24–48 hours.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen max-w-10/12 mx-auto md:px-8 py-10 overflow-hidden">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        
        {/* ✅ Left side - FAQ Content */}
        <div data-aos="fade-right" className="space-y-6 order-2 md:order-1">
          <div>
            <h1 className="text-3xl sm:text-4xl text-black dark:text-white md:text-5xl font-extrabold leading-snug">
                         Frequently Asked  <br /> <span className="text-green-500 dark:text-green-500">Questions</span>{" "}
                        
                    </h1>
          </div>

          <p className="text-lg max-w-xl">
            Find quick answers about how our digital wallet works, security
            features, and how you can manage your transactions safely and
            efficiently.
          </p>

          <div className="space-y-4 pt-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-green-500/30 backdrop-blur-sm transition-all duration-300"
                style={{
                  background:
                    openIndex === index
                      ? "linear-gradient(135deg, rgba(92, 246, 128, 0.15) 0%, rgba(118, 236, 72, 0.15) 100%)"
                      : "rgba(15, 23, 42, 0.6)",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
                  style={{
                    background:
                      openIndex === index
                        ? "linear-gradient(90deg, rgba(92, 246, 146, 0.8) 0%, rgba(72, 217, 236, 0.8) 50%, rgba(60, 251, 105, 0.8) 100%)"
                        : "transparent",
                  }}
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-slate-900/50 border-t border-green-500/10">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right side - Image (Visible on all screens) */}
        <div
          data-aos="fade-left"
          className="order-1 md:order-2 "
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
            <img
              src="https://i.postimg.cc/9XLsvSh7/FAQ.png"
              alt="Digital wallet illustration"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
