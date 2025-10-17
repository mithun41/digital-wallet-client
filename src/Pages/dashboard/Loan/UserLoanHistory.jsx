import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAxiosSecure from "../../../axiosSecure/useAxiosSecure";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700",
};

const UserLoanHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLoans = async () => {
    try {
      const res = await axiosSecure.get("/api/loans/user/my"); // updated route
      setLoans(res.data);
    } catch (err) {
      console.error("Error fetching loans:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-500 dark:text-gray-400">
          Loading your loan history...
        </p>
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600 dark:text-gray-300">
        <p>No loan records found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Your Loan History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="p-3">#</th>
              <th className="p-3">Amount (৳)</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Status</th>
              <th className="p-3">Remaining</th>
              <th className="p-3">Applied Date</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {loans.map((loan, idx) => (
                <motion.tr
                  key={loan._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3 font-semibold text-blue-600">
                    ৳{loan.amount}
                  </td>
                  <td className="p-3">{loan.duration} mo</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColors[loan.status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {loan.status.charAt(0).toUpperCase() +
                        loan.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    ৳{loan.remainingBalance ?? loan.amount}
                  </td>
                  <td className="p-3 text-gray-500 dark:text-gray-400">
                    {new Date(loan.createdAt).toLocaleDateString()}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLoanHistory;
