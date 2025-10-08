import { CheckCircle } from "lucide-react";
import React, { useState } from "react";

const Subscription = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleSubscribe = () =>{
        if(!email){
            alert("Plese enter your email before Subscribing!");
            return;
        }
        setSuccess(true);
        setEmail("");

        setTimeout(() => setSuccess(false), 3000)
    }
    return (
        <div className="max-w-11/12 mx-auto border border-transparent hover:border-green-500 py-12 mt-8 px-6 md:px-16 rounded-2xl  flex flex-col md:flex-row items-center justify-between shadow-md">

            {/* Left Text Section */}
            <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium mb-3">
                    ● Stay in the loop
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                    Subscribe to our newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                    Get handpicked property highlights, travel tips, and exclusive offers delivered to your inbox.
                </p>
            </div>

            {/* Right Input Section */}
            <div className="flex items-center w-full md:w-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    className="w-full md:w-80 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button onClick={handleSubscribe} className="ml-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300">
                    Subscribe
                </button>
                { success && (
                    <div><CheckCircle size={20}/>
                    <span>SubsCribed Sueccessfully</span>
                    </div>
                    )}
            </div>
            {/* stye animation */}
            <style>
                {`
                @keyframes fadIn {
                from {opacity: 0; transfrom:translaeY(10px)}
                to {opacity: 1; transform:translateY(0);}
                }
                .animation-fadeIn{
                animation fadeIn 0.4s ease-in-out;
                }
                `}</style>
        </div>
    );
};

export default Subscription;
