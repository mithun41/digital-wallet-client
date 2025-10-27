import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosSecure from "../../axiosSecure/useAxiosSecure";
import Loading from "../../Components/loading/Loading";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const MerchantRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get("/api/user/upgrade-requests");
      setRequests(res.data);
    } catch (err) {
      console.error("Error fetching merchant requests:", err);
      Swal.fire("Error", "Failed to fetch merchant requests.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    const confirm = await Swal.fire({
      title: "Approve this request?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
      cancelButtonText: "Cancel",
    });
    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.put(`/api/admin/merchant/approve/${id}`);
      Swal.fire("Success", res.data.message, "success");
      fetchRequests();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  const handleReject = async (id) => {
    const confirm = await Swal.fire({
      title: "Reject this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Reject",
      cancelButtonText: "Cancel",
    });
    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/api/admin/merchant/reject/${id}`);
      Swal.fire("Success", res.data.message, "success");
      fetchRequests();
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  if (loading) return <Loading></Loading>;
  if (!requests.length)
    return <p className="text-center py-10">No merchant requests found.</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
        Merchant Requests
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr
                key={req._id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{req.name || "N/A"}</td>
                <td className="p-3">{req.phone}</td>
                <td className="p-3 capitalize">{req.role || "user"}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusColors[req.status] || "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-2 flex-wrap">
                  {req.status === "pending" ? (
                    <>
                      <button
                        onClick={() => handleApprove(req._id)}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">
                      N/A
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid gap-4">
        {requests.map((req, idx) => (
          <div
            key={req._id}
            className="border dark:border-gray-700 rounded-xl p-4 bg-gray-50 dark:bg-gray-900 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                {req.name || "N/A"}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  statusColors[req.status] || "bg-gray-200 text-gray-700"
                }`}
              >
                {req.status}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
              <span className="font-medium">Phone:</span> {req.phone}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
              <span className="font-medium">Role:</span> {req.role || "user"}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              <span className="font-medium">Request ID:</span> {idx + 1}
            </p>

            {req.status === "pending" ? (
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(req._id)}
                  className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(req._id)}
                  className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                >
                  Reject
                </button>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center">
                No actions available
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantRequests;
