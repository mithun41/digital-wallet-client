import React, { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'ABC',
        email: 'john.doe@example.com',
        phone: '+880 1712-345678',
        address: 'Dhaka, Bangladesh',
        balance: '12,500.00',
        accountType: 'Premium Account'
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
    };

    const handleInputChange = (field, value) => {
        setUserInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="w-full mx-auto p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Profile Image */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                            {userInfo.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left">
                        {isEditing ? (
                            <input
                                type="text"
                                value={userInfo.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="text-2xl font-bold mb-2 border-b-2 border-blue-500 bg-transparent outline-none w-full"
                            />
                        ) : (
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{userInfo.name}</h1>
                        )}
                        <p className="text-blue-600 font-medium mb-1">{userInfo.accountType}</p>
                        <p className="text-gray-600">Member since January 2024</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Save changes
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEdit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Profile Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-600 text-xl">৳</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Available Balance</h3>
                    <p className="text-2xl font-bold text-green-600">৳ {userInfo.balance}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 text-xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">This Month's Transactions</h3>
                    <p className="text-2xl font-bold text-blue-600">24ti</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-purple-600 text-xl">⭐</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Reward Points</h3>
                    <p className="text-2xl font-bold text-purple-600">১,২৩৫</p>
                </div>
            </div>

            {/* Profile Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={userInfo.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={userInfo.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.phone}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={userInfo.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                        ) : (
                            <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">{userInfo.address}</p>
                        )}
                    </div>
                </div>

                {/* Security Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                            Change Password
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Two-Factor Authentication
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>

                <div className="space-y-4">
                    {[
                        { action: 'cashout', amount: '-2,০০০ taka', time: '২ ঘন্টা আগে', status: 'Success' },
                        { action: 'Mobile Recharge', amount: '-100 taka', time: '৫ ঘন্টা আগে', status: 'Success' },
                        { action: 'Receive Money', amount: '+5,০০০ taka', time: '১ দিন আগে', status: 'Success' }
                    ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.amount.startsWith('-') ? 'bg-red-100' : 'bg-green-100'
                                    }`}>
                                    <span className={`text-lg ${activity.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                                        }`}>
                                        {activity.amount.startsWith('-') ? '↓' : '↑'}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">{activity.action}</p>
                                    <p className="text-sm text-gray-600">{activity.time}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-semibold ${activity.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                                    }`}>
                                    {activity.amount}
                                </p>
                                <p className="text-sm text-green-600">{activity.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;