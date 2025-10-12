import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // assuming token is stored in localStorage
      const res = await axios.get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data || []);
      console.log(res.data);
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
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  // Block/Unblock user
  const handleStatusChange = async (userId, status) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:5000/api/admin/users/${userId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Swal.fire("Success", `User ${status} successfully`, "success");
      fetchUsers(); // refresh list
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
      input: "password", // hides the PIN like a password
      inputLabel: "Enter new 4-digit PIN",
      inputPlaceholder: "****",
      inputAttributes: {
        maxlength: 4,
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
    });

    if (!newPin) return; // cancel clicked

    // Optional: validate 4-digit numeric PIN
    if (!/^\d{4}$/.test(newPin)) {
      Swal.fire("Error", "PIN must be exactly 4 digits", "error");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/admin/users/${userId}/reset-pin`,
        { newPin },
        { headers: { Authorization: `Bearer ${token}` } }
      );
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

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Balance</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t dark:border-gray-700">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.phone}</td>
              <td className="p-3">${u.balance}</td>
              <td className="p-3">{u.status}</td>
              <td className="p-3 flex gap-2">
                {u.status !== "Blocked" && (
                  <button
                    onClick={() => handleStatusChange(u._id, "Blocked")}
                    className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Block
                  </button>
                )}
                {u.status === "Blocked" && (
                  <button
                    onClick={() => handleStatusChange(u._id, "Active")}
                    className="px-2 py-1 bg-green-500 text-white rounded text-sm"
                  >
                    Unblock
                  </button>
                )}
                <button
                  onClick={() => handleResetPin(u._id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded text-sm"
                >
                  Reset PIN
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
