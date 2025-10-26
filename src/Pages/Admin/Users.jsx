import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosSecure from "../../axiosSecure/useAxiosSecure";
import { Search } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axiosSecure.get("/api/admin/users");
      const data = Array.isArray(res.data) ? res.data : res.data.users || [];
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to fetch users",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Search by phone
  useEffect(() => {
    const filtered = users.filter((u) =>
      u.phone.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  // Block/Unblock user
  const handleStatusChange = async (userId, status) => {
    try {
      await axiosSecure.patch(`/api/admin/users/${userId}/status`, { status });
      Swal.fire("Success", `User ${status} successfully`, "success");
      fetchUsers();
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Action failed",
        "error"
      );
    }
  };

  // Reset user PIN
  const handleResetPin = async (userId) => {
    const { value: newPin } = await Swal.fire({
      title: "Reset User PIN",
      input: "password",
      inputLabel: "Enter new 4-digit PIN",
      inputPlaceholder: "****",
      inputAttributes: {
        maxlength: 4,
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
    });

    if (!newPin) return;

    if (!/^\d{4}$/.test(newPin)) {
      Swal.fire("Error", "PIN must be exactly 4 digits", "error");
      return;
    }

    try {
      await axiosSecure.post(`/api/admin/users/${userId}/reset-pin`, {
        newPin,
      });
      Swal.fire("Success", "User PIN reset successfully", "success");
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to reset PIN",
        "error"
      );
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-600 dark:text-gray-300">
        Loading users...
      </div>
    );

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">All Users</h2>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by phone number..."
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
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Balance</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <tr
                  key={u._id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.phone}</td>
                  <td className="p-3 font-semibold">৳{u.balance}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        u.status === "Blocked"
                          ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                          : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3 flex flex-wrap gap-2">
                    {u.status !== "Blocked" ? (
                      <button
                        onClick={() => handleStatusChange(u._id, "Blocked")}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusChange(u._id, "Active")}
                        className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition"
                      >
                        Unblock
                      </button>
                    )}
                    <button
                      onClick={() => handleResetPin(u._id)}
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                    >
                      Reset PIN
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
