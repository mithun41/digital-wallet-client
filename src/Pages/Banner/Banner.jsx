import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


const banners = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/bVGMZCn/images-15-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg',
        alt: 'PayMate Digital Wallet',
        title: 'PayMate',
        subtitle:
            'A Secure Digital Wallet Platform built with cutting-edge MERN Stack technology.',
    },
    {
        id: 2,
        image: 'https://i.ibb.co.com/CKfG5YgN/images-19-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg',
        alt: 'Powerful Features',
        title: 'Powerful Features',
        subtitle:
            'Everything you need for seamless digital payments and financial management.',
    },
    {
        id: 3,
        image: 'https://i.ibb.co.com/Gj65TZq/images-21-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg',
        alt: 'Modern Tech Stack',
        title: 'Modern Tech Stack',
        subtitle:
            'Built with industry-leading technologies for scalability, performance, and security.',
    },
    {
        id: 4,
        image: 'https://i.ibb.co.com/twqLywWz/images-23-LE-upscale-ultra-x4-size-of-changes-10-intensity-10.jpg',
        alt: 'Built For Everyone',
        title: 'Built For Everyone',
        subtitle:
            'Designed to serve diverse user groups with tailored financial solutions.',
    },
];

export default function Banner() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === banners.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const prevSlide = () =>
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    const nextSlide = () =>
        setCurrent(current === banners.length - 1 ? 0 : current + 1);

    return (
        <>

            <div
                className="relative w-full h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden  shadow-lg"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${index === current
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                            }`}
                    >
                        <img
                            src={banner.image}
                            alt={banner.alt}
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <div className="relative max-w-2xl px-4">
                                <h2
                                    className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-2xl ${index === current ? 'animate-slideIn' : ''
                                        }`}
                                >
                                    {banner.title}
                                </h2>
                                <p
                                    className={`text-base sm:text-lg md:text-xl font-medium mb-6 drop-shadow-lg ${index === current ? 'animate-slideIn' : ''
                                        }`}
                                >
                                    {banner.subtitle}
                                </p>
                                <div className="text-center">
                                    <button
                                        className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${index === current ? 'animate-bounceIn' : ''
                                            }`}
                                    >
                                        <span className="text-white">Get Started</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900/90 p-3 md:p-4 rounded-full text-white z-10 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900/90 p-3 md:p-4 rounded-full text-white z-10 transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Next slide"
                >
                    <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-sm ${index === current
                                ? 'bg-blue-500 scale-125'
                                : 'bg-gray-300/60 hover:bg-gray-200/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>
        </>
    );
}
