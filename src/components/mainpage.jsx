import React, { useState } from 'react';

const Mainpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numDivs = 5; // Set the number of divs you want

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numDivs);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numDivs) % numDivs);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex overflow-hidden">
        {[...Array(numDivs).keys()].map((index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 transition-all duration-300 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            {/* Your content for each div goes here */}
            <div className="bg-blue-200 p-4 rounded-md">
              <p className="text-xl font-bold">Div {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === numDivs - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
