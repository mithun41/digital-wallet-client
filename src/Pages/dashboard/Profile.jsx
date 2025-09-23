import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);
  console.log(user);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-gray-500">
        <p>No user data found. Please log in again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.photo || "https://via.placeholder.com/150"}
          alt="User Profile"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-lg text-gray-600">{user.phone}</p>
        <p className="text-lg text-gray-600">
          Balance: {user.balance} {user.currency}
        </p>
        <p className="text-lg text-gray-600">Status: {user.status}</p>

        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Change Pin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
