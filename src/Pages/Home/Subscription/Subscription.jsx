import React from "react";

const Subscription = () => {
    return (
        <div className="py-16 px-6 md:px-20 shadow-lg text-center bg-white dark:bg-gray-900 rounded-xl transition-colors duration-500">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                Stay Updated!
            </h2>
            <p className="text-md md:text-lg mb-8 text-gray-700 dark:text-gray-300">
                Subscribe to our newsletter and get the latest updates and offers directly in your inbox.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-80 px-4 py-3 border-1 rounded-lg text-gray-900 dark:text-gray-100 
                     border-gray-300 dark:border-gray-600 
                     focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 
                     transition duration-300 shadow-sm bg-white dark:bg-gray-800"
                />
                <button className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg border-2 border-purple-500 shadow-md cursor-pointerjj
                   hover:bg-purple-600 hover:border-purple-600 hover:shadow-lg
                   dark:bg-purple-700 dark:border-purple-700 dark:hover:bg-purple-800 dark:hover:border-purple-800
                   transition-all duration-300">
                    Subscribe
                </button>


            </div>

            <p className="text-sm mt-4 opacity-80 text-gray-600 dark:text-gray-400">
                No spam, unsubscribe anytime.
            </p>
        </div>
    );
};

export default Subscription;
