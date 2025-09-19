// import React, { useState } from 'react';
// import { ArrowLeft, Eye, EyeOff, Phone, MapPin, Clock, User, Shield, Zap, CheckCircle, AlertCircle } from 'lucide-react';

// export default function UniqueBkashUI() {
//     const [amount, setAmount] = useState('');
//     const [agentNumber, setAgentNumber] = useState('');
//     const [pin, setPin] = useState('');
//     const [showPin, setShowPin] = useState(false);
//     const [step, setStep] = useState(1);
//     const [loading, setLoading] = useState(false);

//     const nearbyAgents = [
//         { name: "আব্দুর রহমান স্টোর", distance: "50m", number: "01712345678", available: true, rating: 4.8, verified: true },
//         { name: "সিটি মার্ট", distance: "120m", number: "01812345679", available: true, rating: 4.6, verified: true },
//         { name: "আলম এন্টারপ্রাইজ", distance: "200m", number: "01912345680", available: false, rating: 4.3, verified: false },
//         { name: "নিউ বাজার সেন্টার", distance: "300m", number: "01612345681", available: true, rating: 4.9, verified: true },
//     ];

//     const quickAmounts = [500, 1000, 2000, 5000];

//     const handleCashOut = () => {
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             setStep(3);
//         }, 2500);
//     };

//     const handleBack = () => {
//         if (step > 1) setStep(step - 1);
//     };

//     const calculateCharge = (amt) => Math.max(5, Math.ceil(parseFloat(amt || 0) * 0.0185));

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//             {/* Modern Header with Glassmorphism */}
//             <div className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 overflow-hidden">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
//                 <div className="relative px-6 py-6 flex items-center justify-between text-white">
//                     <div className="flex items-center gap-4">
//                         {step > 1 && (
//                             <button
//                                 onClick={handleBack}
//                                 className="p-2.5 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
//                             >
//                                 <ArrowLeft size={20} />
//                             </button>
//                         )}
//                         <div>
//                             <h1 className="text-xl font-bold tracking-tight">Cash Out</h1>
//                             <p className="text-sm opacity-90 font-medium">টাকা উত্তোলন করুন</p>
//                         </div>
//                     </div>
//                     <div className="text-right bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
//                         <p className="text-xs opacity-80 font-medium">Available Balance</p>
//                         <p className="text-xl font-bold">৳ 12,500.00</p>
//                     </div>
//                 </div>

//                 {/* Progress Indicator */}
//                 <div className="relative px-6 pb-4">
//                     <div className="flex items-center justify-between">
//                         {[1, 2, 3].map((i) => (
//                             <div key={i} className="flex items-center">
//                                 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step >= i
//                                         ? 'bg-white text-pink-600 shadow-lg'
//                                         : 'bg-white/20 text-white border border-white/30'
//                                     }`}>
//                                     {step > i ? <CheckCircle size={18} /> : i}
//                                 </div>
//                                 {i < 3 && (
//                                     <div className={`w-16 h-1 mx-2 rounded transition-all duration-500 ${step > i ? 'bg-white' : 'bg-white/20'
//                                         }`}></div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="px-6 py-8 space-y-8">
//                 {step === 1 && (
//                     <>
//                         {/* Amount Input Card */}
//                         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                                     <Zap className="text-white" size={24} />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-xl font-bold text-gray-800">পরিমাণ নির্বাচন করুন</h2>
//                                     <p className="text-sm text-gray-500">আপনি কত টাকা তুলতে চান?</p>
//                                 </div>
//                             </div>

//                             <div className="relative mb-6">
//                                 <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-pink-600">৳</div>
//                                 <input
//                                     type="number"
//                                     value={amount}
//                                     onChange={(e) => setAmount(e.target.value)}
//                                     className="w-full pl-14 pr-6 py-6 text-3xl font-bold border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
//                                     placeholder="0"
//                                 />
//                                 {amount && (
//                                     <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
//                                         চার্জ: ৳{calculateCharge(amount)}
//                                     </div>
//                                 )}
//                             </div>

//                             <div className="grid grid-cols-2 gap-3">
//                                 {quickAmounts.map((amt) => (
//                                     <button
//                                         key={amt}
//                                         onClick={() => setAmount(amt.toString())}
//                                         className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border-2 border-pink-200 hover:border-pink-400 rounded-2xl transition-all duration-300 group"
//                                     >
//                                         <div className="font-bold text-lg text-pink-700 group-hover:text-pink-800">৳{amt.toLocaleString()}</div>
//                                         <div className="text-xs text-gray-500 mt-1">চার্জ: ৳{calculateCharge(amt.toString())}</div>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Agent Selection Card */}
//                         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
//                                     <User className="text-white" size={24} />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-xl font-bold text-gray-800">এজেন্ট নির্বাচন</h2>
//                                     <p className="text-sm text-gray-500">কার কাছ থেকে টাকা নিবেন?</p>
//                                 </div>
//                             </div>

//                             <div className="relative mb-6">
//                                 <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                                 <input
//                                     type="tel"
//                                     value={agentNumber}
//                                     onChange={(e) => setAgentNumber(e.target.value)}
//                                     className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white font-medium"
//                                     placeholder="এজেন্ট নম্বর লিখুন"
//                                 />
//                             </div>

//                             <div className="border-t-2 border-gray-100 pt-6">
//                                 <div className="flex items-center gap-2 mb-4">
//                                     <MapPin className="text-blue-600" size={18} />
//                                     <span className="font-bold text-gray-800">কাছের ভেরিফাইড এজেন্ট</span>
//                                 </div>

//                                 <div className="space-y-3">
//                                     {nearbyAgents.slice(0, 3).map((agent, index) => (
//                                         <button
//                                             key={index}
//                                             onClick={() => setAgentNumber(agent.number)}
//                                             disabled={!agent.available}
//                                             className={`w-full p-4 rounded-2xl transition-all duration-300 text-left border-2 ${agent.available
//                                                     ? 'bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 border-gray-200 hover:border-blue-300'
//                                                     : 'bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed'
//                                                 }`}
//                                         >
//                                             <div className="flex items-center justify-between">
//                                                 <div className="flex-1">
//                                                     <div className="flex items-center gap-2 mb-1">
//                                                         <p className="font-bold text-gray-800">{agent.name}</p>
//                                                         {agent.verified && <Shield className="text-green-500" size={16} />}
//                                                     </div>
//                                                     <p className="text-sm text-gray-600 mb-2">{agent.number}</p>
//                                                     <div className="flex items-center gap-4">
//                                                         <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
//                                                             {agent.distance}
//                                                         </span>
//                                                         <span className="text-xs text-yellow-600 font-medium">
//                                                             ★ {agent.rating}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className={`w-4 h-4 rounded-full flex-shrink-0 ${agent.available ? 'bg-green-500 animate-pulse' : 'bg-red-400'
//                                                     }`}></div>
//                                             </div>
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Continue Button */}
//                         <button
//                             onClick={() => setStep(2)}
//                             disabled={!amount || !agentNumber}
//                             className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl disabled:cursor-not-allowed transform hover:scale-[1.02] disabled:hover:scale-100"
//                         >
//                             পরবর্তী ধাপে যান
//                         </button>
//                     </>
//                 )}

//                 {step === 2 && (
//                     <>
//                         {/* Transaction Summary */}
//                         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
//                                     <AlertCircle className="text-white" size={24} />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-xl font-bold text-gray-800">লেনদেন নিশ্চিত করুন</h2>
//                                     <p className="text-sm text-gray-500">সব তথ্য ঠিক আছে কি?</p>
//                                 </div>
//                             </div>

//                             <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 space-y-4">
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600 font-medium">উত্তোলনের পরিমাণ:</span>
//                                     <span className="font-bold text-2xl text-gray-800">৳ {amount}</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600 font-medium">এজেন্ট নম্বর:</span>
//                                     <span className="font-bold text-gray-800">{agentNumber}</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-gray-600 font-medium">সার্ভিস চার্জ:</span>
//                                     <span className="font-bold text-orange-600">৳ {calculateCharge(amount)}</span>
//                                 </div>
//                                 <div className="border-t-2 border-gray-200 pt-4">
//                                     <div className="flex justify-between items-center">
//                                         <span className="font-bold text-lg text-gray-800">সর্বমোট খরচ:</span>
//                                         <span className="font-bold text-2xl text-pink-600">
//                                             ৳ {(parseFloat(amount || 0) + calculateCharge(amount)).toFixed(2)}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* PIN Input */}
//                         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
//                                     <Shield className="text-white" size={24} />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-xl font-bold text-gray-800">PIN দিয়ে নিশ্চিত করুন</h2>
//                                     <p className="text-sm text-gray-500">আপনার 5-ডিজিট PIN লিখুন</p>
//                                 </div>
//                             </div>

//                             <div className="relative">
//                                 <input
//                                     type={showPin ? "text" : "password"}
//                                     value={pin}
//                                     onChange={(e) => setPin(e.target.value)}
//                                     maxLength={5}
//                                     className="w-full px-6 py-6 text-3xl font-bold border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none text-center tracking-widest bg-gray-50 focus:bg-white transition-all duration-300"
//                                     placeholder="• • • • •"
//                                 />
//                                 <button
//                                     onClick={() => setShowPin(!showPin)}
//                                     className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
//                                 >
//                                     {showPin ? <EyeOff size={24} /> : <Eye size={24} />}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Confirm Button */}
//                         <button
//                             onClick={handleCashOut}
//                             disabled={pin.length !== 5 || loading}
//                             className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl disabled:cursor-not-allowed transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-3"
//                         >
//                             {loading ? (
//                                 <>
//                                     <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                                     প্রসেসিং হচ্ছে...
//                                 </>
//                             ) : (
//                                 <>
//                                     <Shield size={20} />
//                                     ক্যাশ আউট নিশ্চিত করুন
//                                 </>
//                             )}
//                         </button>
//                     </>
//                 )}

//                 {step === 3 && (
//                     <>
//                         {/* Success Animation */}
//                         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
//                             <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
//                                 <CheckCircle className="text-white" size={40} />
//                             </div>

//                             <h2 className="text-3xl font-bold text-green-600 mb-3">সফলভাবে সম্পন্ন!</h2>
//                             <p className="text-gray-600 mb-8 text-lg">আপনার ক্যাশ আউট সম্পূর্ণ হয়েছে</p>

//                             {/* Transaction Receipt */}
//                             <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 space-y-4 mb-8">
//                                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                                     <span className="text-gray-600 font-medium">Transaction ID:</span>
//                                     <span className="font-bold text-lg font-mono">9BM41H7G2P</span>
//                                 </div>
//                                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                                     <span className="text-gray-600 font-medium">উত্তোলিত টাকা:</span>
//                                     <span className="font-bold text-xl text-green-600">৳ {amount}</span>
//                                 </div>
//                                 <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                                     <span className="text-gray-600 font-medium">তারিখ ও সময়:</span>
//                                     <span className="font-bold">{new Date().toLocaleString('bn-BD')}</span>
//                                 </div>
//                                 <div className="flex justify-between items-center py-2">
//                                     <span className="text-gray-600 font-medium">বর্তমান ব্যালেন্স:</span>
//                                     <span className="font-bold text-xl text-pink-600">
//                                         ৳ {(12500 - parseFloat(amount || 0) - calculateCharge(amount)).toFixed(2)}
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-8">
//                                 <p className="text-blue-800 font-medium">
//                                     📱 আপনার এজেন্টের কাছ থেকে টাকা নিন এবং Transaction ID দেখান
//                                 </p>
//                             </div>
//                         </div>

//                         {/* New Transaction Button */}
//                         <button
//                             onClick={() => {
//                                 setStep(1);
//                                 setAmount('');
//                                 setAgentNumber('');
//                                 setPin('');
//                             }}
//                             className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-[1.02]"
//                         >
//                             নতুন লেনদেন করুন
//                         </button>
//                     </>
//                 )}
//             </div>

//             {/* Enhanced Bottom Bar */}
//             <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-4 shadow-2xl">
//                 <div className="flex justify-center items-center gap-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <Clock size={18} className="text-pink-600" />
//                     <span className="font-bold text-gray-800">24/7 নিরাপদ সেবা</span>
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }