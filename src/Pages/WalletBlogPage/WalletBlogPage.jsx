// import React from "react";
// import { motion } from "framer-motion";
// import { FaWallet, FaLock, FaChartLine, FaRegSmileBeam } from "react-icons/fa";

// const WalletBlogPage = () => {
//   return (
//     <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen py-16">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
//             Your Digital Wallet – Smart, Secure & Simple 💳
//           </h1>
//           <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
//             Learn how to manage, track, and grow your money with our smart
//             digital wallet features.
//           </p>
//         </motion.div>

//         {/* Blog Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-8 border border-green-200 dark:border-gray-700"
//         >
//           <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
//             <p className="text-lg">
//               Your digital wallet is more than just a balance — it’s your
//               financial companion! Let’s see how it works and why it’s the best
//               way to manage your money.
//             </p>

//             <div className="space-y-8">
//               {/* Feature 1 */}
//               <div className="flex items-start gap-4">
//                 <FaWallet className="text-green-600 text-3xl mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
//                     Manage All in One Place
//                   </h3>
//                   <p>
//                     Track your spending, balance, and transactions instantly.
//                     Stay in control of your finances 24/7.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex items-start gap-4">
//                 <FaLock className="text-green-600 text-3xl mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
//                     Secure Transactions
//                   </h3>
//                   <p>
//                     Your funds and data are protected by end-to-end encryption
//                     and two-factor authentication.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 3 */}
//               <div className="flex items-start gap-4">
//                 <FaChartLine className="text-green-600 text-3xl mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
//                     Track Spending Trends
//                   </h3>
//                   <p>
//                     Get detailed insights about your spending habits with
//                     real-time analytics and charts.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 4 */}
//               <div className="flex items-start gap-4">
//                 <FaRegSmileBeam className="text-green-600 text-3xl mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
//                     Instant Access Anytime
//                   </h3>
//                   <p>
//                     Access your wallet anytime, anywhere — from your mobile or
//                     desktop device with one secure login.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-green-500">
//               <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
//                 💡 Tip: Keep your wallet updated and enjoy seamless transactions
//                 every time!
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           className="text-center mt-12"
//         >
//           <p className="text-gray-600 dark:text-gray-400">
//             Need help? Visit our{" "}
//             <span className="text-green-600 font-medium cursor-pointer hover:underline">
//               Help Center
//             </span>{" "}
//             for wallet support.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WalletBlogPage;
