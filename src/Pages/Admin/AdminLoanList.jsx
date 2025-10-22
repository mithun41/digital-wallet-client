import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../axiosSecure/useAxiosSecure";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700",
};

const AdminLoanList = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const fetchLoans = async () => {
    try {
      const res = await axiosSecure.get("/api/loans/admin/all");
      setLoans(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const handleApprove = async (id) => {
    try {
      const res = await axiosSecure.put(`/api/loans/admin/approve/${id}`);
      Swal.fire("Success", res.data.message, "success");
      fetchLoans();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await axiosSecure.put(`/api/loans/admin/reject/${id}`);
      Swal.fire("Success", res.data.message, "success");
      fetchLoans();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!loans.length)
    return <p className="text-center py-10">No loans found.</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Loan Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2">#</th>
              <th className="p-2">User</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Duration</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, idx) => (
              <tr key={loan._id} className="border-b">
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{loan.userPhone}</td>
                <td className="p-2">৳{loan.amount}</td>
                <td className="p-2">{loan.duration} mo</td>
                <td className="p-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      statusColors[loan.status] || "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  {loan.status === "pending" ? (
                    <>
                      <button
                        onClick={() => handleApprove(loan._id)}
                        className="px-3 py-1 bg-green-600 text-white rounded-md"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(loan._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-md"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLoanList;
