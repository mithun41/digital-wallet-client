import React, { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      role: "Digital Wallet User",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Digital Wallet makes paying bills so easy! The transactions are fast, secure, and user-friendly.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Small Business Owner",
      image: "https://i.pravatar.cc/150?img=3",
      text: "Managing business transactions with Digital Wallet is effortless. Real-time notifications are a game-changer!",
      rating: 5,
    },
    {
      id: 3,
      name: "Amanda Wilson",
      role: "Freelancer",
      image: "https://i.pravatar.cc/150?img=5",
      text: "The app makes receiving payments from clients super easy. I love how smooth and secure everything feels.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?img=7",
      text: "Digital Wallet has simplified my payment process completely. The UI and security features are excellent!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <div className="max-w-10/12 mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star size={16} className="fill-green-500 text-green-500" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Real experiences from our satisfied <span className="text-green-600 font-semibold">Digital Wallet</span> users
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="zoom-out-down"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4 transition-transform duration-500 hover:scale-105">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h3 className="font-semibold text-green-500 dark:text-white text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
