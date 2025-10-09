// import React, { useState, useEffect } from "react";
// import { Lock, Shield, Smartphone, Bell } from "lucide-react";

// const SecuritySection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const features = [
//     {
//       icon: <Lock size={40} />,
//       title: "Encrypted Transactions",
//       description:
//       "All your sensitive data, including transaction details and account credentials, are protected with industry-standard AES-256 end-to-end encryption. This ensures your digital wallet remains completely secure from unauthorized access or data breaches.",
//     },
//     {
//       icon: <Shield size={40} />,
//       title: "Advanced Security",
//       description:
//       "Stay protected with multi-layered security that includes two-factor authentication, biometric verification, and AI-driven fraud detection. Our system constantly monitors unusual activities to prevent unauthorized transactions and safeguard your assets.",
//     },
//     {
//       icon: <Smartphone size={40} />,
//       title: "Device Management",
//       description:
//       "View and control all logged-in devices from one place. You can remotely sign out from any session, manage trusted devices, and get instant updates on new logins to ensure your account always stays under your control.",
//     },
//     {
//       icon: <Bell size={40} />,
//       title: "Instant Notifications",
//     description:
//       "Receive real-time push notifications and in-app alerts for every transaction, login attempt, or account change. Stay informed and take immediate action if something doesn’t look right — your awareness is your strongest security.",
  
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [features.length]);

//   const goToSlide = (index) => setCurrentSlide(index);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
//         {/* Section Heading */}
//       <div className="text-center mb-16 animate-slide-up">
//         <div className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
//           <Shield size={18} />
//           <span>Security & Trust</span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
//           Bank-Grade Protection
//         </h2>
//         <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
//           Every layer of PayMate is built with enterprise-grade protection to
//           keep your money and data secure.
//         </p>
//       </div>

//       <div className="relative">
//         <div className="overflow-hidden rounded-3xl">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {features.map((feature, index) => (
//               <div key={index} className="min-w-full px-4">
//                 {/* Gradient background similar to Subscription */}
//                 <div
//                   className="rounded-3xl p-[1px]"
//                   style={{
//                  background:
//                  "linear-gradient(to right, rgba(16, 231, 95, 0.15), #fcf9f9ff 20%, #f6f2f2ff 50%, rgba(34, 216, 101, 0.15))",
//                  }}
//                 >
//                   <div className="rounded-3xl p-10 md:p-10  h-full nter">
//                     <div className="flex items-center gap-8">
//                       <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
//                         {feature.icon}
//                       </div>

//                       <div className="flex-1 text-left">
//                         <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center gap-3 mt-10">
//           {features.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "w-10 bg-green-500 shadow-lg"
//                   : "w-3 bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecuritySection;


import React, { useEffect } from "react";
import { Users, Target, Award, Heart, Github, Linkedin, Mail } from "lucide-react";

const SecuritySection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Lead & Full Stack Developer",
      image: "https://i.postimg.cc/rwNQy9XN/193291142.png",
      bio: "Leading the team with expertise in React and Node.js",
      github: "#",
      linkedin: "#",
      email: "sarah@paymate.com"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Crafting beautiful UI/UX with modern web technologies",
      github: "#",
      linkedin: "#",
      email: "michael@paymate.com"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Backend Developer",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Building robust APIs and secure database systems",
      github: "#",
      linkedin: "#",
      email: "emily@paymate.com"
    },
    {
      id: 4,
      name: "David Kim",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=7",
      bio: "Designing intuitive and engaging user experiences",
      github: "#",
      linkedin: "#",
      email: "david@paymate.com"
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Security Specialist",
      image: "https://i.pravatar.cc/300?img=9",
      bio: "Ensuring top-level security and data protection",
      github: "#",
      linkedin: "#",
      email: "jessica@paymate.com"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "DevOps Engineer",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Managing infrastructure and deployment pipelines",
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
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-green-50">
     

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Users size={18} />
            <span>About Our Team</span>
          </div>
          <h2 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet the PayMate Team
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            We are a passionate group of 6 developers and designers working together to create 
            the best digital wallet experience. Our diverse skills and shared vision drive us 
            to build something truly special.
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
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-green-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
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
      className="team-card  overflow-hidden  hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center p-6"
    >
      {/* Image Section */}
      <div className="relative w-40 h-40 mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="member-image w-full h-full object-cover rounded-full border-4 border-green-400 shadow-md"
        />

        {/* Social Links Overlay */}
        <div className="social-links absolute inset-0 bg-black/60  opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-2  hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-2  hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="bg-white text-gray-900 p-2  hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-green-600 font-semibold text-sm mb-2">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed px-4">
          {member.bio}
        </p>
      </div>
    </div>
  ))}
</div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Want to know more about our journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Follow our development process and see how we're building the future of digital payments.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            View Project Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
