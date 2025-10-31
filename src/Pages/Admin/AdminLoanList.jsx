import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Search } from "lucide-react";
import axiosSecure from "../../axiosSecure/useAxiosSecure";

const statusColors = {
  pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  approved: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  completed: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

const AdminLoanList = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const fetchLoans = async () => {
    try {
      const res = await axiosSecure.get("/api/loans/admin/all");
      const data = res.data || [];
      setLoans(data);
      setFilteredLoans(data);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to fetch loans", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  // Live search filter
  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = loans.filter(
      (loan) =>
        loan.userPhone?.toLowerCase().includes(lower) ||
        loan.status?.toLowerCase().includes(lower)
    );
    setFilteredLoans(filtered);
    setCurrentPage(1);
  }, [search, loans]);

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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-600 dark:text-gray-300">
        Loading loans...
      </div>
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredLoans.length / itemsPerPage);
  const paginatedLoans = filteredLoans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Loan Requests</h2>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Search by phone or status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
              focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-purple-500 
              shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left rounded-lg shadow bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">User</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLoans.length > 0 ? (
              paginatedLoans.map((loan, idx) => (
                <tr
                  key={loan._id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="p-3">{loan.userPhone}</td>
                  <td className="p-3 font-semibold">৳{loan.amount}</td>
                  <td className="p-3">{loan.duration} mo</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColors[loan.status] ||
                        "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="p-3 flex flex-wrap gap-2">
                    {loan.status === "pending" ? (
                      <>
                        <button
                          onClick={() => handleApprove(loan._id)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(loan._id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        N/A
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No matching loans found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLoanList;
