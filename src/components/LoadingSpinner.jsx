import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex justify-center items-center border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin">
        {/* Spinner bar */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
