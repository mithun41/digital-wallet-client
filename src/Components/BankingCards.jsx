import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BankingCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      id: 1,
      title: "Smart Digital Banking for Modern Life",
      desc: "Manage your money, pay bills, and transfer funds instantly — all from one secure, easy-to-use digital platform.",
      img: "https://i.postimg.cc/qqjdc9pB/Screenshot-2.png",
    },
    {
      id: 2,
      title: "Seamless Transactions Anytime, Anywhere",
      desc: "Experience borderless payments and instant transfers with our next-generation digital wallet system.",
      img: "https://i.ibb.co/3rx1yjt/image2.jpg",
    },
    {
      id: 3,
      title: "Your Financial Control Center",
      desc: "Track expenses, monitor income, and manage savings — your entire financial world in one dashboard.",
      img: "https://i.postimg.cc/W1q78vTH/Screenshot-1.png",
    },
    {
      id: 4,
      title: "Secure and Reliable Wallet System",
      desc: "We use multi-layer encryption to ensure your digital transactions are safe and your personal data stays protected.",
      img: "https://i.postimg.cc/0N60tqvZ/Screenshot-3.png",
    },
  ];

  return (
    <div className="mt-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-10" data-aos="zoom-in">
        <h1 className="text-4xl md:text-4xl font-bold text-green-400">
          Latest News & Events
        </h1>
        <p className="max-w-11/12 mx-auto mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Stay updated with the latest features, offers, and announcements from
          our smart digital banking platform.
        </p>
      </div>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-11/12 mx-auto">
        {/* Left Column (takes 3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="md:col-span-2 flex flex-col md:flex-row border border-green-500/40 rounded-2xl overflow-hidden  shadow-sm hover:shadow-lg transition-all"
              data-aos="flip-up"
            >
              <div className="overflow-hidden group md:w-1/2">
                <img
                  src={cards[0].img}
                  alt="card"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300">
                  {cards[0].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{cards[0].desc}</p>
                
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="border border-green-500/40 rounded-2xl overflow-hidden p-6 e shadow-sm hover:shadow-lg transition-all"
              data-aos="flip-up"
            >
              <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300">
                {cards[3].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{cards[3].desc}</p>
             
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="flex flex-col md:flex-row border border-green-500/40 rounded-2xl overflow-hidden  shadow-sm hover:shadow-lg transition-all"
            data-aos="flip-up"
          >
            <div className="overflow-hidden group md:w-1/2">
              <img
                src={cards[3].img}
                alt="card"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300">
                {cards[1].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{cards[1].desc}</p>
              
            </div>
          </div>
        </div>

        {/* Right Column (takes 1 column) */}
        <div
          className="border border-green-500/40 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all"
          data-aos="flip-up"
        >
          <div className="overflow-hidden">
            <img
              src={cards[2].img}
              alt="card"
              className="w-full h-60 md:h-80 lg:h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300">
              {cards[2].title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{cards[2].desc}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingCards;
