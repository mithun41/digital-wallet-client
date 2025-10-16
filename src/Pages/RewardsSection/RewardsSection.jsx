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
  ArrowRight,
  CreditCard, Wallet,
  GiftIcon
} from "lucide-react";


const RewardsSection = () => {
  const [activeTab, setActiveTab] = useState("cashback");

  const rewardTypes = [
    { id: "cashback", label: "Cashback", icon: <Percent size={20} /> },
    { id: "points", label: "Points", icon: <Star size={20} /> },
    { id: "offers", label: "Offers", icon: <Gift size={20} /> },
  ];

  const cashbackRewards = [
    {
      id: 1,
      title: "Mobile Recharge",
      description: "Get 5% cashback on every mobile recharge",
      cashback: "5%",
      icon: <Zap className="text-yellow-500" size={32} />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Utility Bills",
      description: "Earn 3% cashback on electricity & gas bills",
      cashback: "3%",
      icon: <TrendingUp className="text-blue-500" size={32} />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "Online Shopping",
      description: "Save 10% on e-commerce payments",
      cashback: "10%",
      icon: <Gift className="text-purple-500" size={32} />,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      title: "Education Fees",
      description: "Get 2% cashback on tuition payments",
      cashback: "2%",
      icon: <Award className="text-green-500" size={32} />,
      color: "from-green-400 to-emerald-500",
    },
  ];

  const pointsRewards = [
    {
      id: 1,
      title: "Transaction Points",
      description: "Earn 10 points for every ৳100 spent",
      points: "10 pts",
      icon: <Star className="text-yellow-500" size={32} />,
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: 2,
      title: "Referral Bonus",
      description: "Get 500 points for each friend referral",
      points: "500 pts",
      icon: <Trophy className="text-orange-500" size={32} />,
      color: "from-orange-400 to-red-500",
    },
    {
      id: 3,
      title: "Daily Login",
      description: "Collect 5 points just by logging in daily",
      points: "5 pts",
      icon: <Clock className="text-blue-500" size={32} />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 4,
      title: "Complete Profile",
      description: "One-time 200 points for profile completion",
      points: "200 pts",
      icon: <CheckCircle className="text-green-500" size={32} />,
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
      icon: <Gift className="text-pink-500" size={32} />,
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      title: "First Transaction",
      description: "Get ৳100 cashback on your first wallet payment",
      validity: "New users only",
      discount: "৳100",
      icon: <Award className="text-purple-500" size={32} />,
      color: "from-purple-400 to-violet-500",
    },
    {
      id: 3,
      title: "Mega Jackpot",
      description: "Spend ৳5000+ and enter lucky draw for ৳10,000",
      validity: "Monthly draw",
      discount: "৳10K",
      icon: <Trophy className="text-yellow-500" size={32} />,
      color: "from-yellow-400 to-orange-600",
    },
    {
      id: 4,
      title: "Bill Payment Offer",
      description: "Pay 3 bills and get 4th bill with 50% discount",
      validity: "Limited time",
      discount: "50%",
      icon: <Percent className="text-cyan-500" size={32} />,
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
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500 p-4 rounded-3xl mb-4">
            <Trophy size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-4xl font-bold text-green-500 mb-4">
            Rewards & Benefits
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto">
            Earn amazing rewards with every transaction. More you spend, more you save!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Total Cashback</h3>
              <Percent className="text-green-500" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-800">৳ 2,450</p>
            <p className="text-sm  mt-2 flex items-center gap-1">
              <TrendingUp size={16} />
              +15% this month
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Reward Points</h3>
              <Star className="text-green-500" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-800">8,750</p>
            <p className="text-sm text-gray-500 mt-2">৳ 875 equivalent</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Active Offers</h3>
              <Gift className="text-green-500" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-500 mt-2">Expires in 5 days</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 inline-flex gap-2">
          {rewardTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === type.id
                  ? "bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.icon}
              {type.label}
            </button>
          ))}
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentRewards().map((reward) => (
            <div
              key={reward.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${reward.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-3">
                    {reward.icon}
                  </div>
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    <span className="text-2xl font-bold text-gray-800">
                      {getRewardValue(reward)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {reward.description}
                </p>
                {reward.validity && (
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 inline-block mb-4">
                    {reward.validity}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        How Rewards Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard size={36} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Make Transactions
          </h3>
          <p className="text-gray-600">
            Use your wallet for payments, recharges, and bills
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <GiftIcon size={36} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Earn Rewards
          </h3>
          <p className="text-gray-600">
            Automatically earn cashback and points on every spend
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet size={36} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Redeem Benefits
          </h3>
          <p className="text-gray-600">
            Use rewards for next purchase or withdraw to wallet
          </p>
        </div>
      </div>
    </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 via-green-600 to-green-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <Trophy size={56} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Earning Rewards Today!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already saving money with every transaction
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;
