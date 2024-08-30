import React, { useState } from "react";

const Chat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[90vh] mt-2 overflow-hidden">
      {/* Sidebar */}
      <div className="w-[40%] overflow-x-auto green bg-[#1E1E1E] border-r border-gray-300">
        {/* Sidebar Header */}
        <header className="p-4  flex justify-between items-center  text-white">
          <h1 className="text-2xl font-semibold">Alumni</h1>
 
        </header>

        {/* Contact List */}
        <div className="overflow-y-auto  h-screen p-3 mb-9 pb-20">
          {[
            {
              name: "Alice",
              message: "Hoorayy!!",
              avatar: "https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Martin",
              message:
                "That pizza place was amazing! We should go again sometime. 🍕",
              avatar: "https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Charlie",
              message: "Hey, do you have any recommendations for a good movie to watch?",
              avatar: "https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "David",
              message: "I just finished reading a great book! It was so captivating.",
              avatar: "https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Ella",
              message: "What's the plan for this weekend? Anything fun?",
              avatar: "https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Fiona",
              message: "I heard there's a new exhibit at the art museum. Interested?",
              avatar: "https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "George",
              message: "I tried that new cafe downtown. The coffee was fantastic!",
              avatar: "https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Hannah",
              message: "I'm planning a hiking trip next month. Want to join?",
              avatar: "https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Ian",
              message: "Let's catch up soon. It's been too long!",
              avatar: "https://placehold.co/200x/70ff33/501616.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
            {
              name: "Jack",
              message: "Remember that hilarious joke you told me? I can't stop laughing!",
              avatar: "https://placehold.co/200x/30916c/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="flex items-center mb-4 cursor-pointer hover:bg-[#e1e1e1e1]/30 p-2 rounded-md"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img
                  src={contact.avatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">{contact.name}</h2>
                <p className="text-white">{contact.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1">
        {/* Chat Header */}
        <header className="w-[63vw]  bg-[#11111111] shadow-2xl border-b  p-4 text-white">
          <h1 className="text-2xl font-semibold">Alice</h1>
        </header>

        {/* Chat Messages */}
        <div className="h-[90vh] overflow-y-auto p-4 pb-36">
          {/* Incoming Message */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex max-w-96 bg-white/60 rounded-lg p-3 gap-3">
              <p className="text-gray-700">Hey Bob, how's it going?</p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-[#cdf80B] text-black rounded-lg p-3 gap-3">
              <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
              <img
                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="My Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex max-w-96 bg-white/60 rounded-lg p-3 gap-3">
              <p className="text-gray-700">
                That book sounds interesting! What's it about?
              </p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-[#cdf80B] text-black rounded-lg p-3 gap-3">
              <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
              <img
                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="My Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex max-w-96 bg-white/60 rounded-lg p-3 gap-3">
              <p className="text-gray-700">Wow, that sounds intense! I need to check it out.</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <footer className="bg-[#111111] w-[63vw] p-4  border-t border-white/30 fixed bottom-1 ">
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 py-2 px-4 bg-[#E1E1E1E1] placeholder:text-black rounded-full border border-gray-300 focus:outline-none focus:border-[#cdf80B]"
    black     placeholder="Type a message"
            />
            <button className="ml-4 size-12 bg-[#cdf80B] text-black rounded-full">
            <i class="fa-solid fa-arrow-right font-extrabold"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
