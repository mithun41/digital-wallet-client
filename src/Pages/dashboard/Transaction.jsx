import React, { useReducer, useEffect } from 'react';

// Redux-style Action Types
const ACTIONS = {
    SET_BALANCE: 'SET_BALANCE',
    SET_SELECTED_METHOD: 'SET_SELECTED_METHOD',
    SET_LOADING: 'SET_LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
    CLEAR_MESSAGE: 'CLEAR_MESSAGE',
    UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
    RESET_FORM: 'RESET_FORM',
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    PROCESS_TRANSACTION_START: 'PROCESS_TRANSACTION_START',
    PROCESS_TRANSACTION_SUCCESS: 'PROCESS_TRANSACTION_SUCCESS',
    PROCESS_TRANSACTION_ERROR: 'PROCESS_TRANSACTION_ERROR'
};

// Initial State
const initialState = {
    wallet: {
        balance: 85750,
        currency: 'BDT'
    },
    ui: {
        selectedMethod: 'bkash',
        loading: false,
        message: { type: '', text: '' }
    },
    form: {
        recipient: '',
        amount: '',
        reference: ''
    },
    transactions: [
        {
            id: 1,
            type: 'received',
            amount: 15000,
            contact: '01712345678',
            method: 'bKash',
            time: 'Today, 2:30 PM',
            reference: 'Salary payment',
            status: 'completed'
        },
        {
            id: 2,
            type: 'sent',
            amount: 2500,
            contact: '01987654321',
            method: 'Nagad',
            time: 'Yesterday, 11:45 AM',
            reference: 'Grocery shopping',
            status: 'completed'
        },
        {
            id: 3,
            type: 'received',
            amount: 75000,
            contact: 'Company Ltd.',
            method: 'Bank Transfer',
            time: 'Dec 20, 9:00 AM',
            reference: 'Monthly salary credit',
            status: 'completed'
        }
    ]
};

// Redux Reducer
const transactionReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_BALANCE:
            return {
                ...state,
                wallet: { ...state.wallet, balance: action.payload }
            };

        case ACTIONS.SET_SELECTED_METHOD:
            return {
                ...state,
                ui: { ...state.ui, selectedMethod: action.payload }
            };

        case ACTIONS.SET_LOADING:
            return {
                ...state,
                ui: { ...state.ui, loading: action.payload }
            };

        case ACTIONS.SET_MESSAGE:
            return {
                ...state,
                ui: { ...state.ui, message: action.payload }
            };

        case ACTIONS.CLEAR_MESSAGE:
            return {
                ...state,
                ui: { ...state.ui, message: { type: '', text: '' } }
            };

        case ACTIONS.UPDATE_FORM_DATA:
            return {
                ...state,
                form: { ...state.form, [action.field]: action.value }
            };

        case ACTIONS.RESET_FORM:
            return {
                ...state,
                form: { recipient: '', amount: '', reference: '' },
                ui: { ...state.ui, selectedMethod: 'bkash' }
            };

        case ACTIONS.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };

        case ACTIONS.PROCESS_TRANSACTION_START:
            return {
                ...state,
                ui: { ...state.ui, loading: true, message: { type: '', text: '' } }
            };

        case ACTIONS.PROCESS_TRANSACTION_SUCCESS:
            return {
                ...state,
                wallet: { ...state.wallet, balance: state.wallet.balance - action.payload.amount },
                transactions: [action.payload.transaction, ...state.transactions],
                form: { recipient: '', amount: '', reference: '' },
                ui: {
                    ...state.ui,
                    loading: false,
                    selectedMethod: 'bkash',
                    message: action.payload.message
                }
            };

        case ACTIONS.PROCESS_TRANSACTION_ERROR:
            return {
                ...state,
                ui: { ...state.ui, loading: false, message: action.payload }
            };

        default:
            return state;
    }
};

// Action Creators
const actionCreators = {
    setBalance: (balance) => ({ type: ACTIONS.SET_BALANCE, payload: balance }),
    setSelectedMethod: (method) => ({ type: ACTIONS.SET_SELECTED_METHOD, payload: method }),
    setLoading: (loading) => ({ type: ACTIONS.SET_LOADING, payload: loading }),
    setMessage: (message) => ({ type: ACTIONS.SET_MESSAGE, payload: message }),
    clearMessage: () => ({ type: ACTIONS.CLEAR_MESSAGE }),
    updateFormData: (field, value) => ({ type: ACTIONS.UPDATE_FORM_DATA, field, value }),
    resetForm: () => ({ type: ACTIONS.RESET_FORM }),
    addTransaction: (transaction) => ({ type: ACTIONS.ADD_TRANSACTION, payload: transaction }),
    processTransactionStart: () => ({ type: ACTIONS.PROCESS_TRANSACTION_START }),
    processTransactionSuccess: (data) => ({ type: ACTIONS.PROCESS_TRANSACTION_SUCCESS, payload: data }),
    processTransactionError: (error) => ({ type: ACTIONS.PROCESS_TRANSACTION_ERROR, payload: error })
};

// Main Component
const Transaction = () => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    const paymentMethods = [
        { id: 'bkash', name: 'bKash', icon: '📱', color: 'from-pink-500 to-rose-600' },
        { id: 'nagad', name: 'Nagad', icon: '💳', color: 'from-orange-500 to-amber-600' },
        { id: 'rocket', name: 'Rocket', icon: '🚀', color: 'from-purple-500 to-indigo-600' },
        { id: 'bank', name: 'Bank', icon: '🏦', color: 'from-blue-600 to-cyan-600' }
    ];

    // Auto-hide messages effect
    useEffect(() => {
        if (state.ui.message.text) {
            const timer = setTimeout(() => {
                dispatch(actionCreators.clearMessage());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [state.ui.message]);

    const refreshHistory = () => {
        dispatch(actionCreators.setMessage({
            type: 'success',
            text: 'Transaction history refreshed successfully! ✨'
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br w-full from-blue-600 via-blue-600 to-blue-600 p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 opacity-5 rounded-full blur-3xl animate-ping delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Message display */}
                {state.ui.message.text && (
                    <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20 transform transition-all duration-500 ${state.ui.message.type === 'success'
                        ? 'bg-emerald-500/90 text-white'
                        : 'bg-red-500/90 text-white'
                        }`}>
                        <div className="flex items-center gap-3">
                            <span className="text-xl">
                                {state.ui.message.type === 'success' ? '✅' : '❌'}
                            </span>
                            <span className="font-semibold">{state.ui.message.text}</span>
                        </div>
                    </div>
                )}

                {/* Main container with enhanced glass effect */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-purple-500/20 rounded-full blur-2xl"></div>

                    {/* Enhanced Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-12 pb-8 border-b border-white/30 relative z-10">
                        <div className="text-center lg:text-left mb-6 lg:mb-0">
                            <h1 className="text-5xl font-black text-white mb-3 tracking-tight">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Digital
                                </span>
                                <br />
                                <span className="text-white/90">Transaction Hub</span>
                            </h1>
                            <p className="text-white/70 text-lg font-medium">Seamlessly manage your digital payments</p>
                        </div>

                        {/* Enhanced Balance Card */}
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-3xl p-8 text-center min-w-80 transform group-hover:scale-105 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12 animate-bounce delay-300"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10 animate-pulse"></div>

                                <div className="relative z-10">
                                    <div className="text-4xl font-black text-white mb-2 tracking-tight">
                                        ৳{state.wallet.balance.toLocaleString()}
                                    </div>
                                    <div className="text-white/90 text-lg font-semibold mb-2">
                                        Available Balance
                                    </div>
                                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white/40 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Transaction History */}
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-gray-800 mb-1">Transaction History</h2>
                                    <p className="text-gray-600 font-medium">Track your recent activities</p>
                                </div>
                            </div>
                            <button
                                onClick={refreshHistory}
                                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="text-xl">🔄</span>
                                <span className="relative z-10">Refresh</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {state.transactions.map((transaction, index) => (
                                <div
                                    key={transaction.id}
                                    className="group flex items-center justify-between p-6 border border-gray-200 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="flex items-center gap-6 relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300 ${transaction.type === 'sent'
                                            ? 'bg-gradient-to-br from-red-500 via-pink-500 to-rose-600'
                                            : 'bg-gradient-to-br from-emerald-500 via-green-500 to-cyan-500'
                                            }`}>
                                            <span className={`transform transition-transform duration-300 ${transaction.type === 'sent' ? 'rotate-45' : '-rotate-45'
                                                }`}>
                                                {transaction.type === 'sent' ? '↗' : '↙'}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-black text-gray-800 text-xl mb-2 group-hover:text-blue-700 transition-colors">
                                                {transaction.type === 'sent' ? '💸 Money Sent' : '💰 Money Received'}
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                                <p className="text-gray-600 font-semibold">
                                                    <span className="text-gray-500">{transaction.type === 'sent' ? 'To:' : 'From:'}</span> {transaction.contact}
                                                </p>
                                                <p className="text-gray-600 font-semibold">
                                                    <span className="text-gray-500">Via:</span> {transaction.method}
                                                </p>
                                                <p className="text-gray-500">
                                                    <span className="text-gray-400">Time:</span> {transaction.time}
                                                </p>
                                                <p className="text-gray-500">
                                                    <span className="text-gray-400">Ref:</span> {transaction.reference}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`font-black text-2xl relative z-10 ${transaction.type === 'sent' ? 'text-red-600' : 'text-emerald-600'
                                        } group-hover:scale-110 transition-all duration-300`}>
                                        <span className="text-lg opacity-80">
                                            {transaction.type === 'sent' ? '-' : '+'}
                                        </span>
                                        ৳{transaction.amount.toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary stats */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl">
                                    <div className="text-2xl mb-2">💸</div>
                                    <div className="font-black text-emerald-700 text-lg">
                                        ৳{state.transactions.filter(t => t.type === 'received').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
                                    </div>
                                    <div className="text-emerald-600 font-semibold text-sm">Total Received</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl">
                                    <div className="text-2xl mb-2">💰</div>
                                    <div className="font-black text-red-700 text-lg">
                                        ৳{state.transactions.filter(t => t.type === 'sent').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
                                    </div>
                                    <div className="text-red-600 font-semibold text-sm">Total Sent</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
                                    <div className="text-2xl mb-2">📈</div>
                                    <div className="font-black text-blue-700 text-lg">{state.transactions.length}</div>
                                    <div className="text-blue-600 font-semibold text-sm">Total Transactions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;