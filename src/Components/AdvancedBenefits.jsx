import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// JSON Data
const benefits = [
    {
        id: 1,
        title: "Loyalty Points & Rewards",
        description:
            "Earn cashback and discounts on every transaction. Redeem points for gift vouchers and exclusive offers.",
        icon: "🎁",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        id: 2,
        title: "Multiple Wallets",
        description:
            "Manage personal, business, and savings wallets in one place with separate budgets and controls.",
        icon: "💳",
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 3,
        title: "Future-Ready Scalability",
        description:
            "Multi-currency support, recurring payments, and international transfers coming soon.",
        icon: "🌍",
        color: "bg-green-100 text-green-600",
    },
    {
        id: 4,
        title: "Real-Time Notifications",
        description:
            "Stay updated on every transaction with instant push notifications, emails, and SMS alerts.",
        icon: "🔔",
        color: "bg-purple-100 text-purple-600",
    },
    {
        id: 5,
        title: "AI Fraud Detection",
        description:
            "Advanced AI monitors unusual activity and protects your account in real time.",
        icon: "🤖",
        color: "bg-red-100 text-red-600",
    },
    {
        id: 6,
        title: "24/7 Support",
        description:
            "Get help anytime with live chat and customer support available round the clock.",
        icon: "📞",
        color: "bg-pink-100 text-pink-600",
    },
];

const AdvancedBenefits = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        Advanced Benefits
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Experience next-level digital banking features
                    </p>

                    <div className="space-y-6">
                        {benefits.slice(0, 4).map((item) => (
                            <div key={item.id} className="flex items-start gap-4">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.color} text-lg`}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div data-aos="fade-left" className="flex justify-center">
                    <img
                        src="https://i.ibb.co.com/1fmhtxM8/Whats-App-Image-2025-09-29-at-10-49-19-23395b3e.jpg"
                        alt="Mobile App"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            {/* Marquee Section */}
            {/* <div className="overflow-hidden mt-12">
                <div className="flex animate-marquee whitespace-nowrap gap-10">
                    {benefits.map((item) => (
                        <span
                            key={item.id}
                            className="px-6 py-2 bg-white shadow rounded-full text-gray-700 font-medium flex items-center gap-2"
                        >
                            {item.icon} {item.title}
                        </span>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default AdvancedBenefits;
