import React, { useState, useEffect } from "react";
import {
  Send,
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
} from "lucide-react";
import { useSelector } from "react-redux";
import axiosSecure from "../../axiosSecure/useAxiosSecure";

const categories = [
  { value: "", label: "Select Problem Category", icon: "📋" },
  { value: "transaction", label: "Transaction", icon: "💳" },
  { value: "login", label: "Login Issue", icon: "🔐" },
  { value: "security", label: "Security", icon: "🛡️" },
  { value: "bug", label: "Bug Report", icon: "🐛" },
  { value: "other", label: "Other", icon: "📝" },
];

const Report = () => {
  const { user } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("submit");
  const [category, setCategory] = useState("");
  const [issueText, setIssueText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [myReports, setMyReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !issueText.trim()) {
      setError("Please select a category and describe the issue");
      return;
    }
    setError("");

    try {
      const res = await axiosSecure.post("/api/report", {
        name: user?.name,
        phone: user?.phone,
        type: category,
        reportText: issueText,
      });

      if (res.data?.reportId) {
        setSuccess(true);
        setCategory("");
        setIssueText("");
        fetchMyReports();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Failed to submit report");
      }
    } catch {
      setError("Server error, please try again later");
    }
  };

  const fetchMyReports = async () => {
    setLoadingReports(true);
    try {
      const res = await axiosSecure.get("/api/report/all");
      setMyReports(res.data.reports.filter((r) => r.phone === user?.phone));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingReports(false);
    }
  };

  useEffect(() => {
    if (user) fetchMyReports();
  }, [user]);

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: {
        bg: "bg-yellow-100 dark:bg-yellow-900/30",
        text: "text-yellow-700 dark:text-yellow-400",
        icon: Clock,
      },
      resolved: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-700 dark:text-green-400",
        icon: CheckCircle,
      },
      rejected: {
        bg: "bg-red-100 dark:bg-red-900/30",
        text: "text-red-700 dark:text-red-400",
        icon: XCircle,
      },
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        <Icon size={14} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getCategoryIcon = (type) => {
    const cat = categories.find((c) => c.value === type);
    return cat?.icon || "📋";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Support Center
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Report issues and track your submissions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-fit">
          <button
            onClick={() => setActiveTab("submit")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "submit"
                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Submit Report
          </button>
          <button
            onClick={() => setActiveTab("myReports")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === "myReports"
                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <FileText size={18} />
            My Reports {myReports.length > 0 && `(${myReports.length})`}
          </button>
        </div>

        {/* Submit Tab */}
        {activeTab === "submit" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  Submit New Report
                </h2>
                <p className="text-emerald-50">
                  We're here to help resolve your issues
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {success && (
                  <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                    <div className="bg-green-500 rounded-full p-2">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-300">
                        Report Submitted Successfully!
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        We'll review it and get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      Problem Category
                    </label>
                    <div className="relative">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3.5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 appearance-none cursor-pointer transition-all"
                      >
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.icon} {cat.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      Describe Your Issue
                    </label>
                    <textarea
                      value={issueText}
                      onChange={(e) => setIssueText(e.target.value)}
                      rows={6}
                      className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 focus:outline-none resize-none bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all"
                      placeholder="Please provide detailed information about the issue you're experiencing..."
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {issueText.length}/500 characters
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle
                        className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send size={20} />
                    Submit Report
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* My Reports Tab */}
        {activeTab === "myReports" && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6">
              <h2 className="text-2xl font-bold text-white mb-1">My Reports</h2>
              <p className="text-emerald-50">
                Track the status of your submissions
              </p>
            </div>

            <div className="p-6">
              {loadingReports ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
                </div>
              ) : myReports.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <FileText
                      className="text-gray-400 dark:text-gray-500"
                      size={36}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No Reports Yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    You haven't submitted any reports
                  </p>
                  <button
                    onClick={() => setActiveTab("submit")}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Submit Your First Report
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {myReports.map((report) => (
                    <div
                      key={report._id}
                      className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-2.5 text-2xl border border-gray-200 dark:border-gray-700">
                            {getCategoryIcon(report.type)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 dark:text-gray-200 capitalize">
                              {report.type} Issue
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(report.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(report.status)}
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3 border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {report.reportText}
                        </p>
                      </div>

                      {report.adminNote && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                          <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">
                            Admin Response:
                          </p>
                          <p className="text-sm text-blue-900 dark:text-blue-300">
                            {report.adminNote}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
