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
      title: "Online Banking For Small Businesses",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      img: "https://i.postimg.cc/SR34fZj4/images.jpg",
    },
    {
      id: 2,
      title: "Online Banking For Small Businesses",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      img: "https://i.ibb.co.com/3rx1yjt/image2.jpg",
    },
    {
      id: 3,
      title: "Online Banking For Small Businesses",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      img: "https://i.postimg.cc/qqjdc9pB/Screenshot-2.png",
    },
    {
      id: 4,
      title: "Online Banking For Small Businesses",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      img: "https://i.ibb.co.com/fqZp0mC/image4.jpg",
    },
  ];

  return (
    <div className=" flex items-center max-w-11/12 mx-auto justify-center px-6 py-12">
      <div className="flex  ">
        <div className="border border-amber-400">
           {/* Row 1 */}
       <div className="flex">
         <div
          className="col-span-2 md:col-span-2 flex flex-col md:flex-row bg-black/40 border border-purple-500/40 rounded-2xl overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={cards[0].img}
            alt="card"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-lg font-bold text-white">{cards[0].title}</h2>
            <p className="text-gray-300 text-sm mt-2">{cards[0].desc}</p>
            <button className="text-white mt-4 font-semibold hover:underline">
              Get Started
            </button>
          </div>
        </div>
        {/* ------ */}
         <div
          className="col-span-2 flex flex-col md:flex-row-2 bg-black/40 border border-purple-500/40 rounded-2xl overflow-hidden"
          data-aos="fade-left"
        >
         
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-lg font-bold text-white">{cards[3].title}</h2>
            <p className="text-gray-300 text-sm mt-2">{cards[3].desc}</p>
            <button className="text-white mt-4 font-semibold hover:underline">
              Get Started
            </button>
          </div>
        </div> 
       </div>
        {/* row column */}

        <div
          className="flex bg-black/40 border border-purple-500/40 rounded-2xl p-6 justify-center"
          data-aos="fade-up"
        >
       <div>
            <img
            src={cards[3].img}
            alt="card"
            className=" md:w-1/2 object-cover"
          />
       </div>
         <div>
           <h2 className="text-lg font-bold text-white">{cards[1].title}</h2>
          <p className="text-gray-300 text-sm mt-2">{cards[1].desc}</p>
          <button className="text-white mt-4 font-semibold hover:underline">
            Get Started
          </button>
         </div>
        </div> 
          </div>
       

        <div
          className="bg-black/40 border border-purple-500/40 rounded-2xl overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={cards[2].img}
            alt="card"
            className="w-full  object-cover"
          />
        </div> 

        {/* Row 2 */}
        

     
      </div>
    </div>
  );
};

export default BankingCards;
