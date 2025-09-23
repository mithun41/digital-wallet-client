import { useState } from 'react';
import { ArrowLeft, Smartphone, CreditCard, Shield, Star } from 'lucide-react';

export default function MobileRecharge() {
  const [selectedType, setSelectedType] = useState('prepaid');
  const [promoCode, setPromoCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('017xxxxxxxx');

  const rechargeHistory = [
    {
      number: '017xxxxxxxx',
      operator: 'Grameenphone',
      amount: 100,
      status: 'Success',
      date: 'Apr 5, 16:12'
    }
  ];

  const rechargePlans = [
    {
      type: 'Data Pack',
      description: '1GB for 3 Days',
      price: 49
    },
    {
      type: 'Talktime',
      description: '100 Min for 7 Days',
      price: 100
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-8">
      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center text-white mb-6 pt-4">
          <ArrowLeft className="w-6 h-6 mr-4 cursor-pointer" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Mobile Recharge</h1>
            <p className="text-purple-100 text-sm md:text-base mt-1">
              Recharge your mobile instantly with offers
            </p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-6 shadow-xl">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm mb-2">Available Balance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-3">
              ৳ 2,450.50
            </h2>
            <div className="flex items-center justify-center text-green-600 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Instant & Secure
            </div>
          </div>

          {/* Prepaid/Postpaid Toggle */}
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-2xl p-1 mb-6 gap-2 sm:gap-0">
            <button
              onClick={() => setSelectedType('prepaid')}
              className={` flex items-center justify-center py-3 px-4 rounded-xl font-semibold transition-all ${
                selectedType === 'prepaid'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Prepaid
            </button>
            <button
              onClick={() => setSelectedType('postpaid')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-semibold transition-all ${
                selectedType === 'postpaid'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600'
              }`}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Postpaid
            </button>
          </div>

          {/* Mobile Number */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              Mobile Number
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 text-lg sm:text-xl font-mono text-gray-800 bg-transparent border-b-2 border-gray-200 focus:border-purple-500 outline-none py-2"
              />
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full ml-4 flex-shrink-0"></div>
            </div>
            <button className="flex items-center text-pink-500 font-semibold mt-3 text-sm">
              <Star className="w-4 h-4 mr-1" />
              Save as Favorite
            </button>
          </div>

          {/* Recharge Plans */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              Recharge Plans & Offers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rechargePlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">{plan.type}</h4>
                  <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                  <p className="text-lg font-bold text-purple-600">৳{plan.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Code */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Promo Code
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              />
              <button className="px-6 py-3 text-purple-600 font-semibold hover:bg-purple-50 rounded-xl transition-colors w-full sm:w-auto">
                Apply
              </button>
            </div>
          </div>

          {/* Recharge History */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              Recharge History
            </h3>
            {rechargeHistory.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2 sm:gap-0"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.number}</p>
                  <p className="text-sm text-gray-600">{item.operator}</p>
                </div>
                <div className="text-left sm:text-center sm:mx-4">
                  <p className="font-bold text-gray-800">৳{item.amount}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-green-600">
                    {item.status}
                  </p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recharge Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
          <Star className="w-5 h-5 mr-2" />
          Recharge Now + 40
        </button>



      </div>

    </div>
  );
}






// import React, { useState } from 'react';
// import { ArrowLeft, Smartphone, Phone, Contact, Star, Clock, Zap } from 'lucide-react';

// const MobileRecharge = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedOperator, setSelectedOperator] = useState('');
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [activeTab, setActiveTab] = useState('prepaid');

//   const operators = [
//     { id: 'grameenphone', name: 'Grameenphone', logo: '🟢', color: 'green', prefix: ['017', '013', '019', '014'] },
//     { id: 'robi', name: 'Robi', logo: '🟠', color: 'orange', prefix: ['018', '019'] },
//     { id: 'banglalink', name: 'Banglalink', logo: '🔵', color: 'blue', prefix: ['019', '014'] },
//     { id: 'teletalk', name: 'Teletalk', logo: '🔴', color: 'red', prefix: ['015'] },
//     { id: 'airtel', name: 'Airtel', logo: '🔴', color: 'red', prefix: ['016'] }
//   ];

//   const rechargePackages = {
//     grameenphone: [
//       { id: 1, amount: 19, validity: '3 days', data: '1GB', minutes: '50 min', type: 'combo' },
//       { id: 2, amount: 49, validity: '7 days', data: '3GB', minutes: '100 min', type: 'combo' },
//       { id: 3, amount: 99, validity: '15 days', data: '8GB', minutes: '200 min', type: 'combo' },
//       { id: 4, amount: 149, validity: '30 days', data: '15GB', minutes: '300 min', type: 'combo' },
//       { id: 5, amount: 20, validity: '1 day', data: '1GB', minutes: '0', type: 'internet' },
//       { id: 6, amount: 50, validity: '7 days', data: '3GB', minutes: '0', type: 'internet' }
//     ],
//     robi: [
//       { id: 1, amount: 25, validity: '3 days', data: '1.5GB', minutes: '75 min', type: 'combo' },
//       { id: 2, amount: 55, validity: '7 days', data: '4GB', minutes: '125 min', type: 'combo' },
//       { id: 3, amount: 109, validity: '15 days', data: '9GB', minutes: '225 min', type: 'combo' },
//       { id: 4, amount: 159, validity: '30 days', data: '17GB', minutes: '350 min', type: 'combo' }
//     ],
//     banglalink: [
//       { id: 1, amount: 22, validity: '3 days', data: '1.2GB', minutes: '60 min', type: 'combo' },
//       { id: 2, amount: 52, validity: '7 days', data: '3.5GB', minutes: '110 min', type: 'combo' },
//       { id: 3, amount: 102, validity: '15 days', data: '8.5GB', minutes: '210 min', type: 'combo' }
//     ]
//   };

//   const recentRecharges = [
//     { number: '01712345678', operator: 'grameenphone', amount: 49, time: '2 hours ago' },
//     { number: '01856789012', operator: 'robi', amount: 109, time: '1 day ago' }
//   ];

//   const detectOperator = (number) => {
//     const prefix = number.substring(0, 3);
//     for (const op of operators) {
//       if (op.prefix.includes(prefix)) {
//         return op.id;
//       }
//     }
//     return '';
//   };

//   const handleNumberChange = (value) => {
//     setPhoneNumber(value);
//     if (value.length >= 3) {
//       const detected = detectOperator(value);
//       setSelectedOperator(detected);
//       setSelectedPackage(null);
//     }
//   };

//   const handleRecharge = () => {
//     if (!phoneNumber || !selectedPackage) return;
    
//     setIsProcessing(true);
//     setTimeout(() => {
//       setIsProcessing(false);
//       alert(`Recharge successful! ৳${selectedPackage.amount} recharged to ${phoneNumber}`);
//     }, 2000);
//   };

//   const quickAmounts = [20, 50, 100, 200, 500];

//   return (
//     <div className="max-w-4xl mx-auto px-4  min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
//         <div className="flex items-center gap-3">
//           <ArrowLeft className="w-6 h-6 cursor-pointer hover:bg-white/20 rounded p-1" />
//           <Smartphone className="w-6 h-6" />
//           <h1 className="text-xl font-bold">Mobile Recharge</h1>
//         </div>
//         <p className="text-pink-100 text-sm mt-1">Recharge your mobile instantly</p>
//       </div>

//       {/* Balance Display */}
//       <div className="mx-4 -mt-4 relative">
//         <div className="bg-white rounded-2xl p-4 shadow-lg border border-pink-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-600 text-sm">Available Balance</p>
//               <p className="text-2xl font-bold text-pink-600">৳ 2,450.50</p>
//             </div>
//             <div className="flex gap-2">
//               <Zap className="w-5 h-5 text-yellow-500" />
//               <span className="text-sm text-green-600 font-medium">Instant Recharge</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mx-4 mt-6">
//         <div className="flex bg-white rounded-xl p-1 shadow-sm border border-pink-100">
//           {[
//             { id: 'prepaid', label: 'Prepaid', icon: <Phone className="w-4 h-4" /> },
//             { id: 'postpaid', label: 'Postpaid', icon: <Contact className="w-4 h-4" /> }
//           ].map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
//                 activeTab === tab.id
//                   ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               {tab.icon}
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Phone Number Input */}
//       <div className="p-4">
//         <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
//           <label className="block text-gray-700 font-medium mb-3">Mobile Number</label>
//           <div className="relative">
//             <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => handleNumberChange(e.target.value)}
//               placeholder="017xxxxxxxx"
//               className="w-full pl-12 pr-4 py-4 text-lg border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
//               maxLength="11"
//             />
//             {selectedOperator && (
//               <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                 <span className="text-2xl">{operators.find(op => op.id === selectedOperator)?.logo}</span>
//               </div>
//             )}
//           </div>
          
//           {/* Contact Suggestions */}
//           <div className="mt-3">
//             <p className="text-sm text-gray-500 mb-2">Recent</p>
//             <div className="flex gap-2">
//               {recentRecharges.map((recent, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => handleNumberChange(recent.number)}
//                   className="px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm border border-gray-200 transition-colors"
//                 >
//                   <div className="text-xs text-gray-600">{recent.number}</div>
//                   <div className="text-xs text-gray-500">{recent.time}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Operator Selection (if not auto-detected) */}
//       {phoneNumber.length >= 3 && !selectedOperator && (
//         <div className="px-4 pb-4">
//           <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
//             <label className="block text-gray-700 font-medium mb-4">Select Operator</label>
//             <div className="grid grid-cols-3 gap-3">
//               {operators.map((op) => (
//                 <button
//                   key={op.id}
//                   onClick={() => setSelectedOperator(op.id)}
//                   className="flex flex-col items-center p-3 border-2 border-gray-200 rounded-xl hover:border-pink-300 transition-colors"
//                 >
//                   <span className="text-2xl mb-1">{op.logo}</span>
//                   <span className="text-xs font-medium text-gray-700">{op.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Quick Amount Buttons */}
//       {selectedOperator && (
//         <div className="px-4 pb-4">
//           <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
//             <h3 className="font-semibold text-gray-800 mb-4">Quick Recharge</h3>
//             <div className="grid grid-cols-5 gap-2">
//               {quickAmounts.map((amount) => (
//                 <button
//                   key={amount}
//                   onClick={() => setSelectedPackage({ amount, validity: 'Instant', type: 'quick' })}
//                   className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${
//                     selectedPackage?.amount === amount && selectedPackage?.type === 'quick'
//                       ? 'bg-pink-500 text-white shadow-lg'
//                       : 'bg-pink-50 hover:bg-pink-100 text-pink-600'
//                   }`}
//                 >
//                   ৳{amount}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Packages */}
//       {selectedOperator && rechargePackages[selectedOperator] && (
//         <div className="px-4 pb-24">
//           <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
//             <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" />
//               Popular Packages
//             </h3>
//             <div className="space-y-3">
//               {rechargePackages[selectedOperator].map((pkg) => (
//                 <div
//                   key={pkg.id}
//                   onClick={() => setSelectedPackage(pkg)}
//                   className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
//                     selectedPackage?.id === pkg.id
//                       ? 'border-pink-500 bg-pink-50'
//                       : 'border-gray-200 hover:border-pink-300'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="font-bold text-lg text-pink-600">৳{pkg.amount}</span>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           pkg.type === 'combo' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
//                         }`}>
//                           {pkg.type === 'combo' ? 'COMBO' : 'INTERNET'}
//                         </span>
//                       </div>
//                       <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
//                         <div>
//                           <Clock className="w-4 h-4 inline mr-1" />
//                           {pkg.validity}
//                         </div>
//                         <div>
//                           <Zap className="w-4 h-4 inline mr-1" />
//                           {pkg.data}
//                         </div>
//                         {pkg.minutes !== '0' && (
//                           <div>
//                             <Phone className="w-4 h-4 inline mr-1" />
//                             {pkg.minutes}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className={`w-5 h-5 rounded-full border-2 ${
//                       selectedPackage?.id === pkg.id 
//                         ? 'bg-pink-500 border-pink-500' 
//                         : 'border-gray-300'
//                     }`}>
//                       {selectedPackage?.id === pkg.id && (
//                         <div className="w-full h-full flex items-center justify-center">
//                           <div className="w-2 h-2 bg-white rounded-full"></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Action Button */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
//         <button
//           onClick={handleRecharge}
//           disabled={!phoneNumber || !selectedPackage || phoneNumber.length !== 11 || isProcessing}
//           className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
//             !phoneNumber || !selectedPackage || phoneNumber.length !== 11 || isProcessing
//               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
//           }`}
//         >
//           {isProcessing ? (
//             <div className="flex items-center justify-center gap-2">
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               Processing Recharge...
//             </div>
//           ) : (
//             `Recharge ${selectedPackage ? `৳${selectedPackage.amount}` : ''}`
//           )}
//         </button>
        
//         {selectedPackage && (
//           <div className="text-center mt-2">
//             <p className="text-sm text-gray-500">
//               To: {phoneNumber} • {operators.find(op => op.id === selectedOperator)?.name}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MobileRecharge;