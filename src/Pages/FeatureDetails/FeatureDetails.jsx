import React from "react";
import { useParams, Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    title: "Secure Transactions",
    image: "https://i.ibb.co.com/99BCbzH0/blog-july.jpg",
    desc: "End-to-end encryption keeps your money safe and private.",
    rating: "4.9",
    users: "10K+",
    price: "Free",
  },
  {
    id: 2,
    title: "Bill Payments",
    image: "https://i.ibb.co.com/MWrpdhH/1140-smartphone-digital-wallet.jpg",
    desc: "Easily pay bills, recharge mobile, and manage utilities.",
    rating: "4.8",
    users: "8K+",
    price: "From $1",
  },
  // বাকি feature data গুলো চাইলে এখানেও কপি করো
];

const FeatureDetails = () => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === parseInt(id));

  React.useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  if (!feature) {
    return (
      <div className="text-center py-20 text-red-500 text-lg font-semibold">
        Feature not found 😕
      </div>
    );
  }

  return (
    <div
      data-aos="fade-up"
      className="max-w-5xl mx-auto px-6 py-16 text-center"
    >
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-green-600">
        {feature.title}
      </h1>
      <p className="mt-4 text-gray-700">{feature.desc}</p>

      <div className="mt-6 flex justify-center gap-6 text-gray-600 text-sm">
        <span>⭐ {feature.rating}</span>
        <span>👥 {feature.users}</span>
        <span>💲 {feature.price}</span>
      </div>

      <Link to="/" className="inline-block mt-8">
        <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
};

export default FeatureDetails;
