import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import {
  Wallet,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pin: "",
    balance: 0.0,
    currency: "BDT",
    transactions: [],
    isVerified: true,
    role: "user",
    status: "active",
  });

  const [showPin, setShowPin] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [preview, setPreview] = useState(null); // 🔹 Photo preview

  // OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const phoneRegex = /^\+8801[3-9]\d{8}$/;
  const [phoneError, setPhoneError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin" && !/^\d{0,4}$/.test(value)) return;

    if (name === "phone") {
      setPhoneError(
        phoneRegex.test(value) ? "" : "Invalid Bangladeshi phone number"
      );
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = () => {
    if (!phoneRegex.test(formData.phone)) {
      return Swal.fire(
        "Invalid Phone",
        "Enter a valid Bangladeshi number",
        "error"
      );
    }
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    setOtpSent(true);
    Swal.fire("OTP Sent!", `Your OTP is: <b>${otpCode}</b>`, "info");
  };

  const uploadImageToImgBB = async (file) => {
    const imageData = new FormData();
    imageData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
      {
        method: "POST",
        body: imageData,
      }
    );
    const data = await res.json();
    if (!data.success) throw new Error("Image upload failed");
    return data.data.url;
  };

  const handleVerifyOtpAndRegister = async () => {
    if (otp !== generatedOtp)
      return Swal.fire("Invalid OTP", "Enter correct OTP", "error");
    if (!formData.name || !formData.phone || !formData.pin || !formData.photo) {
      return Swal.fire(
        "All fields required",
        "Please fill all fields",
        "warning"
      );
    }

    try {
      const photoUrl = await uploadImageToImgBB(formData.photo);
      const userData = { ...formData, photo: photoUrl };
      await dispatch(registerUser(userData)).unwrap();
      Swal.fire("Success", "Account created successfully!", "success").then(
        () => navigate("/")
      );
    } catch (err) {
      Swal.fire("Failed", err.message || "Registration failed", "error");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center px-4 py-10">
      <div className="relative max-w-md w-full p-8 bg-base-100 rounded-3xl shadow-2xl space-y-6 border border-gray-100">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-1">
            Join <span className="text-indigo-600">Pay</span>
            <span className="text-purple-600">Mate</span>
          </h2>
          <p className="text-gray-600">Create your secure wallet account</p>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  let value = e.target.value;
                  if (!value.startsWith("+880"))
                    value = "+880" + value.replace(/^\+?880?/, "");
                  setFormData((prev) => ({ ...prev, phone: value }));
                }}
                placeholder="+8801XXXXXXXXX"
                disabled={otpSent}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          {/* OTP */}
          {!otpSent ? (
            <button
              onClick={handleSendOtp}
              className="w-full py-3 text-white font-medium bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-md"
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

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Photo
            </label>
            <div className="flex items-center gap-4">
              {/* Preview */}
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 border-2 border-dashed border-gray-300">
                  <ImageIcon className="w-8 h-8" />
                </div>
              )}

              {/* File Input */}
              <label className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
                Choose Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFormData((prev) => ({ ...prev, photo: file }));
                    if (file) setPreview(URL.createObjectURL(file));
                  }}
                />
              </label>
            </div>
          </div>

          {/* PIN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              4-Digit PIN
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                name="pin"
                type={showPin ? "text" : "password"}
                value={formData.pin}
                onChange={handleInputChange}
                placeholder="••••"
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
            />
            <label className="ml-3 text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          {/* Submit */}
          {otpSent && (
            <button
              onClick={handleVerifyOtpAndRegister}
              disabled={loading || !acceptTerms}
              className="w-full py-3 mt-4 text-white font-medium bg-purple-600 rounded-xl hover:bg-purple-700 transition-all shadow-md disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Verify OTP & Register"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
