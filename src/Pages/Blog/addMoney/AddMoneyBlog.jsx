import React from "react";

const AddMoneyBlog = () => {
  const steps = [
    {
      title: "Open the App",
      description:
        "Launch your digital wallet app on your smartphone. If you haven't installed it yet, download it from the Google Play Store or Apple App Store.",
    },
    {
      title: "Navigate to 'Add Money'",
      description:
        "On the home screen of the app, locate and tap on the 'Add Money' option. This will take you to the section where you can choose your preferred method to add funds.",
    },
    {
      title: "Select Payment Method",
      description:
        "You can add money to your wallet using various methods: Bank Transfer, Debit/Credit Card, or UPI (Unified Payments Interface).",
    },
    {
      title: "Enter Amount",
      description:
        "Specify the amount you wish to add to your wallet. Ensure that the amount is within the allowed limits set by your wallet provider.",
    },
    {
      title: "Provide Payment Details",
      description:
        "Depending on your chosen payment method, enter the required details: bank account, card info, or UPI ID.",
    },
    {
      title: "Verify and Confirm",
      description:
        "Review the transaction details, including the amount and payment method. Confirm the transaction by entering any required authentication information.",
    },
    {
      title: "Completion",
      description:
        "Once confirmed, the money will be added to your digital wallet instantly. You will receive a notification confirming the successful transaction.",
    },
  ];

  const benefits = [
    "Instant Transactions: Funds are available immediately for use.",
    "Secure Payments: Enjoy encrypted transactions for enhanced security.",
    "Convenience: Make payments and transfers anytime, anywhere.",
    "Multiple Payment Options: Choose from various methods to add funds.",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        💰 How to Add Money to Your Digital Wallet
      </h1>
      <p className="mb-8 text-gray-700">
        Adding money to your digital wallet is a simple and secure process,
        allowing you to make payments, transfer funds, and manage your finances
        conveniently. Follow these easy steps:
      </p>

      <div className="space-y-6 mb-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-md"
          >
            <h2 className="text-xl font-semibold mb-1">
              {index + 1}. {step.title}
            </h2>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Benefits of Adding Money</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <p className="mt-6 text-gray-600">
        If you encounter any issues or need assistance, refer to the help
        section in your app or contact customer support.
      </p>
    </div>
  );
};

export default AddMoneyBlog;
