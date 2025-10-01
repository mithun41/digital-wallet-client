import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Smartphone,
  CreditCard,
  Building2,
  Shield,
  Info,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/features/authSlice";
import axios from "axios";

const methods = [
  {
    id: "bank",
    name: "Bank Account",
    icon: <Building2 className="w-6 h-6" />,
    description: "Add money from your bank account",
    fee: "Free",
  },
  {
    id: "card",
    name: "Debit/Credit Card",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Add money using your card",
    fee: "1.85%",
  },
  {
    id: "agent",
    name: "bKash Agent",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Visit nearby bKash agent point",
    fee: "Free",
  },
];

const AddMoney = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  // console.log(user);

  useEffect(() => {
    if(!user){
      dispatch(fetchUser())
    }
  }, [dispatch, user]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/update-profile")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log(amount);
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      amount: 0,
      paymentMethod: null,
    },
  });

  useEffect(() => {
    setValue("amount", Number(amount));
  }, [amount, setValue]);

  useEffect(() => {
    setValue("paymentMethod", selectedMethod);
  }, [selectedMethod, setValue]);

  const onSubmit = (data) => {
    data.userName = user.name;
    data.userPhoneNumber = user.phone;
    data.userPhoto = user.photo;
    data.addTime = new Date();
    console.log(data);
    axios
      .post("http://localhost:5000/add_money", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(user.phone);

    axios
      .put(
        `http://localhost:5000/api/singleUser/?phone=${encodeURIComponent(
          user.phone
        )}`,
        data
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleAddMoney = () => {
  //   if (!selectedMethod || !amount) return;

  //   setIsProcessing(true);
  //   setTimeout(() => {
  //     setIsProcessing(false);
  //     alert(
  //       `Successfully initiated add money of ৳${amount} via ${
  //         methods.find((m) => m.id === selectedMethod)?.name
  //       }`
  //     );
  //   }, 2000);
  // };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-6 h-6 cursor-pointer hover:bg-white/20 rounded p-1" />
          <h1 className="text-xl font-bold">Add Money</h1>
        </div>
        <p className="text-pink-100 text-sm mt-1">
          Add money to your bKash wallet
        </p>
      </div>

      {/* Balance Display */}
      <div className="mx-4 -mt-4 relative">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
          <div className="text-center">
            <p className="text-gray-600 text-sm">Current Balance</p>
            <p className="text-3xl font-bold text-pink-600 mt-2">
              {user?.balance}
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-xs text-green-600">Verified Account</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Amount Input */}
        <div className="p-4 mt-6">
          <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-pink-100">
            <label className="block text-gray-700 font-medium mb-3">
              Enter Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-600 font-bold text-xl">
                ৳
              </span>
              <input
                type="number"
                {...register("amount")}
                placeholder="0"
                className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-center border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                min="10"
                max="25000"
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-500">Min: ৳10</span>
              <span className="text-sm text-gray-500">Max: ৳25,000</span>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[100, 500, 1000, 2000].map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(quickAmount)}
                  className="py-2 px-3 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg text-sm font-medium transition-colors"
                >
                  ৳{quickAmount}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Select Payment Method
          </h3>
          <div className="space-y-3">
            {methods.map((method) => (
              <label
                key={method.id}
                className={`block bg-white rounded-xl p-4 shadow-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                  selectedMethod === method.id
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 hover:border-pink-300"
                }`}
              >
                <input
                  type="radio"
                  value={method.id}
                  {...register("paymentMethod", { required: true })}
                  className="hidden"
                  onChange={() => setSelectedMethod(method.id)}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        selectedMethod === method.id
                          ? "bg-pink-100 text-pink-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {method.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-600">
                      Fee: {method.fee}
                    </p>
                    <div
                      className={`w-5 h-5 rounded-full border-2 mt-2 ${
                        selectedMethod === method.id
                          ? "bg-pink-500 border-pink-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="mx-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Security Notice:</span> Your
                  transaction is protected with bank-level security. Money will
                  be added instantly to your bKash wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button
            type="submit"
            // onClick={handleAddMoney}
            disabled={!selectedMethod || !amount || amount < 10 || isProcessing}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              !selectedMethod || !amount || amount < 10 || isProcessing
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              `Add Money ${amount ? `৳${amount}` : ""}`
            )}
          </button>

          {selectedMethod && amount && (
            <div className="text-center mt-2">
              <p className="text-sm text-gray-500">
                Fee: {methods.find((m) => m.id === selectedMethod)?.fee} •
                Total: ৳
                {selectedMethod === "card"
                  ? (parseFloat(amount || 0) * 1.0185).toFixed(2)
                  : amount || 0}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddMoney;
