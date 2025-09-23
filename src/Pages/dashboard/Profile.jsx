import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const cardHover = { scale: 1.02 };
const btnTap = { scale: 0.98 };

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'ABC',
        email: 'john.doe@example.com',
        phone: '+880 1712-345678',
        address: 'Dhaka, Bangladesh',
        balance: '12,500.00',
        accountType: 'Premium Account',
    });

    const activities = [
        { action: 'Cashout', amount: '-2,000 taka', time: '2 hours ago', status: 'Success' },
        { action: 'Mobile Recharge', amount: '-100 taka', time: '5 hours ago', status: 'Success' },
        { action: 'Receive Money', amount: '+5,000 taka', time: '1 hour ago', status: 'Success' },
    ];

    const handleEdit = () => setIsEditing(prev => !prev);
    const handleSave = () => {
        setIsEditing(false);
        // save to backend here
    };

    const handleInputChange = (field, value) => {
        setUserInfo(prev => ({ ...prev, [field]: value }));
    };

    return (
        <motion.div
            className="w-full mx-auto p-6 bg-gray-100 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <div className="bg-gray-100 rounded-3xl p-8 w-full max-w-sm shadow-2xl mx-auto">
                {/* Profile Image Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full border-4 border-blue-500 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            Admin
                        </div>
                    </div>

                    {/* Name and Email */}
                    <div className="text-center mb-6">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={userInfo.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="text-xl font-bold mb-2 bg-transparent border-b-2 border-blue-500 outline-none text-center"
                                />
                                <input
                                    type="email"
                                    value={userInfo.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="text-gray-600 text-sm bg-transparent border-b border-gray-400 outline-none text-center"
                                />
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-gray-800 mb-1">{userInfo.name}</h2>
                                <p className="text-gray-600 text-sm">{userInfo.email}</p>
                            </>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between w-full mb-6">
                        <div className="text-center">
                            <div className="text-blue-500 text-xl font-bold">14</div>
                            <div className="text-gray-600 text-xs">Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-green-500 text-xl font-bold">12</div>
                            <div className="text-gray-600 text-xs">Posts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-pink-500 text-xl font-bold">20</div>
                            <div className="text-gray-600 text-xs">Comments</div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex gap-3 mt-6">
                        <AnimatePresence>
                            {isEditing ? (
                                <motion.div
                                    key="editing-actions"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="flex gap-3"
                                >
                                    <motion.button
                                        onClick={handleSave}
                                        whileTap={btnTap}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Save changes
                                    </motion.button>
                                    <motion.button
                                        onClick={() => setIsEditing(false)}
                                        whileTap={btnTap}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        Cancel
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.button
                                    onClick={handleEdit}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={btnTap}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Edit Profile
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Stats Cards */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-8" variants={itemVariants}>
                <motion.div variants={itemVariants} whileHover={cardHover} className="bg-[#FEE8D9] rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-600 text-xl">৳</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Available Balance</h3>
                    <p className="text-2xl font-bold text-green-600">৳ {userInfo.balance}</p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={cardHover} className="bg-[#F5FAE1] rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 text-xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">This Month's Transactions</h3>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={cardHover} className="bg-[#B2D8CE] rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-purple-600 text-xl">⭐</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Reward Points</h3>
                    <p className="text-2xl font-bold text-purple-600">1,235</p>
                </motion.div>
            </motion.div>

            {/* Profile Details */}
            <motion.div variants={itemVariants} className="bg-[#A2B9A7] rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <motion.div variants={itemVariants}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        {isEditing ? (
                            <motion.input
                                type="email"
                                value={userInfo.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.email}</p>
                        )}
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        {isEditing ? (
                            <motion.input
                                type="tel"
                                value={userInfo.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.phone}</p>
                        )}
                    </motion.div>

                    {/* Address */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        {isEditing ? (
                            <motion.input
                                type="text"
                                value={userInfo.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.address}</p>
                        )}
                    </motion.div>
                </div>

                {/* Security Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button whileTap={btnTap} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Change Password
                        </motion.button>
                        <motion.button whileTap={btnTap} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Two-Factor Authentication
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={itemVariants} className="bg-[#a2a2b9] rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>

                <motion.div
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.amount.startsWith('-') ? 'bg-red-100' : 'bg-green-100'
                                        }`}
                                >
                                    <span
                                        className={`text-lg ${activity.amount.startsWith('-') ? 'text-blue-600' : 'text-green-600'
                                            }`}
                                    >
                                        {activity.amount.startsWith('-') ? '↓' : '↑'}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">{activity.action}</p>
                                    <p className="text-sm text-gray-600">{activity.time}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p
                                    className={`font-semibold ${activity.amount.startsWith('-') ? 'text-blue-600' : 'text-green-600'
                                        }`}
                                >
                                    {activity.amount}
                                </p>
                                <p className="text-sm text-green-600">{activity.status}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Profile;
