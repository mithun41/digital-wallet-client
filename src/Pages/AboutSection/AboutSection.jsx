import React, { useEffect } from "react";
import { Users, Target, Award, Heart, Github, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Md. Mahmudul Hasan",
      role: "Project Lead & MERN Stack Developer",
      image: "https://i.ibb.co.com/LzQCQDmH/97952498.jpg",
      bio: "A visionary leader ensuring smooth coordination between the front-end and back-end teams, focusing on performance and scalability.",
      github: "#",
      linkedin: "#",
      email: "sarah@paymate.com"
    },
    {
      id: 2,
      name: "Md. Mosaddek Hossain",
      role: "MERN Stack Developer",
      image: "https://i.ibb.co.com/x86ZsKZj/108361902.png",
      bio: "Passionate about creating modern, responsive, and user-friendly interfaces using React and Tailwind CSS.",
      github: "#",
      linkedin: "#",
      email: "michael@paymate.com"
    },
    {
      id: 3,
      name: "Sumaiya Afroza",
      role: "Frontend Developer",
      image: "https://i.ibb.co.com/k2nj506q/urmi-img-Dhjli-G9-J.png",
      bio: "Dedicated to crafting pixel-perfect layouts and enhancing user experiences through creative UI designs.",
      github: "#",
      linkedin: "#",
      email: "emily@paymate.com"
    },
    {
      id: 4,
      name: "Monir Hossain",
      role: "MERN Stack Developer",
      image: "https://i.ibb.co.com/dsh9ThVz/792e5133-538f-4a90-8ac5-53c288571487.png",
      bio: "Focused on building scalable web applications using the MERN stack with attention to detail and clean architecture.",
      github: "#",
      linkedin: "#",
      email: "david@paymate.com"
    },
    {
      id: 5,
      name: "Halima Akhter Shiuly",
      role: "Frontend Developer",
      image: "https://i.ibb.co.com/0p6XVP8B/193291142.png",
      bio: "Creative front-end developer with expertise in React, Tailwind, and modern design principles, ensuring smooth and elegant user interfaces.",
      github: "https://github.com/shiuly-28",
      linkedin: "https://www.linkedin.com/in/halima-akhter-shiuly/",
      email: "shulybd1245@gmail.com"
    },
    {
      id: 6,
      name: "MD. SAZZAD HOSSEN",
      role: "MERN Stack Developer",
      image: "https://i.ibb.co.com/VcX8wXh4/190174370.jpg",
      bio: "Expert in backend logic, database management, and API integration, ensuring security and reliability in every deployment.",
      github: "#",
      linkedin: "#",
      email: "alex@paymate.com"
    }
  ];

  const stats = [
    { icon: <Users size={32} />, value: "6", label: "Team Members" },
    { icon: <Target size={32} />, value: "100%", label: "Dedication" },
    { icon: <Award size={32} />, value: "1", label: "Amazing Project" },
    { icon: <Heart size={32} />, value: "∞", label: "Passion" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Users size={18} />
            <span>About Our Team</span>
          </div>
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-green-500 mb-4"
          >
            Meet the PayMate Team
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto"
          >
            We are a passionate team of developers and designers working together
            to build an innovative digital wallet experience for the next generation.
          </p>
        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-green-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-700 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="team-card overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center p-6 rounded-2xl"
            >
              {/* Image Section */}
              <div className="w-40 h-40 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-400 shadow-md"
                />
              </div>

              {/* Info Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 px-2">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-gray-100 p-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


