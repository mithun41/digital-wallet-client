import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import QrCode from "./qr_code/Qr_code";
import { DollarSign, PlusCircle, Wallet, Smartphone, Zap } from "lucide-react";

const QrCodeDisplay = ({ actionName }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center p-4"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <div className="bg-white p-4 rounded-lg shadow-inner">
      <div className="w-32 h-32 bg-gray-800 flex items-center justify-center rounded">
        <QrCode className="w-16 h-16 text-white" />
      </div>
    </div>
    <p className="text-sm font-semibold mt-3 text-gray-700 dark:text-gray-300">
      {actionName}
    </p>
  </div>
);

const actions = [
  {
    id: "send-money",
    name: "Send Money",
    description: "Quickly send money to any user using QR code.",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "add-money",
    name: "Add Money",
    description: "Add money to your wallet securely and instantly.",
    icon: PlusCircle,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "cash-out",
    name: "Cash Out",
    description: "Withdraw money from your wallet to your bank.",
    icon: Wallet,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "mobile-recharge",
    name: "Mobile Recharge",
    description: "Recharge your mobile balance quickly.",
    icon: Smartphone,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "electricity-bill",
    name: "Electricity Bill",
    description: "Pay your electricity bill in just a few clicks.",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
  },
];

const OurShortCard = () => {
  const [activeAction, setActiveAction] = useState(null);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleQRCode = (id) => {
    setActiveAction((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-4xl md:text-5xl text-center font-extrabold mb-4"
          data-aos="fade-up"
        >
          Short-Card Method
        </h1>
        <p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Fast, secure, and convenient payment solutions
        </p>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const isActive = activeAction === action.id;

            return (
              <div
                key={action.id}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Staggered animation
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700`}
                  style={{ minHeight: "330px" }}
                >
                  {/* Gradient Header */}
                  <div
                    className={`bg-gradient-to-r ${action.color} h-2 w-full`}
                  ></div>

                  <div className="p-6 transition-all duration-300 h-full flex flex-col justify-between">
                    {isActive ? (
                      <QrCodeDisplay actionName={action.name} />
                    ) : (
                      <>
                        {/* Icon */}
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {action.name}
                          </h2>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {action.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => toggleQRCode(action.id)}
                  className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 whitespace-nowrap text-sm ${
                    isActive
                      ? "bg-gray-600 hover:bg-gray-700 text-white hover:shadow-xl"
                      : `bg-gradient-to-r ${action.color} text-white hover:shadow-xl hover:scale-105`
                  }`}
                >
                  {isActive ? "Hide QR" : "Show QR"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurShortCard;



// import React, { useState } from "react";
// import QrCode from "./qr_code/Qr_code";
// import { FaMoneyBillWave, FaPlusCircle, FaWallet, FaMobileAlt, FaBolt } from "react-icons/fa";

// const actions = [
//   { id: "send-money", name: "Send Money", description: "Quickly send money to any user using QR code.", icon: FaMoneyBillWave },
//   { id: "add-money", name: "Add Money", description: "Add money to your wallet securely and instantly.", icon: FaPlusCircle },
//   { id: "cash-out", name: "Cash Out", description: "Withdraw money from your wallet to your bank.", icon: FaWallet },
//   { id: "mobile-recharge", name: "Mobile Recharge", description: "Recharge your mobile balance quickly.", icon: FaMobileAlt },
//   { id: "electricity-bill", name: "Electricity Bill", description: "Pay your electricity bill in just a few clicks.", icon: FaBolt },
// ];

// const OurShortCard = () => {
//   const [activeAction, setActiveAction] = useState([]);

//   const toggleQRCode = (id) => {
//     if(activeAction.includes(id)){
//         setActiveAction(activeAction.filter(a => a !== id))
//     }else{
//         setActiveAction([...activeAction, id])
//     }
//   }


//   return (
//     <div>
//         <h1 className="text-green-800 dark:text-green-500 text-3xl text-center font-bold mt-10">Short-Card Method</h1>
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10 p-4">
//       {actions.map((action) => {
//         const Icon = action.icon;
//         const isActive = activeAction.includes(action.id);

//         return (
//           <div
//             key={action.id}
//             className={`relative bg-gray-200 dark:bg-gray-800 shadow-2xl rounded-xl ${isActive ? 'pt-1 pb-5 px-1' : 'pt-8 pb-16 px-6'} flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl`}
//           >
            

//             {isActive ? (
//               <QrCode action={action.id} actionName={action.name} />
//             ) : (
//               <>
//               <Icon className="text-4xl text-green-600 dark:text-green-400 mb-4" />
//                 <h1 className="text-green-600 dark:text-green-400 text-2xl font-bold">{action.name}</h1>
//                 <p className="text-black dark:text-white mt-2">{action.description}</p>
//               </>
//             )}

//             <button
//               onClick={() => toggleQRCode(action.id)}
//               className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded w-fit font-semibold transition-colors ${
//                 isActive
//                   ? "bg-gray-500 hover:bg-gray-600 text-white"
//                   : "bg-blue-500 hover:bg-blue-600 text-white"
//               }`}
//             >
//               {isActive ? "Hide QR Code" : "Show QR Code"}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   );
// };

// export default OurShortCard;
