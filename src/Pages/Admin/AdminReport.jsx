import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import axiosSecure from "../../axiosSecure/useAxiosSecure";

const AdminReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReport, setEditingReport] = useState(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("pending");

  // ================== Fetch All Reports ==================
  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await axiosSecure.get("/api/report/all");
      setReports(res.data.reports);
    } catch (error) {
      console.error("Error fetching reports:", error);
      Swal.fire("Error", "Failed to fetch reports", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // ================== Update Report ==================
  const handleUpdate = async (id) => {
    try {
      const res = await axiosSecure.put(`/api/report/update/${id}`, {
        adminNote: note,
        status,
      });
      Swal.fire("Updated", res.data.message, "success");
      setEditingReport(null);
      fetchReports();
    } catch (error) {
      console.error("Error updating report:", error);
      Swal.fire("Error", "Failed to update report", "error");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
      </div>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Reports</h2>

      {reports.length === 0 ? (
        <p className="text-gray-600 text-center">No reports found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Phone</th>
                <th className="p-3 border-b">Type</th>
                <th className="p-3 border-b">Report</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Admin Note</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{report.name}</td>
                  <td className="p-3">{report.phone}</td>
                  <td className="p-3 capitalize">{report.type}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {report.reportText}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        report.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : report.status === "in progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-pre-wrap">
                    {report.adminNote || "—"}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => {
                        setEditingReport(report._id);
                        setNote(report.adminNote || "");
                        setStatus(report.status || "pending");
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= Modal ================= */}
      {editingReport && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h3 className="text-xl font-semibold mb-4">Update Report</h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Admin Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              placeholder="Write your note for user..."
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setEditingReport(null)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate(editingReport)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReports;
