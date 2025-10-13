import React from "react";
import { FaUniversity, FaExchangeAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router";

const Guarantee = () => {
    const features = [
        {
            title: "Bank Account",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: <FaUniversity size={40} />,
            gradient: "from-[#1f1c2c] to-[#928DAB]",
        },
        {
            title: "Easy Payment",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: <MdPayment size={40} />,
            gradient: "from-[#2E3192] to-[#1BFFFF]",
        },
        {
            title: "Investments",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: <FaMoneyCheckAlt size={40} />,
            gradient: "from-[#8E2DE2] to-[#4A00E0]",
        },
        {
            title: "Funds Transfer",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: <FaExchangeAlt size={40} />,
            gradient: "from-[#FF512F] to-[#DD2476]",
        },
    ];

    return (
        <div className=" text-white px-6 sm:px-8 py-12 sm:py-16">
            <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left side features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 flex flex-col gap-4 bg-gradient-to-r ${feature.gradient}`}
                        >
                            <div className="text-white">{feature.icon}</div>
                            <h3 className="font-bold text-lg">{feature.title}</h3>
                            <p className="text-sm opacity-80 leading-relaxed sm:leading-normal">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right side content */}
                <div className="text-left md:pl-12">
                    <h1 className="text-3xl sm:text-4xl text-black dark:text-white md:text-5xl font-extrabold leading-snug">
                        Your Money, Your <br /> Way, <span className="text-green-600 dark:text-green-500">Our Guarantee</span>{" "}
                        
                    </h1>
                    <p className="mt-4 sm:mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                    </p>
                    <Link
                        to="/dashboard"
                        className="mt-8 sm:mt-12 md:mt-16 inline-block px-8 py-3 cursor-pointer rounded-full border
                         border-green-600 dark:border-green-500 text-black dark:text-white hover:bg-green-600 hover:text-white
                         transition duration-300"
                    >
                        Get Started
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Guarantee;
