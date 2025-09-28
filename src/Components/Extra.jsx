import { useState } from "react";
import { ArrowLeft, TrendingUp, PieChart, Wallet } from "lucide-react";

export default function Extra() {
  const [selectedTab, setSelectedTab] = useState("mutual");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col">
      {/* Header */}
      <div className="bg-pink-600 text-white p-4 flex items-center gap-3">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="text-lg font-semibold">Virtual Investment</h1>
      </div>

      {/* Balance Card */}
      <div className="p-4">
        <div className="bg-white shadow-md rounded-2xl p-5 text-center">
          <Wallet className="mx-auto text-pink-600" size={40} />
          <h2 className="text-gray-600 mt-2">Available Balance</h2>
          <p className="text-2xl font-bold text-gray-900">৳ 5,200</p>
          <button className="mt-3 bg-pink-600 text-white px-6 py-2 rounded-xl font-medium">
            Add Money
          </button>
        </div>
      </div>

      {/* Investment Options */}
      <div className="flex justify-around px-4 mb-4">
        <button
          onClick={() => setSelectedTab("mutual")}
          className={`flex flex-col items-center p-3 rounded-xl w-1/2 mx-1 ${
            selectedTab === "mutual"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          <PieChart size={28} />
          <span className="mt-1 font-medium">Mutual Fund</span>
        </button>
        <button
          onClick={() => setSelectedTab("share")}
          className={`flex flex-col items-center p-3 rounded-xl w-1/2 mx-1 ${
            selectedTab === "share"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          <TrendingUp size={28} />
          <span className="mt-1 font-medium">Share Trading</span>
        </button>
      </div>

      {/* Investment Details */}
      <div className="flex-1 bg-white rounded-t-3xl p-5 shadow-lg">
        {selectedTab === "mutual" ? (
          <div>
            <h2 className="text-lg font-semibold mb-3">Mutual Fund Plans</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-xl hover:shadow-md cursor-pointer">
                <h3 className="font-semibold text-gray-800">
                  Growth Fund - Small Investment
                </h3>
                <p className="text-sm text-gray-600">
                  Start with ৳500 only and grow steadily
                </p>
              </div>
              <div className="p-4 border rounded-xl hover:shadow-md cursor-pointer">
                <h3 className="font-semibold text-gray-800">
                  Balanced Fund
                </h3>
                <p className="text-sm text-gray-600">
                  Secure + Growth mix, min invest ৳1000
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-3">Share Trading Options</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-xl hover:shadow-md cursor-pointer">
                <h3 className="font-semibold text-gray-800">Blue Chip Stocks</h3>
                <p className="text-sm text-gray-600">
                  Stable companies with steady growth
                </p>
              </div>
              <div className="p-4 border rounded-xl hover:shadow-md cursor-pointer">
                <h3 className="font-semibold text-gray-800">
                  High Risk, High Return
                </h3>
                <p className="text-sm text-gray-600">
                  Invest min ৳2000 in trending stocks
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
