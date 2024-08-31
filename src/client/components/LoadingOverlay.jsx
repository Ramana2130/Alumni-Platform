import React from 'react';

const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="text-white text-xl">Loading...</div>
        </div>
    );
};

export default LoadingOverlay;
