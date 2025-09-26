import React from "react";
import { Sun, Sparkles, Star } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-8">
      {/* Greeting Card */}
      <div className="text-center bg-white rounded-3xl shadow-xl p-12 max-w-2xl w-full">
        <Sun className="mx-auto text-yellow-400 w-16 h-16 mb-4 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your personal space to manage your account and stay updated with your activities.
        </p>

        {/* Highlight Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-400 to-indigo-600 text-white shadow-md transform hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6 mb-2" />
            <h3 className="font-bold text-lg">Explore Features</h3>
            <p className="text-sm mt-1">Check out all tools available to you.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-md transform hover:scale-105 transition-transform">
            <Star className="w-6 h-6 mb-2" />
            <h3 className="font-bold text-lg">Stay Updated</h3>
            <p className="text-sm mt-1">Get notifications about your account and activity.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-md transform hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 mb-2" />
            <h3 className="font-bold text-lg">Personal Dashboard</h3>
            <p className="text-sm mt-1">Everything you need in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
