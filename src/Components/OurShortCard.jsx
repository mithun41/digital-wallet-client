import React, { useState } from "react";
import QrCode from "./qr_code/Qr_code";
import { FaMoneyBillWave, FaPlusCircle, FaWallet, FaMobileAlt, FaBolt } from "react-icons/fa";

const actions = [
  { id: "send-money", name: "Send Money", description: "Quickly send money to any user using QR code.", icon: FaMoneyBillWave },
  { id: "add-money", name: "Add Money", description: "Add money to your wallet securely and instantly.", icon: FaPlusCircle },
  { id: "cash-out", name: "Cash Out", description: "Withdraw money from your wallet to your bank.", icon: FaWallet },
  { id: "mobile-recharge", name: "Mobile Recharge", description: "Recharge your mobile balance quickly.", icon: FaMobileAlt },
  { id: "electricity-bill", name: "Electricity Bill", description: "Pay your electricity bill in just a few clicks.", icon: FaBolt },
];

const OurShortCard = () => {
  const [activeAction, setActiveAction] = useState([]);

  const toggleQRCode = (id) => {
    if(activeAction.includes(id)){
        setActiveAction(activeAction.filter(a => a !== id))
    }else{
        setActiveAction([...activeAction, id])
    }
  }

  return (
    <div>
        <h1 className="text-green-800 dark:text-green-500 text-3xl text-center font-bold mt-10">Short-Card Method</h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10 p-4">
      {actions.map((action) => {
        const Icon = action.icon;
        const isActive = activeAction.includes(action.id);

        return (
          <div
            key={action.id}
            className={`relative bg-gray-200 dark:bg-gray-800 shadow-2xl rounded-xl ${isActive ? 'pt-1 pb-5 px-1' : 'pt-8 pb-16 px-6'} flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            

            {isActive ? (
              <QrCode action={action.id} actionName={action.name} />
            ) : (
              <>
              <Icon className="text-4xl text-green-600 dark:text-green-400 mb-4" />
                <h1 className="text-green-600 dark:text-green-400 text-2xl font-bold">{action.name}</h1>
                <p className="text-black dark:text-white mt-2">{action.description}</p>
              </>
            )}

            <button
              onClick={() => toggleQRCode(action.id)}
              className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded w-fit font-semibold transition-colors ${
                isActive
                  ? "bg-gray-500 hover:bg-gray-600 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {isActive ? "Hide QR Code" : "Show QR Code"}
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default OurShortCard;
