import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Pencil, Check, X } from "lucide-react";
import axios from "axios";
import { fetchUser } from "../../redux/features/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    } else {
      setNameInput(user.name || "");
      setPhotoPreview(user.photo || "");
    }
  }, [dispatch, user]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!user)
    return (
      <p className="text-center mt-20 text-gray-500">No user data found.</p>
    );

  const triggerFileInput = () => fileInputRef.current.click();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateName = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "https://digital-wallet-server-tau.vercel.app/api/update-profile",
        { name: nameInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Swal.fire("Success", "Name updated successfully!", "success");
      setEditingName(false);
      dispatch(fetchUser());
    } catch (err) {
      Swal.fire("Error", err.message || "Failed to update name", "error");
    }
  };

  const handleUpdatePhoto = async () => {
    if (!photoFile) return Swal.fire("Info", "Choose a photo first", "info");

    try {
      const formData = new FormData();
      formData.append("image", photoFile);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
        { method: "POST", body: formData }
      );
      const data = await res.json();
      if (!data.success) throw new Error("Image upload failed");

      const token = localStorage.getItem("token");
      await axios.put(
        "https://digital-wallet-server-tau.vercel.app/api/update-profile",
        { photo: data.data.url },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Swal.fire("Success", "Profile photo updated!", "success");
      setPhotoFile(null);
      dispatch(fetchUser());
    } catch (err) {
      Swal.fire("Error", err.message || "Photo update failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-12 bg-gradient-to-r from-purple-100 via-indigo-100 to-pink-100">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 relative">
        {/* Photo */}
        <div className="flex flex-col items-center relative">
          <div className="relative w-36 h-36">
            <img
              src={photoPreview || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-36 h-36 rounded-full border-4 border-indigo-400 object-cover shadow-lg"
            />
            <div
              className="absolute bottom-2 right-2 bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
              onClick={triggerFileInput}
            >
              <Pencil className="w-5 h-5 text-white" />
            </div>
            {photoFile && (
              <button
                onClick={handleUpdatePhoto}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-500 hover:bg-green-600 px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all mt-2"
              >
                Save Photo
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          {/* Name */}
          <div className="mt-4 flex items-center space-x-2">
            {editingName ? (
              <>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="border px-3 py-2 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                />
                <button
                  onClick={handleUpdateName}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-all shadow-md"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setEditingName(false);
                    setNameInput(user.name);
                  }}
                  className="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded-lg transition-all shadow-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800">
                  {nameInput}
                </h2>
                <button
                  onClick={() => setEditingName(true)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-all shadow-md"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Phone */}
          <p className="text-gray-600 mt-2 text-lg">{user.phone}</p>
          {/* Balance & Status */}
          <div className="mt-3 flex flex-wrap justify-center gap-6">
            <div className="bg-indigo-50 px-4 py-2 rounded-xl shadow-sm text-gray-700 font-medium">
              Balance: {user.balance} {user.currency}
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-xl shadow-sm text-gray-700 font-medium">
              Status: {user.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
