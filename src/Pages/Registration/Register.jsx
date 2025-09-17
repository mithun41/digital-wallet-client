import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Wallet,
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pin: "",
  });

  const [showPin, setShowPin] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin" && !/^\d{0,4}$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!acceptTerms) return alert("Please accept terms");
    if (formData.pin.length !== 4) return alert("PIN must be 4 digits");

    try {
      await dispatch(registerUser(formData)).unwrap();
      navigate("/"); // ✅ success হলে home এ redirect
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Join <span className="text-indigo-600">Pay</span>
              <span className="text-purple-600">Mate</span>
            </h2>
            <p className="text-gray-600">
              Create your secure digital wallet account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+880 1XXXXXXXXX"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* PIN */}
            <div>
              <label
                htmlFor="pin"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                4-Digit PIN
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="pin"
                  name="pin"
                  type={showPin ? "text" : "password"}
                  required
                  value={formData.pin}
                  onChange={handleInputChange}
                  placeholder="••••"
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPin ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                id="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
              />
              <label
                htmlFor="accept-terms"
                className="ml-3 text-sm text-gray-700"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading || !acceptTerms}
              className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
