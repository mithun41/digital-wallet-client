import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { motion } from "framer-motion";
import { SendHorizonal, User, MessageCircle } from "lucide-react";

const socket = io("http://localhost:5000");

const LiveChat = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessage] = useState(true);

  // Join Room
  const handleRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowMessage(false);
    }
  };

  // Send Message
  const handleSendMessage = async () => {
    if (currentMessage !== "") {
      const msgData = {
        room: room,
        author: user,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", msgData);
      setMessages((prev) => [...prev, msgData]);
      setCurrentMessage("");
    }
  };

  // Receive Message
  useEffect(() => {
  socket.on("receive_message", (data) => {
    if (data.author !== user) { // নিজের মেসেজ ignore করবে
      setMessages((prev) => [...prev, data]);
    }
  });

  return () => socket.off("receive_message");
}, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-blue-50 p-6">
      {/* Join Room Section */}
      {showMessages ? (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md mb-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4 flex justify-center items-center gap-2">
            <MessageCircle className="text-blue-500" /> Join a Chat Room
          </h2>
          <input
            type="text"
            className="input input-bordered w-full mb-3"
            placeholder="👤 Your Name"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full mb-3"
            placeholder="🏠 Room Name"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            className="btn btn-primary w-full font-semibold tracking-wide"
            onClick={handleRoom}
          >
            Join Now
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-2xl rounded-2xl w-full max-w-md flex flex-col h-[550px]"
        >
          {/* Header */}
          <div className="bg-blue-500 text-white px-5 py-3 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <User size={20} />
              <span className="font-semibold text-lg">
                {user || "Guest User"}
              </span>
            </div>
            <span className="text-sm opacity-90">Room: {room || "N/A"}</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50 to-white">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`chat ${
                  msg.author === user ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  className={`chat-bubble ${
                    msg.author === user
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } rounded-2xl px-4 py-2`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
                <div className="text-[11px] opacity-70 mt-1">
                  {msg.author} • {msg.time}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t flex items-center gap-2 bg-gray-50 rounded-b-2xl">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type a message..."
              className="input input-bordered flex-1 rounded-full"
            />
            <button
              onClick={handleSendMessage}
              className="btn btn-circle btn-primary"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Chat Box */}
    </div>
  );
};

export default LiveChat;
