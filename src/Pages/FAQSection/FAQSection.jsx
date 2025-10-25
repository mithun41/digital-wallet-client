// import { useState } from 'react';
// import { Plus, Minus } from 'lucide-react';

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, and digital marketing services tailored to your business needs."
//     },
//     {
//       question: "How long does a typical project take?",
//       answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. We provide detailed timelines during initial consultation."
//     },
//     {
//       question: "What is your pricing structure?",
//       answer: "Our pricing is project-based and depends on requirements, features, and complexity. We offer flexible payment plans and provide detailed quotes after understanding your specific needs."
//     },
//     {
//       question: "Do you provide ongoing support?",
//       answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products remain updated, secure, and performing optimally after launch."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="min-h-screen  flex items-center justify-center p-4 md:p-8">
//       <div className="max-w-11/12 w-full grid md:grid-cols-2 gap-8 items-center">
//         {/* Left side - FAQ Content */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
//               Frequently Asked
//             </h1>
//             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Question
//             </h2>
//           </div>
          
//           <p className="text-gray-300 text-lg max-w-xl">
//             Find answers to common questions about our services, processes, and how we can help transform your digital presence.
//           </p>

//           <div className="space-y-4 pt-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="rounded-2xl overflow-hidden border border-purple-500/20 backdrop-blur-sm transition-all duration-300"
//                 style={{
//                   background: openIndex === index 
//                     ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)'
//                     : 'rgba(15, 23, 42, 0.6)'
//                 }}
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
//                   style={{
//                     background: openIndex === index
//                       ? 'linear-gradient(90deg, rgba(139, 92, 246, 0.8) 0%, rgba(236, 72, 153, 0.8) 50%, rgba(251, 146, 60, 0.8) 100%)'
//                       : 'transparent'
//                   }}
//                 >
//                   <span className="text-white font-medium text-lg pr-4">
//                     {faq.question}
//                   </span>
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
//                     {openIndex === index ? (
//                       <Minus className="w-5 h-5 text-white" />
//                     ) : (
//                       <Plus className="w-5 h-5 text-white" />
//                     )}
//                   </div>
//                 </button>
                
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="px-6 py-5 bg-slate-900/50 border-t border-purple-500/10">
//                     <p className="text-gray-300 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right side - Image */}
//         <div className="hidden md:block">
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10"></div>
//             <img
//               src="https://i.postimg.cc/9XLsvSh7/FAQ.png"
//               alt="Professional consultation"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }