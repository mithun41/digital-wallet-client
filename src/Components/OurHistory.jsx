import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";

const OurHistory = () => {

  const achievements = [
    {
      "year": 2020,
      "title": "Project Kickoff",
      "description": "Started the journey to build a secure and user-friendly digital wallet platform.",
      "highlight": "Idea to Reality",
      "image": "https://source.unsplash.com/600x400/?startup,team"
    },
    {
      "year": 2021,
      "title": "First 10K Users",
      "description": "Reached 10,000 active users within the first year of launch.",
      "highlight": "10K+ Users",
      "image": "https://source.unsplash.com/600x400/?users,people"
    },
    {
      "year": 2022,
      "title": "New Features",
      "description": "Introduced mobile recharge, bill payment, and instant money transfer features.",
      "highlight": "Feature Expansion",
      "image": "https://source.unsplash.com/600x400/?technology,app"
    },
    {
      "year": 2023,
      "title": "1 Million Transactions",
      "description": "Crossed 1M successful transactions milestone, proving reliability and trust.",
      "highlight": "1M+ Transactions",
      "image": "https://source.unsplash.com/600x400/?finance,money"
    },
    {
      "year": 2024,
      "title": "Merchant Payments",
      "description": "Launched QR-code based merchant payment system across major retail shops.",
      "highlight": "Pay Anywhere",
      "image": "https://source.unsplash.com/600x400/?shopping,qr"
    },
    {
      "year": 2025,
      "title": "Digital Wallet Leader",
      "description": "Recognized as one of the leading digital wallet solutions in the country.",
      "highlight": "National Recognition",
      "image": "https://source.unsplash.com/600x400/?award,trophy"
    }
  ]

  const colors = [
    ["from-blue-500", "to-purple-500"],
    ["from-green-400", "to-yellow-400"],
    ["from-red-500", "to-orange-500"],
    ["from-pink-400", "to-indigo-500"],
    ["from-gray-500", "to-black"],
    ["from-gray-500", "to-black"],
  ];


  return (
    <div className="max-w-11/12 mx-auto mt-10 px-10">
      <p className="text-3xl text-primary text-center my-8">Our Achievement</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // slidesPerView={1}
        // spaceBetween={20}
        slideShadows={true}
        coverflowEffect={{
          rotate: 6,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".pagination-next",
          prevEl: ".pagination-pre",
          clickable: true,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="relative"
      >
        {
          achievements.map((achievement, index) => {
            const gradient = colors[index % colors.length]
            return <SwiperSlide className={`p-5 border text-center bg-gradient-to-r ${gradient[index % gradient.length]} rounded-xl border-blue-700 backdrop-blur-3xl`}>
              <img src={achievement.image} alt="" />
              <strong>{achievement.year}</strong>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </SwiperSlide>
          })
        }
        <div className="flex justify-between ">
          <ArrowLeft
            className="absolute pagination-pre z-40 left-2 top-1/2 -translate-y-1/2 cursor-pointer"
          ></ArrowLeft>
          <ArrowRight
            className="absolute pagination-next z-40 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          ></ArrowRight>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default OurHistory;
