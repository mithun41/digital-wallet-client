import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Wallet, User, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "+880",
    pin: "",
  });
  const [showPin, setShowPin] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // 🔹 Random OTP state
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  // 🔹 Phone error state
  const [phoneError, setPhoneError] = useState("");
  const phoneRegex = /^\+8801[3-9]\d{8}$/;

  // 🔹 Input handler
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

  // 🔹 Generate random 4-digit OTP and show via SweetAlert
  const handleSendOtp = () => {
    if (!formData.phone) {
      return Swal.fire("Invalid Phone", "Enter your phone number", "warning");
    }

    if (!phoneRegex.test(formData.phone)) {
      return Swal.fire(
        "Invalid Phone",
        "Please enter a valid Bangladeshi number",
        "error"
      );
    }

    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    setOtpSent(true);

    Swal.fire("OTP Sent", `Your OTP code is: <b>${otpCode}</b>`, "info");
  };

  // 🔹 Verify OTP + Register
  const handleVerifyOtpAndRegister = async () => {
    if (!otp || otp !== generatedOtp) {
      return Swal.fire("Invalid OTP", "Enter correct OTP", "error");
    }

    if (!formData.name || !formData.phone || !formData.pin) {
      return Swal.fire(
        "All fields required",
        "Please fill all fields",
        "warning"
      );
    }

    try {
      await dispatch(registerUser(formData)).unwrap();
      Swal.fire("Success", "Account created successfully!", "success").then(
        () => navigate("/")
      );
    } catch (err) {
      Swal.fire("Failed", err.message || "Registration failed", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex justify-center items-center px-4">
      <div className="relative max-w-md w-full p-8 bg-white rounded-3xl shadow-xl space-y-6">
        {/* Logo & Heading */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Join <span className="text-indigo-600">Pay</span>
            <span className="text-purple-600">Mate</span>
          </h2>
          <p className="text-gray-600">Create your secure wallet account</p>
        </div>

        {/* Form Fields */}
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

                  if (!value.startsWith("+880")) {
                    value = "+880" + value.replace(/^\+?880?/, "");
                  }

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
          {!otpSent && (
            <button
              onClick={handleSendOtp}
              className="w-full py-3 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all"
            >
              Send OTP
            </button>
          )}
          {otpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP
              </label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1234"
                className="block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

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
              <a href="#" className="text-indigo-600">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600">
                Privacy Policy
              </a>
            </label>
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          {/* Submit Button */}
          {otpSent && (
            <button
              onClick={handleVerifyOtpAndRegister}
              disabled={loading || !acceptTerms}
              className="w-full py-3 mt-4 text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-all shadow-lg"
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
