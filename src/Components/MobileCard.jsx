<<<<<<< HEAD
import React, { useState, useReducer, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
=======
import React from 'react';
>>>>>>> cf33da6c4e0e8e111c623b86cff17e761aeff672

// Chart Data
const monthlyData = [
    { month: 'Nov', income: 2000, expenses: 1800 },
    { month: 'Dec', income: 3000, expenses: 2500 },
    { month: 'Jan', income: 2500, expenses: 2200 },
    { month: 'Feb', income: 3500, expenses: 3000 },
    { month: 'Mar', income: 3200, expenses: 2800 },
    { month: 'Apr', income: 4000, expenses: 3500 },
    { month: 'May', income: 4200, expenses: 3800 },
];

// Monthly Graph Component
const MonthlyGraph = ({ income, expenses }) => {
    return (
        <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-lg font-semibold">Monthly Graph</h3>
                <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Incomes
                </span>
            </div>

            <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#ffffff', fontSize: 12, fontWeight: 500 }}
                            className="text-white"
                        />
                        <YAxis hide />

                        {/* Income Line */}
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#ffffff"
                            strokeWidth={3}
                            dot={{ fill: '#ffffff', strokeWidth: 2, r: 5 }}
                            activeDot={{
                                r: 7,
                                fill: '#ffffff',
                                stroke: '#8b5cf6',
                                strokeWidth: 3
                            }}
                            filter="drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))"
                        />

                        {/* Expenses Line (Optional - can be toggled) */}
                        <Line
                            type="monotone"
                            dataKey="expenses"
                            stroke="rgba(255, 255, 255, 0.6)"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                            activeDot={{ r: 5, fill: 'rgba(255, 255, 255, 0.8)' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Chart Legend */}
            <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white/90">Income</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-white/60 rounded-full"></div>
                    <span className="text-white/70">Expenses</span>
                </div>
            </div>

            {/* Current Month Stats */}
            <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex justify-between text-white">
                    <div className="text-center">
                        <p className="text-xs text-white/70 mb-1">This Month</p>
                        <p className="font-bold text-lg">${income.toFixed(0)}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-white/70 mb-1">Expenses</p>
                        <p className="font-bold text-lg">${expenses.toFixed(0)}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-white/70 mb-1">Profit</p>
                        <p className="font-bold text-lg text-green-300">
                            ${(income - expenses).toFixed(0)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Redux-style Action Types
const ACTIONS = {
    SET_USER: 'SET_USER',
    UPDATE_BALANCE: 'UPDATE_BALANCE',
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    SET_LOADING: 'SET_LOADING',
    UPDATE_STATS: 'UPDATE_STATS',
    TOGGLE_REGISTRATION: 'TOGGLE_REGISTRATION'
};

// Initial State
const initialState = {
    user: {
        name: 'Mike Joe',
        id: null,
        isLoggedIn: false
    },
    balance: 1450.00,
    transactions: [
        { id: 1, type: 'expense', description: 'Netflix Subscription', amount: -5.00, icon: 'N', color: '#e50914' },
        { id: 2, type: 'expense', description: 'Monthly Shopping', amount: -120.90, icon: '🛍', color: '#ff9500' }
    ],
    stats: {
        income: 4200,
        expenses: 3800
    },
    loading: false,
    showRegistration: false
};

// Reducer Function
const appReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            };

        case ACTIONS.UPDATE_BALANCE:
            return {
                ...state,
                balance: state.balance + action.payload
            };

        case ACTIONS.ADD_TRANSACTION:
            const newTransaction = {
                id: Date.now(),
                ...action.payload
            };
            return {
                ...state,
                transactions: [newTransaction, ...state.transactions],
                balance: state.balance + action.payload.amount
            };

        case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case ACTIONS.UPDATE_STATS:
            return {
                ...state,
                stats: { ...state.stats, ...action.payload }
            };

        case ACTIONS.TOGGLE_REGISTRATION:
            return {
                ...state,
                showRegistration: !state.showRegistration
            };

        default:
            return state;
    }
};

// Main Component
const MobileCard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-gray-400 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-bounce"></div>
            </div>

            <div className="flex items-center justify-between p-16 min-h-screen max-w-7xl mx-auto relative z-10">
                {/* Left Content */}
                <div className="flex-1 max-w-xl">
                    <h1 className="text-6xl font-bold text-white leading-tight mb-8">
                        Our Easy Steps For<br />
                        <span className="bg-gradient-to-r from-purple-400 to-gray-400 bg-clip-text text-transparent">
                            SignUp
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed mb-10">
                        Creating your account is simple: verify your identity, set your location, and add your first transaction. Your data stays encrypted, with balance and transactions available anytime.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        {[
                            'Sign in with ID Card',
                            'User Configuration',
                            'Select Country Location',
                            'Enter the Transaction',
                            'Enjoy the Full Access',
                            'Complete Setup'
                        ].map((step, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-gray-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <span className="text-white">{step}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="/signup"
                            className="bg-gradient-to-r from-purple-500 to-gray-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.loading ? 'Processing...' : 'SignUp Now'}
                        </a>
                        <button
                            onClick={handleGetStarted}
                            className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Registration Status */}
                    {state.user.isLoggedIn && (
                        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                            <p className="text-green-300">✅ Successfully registered as {state.user.name}!</p>
                        </div>
                    )}

                    {/* Monthly Graph Chart - Added Here */}

                </div>

                {/* Right Content */}
                <div className="flex-1 flex justify-center items-center relative">
                    {/* Phone Mockup */}
                    <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl transform rotate-y-12 hover:rotate-y-6 transition-transform duration-500">
                        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[2rem] p-6 overflow-hidden">
                            {/* Status Bar */}
                            <div className="flex justify-between items-center text-white text-sm mb-6">
                                <span>9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                </div>
                            </div>

                            {/* Welcome Section */}
                            <div className="text-center mb-8">
                                <p className="text-gray-400 text-sm">Welcome,</p>
                                <h2 className="text-white text-xl font-semibold">{state.user.name}</h2>
                                {state.user.isLoggedIn && (
                                    <span className="text-green-400 text-xs">● Online</span>
                                )}
                            </div>

                            {/* Balance */}
                            <div className="text-center mb-8">
                                <h3 className="text-white text-3xl font-bold">
                                    ${state.balance.toFixed(2)}
                                </h3>
                                {state.loading && (
                                    <div className="mt-2 h-1 bg-gray-700 rounded overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-gray-500 animate-pulse"></div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-around mb-8">
                                {[
                                    { icon: '↗', action: handleSendMoney, key: 'send' },
                                    { icon: '+', action: handleAddMoney, key: 'add' },
                                    { icon: '💳', action: handlePayBill, key: 'pay' },
                                    { icon: '⋯', action: () => setSelectedAction('more'), key: 'more' }
                                ].map((btn, index) => (
                                    <button
                                        key={index}
                                        onClick={btn.action}
                                        className={`w-12 h-12 rounded-xl ${selectedAction === btn.key
                                            ? 'bg-gradient-to-r from-purple-600 to-gray-600 scale-110'
                                            : 'bg-gradient-to-r from-purple-500 to-gray-500 hover:scale-105'
                                            } text-white font-bold transition-all duration-200 shadow-lg`}
                                    >
                                        {btn.icon}
                                    </button>
                                ))}
                            </div>

                            {/* Recent Activity */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-white font-semibold">Last Activity</h4>
                                    <span className="text-gray-400 text-xs">See All</span>
                                </div>

                                <div className="space-y-3 max-h-48 overflow-y-auto">
                                    {state.transactions.map((transaction) => (
                                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                                                    style={{ backgroundColor: transaction.color }}
                                                >
                                                    {transaction.icon}
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-medium">{transaction.description}</p>
                                                    <p className="text-gray-400 text-xs">Just now</p>
                                                </div>
                                            </div>
                                            <span className={`font-semibold ${transaction.amount < 0 ? 'text-blue-400' : 'text-green-400'}`}>
                                                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Widgets */}
                    <div
                        className="absolute -right-24 top-1/2 transform -translate-y-1/2 space-y-6"
                    >
                        {/* Incomes */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center cursor-pointer"
                        >
                            <p className="text-gray-300 text-sm mb-2">Incomes</p>
                            <p className="text-green-400 text-2xl font-bold">
                                ${state.stats.income.toFixed(2)}
                            </p>
                        </motion.div>

                        {/* Expenses */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center cursor-pointer"
                        >
                            <p className="text-gray-300 text-sm mb-2">Expenses</p>
                            <p className="text-blue-400 text-2xl font-bold">
                                ${state.stats.expenses.toFixed(2)}
                            </p>
                        </motion.div>

                        {/* Graph */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className="mt-12 cursor-pointer"
                        >
                            <MonthlyGraph
                                income={state.stats.income}
                                expenses={state.stats.expenses}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Debug Panel */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-lg p-4 rounded-lg text-white text-xs max-w-xs">
                <h4 className="font-bold mb-2">Redux State Debug:</h4>
                <p>Balance: ${state.balance.toFixed(2)}</p>
                <p>Transactions: {state.transactions.length}</p>
                <p>User: {state.user.isLoggedIn ? 'Logged In' : 'Guest'}</p>
                <p>Loading: {state.loading ? 'Yes' : 'No'}</p>
            </div>
        </div >
        <div>
            
        </div>
    );
};

export default MobileCard;