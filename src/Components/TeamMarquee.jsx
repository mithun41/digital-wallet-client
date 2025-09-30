import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Md. Mahmudul Hasan",
        role: "Mearn Stack Developer",
        description: "Expert in full-stack MERN applications with strong backend and authentication systems.",
        img: "https://i.ibb.co.com/LzQCQDmH/97952498.jpg",
    },
    {
        id: 2,
        name: "Md.Mosaddek Hossain",
        role: "Mearn Stack Developer",
        description: "Skilled in building dynamic UIs and robust RESTful APIs with secure integrations.",
        img: "https://i.ibb.co.com/x86ZsKZj/108361902.png",
    },
    {
        id: 3,
        name: "MD. SAZZAD HOSSEN",
        role: "Mearn Stack Developer",
        description: "Focused on performance, database optimization, and scalable architecture.",
        img: "https://i.ibb.co.com/VcX8wXh4/190174370.jpg",
    },
    {
        id: 4,
        name: "Monir Hossain",
        role: "Mearn Stack Developer",
        description: "Specializes in product logic, API handling, and user-friendly feature development.",
        img: "https://i.ibb.co.com/dsh9ThVz/792e5133-538f-4a90-8ac5-53c288571487.png",
    },
    {
        id: 5,
        name: "Halima Akhter Shiuly",
        role: "Frontend Developer",
        description: "Passionate about crafting responsive UIs with React, Tailwind, and modern design patterns.",
        img: "https://i.ibb.co.com/0p6XVP8B/193291142.png",
    },
    {
        id: 6,
        name: "sumaiyaAfroza",
        role: "Frontend Developer",
        description: "Dedicated to building smooth user experiences and interactive web applications.",
        img: "https://i.ibb.co.com/k2nj506q/urmi-img-Dhjli-G9-J.png",
    },
];

const TeamMarquee = () => {
    return (
        <section className="py-12 overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">
                    Our Awesome PayMate Team
                </h2>
                <p className="text-gray-600">
                    Meet the innovative minds behind your secure digital wallet
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee gap-8">
                    {[...teamMembers, ...teamMembers].map((member, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl text-center flex-shrink-0 w-64 hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-indigo-600 font-medium">{member.role}</p>
                            <p className="text-gray-600 text-sm mt-2">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMarquee;
