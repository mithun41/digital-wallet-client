import React from 'react';

export default function TestimonialCarousel() {
    const testimonials = [
        {
            id: 1,
            name: "Jessica Martinez",
            role: "University Student",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            text: "PayMate makes paying bills so easy! I never miss my electricity or internet payments anymore. The reminders and one-click payments are a lifesaver.",
            rating: 5
        },
        {
            id: 2,
            name: "David Thompson",
            role: "Small Business Owner",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            text: "The QR payment feature revolutionized my coffee shop! Customers love the contactless payments, and I get instant confirmations. PayMate is perfect for small businesses.",
            rating: 5
        },
        {
            id: 3,
            name: "Amanda Wilson",
            role: "Marketing Professional",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            text: "Managing multiple wallets for personal and business expenses is so convenient. The transaction history and export features help me stay organized for tax season.",
            rating: 5
        },
        {
            id: 4,
            name: "Michael Chen",
            role: "Freelance Designer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            text: "As a freelancer, getting paid quickly matters. PayMate's instant transfers and low fees mean more money in my pocket. Highly recommend!",
            rating: 5
        }
    ];

    return (
        <div className=" py-20 px-4 ">
            <div className="max-w-11/12 mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                            TESTIMONIALS
                        </span>
                    </div>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        What Our Users Say
                    </h1>
                    <p className="text-2xl text-secondary font-light">
                        Real experiences from our satisfied PayMate community
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial }) {
    return (
        <div className=" backdrop-blur-sm rounded-3xl shadow-2xl p-8 h-full hover:shadow-purple-200 hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-purple-100">
            {/* User Info */}
            <div className="flex items-center mb-6">
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-purple-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                    </div>
                </div>
                <div className="ml-5">
                    <h3 className="font-bold text-gray-900">
                        {testimonial.name}
                    </h3>
                    <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-secondary text-gray-700 italic mb-6 leading-relaxed text-base">
                "{testimonial.text}"
            </p>

            {/* Star Rating */}
            <div className="flex gap-1.5">
                {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                        key={index}
                        className="w-7 h-7 fill-yellow-400 drop-shadow-sm"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                ))}
            </div>
        </div>
    );
}