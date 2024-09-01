import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// Replace with your server URL
const socket = io("http://localhost:3000");

const Chat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentStudentName, setCurrentStudentName] = useState("John Doe"); // Example student name

  useEffect(() => {
    socket.on("message", (newMessage) => {
      if (
        newMessage.recipient === currentContact?.name ||
        newMessage.sender === currentContact?.name ||
        newMessage.sender === currentStudentName
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [currentContact, currentStudentName]);

  const handleSendMessage = () => {
    if (message.trim() && currentContact) {
      const newMessage = {
        text: message,
        sender: currentStudentName, // Set the sender's name
        recipient: currentContact.name,
        timestamp: new Date(),
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  // Example contact list with messages (can be fetched from API or backend)
  const contacts = [
    {
      name: "Alice",
      avatar:
        "https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
    },
    // ...other contacts
  ];

  return (
    <div className="flex h-[90vh] mt-2 overflow-hidden">
      {/* Sidebar */}
      <div className="w-[40%] overflow-x-auto scrollbar_blue bg-[#1E1E1E] border-r border-gray-300">
        {/* Sidebar Header */}
        <header className="p-4 flex justify-between items-center text-white">
          <h1 className="text-2xl font-semibold">Alumni list</h1>
        </header>

        {/* Contact List */}
        <div className="overflow-y-auto scrollbar_blue h-screen p-3 mb-9 pb-20">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center mb-4 cursor-pointer hover:bg-[#e1e1e1e1]/30 p-2 rounded-md"
              onClick={() => {
                setCurrentContact(contact);
                // Fetch and display messages for the selected contact
              }}
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img
                  src={contact.avatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">
                  {contact.name}
                </h2>
                <p className="text-white">Recent message here</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1">
        {/* Chat Header */}
        <header className="w-[63vw] bg-[#11111111] shadow-2xl border-b p-4 text-white">
          <h1 className="text-2xl font-semibold">
            {currentContact?.name || "Select a contact"}
          </h1>
        </header>

        {/* Chat Messages */}
        <div className="h-[90vh] overflow-y-auto p-4 pb-36">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                msg.sender === currentStudentName ? "justify-end" : ""
              }`}
            >
              {msg.sender !== currentStudentName && (
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              )}
              <div
                className={`flex max-w-96 ${
                  msg.sender === currentStudentName
                    ? "bg-[#2596be] text-white"
                    : "bg-white/60"
                } rounded-lg p-3 gap-3`}
              >
                <p
                  className={`text-sm ${
                    msg.sender === currentStudentName
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  <strong>
                    {msg.sender === currentStudentName ? "Me" : msg.sender}:
                  </strong>{" "}
                  {msg.text}
                </p>
              </div>
              {msg.sender === currentStudentName && (
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <footer className="bg-[#111111] w-[63vw] p-4 border-t border-white/30 fixed bottom-1">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 py-2 px-4 bg-[#E1E1E1E1] placeholder:text-black rounded-full border border-gray-300 focus:outline-none focus:border-[#2596be]"
              placeholder="Type a message"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-[#2596be] text-black rounded-full p-2"
            >
              <i className="fa-solid fa-arrow-right font-extrabold"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
