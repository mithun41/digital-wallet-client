import React from "react";

const AdminReports = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Download daily or monthly transaction reports in CSV or PDF.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Download CSV
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default AdminReports;
