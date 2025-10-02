import React from "react";

const Subscription = () => {
    return (
        <div className="max-w-10/12 mx-auto py-12 px-6 md:px-16 rounded-2xl  flex flex-col md:flex-row items-center justify-between shadow-md">

            {/* Left Text Section */}
            <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium mb-3">
                    ● Stay in the loop
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                    Subscribe to our newsletter
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Get handpicked property highlights, travel tips, and exclusive offers delivered to your inbox.
                </p>
            </div>

            {/* Right Input Section */}
            <div className="flex items-center w-full md:w-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-80 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="ml-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Subscription;
