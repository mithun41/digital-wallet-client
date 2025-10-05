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
      img: "https://i.postimg.cc/qqjdc9pB/Screenshot-2.png",
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
      img: "https://i.postimg.cc/W1q78vTH/Screenshot-1.png",
    },
    {
      id: 4,
      title: "Online Banking For Small Businesses",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      img: "https://i.postimg.cc/0N60tqvZ/Screenshot-3.png",
    },
  ];

  return (
   <div className="mt-8">
    <div className="text-center ">
        <h1 className="text-3xl font-bold text-green-400">Latest news & Events</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
     <div className=" flex items-center max-w-11/12 mx-auto justify-center px-6  py-12">
      
      <div className="flex gap-4 ">
        <div className="gap-4 ">
           {/* Row 1 */}
       <div className="flex gap-4 ">
         <div
          className="col-span-2 md:col-span-2 flex flex-col md:flex-row border border-green-500/40 h-100 rounded-2xl overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={cards[0].img}
            alt="card"
            className="w-full md:w-1/2  "
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-lg font-bold text-secondary">{cards[0].title}</h2>
            <p className="text-secondary text-sm mt-2">{cards[0].desc}</p>
            <button className="text-secondary mt-4 font-semibold hover:underline">
              Get Started
            </button>
          </div>
        </div>
        {/* ------ */}
         <div
          className="col-span-2 p-6  flex-col justify-center flex flex-col md:flex-row-2  border border-green-500/40 gap-5 rounded-2xl overflow-hidden"
          data-aos="fade-left"
        >
         
          <div className="">
            <h2 className="text-lg font-bold text-secondary">{cards[3].title}</h2>
            <p className="text-secondary text-sm mt-2">{cards[3].desc}</p>
            <button className="text-secondary mt-4 font-semibold hover:underline">
              Get Started
            </button>
          </div>
        </div> 
       </div>
        {/* row column */}
        <div
          className="flex border border-green-500/40 rounded-2xl mt-4 justify-center"
          data-aos="fade-up"
        >
       <div>
            <img
            src={cards[3].img}
            alt="card"
            className="w-full object-cover"
          />
       </div>
         <div className="p-6 flex flex-col justify-center">
           <h2 className="text-lg font-bold text-secondary">{cards[1].title}</h2>
          <p className="text-secondary text-sm mt-2">{cards[1].desc}</p>
          <button className="text-secondary mt-4 font-semibold hover:underline">
            Get Started
          </button>
         </div>
        </div> 
          </div>
       

        <div
          className="border border-green-500/40 rounded-2xl overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={cards[2].img}
            alt="card"
            className="w-full  object-cover"
          />
          <div className="p-6 mt-5">
           <h2 className="text-lg font-bold text-secondary">{cards[1].title}</h2>
          <p className="text-secondary text-sm mt-2">{cards[1].desc}</p>
          <button className="text-secondary mt-4 font-semibold hover:underline">
            Get Started
          </button>
         </div>
        </div> 

        {/* Row 2 */}
        </div>
    </div>
   </div>
  );
};

export default BankingCards;
