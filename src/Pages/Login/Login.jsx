import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Wallet,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Smartphone,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../../redux/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ phone: "", pin: "" });
  const [showPin, setShowPin] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin" && !/^\d{0,4}$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        navigate("/"); // login successful -> home
      })
      .catch(() => {});
  };

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit encryption protects your data",
    },
    {
      icon: Smartphone,
      title: "Instant Transfers",
      description: "Send money in seconds, not days",
    },
    {
      icon: CreditCard,
      title: "Multi-Card Support",
      description: "Manage all your cards in one place",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Logo & Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Welcome to <span className="text-indigo-600">Pay</span>
              <span className="text-purple-600">Mate</span>
            </h2>
            <p className="text-gray-600">Sign in with your phone & PIN</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+880 1XXXXXXXXX"
                  required
                  className="block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
                />
              </div>
            </div>

            {/* PIN */}
            <div>
              <label className="block text-sm font-medium mb-2">
                4-Digit PIN
              </label>
              <div className="relative">
                <input
                  name="pin"
                  type={showPin ? "text" : "password"}
                  value={formData.pin}
                  onChange={handleInputChange}
                  placeholder="••••"
                  required
                  className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                "Signing in..."
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </button>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            {/* Register Link */}
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-base-100 border border-green-200 rounded-xl flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm text-green-800 font-medium">Secure Login</p>
              <p className="text-xs text-green-700 mt-1">
                Your connection is encrypted and protected by advanced security
                measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-purple-700 items-center justify-center ">
        <div className="max-w-lg text-white">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
              The Future of Digital Payments
            </h1>
            <p className="text-indigo-200 text-lg leading-relaxed">
              Experience seamless transactions, secure payments, and complete
              financial control with PayMate.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-indigo-200">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10M+</div>
              <div className="text-indigo-200 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-indigo-200 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$50B+</div>
              <div className="text-indigo-200 text-sm">Processed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
