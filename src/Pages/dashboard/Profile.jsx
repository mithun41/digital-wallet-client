import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Pencil, Check, X, Lock, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { fetchUser, resetPinUser } from "../../redux/features/authSlice";


const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef();
  console.log(user);

  // Change PIN state
  const [showChangePin, setShowChangePin] = useState(false);
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [showOldPin, setShowOldPin] = useState(false);
  const [showNewPin, setShowNewPin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [pinLoading, setPinLoading] = useState(false);
useEffect(() => {
  if (error) {
    Swal.fire("Error", error, "error");
  }
}, [error]);
  useEffect(() => {

    if (!user) {
      dispatch(fetchUser());
    } else {
      setNameInput(user.name || "");
      setPhotoPreview(user.photo || "");
    }
  }, [dispatch, user]);

  
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
console.log(localStorage.getItem("token"));

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

  // ------------------- Change PIN Handlers -------------------
  const phoneRegex = /^\+8801[3-9]\d{8}$/;
  const handleSendOtp = () => {
    if (!phoneRegex.test(user.phone)) {
      return Swal.fire(
        "Invalid Phone",
        "Your phone number is not valid",
        "error"
      );
    }
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    setOtpSent(true);
    Swal.fire("OTP Sent!", `Your OTP is: <b>${otpCode}</b>`, "info");
  };

 const handleChangePin = async (e) => {
  e.preventDefault();

  if (!otpSent) return Swal.fire("OTP Not Sent", "Please generate OTP first", "error");
  if (!otp) return Swal.fire("OTP Required", "Please enter the OTP", "error");
  if (otp !== generatedOtp) return Swal.fire("Invalid OTP", "Please enter the correct OTP", "error");
  if (!oldPin || !newPin) return Swal.fire("Error", "Both Old PIN and New PIN are required", "error");

  const token = localStorage.getItem("token");
  if (!token) return Swal.fire("Unauthorized", "Please login again", "error");

  dispatch(resetPinUser({ phone: user.phone, oldPin, newPin, token }))
    .unwrap()
    .then(() => {
      Swal.fire("Success", "PIN updated successfully!", "success");
      setOldPin("");
      setNewPin("");
      setOtp("");
      setOtpSent(false);
      setShowChangePin(false);
    })
    .catch((err) => {
      Swal.fire("Error", err.message || "Failed to update PIN", "error");
    });
};





  return (
    <div className="min-h-screen flex justify-center bg-white items-start py-12">
      <div className="w-full max-w-3xl rounded-3xl p-8 relative">
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
                <h2 className="text-2xl font-bold text-gray-800">{nameInput}</h2>
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

          {/* Change PIN Button */}
          {!showChangePin && (
            <button
              onClick={() => setShowChangePin(true)}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow-md transition-all"
            >
              Change PIN
            </button>
          )}

          {/* Change PIN Form */}
          {showChangePin && (
            <form
              className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-inner space-y-4 w-full max-w-md"
              onSubmit={handleChangePin}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Change PIN
              </h3>

              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full py-2 text-white font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  Send OTP
                </button>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP
                  </label>
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="1234"
                    className="block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Old PIN
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showOldPin ? "text" : "password"}
                    value={oldPin}
                    onChange={(e) => setOldPin(e.target.value)}
                    placeholder="••••"
                    maxLength={4}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPin(!showOldPin)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showOldPin ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New PIN
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showNewPin ? "text" : "password"}
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    placeholder="••••"
                    maxLength={4}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPin(!showNewPin)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showNewPin ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowChangePin(false)}
                  className="cursor-pointer text-indigo-600 hover:underline"
                >
                  Cancel
                </button>
                <button
  type="submit"
  className="py-3 px-6 cursor-pointer text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-md"
>
  Change PIN
</button>


              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
