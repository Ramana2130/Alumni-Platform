import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const SmallChat = ({ recipient, currentUser }) => {
  // Added `currentUser` prop
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listener for incoming messages
    socket.on("message", (newMessage) => {
      // Add the message if it is for the current recipient or if it's from the current user
      if (
        (newMessage.recipient === recipient.name &&
          newMessage.sender === currentUser.name) ||
        (newMessage.sender === recipient.name &&
          newMessage.recipient === currentUser.name)
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [recipient, currentUser]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: currentUser.name, // Use current student's name
        recipient: recipient.name,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl z-50 neo-shadow p-6 space-y-6">
      {/* Chat header */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full neo-shadow flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {recipient.name[0]}{" "}
            {/* Display the first letter of the recipient's name */}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Chat with {recipient.name}
        </h1>
      </div>

      {/* Chat messages area */}
      <div className="h-96 overflow-y-auto neo-inset p-4 rounded-xl space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              msg.sender === currentUser.name ? "justify-end" : ""
            }`}
          >
            {msg.sender !== currentUser.name && (
              <div className="w-8 h-8 rounded-full neo-shadow flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {msg.sender[0]}{" "}
                  {/* Display the first letter of the sender's name */}
                </span>
              </div>
            )}
            <div
              className={`bg-${
                msg.sender === currentUser.name ? "blue-500" : "white"
              } p-3 rounded-lg neo-shadow max-w-xs`}
            >
              <p
                className={`text-sm ${
                  msg.sender === currentUser.name
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

      {/* Message input area */}
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-xl neo-inset bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="p-4 rounded-xl neo-shadow neo-button focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
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
