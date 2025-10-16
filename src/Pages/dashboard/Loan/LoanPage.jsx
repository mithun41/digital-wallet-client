// LoanPage.jsx
import React, { useState } from "react";
import LoanApplyForm from "./LoanApplyForm";
import UserLoanHistory from "./UserLoanHistory";

const LoanPage = () => {
  const [activeTab, setActiveTab] = useState("apply");

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
        Loan Management
      </h1>

      {/* Tab Switch */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("apply")}
          className={`px-5 py-2 rounded-l-lg font-medium transition-all ${
            activeTab === "apply"
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          }`}
        >
          Apply Loan
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-5 py-2 rounded-r-lg font-medium transition-all ${
            activeTab === "history"
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          }`}
        >
          Loan History
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "apply" && <LoanApplyForm />}
        {activeTab === "history" && <UserLoanHistory />}
      </div>
    </div>
  );
};

export default LoanPage;
