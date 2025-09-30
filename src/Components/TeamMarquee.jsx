import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Md. Mahmudul Hasan",
        role: "Mearn Stack Developer",
        description: "Full-stack expertise in MERN stack and security implementation",
        img: "https://i.ibb.co.com/LzQCQDmH/97952498.jpg",
    },
    {
        id: 2,
        name: "Md.Mosaddek Hossain",
        role: "Mearn Stack Developer",
        description: "Creating intuitive and user-friendly financial interfaces",
        img: "https://i.ibb.co.com/x86ZsKZj/108361902.png",
    },
    {
        id: 3,
        name: "MD. SAZZAD HOSSEN",
        role: "Mearn Stack Developer",
        description: "Ensuring top-level security and fraud prevention systems",
        img: "https://i.ibb.co.com/VcX8wXh4/190174370.jpg",
    },
    {
        id: 4,
        name: "Monir Hossain",
        role: "Mearn Stack Developer",
        description: "Driving product strategy and user experience optimization",
        img: "https://i.ibb.co.com/bRPQCfL4/193635882.jpg",
    },
    {
        id: 5,
        name: "Halima Akhter Shiuly",
        role: "Frontend Developer",
        description: "Specialized in Node.js, databases, and API development",
        img: "https://i.ibb.co.com/0p6XVP8B/193291142.png",
    },
    {
        id: 6,
        name: "sumaiyaAfroza",
        role: "Frontend Developer",
        description: "Building brand presence and customer engagement strategies",
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
