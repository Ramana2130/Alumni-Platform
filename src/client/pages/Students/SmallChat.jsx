import React from 'react';

const SmallChat = () => {
    return (
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl z-50  neo-shadow p-6 space-y-6">
            {/* Chat header */}
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full neo-shadow flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">JD</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Chat with John Doe</h1>
            </div>

            {/* Chat messages area */}
            <div className="h-96 overflow-y-auto neo-inset p-4 rounded-xl space-y-4">
                {/* Received message */}
                <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full neo-shadow flex-shrink-0 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JD</span>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-lg neo-shadow max-w-xs">
                        <p className="text-sm text-gray-700 dark:text-gray-300">Hey there! How's it going?</p>
                    </div>
                </div>

                {/* Sent message */}
                <div className="flex items-start justify-end space-x-2">
                    <div className="bg-blue-500 p-3 rounded-lg neo-shadow max-w-xs">
                        <p className="text-sm text-white">Hi John! I'm doing well, thanks for asking. How about you?</p>
                    </div>
                </div>
            </div>

            {/* Message input area */}
            <div className="flex items-center space-x-4">
                <div className="flex-grow">
                    <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="w-full p-4 rounded-xl neo-inset bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none" 
                    />
                </div>
                <button className="p-4 rounded-xl neo-shadow neo-button focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SmallChat;
