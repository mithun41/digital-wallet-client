import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const MutionCard = () => {
    const stats = [
        { number: 930, suffix: "+", label: "Satisfied user" },
        { number: 4.9, suffix: "/5", label: "Client Rating" },
        { number: 1000, suffix: "+", label: "App Download" },
    ];

    const testimonials = [
        {
            id: 1,
            name: "David",
            role: "Project Designer",
            rating: 5,
            text: "David transformed our vision into reality with modern design ideas and a professional touch that perfectly matched our needs.",
            image:
                "https://i.ibb.co.com/Nd08nMVN/pexels-italo-melo-881954-2379004.jpg",


        },
        {
            id: 2,
            name: "Emily",
            role: "Designer",
            rating: 5,
            text: "Our Family Designers bring creativity and warmth together, crafting solutions that blend professional design with a personal touch for every client.",
            image: "https://i.ibb.co.com/hJ6v4Yv8/images-9.jpg",
        },
    ];

    // ⭐ Star rating component
    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`w-4 h-4 transition-transform duration-300 hover:scale-125 ${index < rating
                            ? "bg-gradient-to-br from-yellow-400 to-yellow-500"
                            : "bg-gray-600"
                            }`}
                        style={{
                            clipPath:
                                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className=" p-10  relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{
                        duration: 3,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute -bottom-1/3 -left-1/3 w-80 h-80 bg-pink-500 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-10/12 mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-secondary mx-auto lg:mx-0 max-w-md text-5xl lg:text-6xl font-extrabold leading-tight mb-8 bg-clip-text "
                    >
                        What Customers Say About US
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-secondary  mx-auto lg:mx-0 max-w-md text-xl leading-relaxed mb-12"
                    >
                        👉 Discover how our customers experience trust, quality, and
                        reliability. We value every voice and every story that inspires us
                        to do better every day.
                    </motion.p>

                    {/* Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-3 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.8 + index * 0.1,
                                    type: "spring",
                                    bounce: 0.4,
                                }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center cursor-pointer"
                            >
                                <div className="text-4xl lg:text-5xl font-black text-secondary mx-auto lg:mx-0 max-w-mdbg-clip-text mb-2">
                                    <CountUp
                                        end={stat.number}
                                        duration={2}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-secondary  mx-auto lg:mx-0 max-w-md font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Section - Testimonials */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + index * 0.2,
                                type: "spring",
                                bounce: 0.3,
                            }}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                                transition: { duration: 0.2 },
                            }}
                            className={`p-8 rounded-3xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${index === 0
                                ? "bg-gradient-to-br from-purple-500/20 to-blue-500/10"
                                : "bg-gradient-to-br from-purple-500/20 to-pink-500/10"
                                }`}
                        >
                            {/* User header */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                                className="flex items-center gap-4 mb-5"
                            >
                                <motion.img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <motion.h4
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                                        className="text-secondary  mx-auto lg:mx-0 max-w-md"
                                    >
                                        {testimonial.name}
                                    </motion.h4>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.9 + index * 0.2 }}
                                        className="text-secondary  mx-auto lg:mx-0 max-w-md"
                                    >
                                        {testimonial.role}
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Star rating */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                className="text-secondary  mx-auto lg:mx-0 max-w-md"
                            >
                                <StarRating rating={testimonial.rating} />
                            </motion.div>

                            {/* Testimonial text */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                                className="text-secondary mx-auto lg:mx-0 max-w-md"
                            >
                                {testimonial.text}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MutionCard;
