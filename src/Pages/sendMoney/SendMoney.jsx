import React, { useState } from 'react';
import { Phone, CreditCard, Rocket, Building2, Wallet } from 'lucide-react';

const SendMoney = () => {
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('Bank');
  const [note, setNote] = useState('');

  const quickAmounts = [500, 1000, 2000, 5000];

  const paymentMethods = [
    { name: 'bKash', icon: Phone, color: 'bg-pink-500' },
    { name: 'Nagad', icon: CreditCard, color: 'bg-orange-500' },
    { name: 'Rocket', icon: Rocket, color: 'bg-purple-500' },
    { name: 'Bank', icon: Building2, color: 'bg-blue-500' }
  ];

  const handleSubmit = () => {
    if (!recipientAccount || !amount) {
      alert('Please fill in all required fields');
      return;
    }

    const data = {
      recipientAccount,
      amount: parseFloat(amount),
      paymentMethod: selectedMethod,
      note
    };
    console.log('Send Money Data:', data);
    alert(`Successfully sent ${amount} BDT to ${recipientAccount} via ${selectedMethod}`);
  };

  const handleQuickAmount = (quickAmount) => {
    setAmount(quickAmount.toString());
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-t-3xl shadow-xl p-6 mt-12">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-yellow-100 p-2 rounded-xl mr-3">
            <Wallet className="w-6 h-6 text-yellow-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Send Money</h1>
        </div>

        <div className="space-y-6">
          {/* Recipient Account */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              Recipient Account/Phone
            </label>
            <input
              type="text"
              value={recipientAccount}
              onChange={(e) => setRecipientAccount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="01XXXXXXXXX or account number"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <span className="text-yellow-500 mr-2">৳</span>
              Amount (৳)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all mb-3"
              placeholder="Enter amount"
              min="1"
              required
            />

            {/* Quick Amount Buttons */}
            <div className="flex gap-2 flex-wrap">
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  type="button"
                  onClick={() => handleQuickAmount(quickAmount)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors"
                >
                  ৳{quickAmount}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <CreditCard className="w-4 h-4 mr-2 text-yellow-600" />
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <button
                    key={method.name}
                    type="button"
                    onClick={() => setSelectedMethod(method.name)}
                    className={`p-4 rounded-xl border-2 transition-all ${selectedMethod === method.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">{method.name}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reference/Note */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2">📝</span>
              Reference/Note (Optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Add a note for this transaction..."
              rows="3"
            />
          </div>

          {/* Send Money Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            <span className="flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Send Money Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;