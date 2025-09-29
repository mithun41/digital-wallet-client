import React from "react";


const steps = [
    {
        id: 1,
        title: "Sign Up & Verify",
        description:
            "Create your account with email verification and complete KYC for enhanced security and higher transaction limits.",
        img: "https://i.ibb.co.com/v6w5BJxx/images-10.jpg",
    },
    {
        id: 2,
        title: "Add Money & Manage Cards",
        description:
            "Link your bank accounts and cards, add funds to your wallet, and set up multiple payment methods for convenience.",
        img: "https://i.ibb.co.com/1t87ZhSs/credit-card-close-shot-selective-600nw-567634105.webp",
    },
    {
        id: 3,
        title: "Pay, Transfer & Track Securely",
        description:
            "Make payments, transfer funds, pay bills, and track all transactions with real-time notifications and detailed history.",
        img: "https://i.ibb.co.com/MD7dNR4z/download-8.jpg",
    },


];

const HowItWorks = () => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    How PayMate Works
                </h2>
                <p className="text-gray-600 mb-10">
                    Get started in just 4 simple steps
                </p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg">
                                {step.id}
                            </div>
                            <div
                                key={step.id}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                            >

                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="mx-auto mb-4 w-full h-28 object-contain"
                                />
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
