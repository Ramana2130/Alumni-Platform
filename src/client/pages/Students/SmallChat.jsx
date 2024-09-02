import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Initialize socket connection
const socket = io("http://localhost:3000");

const SmallChat = ({ recipient }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!recipient || !recipient.name) return; // Check if recipient is defined

    // Join the chat room for the recipient
    socket.emit("joinRoom", recipient.name);

    // Listener for incoming messages
    socket.on("message", (newMessage) => {
      if (
        newMessage.recipient === recipient.name ||
        newMessage.sender === recipient.name
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [recipient]);

  const handleSendMessage = () => {
    if (message.trim() && recipient) {
      const newMessage = {
        text: message,
        sender: "student", // Replace with the actual student name or ID
        recipient: recipient.name,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {recipient ? recipient.name[0] : "?"}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Chat with {recipient ? recipient.name : "Loading..."}
        </h1>
      </div>

      <div className="h-96 overflow-y-auto p-4 rounded-xl space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              msg.sender === "student" ? "justify-end" : ""
            }`}
          >
            {msg.sender !== "student" && (
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {msg.sender[0]}
                </span>
              </div>
            )}
            <div
              className={`bg-${
                msg.sender === "student" ? "blue-500" : "white"
              } p-3 rounded-lg max-w-xs`}
            >
              <p
                className={`text-sm ${
                  msg.sender === "student"
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-xl bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="p-4 rounded-xl bg-blue-500 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SmallChat;
