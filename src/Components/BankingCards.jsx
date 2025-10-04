import React from "react";

const cards = [
  {
    id: 1,
    title: "Online Banking For Small Businesses",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: "https://i.ibb.co.com/9Wm6G5Q/card1.jpg",
  },
  {
    id: 2,
    title: "Online Banking For Small Businesses",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: "https://i.ibb.co.com/ncjK2DY/card2.jpg",
  },
  {
    id: 3,
    title: "Online Banking For Small Businesses",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: "https://i.ibb.co.com/CM0PcRr/card3.jpg",
  },
  {
    id: 4,
    title: "Online Banking For Small Businesses",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: "https://i.ibb.co.com/68d1v3C/card4.jpg",
  },
];

const BankingCards = () => {
  return (
    <div className="bg-[#060617] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl w-full">
        
        {/* Top Row */}
        <div className="col-span-2 grid md:grid-cols-2 gap-6">
          {cards.slice(0, 2).map((card, i) => (
            <div
              key={card.id}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-up"}
              className="bg-black/40 rounded-2xl border border-purple-500/40 overflow-hidden flex flex-col md:flex-row items-center p-4"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full md:w-1/2 rounded-xl object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-white">{card.title}</h2>
                <p className="text-sm text-gray-300 mt-2">{card.desc}</p>
                <button className="mt-4 text-white font-semibold hover:underline">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Image */}
        <div
          className="bg-black/40 rounded-2xl border border-purple-500/40 overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={cards[2].img}
            alt="Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Row */}
        <div className="col-span-2 grid md:grid-cols-2 gap-6">
          <div
            className="bg-black/40 rounded-2xl border border-purple-500/40 overflow-hidden flex flex-col md:flex-row items-center p-4"
            data-aos="fade-left"
          >
            <img
              src={cards[3].img}
              alt="Card"
              className="w-full md:w-1/2 rounded-xl object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-white">{cards[3].title}</h2>
              <p className="text-sm text-gray-300 mt-2">{cards[3].desc}</p>
              <button className="mt-4 text-white font-semibold hover:underline">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="bg-black/40 rounded-2xl border border-purple-500/40 overflow-hidden"
            data-aos="flip-up"
          >
            <div className="p-6">
              <h2 className="text-lg font-bold text-white">{cards[1].title}</h2>
              <p className="text-sm text-gray-300 mt-2">{cards[1].desc}</p>
              <button className="mt-4 text-white font-semibold hover:underline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingCards;
