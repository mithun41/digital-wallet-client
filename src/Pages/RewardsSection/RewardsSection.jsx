import React, { useState } from "react";
import {
  Gift,
  Star,
  Trophy,
  Zap,
  TrendingUp,
  Award,
  Percent,
  Clock,
  CheckCircle,
  CreditCard,
  Wallet
} from "lucide-react";

const RewardsSection = () => {
  const [activeTab, setActiveTab] = useState("cashback");

  const rewardTypes = [
    { id: "cashback", label: "Cashback", icon: <Percent size={18} /> },
    { id: "points", label: "Points", icon: <Star size={18} /> },
    { id: "offers", label: "Offers", icon: <Gift size={18} /> },
  ];

  const cashbackRewards = [
    {
      id: 1,
      title: "Mobile Recharge",
      description: "Get 5% cashback on every mobile recharge",
      cashback: "5%",
      icon: <Zap className="text-yellow-500" size={28} />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Utility Bills",
      description: "Earn 3% cashback on electricity & gas bills",
      cashback: "3%",
      icon: <TrendingUp className="text-blue-500" size={28} />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "Online Shopping",
      description: "Save 10% on e-commerce payments",
      cashback: "10%",
      icon: <Gift className="text-purple-500" size={28} />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      title: "Education Fees",
      description: "Get 2% cashback on tuition payments",
      cashback: "2%",
      icon: <Award className="text-green-500" size={28} />,
      color: "from-green-400 to-emerald-500",
    },
  ];

  const pointsRewards = [
    {
      id: 1,
      title: "Transaction Points",
      description: "Earn 10 points for every ৳100 spent",
      points: "10 pts",
      icon: <Star className="text-yellow-500" size={28} />,
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: 2,
      title: "Referral Bonus",
      description: "Get 500 points for each friend referral",
      points: "500 pts",
      icon: <Trophy className="text-orange-500" size={28} />,
      color: "from-orange-400 to-red-500",
    },
    {
      id: 3,
      title: "Daily Login",
      description: "Collect 5 points just by logging in daily",
      points: "5 pts",
      icon: <Clock className="text-blue-500" size={28} />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 4,
      title: "Complete Profile",
      description: "One-time 200 points for profile completion",
      points: "200 pts",
      icon: <CheckCircle className="text-green-500" size={28} />,
      color: "from-green-400 to-teal-500",
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Double cashback on all transactions every weekend",
      validity: "Valid till Dec 31",
      discount: "2X",
      icon: <Gift className="text-pink-500" size={28} />,
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      title: "First Transaction",
      description: "Get ৳100 cashback on your first wallet payment",
      validity: "New users only",
      discount: "৳100",
      icon: <Award className="text-purple-500" size={28} />,
      color: "from-purple-400 to-violet-500",
    },
    {
      id: 3,
      title: "Mega Jackpot",
      description: "Spend ৳5000+ and enter lucky draw for ৳10,000",
      validity: "Monthly draw",
      discount: "৳10K",
      icon: <Trophy className="text-yellow-500" size={28} />,
      color: "from-yellow-400 to-orange-600",
    },
    {
      id: 4,
      title: "Bill Payment Offer",
      description: "Pay 3 bills and get 4th bill with 50% discount",
      validity: "Limited time",
      discount: "50%",
      icon: <Percent className="text-cyan-500" size={28} />,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const getCurrentRewards = () => {
    if (activeTab === "cashback") return cashbackRewards;
    if (activeTab === "points") return pointsRewards;
    return specialOffers;
  };

  const getRewardValue = (reward) => {
    if (activeTab === "cashback") return reward.cashback;
    if (activeTab === "points") return reward.points;
    return reward.discount;
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-green-500 p-3 sm:p-4 rounded-2xl sm:rounded-3xl mb-3 sm:mb-4">
            <Trophy size={40} className="text-white sm:w-12 sm:h-12" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-3 sm:mb-4 px-4">
            Rewards & Benefits
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto px-4">
            Earn amazing rewards with every transaction. More you spend, more you save!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className=" rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm sm:text-base text-gray-800 dark:text-gray-100 font-semibold">Total Cashback</h3>
              <Percent className="text-green-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">৳ 2,450</p>
            <p className="text-xs sm:text-sm text-green-600 mt-2 flex items-center gap-1">
              <TrendingUp size={14} />
              +15% this month
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm sm:text-base text-gray-800 dark:text-gray-100 font-semibold">Reward Points</h3>
              <Star className="text-green-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">8,750</p>
            <p className="text-xs sm:text-sm text-green-500  mt-2">৳ 875 equivalent</p>
          </div>

          <div className=" rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border-t-4 border-green-500 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm sm:text-base text-gray-800 dark:text-gray-100 font-semibold">Active Offers</h3>
              <Gift className="text-green-500" size={20} />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">12</p>
            <p className="text-xs sm:text-sm text-green-500 mt-2">Expires in 5 days</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="rounded-xl sm:rounded-2xl shadow-lg p-1.5 sm:p-2 mb-6 sm:mb-8 flex gap-1 sm:gap-2 hover: border border-green-500 overflow-x-auto w-full">
          {rewardTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all whitespace-nowrap flex-1 ${
                activeTab === type.id
                  ? "bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.icon}
              <span className="text-black dark:text-white">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {getCurrentRewards().map((reward) => (
            <div
              key={reward.id}
              className="group rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${reward.color} p-5 sm:p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24  opacity-10 rounded-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12"></div>
                <div className="relative z-10">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3">
                    {reward.icon}
                  </div>
                  <div className=" backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
                    <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {getRewardValue(reward)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-100 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {reward.description}
                </p>
                {reward.validity && (
                  <div className="text-gray-800 dark:text-gray-100 px-2.5 sm:px-3 py-1 rounded-full text-xs  inline-block">
                    {reward.validity}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20   p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-6 sm:mb-8 lg:mb-10 text-center">
            How Rewards Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 ">
            {/* Step 1 */}
            <div className="text-center border border-gray-100 p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CreditCard size={28} className="text-green-600 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Make Transactions
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 px-2">
                Use your wallet for payments, recharges, and bills
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center border border-gray-100 p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Gift size={28} className="text-green-600 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Earn Rewards
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 px-2">
                Automatically earn cashback and points on every spend
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center sm:col-span-2 lg:col-span-1 border border-gray-100 p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wallet size={28} className="text-green-600 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Redeem Benefits
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 px-2">
                Use rewards for next purchase or withdraw to wallet
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-green-600 via-green-600 to-green-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <Trophy size={44} className="mx-auto mb-3 sm:mb-4 sm:w-14 sm:h-14" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Start Earning Rewards Today!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-green-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of users who are already saving money with every transaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;