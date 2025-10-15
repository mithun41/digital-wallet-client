import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QrCode from "./qr_code/Qr_code";
import { DollarSign, PlusCircle, Wallet, Smartphone, Zap } from "lucide-react";

const QrCodeDisplay = ({ actionName, actionLink }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <div className="bg-white rounded-lg shadow-inner">
      <div className=" bg-gray-800 flex items-center justify-center rounded">
        <QrCode className="w-16 h-16 text-white" actionLink={actionLink} actionName={actionName} />
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
    link: 'dashboard/cashOut'
  },
  {
    id: "add-money",
    name: "Add Money",
    description: "Add money to your wallet securely and instantly.",
    icon: PlusCircle,
    color: "from-blue-500 to-cyan-600",
    link: 'dashboard/cashOut'
  },
  {
    id: "cash-out",
    name: "Cash Out",
    description: "Withdraw money from your wallet to your bank.",
    icon: Wallet,
    color: "from-purple-500 to-indigo-600",
    link: 'dashboard/cashOut'
  },
  {
    id: "mobile-recharge",
    name: "Mobile Recharge",
    description: "Recharge your mobile balance quickly.",
    icon: Smartphone,
    color: "from-orange-500 to-red-600",
    link: 'dashboard/cashOut'
  },
  {
    id: "electricity-bill",
    name: "Electricity Bill",
    description: "Pay your electricity bill in just a few clicks.",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    link: 'dashboard/cashOut'
  },
];

const OurShortCard = () => {
  const [activeAction, setActiveAction] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleQRCode = (id) => {
    setActiveAction((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-11/12 mx-auto py-12 px-4">
      <div>
        {/* Title */}
        <h1 className="text-green-500 text-4xl md:text-4xl font-bold text-center">
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
                data-aos-delay={index * 100}
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700`}
                  style={{ minHeight: "330px" }}
                >
                  {/* Green Header Bar */}
                  <div className="bg-green-500 h-2 w-full"></div>

                  <div className=" pt-2 px-5 transition-all duration-300 h-full flex flex-col justify-between">
                    {isActive ? (
                      <QrCodeDisplay actionName={action.name} actionLink={action.link} />
                    ) : (
                      <>
                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
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
                      ? "bg-gray-600 hover:bg-gray-700 text-white"
                      : "bg-green-500 text-white hover:bg-green-600 hover:shadow-xl hover:scale-105"
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

