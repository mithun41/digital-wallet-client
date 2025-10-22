// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { motion } from "framer-motion";
// import { Phone, SendHorizonal, User } from "lucide-react";
// import { useSelector } from "react-redux";

// export const socket = io("https://digital-wallet-server-tau.vercel.app");

// const LiveChat = () => {
//   const { user } = useSelector((state) => state.auth);
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]); // for admin only
//   const [selectedUser, setSelectedUser] = useState(null); // admin selected user

//   useEffect(() => {
//     if (user?.name && user?.role) {
//       socket.emit("join_room", {
//         name: user.name,
//         role: user.role,
//         room: "support-room",
//       });
//     }
//   })

//   const handleSendMessage = () => {
//     if (currentMessage.trim() === "") return;

//     const msgData = {
//       room: 'support-room',
//       author: user.name,
//       phone: user?.phone,
//       message: currentMessage,
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//       toSocket: selectedUser?.socketId || null, // if admin, target user
//     };

//     socket.emit("send_message", msgData);
//     setMessages((prev) => [...prev, msgData]);
//     setCurrentMessage("");
//   };

//   // Listen for messages
//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     socket.on("user_list", (list) => {
//       setUsers(list);
//       // console.log(list);
//     });

//     console.log(users);

//     return () => {
//       socket.off("receive_message");
//       socket.off("user_list");
//     };
//   }, []);

//   // Filter messages if admin selected user
//   const filteredMessages =
//     user?.role === "admin" && selectedUser
//       ? messages.filter(
//           (msg) =>
//             msg.author === selectedUser.name ||
//             msg.toSocket === selectedUser.socketId
//         )
//       : messages;

//       // console.log(filteredMessages, user);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-blue-50 p-6">
//        <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Admin Sidebar */}
//           {user?.role === "admin" && (
//             <div className="w-1/3 border-r bg-gray-50">
//               <h3 className="p-3 text-lg font-semibold text-blue-600 border-b">
//                 Users
//               </h3>
//               <div className="overflow-y-auto h-[500px]">
//                 {users.map((u) => (
//                   <div
//                     key={u.socketId}
//                     onClick={() => setSelectedUser(u)}
//                     className={`cursor-pointer p-3 border-b hover:bg-blue-100 ${
//                       selectedUser?.socketId === u.socketId
//                         ? "bg-blue-200"
//                         : ""
//                     }`}
//                   >
//                     <p className="font-medium">{u.name}</p>
//                     <p className="text-xs text-gray-500 truncate">
//                       {messages.find((m) => m.author === u.name)?.message ||
//                         "No message yet"}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Chat Area */}
//           <div className={`${user?.role === "admin" ? "w-2/3" : "w-full"} flex flex-col h-[550px]`}>
//             {/* Header */}
//             <div className="bg-blue-500 text-white px-5 py-3 flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <User size={20} />
//                 <span className="font-semibold text-lg">
//                   {user?.name} ({user?.role})
//                 </span>
//               </div>
//               {user?.role === "admin" && selectedUser && (
//                 <span className="text-sm">Chatting with: {selectedUser.name}</span>
//               )}
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50 to-white">
//               {filteredMessages.map((msg, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                   className={`chat ${
//                     msg.phone === user?.phone ? "chat-end" : ""
//                   }`}
//                 >
//                   <div
//                     className={`chat-bubble ${
//                       msg.phone === user?.phone
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-800"
//                     } rounded-2xl px-4 py-2`}
//                   >
//                     <p className="text-sm">{msg.message}</p>
//                   </div>
//                   <div className="text-[11px] opacity-70 mt-1">
//                     {msg.author} • {msg.time}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="p-3 border-t flex items-center gap-2 bg-gray-50">
//               <input
//                 type="text"
//                 value={currentMessage}
//                 onChange={(e) => setCurrentMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="input input-bordered flex-1 rounded-full"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={user?.role === "admin" && !selectedUser}
//                 className="btn btn-circle btn-primary"
//               >
//                 <SendHorizonal size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default LiveChat;
