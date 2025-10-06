import React, { useState, useEffect } from 'react';
import { FaLock, FaMoneyBillWave, FaExchangeAlt, FaWallet } from "react-icons/fa";

export default function WalletFutureMission() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Orbit items: send money, transaction, security, balance
  const features = [
    { icon: <FaMoneyBillWave />, label: "Send Money", color: 'from-pink-500 to-rose-500', position: 0 },
    { icon: <FaExchangeAlt />, label: "Transactions", color: 'from-yellow-400 to-orange-500', position: 90 },
    { icon: <FaLock />, label: "Security", color: 'from-blue-500 to-cyan-400', position: 180 },
    { icon: <FaWallet />, label: "Balance", color: 'from-green-500 to-lime-400', position: 270 },
  ];

  const shapes = [
    { icon: '▲', color: 'text-pink-400', position: 30, size: 'text-lg' },
    { icon: '◆', color: 'text-yellow-400', position: 100, size: 'text-sm' },
    { icon: '●', color: 'text-blue-400', position: 150, size: 'text-lg' },
    { icon: '■', color: 'text-green-400', position: 210, size: 'text-sm' },
    { icon: '▲', color: 'text-cyan-400', position: 280, size: 'text-lg' },
  ];

  const getOrbitPosition = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  return (
    <div className="min-h-screen my-16 bg-gradient-to-br from-[#0a1f1c] via-[#093028] to-[#237A57] flex items-center justify-center py-20 px-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <h3 className="text-lime-400 text-lg font-semibold tracking-wide uppercase">
            Our Future Mission
          </h3>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building the Future of Digital Finance
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our vision is to make every transaction faster, safer, and more 
            accessible for everyone. Like bKash, we aim to empower millions 
            through a seamless digital wallet where financial control is in 
            your hands — from instant transfers to real-time balance and 
            top-level security.
          </p>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
                           hover:bg-white hover:text-green-900 transition-all duration-300 
                           transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right Animated Orbit */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Center Logo */}
          <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-800 
                        rounded-full flex flex-col items-center justify-center shadow-2xl">
            <FaWallet className="text-white text-5xl mb-2" />
            <p className="text-white font-semibold text-sm">Digital Wallet</p>
          </div>

          {/* Outer Orbit Ring */}
          <div className="absolute w-[500px] h-[500px] border-2 border-dashed border-white/40 
                        rounded-full"></div>

          {/* Inner Orbit Ring */}
          <div className="absolute w-[320px] h-[320px] border-2 border-dashed border-white/30
                        rounded-full"></div>

          {/* Orbiting Feature Icons */}
          {features.map((item, index) => {
            const angle = rotation + item.position;
            const pos = getOrbitPosition(angle, 250);
            return (
              <div
                key={index}
                className={`absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 
                           transition-all duration-100 flex flex-col items-center justify-center`}
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full 
                                flex items-center justify-center text-white text-2xl shadow-xl`}>
                  {item.icon}
                </div>
                <p className="text-white text-xs mt-2">{item.label}</p>
              </div>
            );
          })}

          {/* Floating shapes for motion feel */}
          {shapes.map((shape, index) => {
            const angle = rotation * 1.5 + shape.position;
            const radius = index % 2 === 0 ? 160 : 260;
            const pos = getOrbitPosition(angle, radius);
            return (
              <div
                key={`shape-${index}`}
                className={`absolute ${shape.color} ${shape.size} transform -translate-x-1/2 
                         -translate-y-1/2 opacity-70 transition-all duration-100`}
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                }}
              >
                {shape.icon}
              </div>
            );
          })}

          {/* Glow Effect */}
          <div className="absolute w-40 h-40 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}





// import React, { useState, useEffect } from 'react';

// export default function OurMission() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation(prev => (prev + 0.5) % 360);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   const avatars = [
//     { color: 'bg-gradient-to-br from-purple-400 to-pink-400', position: 0 },
//     { color: 'bg-gradient-to-br from-yellow-400 to-orange-400', position: 90 },
//     { color: 'bg-gradient-to-br from-blue-400 to-cyan-400', position: 180 },
//     { color: 'bg-gradient-to-br from-yellow-300 to-yellow-500', position: 270 },
//   ];

//   const shapes = [
//     { icon: '▲', color: 'text-purple-400', position: 30, size: 'text-xl' },
//     { icon: '■', color: 'text-purple-500', position: 100, size: 'text-lg' },
//     { icon: '●', color: 'text-pink-400', position: 150, size: 'text-sm' },
//     { icon: '◆', color: 'text-purple-400', position: 220, size: 'text-xl' },
//     { icon: '▼', color: 'text-purple-500', position: 280, size: 'text-lg' },
//     { icon: '▼', color: 'text-purple-400', position: 340, size: 'text-2xl' },
//     { icon: '●', color: 'text-blue-400', position: 50, size: 'text-base' },
//     { icon: '◆', color: 'text-pink-500', position: 130, size: 'text-base' },
//   ];

//   const getOrbitPosition = (angle, radius) => {
//     const rad = (angle * Math.PI) / 180;
//     return {
//       x: Math.cos(rad) * radius,
//       y: Math.sin(rad) * radius,
//     };
//   };

//   return (
//     <div className="min-h-screen my-10 bg-gradient-to-br from-green-500 via-green-900 to-green-600 flex items-center justify-center p-8">
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div className="space-y-8 z-10">
//           <div>
//             <h3 className="text-purple-400 text-lg font-semibold mb-4 tracking-wide">
//               Our Mission
//             </h3>
//             <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//               Empowering Financial Freedom
//             </h1>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
//               ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, 
//               consectetur adipiscing elit. Ut elit tellus, luctus nec. Lorem ipsum dolor sit amet, 
//               consectetur adipiscing elit. Ut elit tellus, luctus nec luctus nec. Lorem ipsum 
//               dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
//             </p>
//           </div>
          
//           <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
//                            hover:bg-white hover:text-purple-900 transition-all duration-300 
//                            transform hover:scale-105">
//             Contact Us
//           </button>
//         </div>

//         {/* Right Animated Orbit */}
//         <div className="relative h-[600px] flex items-center justify-center">
//           {/* Center Logo */}
//           <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 
//                         rounded-full flex items-center justify-center shadow-2xl">
//             <div className="text-white text-4xl font-bold">
//               <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
//               </svg>
//             </div>
//           </div>

//           {/* Outer Orbit Ring */}
//           <div className="absolute w-[500px] h-[500px] border-2 border-dashed border-white 
//                         rounded-full"></div>
          
//           {/* Inner Orbit Ring */}
//           <div className="absolute w-[320px] h-[320px] border-2 border-dashed border-white
//                         rounded-full"></div>

//           {/* Orbiting Avatars */}
//           {avatars.map((avatar, index) => {
//             const angle = rotation + avatar.position;
//             const pos = getOrbitPosition(angle, 250);
//             return (
//               <div
//                 key={index}
//                 className="absolute w-20 h-20 rounded-full shadow-2xl transform -translate-x-1/2 
//                          -translate-y-1/2 transition-all duration-100"
//                 style={{
//                   left: `calc(50% + ${pos.x}px)`,
//                   top: `calc(50% + ${pos.y}px)`,
//                 }}
//               >
//                 <div className={`w-full h-full ${avatar.color} rounded-full flex items-center 
//                               justify-center border-4 border-slate-900 animate-pulse`}>
//                   <div className="w-12 h-12 bg-white/20 rounded-full"></div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Orbiting Shapes */}
//           {shapes.map((shape, index) => {
//             const angle = rotation * 1.5 + shape.position;
//             const radius = index % 2 === 0 ? 160 : 250;
//             const pos = getOrbitPosition(angle, radius);
//             return (
//               <div
//                 key={`shape-${index}`}
//                 className={`absolute ${shape.color} ${shape.size} transform -translate-x-1/2 
//                          -translate-y-1/2 transition-all duration-100 opacity-70`}
//                 style={{
//                   left: `calc(50% + ${pos.x}px)`,
//                   top: `calc(50% + ${pos.y}px)`,
//                 }}
//               >
//                 {shape.icon}
//               </div>
//             );
//           })}

//           {/* Glow Effect */}
//           <div className="absolute w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// }