import React, { useState, useReducer } from 'react';
import { Smartphone, CreditCard, Zap, CheckCircle, AlertCircle, Phone } from 'lucide-react';

// Redux-like State Management
const initialState = {
  user: {
    balance: 2500,
    recentRecharges: []
  },
  recharge: {
    mobileNumber: '',
    operator: '',
    amount: '',
    loading: false,
    success: false,
    error: null
  },
  operators: [
    { id: 'gp', name: 'Grameenphone', color: 'from-green-500 to-green-600', logo: '🟢' },
    { id: 'robi', name: 'Robi', color: 'from-red-500 to-red-600', logo: '🔴' },
    { id: 'bl', name: 'Banglalink', color: 'from-orange-500 to-orange-600', logo: '🟠' },
    { id: 'airtel', name: 'Airtel', color: 'from-red-600 to-pink-600', logo: '🔴' },
    { id: 'teletalk', name: 'Teletalk', color: 'from-blue-500 to-blue-600', logo: '🔵' }
  ],
  amounts: [50, 100, 200, 500, 1000, 2000]
};

const rechargeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOBILE_NUMBER':
      return {
        ...state,
        recharge: { ...state.recharge, mobileNumber: action.payload, error: null }
      };
    case 'SET_OPERATOR':
      return {
        ...state,
        recharge: { ...state.recharge, operator: action.payload, error: null }
      };
    case 'SET_AMOUNT':
      return {
        ...state,
        recharge: { ...state.recharge, amount: action.payload, error: null }
      };
    case 'START_RECHARGE':
      return {
        ...state,
        recharge: { ...state.recharge, loading: true, error: null, success: false }
      };
    case 'RECHARGE_SUCCESS':
      const newRecharge = {
        id: Date.now(),
        mobileNumber: state.recharge.mobileNumber,
        operator: state.recharge.operator,
        amount: parseInt(state.recharge.amount),
        timestamp: new Date().toLocaleString()
      };
      return {
        ...state,
        user: {
          balance: state.user.balance - parseInt(state.recharge.amount),
          recentRecharges: [newRecharge, ...state.user.recentRecharges.slice(0, 4)]
        },
        recharge: {
          ...initialState.recharge,
          success: true
        }
      };
    case 'RECHARGE_ERROR':
      return {
        ...state,
        recharge: { ...state.recharge, loading: false, error: action.payload }
      };
    case 'RESET_RECHARGE':
      return {
        ...state,
        recharge: { ...initialState.recharge }
      };
    default:
      return state;
  }
};

const MobileRecharge = () => {
  const [state, dispatch] = useReducer(rechargeReducer, initialState);
  const [activeTab, setActiveTab] = useState('recharge');

  const handleRecharge = async () => {
    if (!state.recharge.mobileNumber || !state.recharge.operator || !state.recharge.amount) {
      dispatch({ type: 'RECHARGE_ERROR', payload: 'Please fill all fields' });
      return;
    }

    if (parseInt(state.recharge.amount) > state.user.balance) {
      dispatch({ type: 'RECHARGE_ERROR', payload: 'Insufficient balance' });
      return;
    }

    dispatch({ type: 'START_RECHARGE' });

    // Simulate API call
    setTimeout(() => {
      dispatch({ type: 'RECHARGE_SUCCESS' });
    }, 2000);
  };

  const selectedOperator = state.operators.find(op => op.id === state.recharge.operator);

  return (
    <div
      className="min-h-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/Y9pTtWTC/Iron-Vest-What-is-a-digital-wallet-and-how-does-it-work-1.jpg')",
      }}
    >
      <div className="bg-black/50 min-h-screen p-4">
        <div className="max-w-10/12 mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Mobile Recharge</h1>
            <p className="text-green-200">Quick & Easy Mobile Top-up</p>
          </div>

          {/* Balance Card */}
          <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-2xl p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Available Balance</p>
                <p className="text-2xl font-bold">৳{state.user.balance}</p>
              </div>
              <CreditCard className="w-8 h-8 text-purple-100" />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-white/10 rounded-xl p-1 mb-6">
            <button
              onClick={() => setActiveTab('recharge')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'recharge'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white/70 hover:text-white'
                }`}
            >
              Recharge
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'history'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white/70 hover:text-white'
                }`}
            >
              History
            </button>
          </div>

          {activeTab === 'recharge' ? (
            <div className="space-y-6">
              {/* Success Message */}
              {state.recharge.success && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-green-400 font-medium">Recharge Successful!</p>
                    <p className="text-green-300 text-sm">Your recharge has been processed</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {state.recharge.error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <p className="text-red-400">{state.recharge.error}</p>
                </div>
              )}

              {/* Mobile Number Input */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <label className="block text-white font-medium mb-3">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={state.recharge.mobileNumber}
                    onChange={(e) => dispatch({ type: 'SET_MOBILE_NUMBER', payload: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Operator Selection */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <label className="block text-white font-medium mb-4">Select Operator</label>
                <div className="grid grid-cols-3 gap-3">
                  {state.operators.map((operator) => (
                    <button
                      key={operator.id}
                      onClick={() => dispatch({ type: 'SET_OPERATOR', payload: operator.id })}
                      className={`p-4 rounded-xl border-2 transition-all ${state.recharge.operator === operator.id
                        ? 'border-purple-400 bg-purple-500/20'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                    >
                      <div className="text-2xl mb-2">{operator.logo}</div>
                      <p className="text-white text-sm font-medium">{operator.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <label className="block text-white font-medium mb-4">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {state.amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => dispatch({ type: 'SET_AMOUNT', payload: amount.toString() })}
                      className={`py-3 px-4 rounded-xl border-2 transition-all ${state.recharge.amount === amount.toString()
                        ? 'border-purple-400 bg-purple-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-purple-100 hover:bg-white/10'
                        }`}
                    >
                      ৳{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={state.recharge.amount}
                  onChange={(e) => dispatch({ type: 'SET_AMOUNT', payload: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Recharge Button */}
              <button
                onClick={handleRecharge}
                disabled={state.recharge.loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${state.recharge.loading
                  ? 'bg-purple-600/50 text-green-200 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-green-500 text-white hover:from-green-600 hover:to-green-600 transform hover:scale-[1.02]'
                  }`}
              >
                {state.recharge.loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-green-300 border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Recharge Now</span>
                  </div>
                )}
              </button>
            </div>
          ) : (
            /* History Tab */
            <div className="space-y-4">
              <h3 className="text-white text-xl font-bold">Recent Recharges</h3>
              {state.user.recentRecharges.length === 0 ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
                  <Smartphone className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <p className="text-white/70">No recharges yet</p>
                </div>
              ) : (
                state.user.recentRecharges.map((recharge) => {
                  const operator = state.operators.find(op => op.id === recharge.operator);
                  return (
                    <div key={recharge.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{operator?.logo}</div>
                          <div>
                            <p className="text-white font-medium">{recharge.mobileNumber}</p>
                            <p className="text-purple-200 text-sm">{operator?.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">৳{recharge.amount}</p>
                          <p className="text-purple-200 text-sm">{recharge.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileRecharge;
