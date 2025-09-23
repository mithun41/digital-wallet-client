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
        { id: 'bkash', name: 'bKash', icon: '📱' },
        { id: 'nagad', name: 'Nagad', icon: '💳' },
        { id: 'rocket', name: 'Rocket', icon: '🚀' },
        { id: 'bank', name: 'Bank', icon: '🏦' }
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

    // Form handlers
    const handleInputChange = (field, value) => {
        dispatch(actionCreators.updateFormData(field, value));
    };

    const handleMethodSelect = (method) => {
        dispatch(actionCreators.setSelectedMethod(method));
    };

    const setQuickAmount = (amount) => {
        dispatch(actionCreators.updateFormData('amount', amount.toString()));
    };

    // Transaction processing
    const processTransaction = () => {
        const { recipient, amount } = state.form;
        const numAmount = parseFloat(amount);

        // Validation
        if (!recipient.trim()) {
            dispatch(actionCreators.processTransactionError({
                type: 'error',
                text: 'Please enter recipient information!'
            }));
            return;
        }

        if (!numAmount || numAmount <= 0) {
            dispatch(actionCreators.processTransactionError({
                type: 'error',
                text: 'Please enter a valid amount!'
            }));
            return;
        }

        if (numAmount > state.wallet.balance) {
            dispatch(actionCreators.processTransactionError({
                type: 'error',
                text: `Insufficient balance! Your current balance is ৳${state.wallet.balance.toLocaleString()}`
            }));
            return;
        }

        // Start processing
        dispatch(actionCreators.processTransactionStart());

        // Simulate API call
        setTimeout(() => {
            const newTransaction = {
                id: Date.now(),
                type: 'sent',
                amount: numAmount,
                contact: recipient,
                method: state.ui.selectedMethod.charAt(0).toUpperCase() + state.ui.selectedMethod.slice(1),
                time: 'Just now',
                reference: state.form.reference || 'Payment sent',
                status: 'completed'
            };

            dispatch(actionCreators.processTransactionSuccess({
                amount: numAmount,
                transaction: newTransaction,
                message: {
                    type: 'success',
                    text: `৳${numAmount.toLocaleString()} sent successfully to ${recipient} via ${state.ui.selectedMethod.toUpperCase()}`
                }
            }));
        }, 3000);
    };

    const refreshHistory = () => {
        dispatch(actionCreators.setMessage({
            type: 'success',
            text: 'Transaction history refreshed successfully! 🔄'
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br bg-[#155DFC] via-purple-600 to-[#155DFC] p-5">
            <div className="max-w-6xl mx-auto">

                {/* Container with glass effect */}
                <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl border border-white border-opacity-20 p-10 shadow-2xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-10 pb-6 border-b border-white border-opacity-30">
                        <h1 className="text-4xl font-extrabold text-white mb-4 lg:mb-0 flex items-center gap-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-2xl text-3xl">
                                💳
                            </span>
                            Digital Transaction Hub
                        </h1>

                        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl p-6 text-center min-w-64 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-10 translate-x-10 animate-pulse"></div>
                            <div className="text-3xl font-bold text-white mb-2 relative z-10">
                                ৳{state.wallet.balance.toLocaleString()}
                            </div>
                            <div className="text-white text-opacity-90 text-base font-medium relative z-10">
                                Available Balance
                            </div>
                        </div>
                    </div>

                    {/* Transaction Form */}
                    <div className="bg-white bg-opacity-95 rounded-3xl p-10 mb-10 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                            💸 Send Money
                        </h2>

                        {/* Message Display */}
                        {state.ui.message.text && (
                            <div className={`mb-6 p-5 rounded-xl flex items-center gap-3 ${state.ui.message.type === 'success'
                                ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-2 border-green-200'
                                : 'bg-gradient-to-r from-red-50 to-red-100 text-red-800 border-2 border-red-200'
                                }`}>
                                <span className="text-xl">
                                    {state.ui.message.type === 'success' ? '✅' : '❌'}
                                </span>
                                <span className="font-semibold">{state.ui.message.text}</span>
                            </div>
                        )}

                        <div className="space-y-8">
                            {/* Recipient and Amount */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-3 text-base">
                                        📱 Recipient Account/Phone
                                    </label>
                                    <input
                                        type="text"
                                        value={state.form.recipient}
                                        onChange={(e) => handleInputChange('recipient', e.target.value)}
                                        placeholder="01XXXXXXXXX or account number"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-3 text-base">
                                        💰 Amount (৳)
                                    </label>
                                    <input
                                        type="number"
                                        value={state.form.amount}
                                        onChange={(e) => handleInputChange('amount', e.target.value)}
                                        placeholder="Enter amount"
                                        min="1"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-lg"
                                    />
                                    <div className="flex gap-2 mt-3 flex-wrap">
                                        {[500, 1000, 2000, 5000].map(amount => (
                                            <button
                                                key={amount}
                                                onClick={() => setQuickAmount(amount)}
                                                className="px-4 py-2 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                                            >
                                                ৳{amount}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-4 text-base">
                                    💳 Payment Method
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {paymentMethods.map(method => (
                                        <button
                                            key={method.id}
                                            onClick={() => handleMethodSelect(method.id)}
                                            className={`p-6 rounded-2xl border-3 transition-all duration-300 relative overflow-hidden group ${state.ui.selectedMethod === method.id
                                                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white border-blue-400 transform -translate-y-1 shadow-lg'
                                                : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:shadow-lg hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                                            <div className="text-3xl mb-3 relative z-10">{method.icon}</div>
                                            <div className="font-bold text-lg relative z-10">{method.name}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Reference */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-3 text-base">
                                    📝 Reference/Note (Optional)
                                </label>
                                <textarea
                                    value={state.form.reference}
                                    onChange={(e) => handleInputChange('reference', e.target.value)}
                                    placeholder="Add a note for this transaction..."
                                    rows="3"
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all resize-none"
                                />
                            </div>

                            {/* Loading State */}
                            {state.ui.loading && (
                                <div className="text-center py-8">
                                    <div className="inline-block w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
                                    <div className="text-purple-600 font-bold text-lg">Processing your transaction...</div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                onClick={processTransaction}
                                disabled={state.ui.loading}
                                className="w-full bg-gradient-to-r from-[#155DFC] to-[#155DFC] text-white py-5 px-8 rounded-xl font-bold text-xl hover:from-[#155DFC] hover:to-purple-800 transform hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {state.ui.loading ? (
                                        <>
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            🚀 Send Money Now
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-white bg-opacity-95 rounded-3xl p-10 shadow-xl">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                📊 Transaction History
                            </h2>
                            <button
                                onClick={refreshHistory}
                                className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                🔄 Refresh
                            </button>
                        </div>

                        <div className="space-y-4">
                            {state.transactions.map(transaction => (
                                <div
                                    key={transaction.id}
                                    className="flex items-center justify-between p-6 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-blue-200 hover:transform hover:translate-x-2 transition-all duration-300 bg-white shadow-sm"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg ${transaction.type === 'sent'
                                            ? 'bg-gradient-to-r from-red-500 to-pink-500'
                                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                            }`}>
                                            {transaction.type === 'sent' ? '↑' : '↓'}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg mb-1">
                                                {transaction.type === 'sent' ? 'Money Sent' : 'Money Received'}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-1">
                                                {transaction.type === 'sent' ? 'To: ' : 'From: '}{transaction.contact}
                                            </p>
                                            <p className="text-gray-500 text-sm mb-1">
                                                via {transaction.method} • {transaction.time}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                Reference: {transaction.reference}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`font-bold text-xl ${transaction.type === 'sent' ? 'text-red-600' : 'text-green-600'
                                        }`}>
                                        {transaction.type === 'sent' ? '-' : '+'}৳{transaction.amount.toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;