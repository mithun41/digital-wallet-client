import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Lead Developer",
        description: "Full-stack expertise in MERN stack and security implementation",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "UI/UX Designer",
        description: "Creating intuitive and user-friendly financial interfaces",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        role: "Security Engineer",
        description: "Ensuring top-level security and fraud prevention systems",
        img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Product Manager",
        description: "Driving product strategy and user experience optimization",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 5,
        name: "David Miller",
        role: "Backend Engineer",
        description: "Specialized in Node.js, databases, and API development",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        id: 6,
        name: "Sophia Lee",
        role: "Marketing Specialist",
        description: "Building brand presence and customer engagement strategies",
        img: "https://randomuser.me/api/portraits/women/30.jpg",
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
