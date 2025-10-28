import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axiosSecure from "../../../axiosSecure/useAxiosSecure";

const LoanApplyForm = () => {
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    amount: "",
    duration: "",
    purpose: "",
  });
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch user's active loans
  const fetchUserLoans = async () => {
    try {
      const res = await axiosSecure.get("/api/loans/user/my");
      // filter only active or approved loans
      const activeLoans = res.data
        .filter(
          (loan) => loan.status !== "completed" && loan.status !== "rejected"
        )
        .map((loan) => ({
          ...loan,
          monthlyInstallment:
            Math.round((loan.amount / loan.duration) * 100) / 100,
          remainingBalance: loan.remainingBalance ?? loan.amount,
        }));

      setLoans(activeLoans);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserLoans();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.phone) {
      Swal.fire("Error", "User phone not found. Please login again.", "error");
      return;
    }

    setLoading(true);
    try {
      const payload = { ...formData, userPhone: user.phone };
      const res = await axiosSecure.post("/api/loans/user/apply", payload);
      Swal.fire("Success", res.data.message, "success");
      setFormData({ amount: "", duration: "", purpose: "" });
      fetchUserLoans();
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Something went wrong",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRepay = async (loanId) => {
    try {
      const res = await axiosSecure.put(`/api/loans/user/repay/${loanId}`);
      Swal.fire("Success", res.data.message, "success");
      fetchUserLoans();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Apply for a Loan
      </h2>

      {/* Loan Apply Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Duration</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
        </select>
        <textarea
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          placeholder="Purpose (optional)"
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>

      {/* Active Loan List */}
      <h3 className="text-xl font-semibold mb-2">My Active Loans</h3>
      {loans.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          🎉 No active loans at the moment.
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2">#</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Duration</th>
              <th className="p-2">Status</th>
              <th className="p-2">Monthly Installment</th>
              <th className="p-2">Remaining</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, idx) => (
              <tr key={loan._id} className="border-b">
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">৳{loan.amount}</td>
                <td className="p-2">{loan.duration} mo</td>
                <td className="p-2">{loan.status}</td>
                <td className="p-2">৳{loan.monthlyInstallment}</td>
                <td className="p-2">৳{loan.remainingBalance}</td>
                <td className="p-2">
                  {loan.status === "approved" && loan.remainingBalance > 0 ? (
                    <button
                      onClick={() => handleRepay(loan._id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md"
                    >
                      Pay
                    </button>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoanApplyForm;
