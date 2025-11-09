import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const BACKEND_CHAT_URL =
  "https://digital-wallet-server-tau.vercel.app/api/chatbot-chat";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redux থেকে currentUser নেওয়া
  const currentUser = useSelector((state) => state.auth.user); // adjust slice name

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { sender: "user", text: input };
    const currentInput = input;
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(BACKEND_CHAT_URL, {
        message: currentInput,
        history: chatHistory,
        userId: currentUser?._id,
      });

      const { text: botReplyText, updatedHistory } = response.data;

      const botMsg = { sender: "bot", text: botReplyText };
      setMessages((prev) => [...prev, botMsg]);
      setChatHistory(updatedHistory || []);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      const errorMsg = {
        sender: "bot",
        text: "দুঃখিত, কোনো সমস্যার জন্য উত্তর দিতে পারছি না।",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-xl">
            <span>PayMate AI</span>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block px-3 py-2 rounded-xl max-w-[70%] ${
                    m.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="text-left">
                <span className="loading loading-dots loading-xl"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input box */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              className="flex-1 p-2 outline-none rounded-bl-xl"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading || !currentUser}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-br-xl disabled:bg-blue-300"
              disabled={isLoading || !input.trim() || !currentUser}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
