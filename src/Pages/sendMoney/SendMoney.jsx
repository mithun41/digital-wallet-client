import axios from "axios";
import { useForm } from "react-hook-form";

const SendMoney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://digital-wallet-server-tau.vercel.app/api/send-many",
      data
    );
    console.log(response.data);
    alert(
      `Data sent successfully. Inserted count: ${response.data.insertedCount}`
    );
    // console.log("Send Money Data:", data);
    // alert(`Successfully sent ${data.amount} BDT to ${data.receiverId}`);
  };
  // console.log(onSubmit)

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-20">
      <h2 className="text-xl font-semibold mb-4">Send Money</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Receiver ID */}
        <div>
          <label className="block text-sm font-medium mb-1">Receiver ID</label>
          <input
            type="text"
            {...register("receiverId", { required: "Receiver ID is required" })}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-green-300"
            placeholder="Enter receiver ID"
          />
          {errors.receiverId && (
            <p className="text-red-500 text-sm">{errors.receiverId.message}</p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 10, message: "Minimum amount is 10" },
            })}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-green-300"
            placeholder="Enter amount"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm">{errors.amount.message}</p>
          )}
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Note (optional)
          </label>
          <input
            type="text"
            {...register("note")}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-green-300"
            placeholder="Write a note..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#155efcde] text-white py-2 rounded-lg hover:bg-[#155efc] cursor-pointer transition"
        >
          Send Money
        </button>
      </form>
    </div>
  );
};

export default SendMoney;
