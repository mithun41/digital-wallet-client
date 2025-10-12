import React, { useState } from 'react';
import {
  Send, Shield, CheckCircle, Clock, AlertCircle,
  CreditCard, Users, Globe, Smartphone, Building, ArrowRightLeft
} from 'lucide-react';

export default function SendMoneyBlog() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "1. Login and Preparation",
      description: "Access your digital wallet or banking app",
      details: [
        "Open your mobile banking app or web portal",
        "Enter your credentials (phone number, email, or username)",
        "Complete security verification (PIN, password, or biometric)",
        "Check your current balance to ensure sufficient funds"
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 2,
      title: "2. Select Send Money Option",
      description: "Choose the type of transfer you want to make",
      details: [
        "Navigate to 'Send Money' or 'Transfer' section",
        "Choose transfer type: Same bank, Other bank, or Mobile wallet",
        "Select payment method from your linked accounts",
        "View available transfer limits and charges"
      ],
      icon: <ArrowRightLeft className="w-6 h-6" />
    },
    {
      id: 3,
      title: "3. Enter Recipient Details",
      description: "Provide information about who will receive the money",
      details: [
        "Enter recipient's account number or mobile number",
        "System automatically fetches and displays recipient name",
        "Verify the displayed name matches intended recipient",
        "Add recipient to favorites for future transfers (optional)"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 4,
      title: "4. Specify Amount and Purpose",
      description: "Enter transfer amount and additional details",
      details: [
        "Input the amount you want to send",
        "View applicable transfer fees and total deduction",
        "Add reference number or description (optional)",
        "Select transfer priority: Instant or Standard",
        "Review exchange rates for international transfers"
      ],
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: 5,
      title: "5. Review and Confirm",
      description: "Double-check all transaction details",
      details: [
        "Review recipient information carefully",
        "Verify amount and total charges",
        "Check your remaining balance after transfer",
        "Read terms and conditions if displayed",
        "Confirm transaction by entering PIN or OTP"
      ],
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      id: 6,
      title: "6. Transaction Processing",
      description: "System processes your transfer request",
      details: [
        "Funds are debited from your account",
        "Transaction is validated through secure banking network",
        "Real-time processing for instant transfers",
        "Recipient account is credited with the amount",
        "Both parties receive confirmation notifications"
      ],
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 7,
      title: "7. Confirmation and Receipt",
      description: "Get proof of successful transaction",
      details: [
        "Success message displayed on screen",
        "Unique transaction ID generated",
        "Digital receipt with all transaction details",
        "SMS/email confirmation sent to both parties",
        "Option to download, print, or share receipt",
        "Transaction appears in your account history"
      ],
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const transferTypes = [
    {
      title: "Bank to Bank",
      description: "Transfer between different bank accounts",
      features: ["NEFT/RTGS/IMPS", "Takes minutes to hours", "Minimal charges apply"],
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Mobile Wallet",
      description: "Send to mobile wallets like bKash, Nagad",
      features: ["Instant transfer", "24/7 availability", "Low transaction fees"],
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "International",
      description: "Send money across countries",
      features: ["Currency conversion", "Higher fees", "Takes 1-5 business days"],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Instant or same-day money transfer",
    "Available 24/7 from anywhere",
    "Secure encrypted transactions",
    "Digital receipt for record keeping",
    "No need to visit physical branch",
    "Track transaction history easily",
    "Set up recurring payments",
    "Multi-currency support for international transfers"
  ];

  const security = [
    "End-to-end encryption for all transactions",
    "Two-factor authentication (2FA) required",
    "Transaction limits to prevent fraud",
    "Real-time fraud detection systems",
    "Secure PIN and biometric authentication",
    "Automatic logout after inactivity",
    "Transaction alerts via SMS/email",
    "Ability to block/report suspicious activity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-emerald-800 dark:to-green-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Send className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Send Money Guide</h1>
          </div>
          <p className="text-xl text-green-100 dark:text-emerald-200">
            Everything you need to know about sending money digitally
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 transition-colors">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What is Send Money?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Send Money is a digital financial service that enables you to transfer funds from your account 
            to another person's account instantly and securely. Whether you need to pay bills, send money 
            to family, or split expenses with friends, digital money transfer makes it quick and convenient 
            without visiting a bank branch.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This service works through mobile banking apps, online banking portals, or digital wallet platforms. 
            You can send money within the same bank, to different banks, or even across borders with just a 
            few taps on your smartphone.
          </p>
        </div>

        {/* Transfer Types */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Types of Money Transfers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transferTypes.map((type, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 dark:bg-emerald-900 text-green-600 dark:text-emerald-300 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">How to Send Money: Step-by-Step</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  <div className="text-gray-400 dark:text-gray-300 text-2xl">
                    {activeStep === step.id ? '−' : '+'}
                  </div>
                </button>
                
                {activeStep === step.id && (
                  <div className="px-6 pb-6 bg-gray-50 dark:bg-gray-700">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-emerald-800 dark:to-green-900 text-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Benefits of Digital Money Transfer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Security Features</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Modern digital payment systems employ multiple layers of security to protect your money and personal information:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {security.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-green-50 dark:bg-gray-700 rounded-lg p-4">
                <Shield className="w-5 h-5 text-green-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Important Tips & Best Practices</h2>
          <ul className="space-y-3">
            {[
              ["Verify recipient details", "Always double-check the account number and name before confirming"],
              ["Keep credentials private", "Never share your PIN, password, or OTP with anyone"],
              ["Save transaction records", "Keep screenshots or PDFs of receipts for reference"],
              ["Use secure networks", "Avoid public WiFi when making financial transactions"],
              ["Check transaction limits", "Be aware of daily and per-transaction limits"],
              ["Report issues immediately", "Contact customer support if something goes wrong"]
            ].map(([title, text], i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">
                  <strong>{title}:</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Issues */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Common Issues & Solutions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Transaction Failed</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Check your internet connection, verify account details, and ensure sufficient balance. Contact support if issue persists.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Money Deducted but Not Received</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Wait 24-48 hours for processing. Keep transaction ID handy and contact customer support with details.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Wrong Account Transfer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Immediately contact customer support. Recovery depends on recipient cooperation and timing.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">OTP Not Received</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Check phone signal, wait a few minutes, or request OTP resend. Ensure correct phone number is registered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
