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
      text: "Digital Wallet makes paying bills and transferring money so easy! I can add funds, pay utilities, and even send money to friends in seconds. The transactions are fast, secure, and the interface is so simple that anyone can use it without confusion.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Small Business Owner",
      image: "https://i.pravatar.cc/150?img=3",
      text: "Managing my daily business payments has never been smoother. Digital Wallet helps me track all my transactions in real-time and notifies me instantly whenever a payment is received. It truly saves me hours every week and helps me stay organized effortlessly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amanda Wilson",
      role: "Freelancer",
      image: "https://i.pravatar.cc/150?img=5",
      text: "As a freelancer, I receive payments from clients across different regions. With Digital Wallet, I can receive payments instantly without worrying about hidden charges or delays. I love how smooth the process is and how I can view all my history in one place.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?img=7",
      text: "Digital Wallet has completely changed how I handle my finances. The clean UI, strong encryption, and fast performance make it my go-to app for both personal and professional payments. I truly appreciate the effort put into making everything secure and user-friendly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition duration-300 overflow-hidden">
      <div className="max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star size={16} className="fill-white text-white" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-green-500 dark:text-green-500 mb-4">
            What Our Users Say 💬
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Discover how{" "}
            <span className="text-green-600 font-semibold">Digital Wallet</span>{" "}
            is transforming lives — from freelancers and business owners to
            everyday users who enjoy fast, secure, and effortless financial
            management.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/10 to-emerald-300/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* User Info */}
              <div className="flex items-center gap-3 mb-4 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 relative">
                “{testimonial.text}”
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 relative">
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

        {/* Footer */}
        <div
          className="text-center mt-16 text-gray-600 dark:text-gray-400"
          data-aos="fade-up"
        >
          <p>
            Want to share your experience?{" "}
            <span className="text-green-600 font-semibold cursor-pointer hover:underline">
              Leave us a review
            </span>{" "}
            and help others discover the power of Digital Wallet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
