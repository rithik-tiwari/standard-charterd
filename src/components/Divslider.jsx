import React, { useState } from 'react';

const DivSlider = ({ divs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex === divs.length - 1 ? 0 : prevIndex + 1));
  };

  const prevDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? divs.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      
      <div className="w-full border-gray-300  flex flex-col justify-center items-center h-full">
        {divs.map((div, index) => (
          <div
            key={index}
            className={`w-full mx-2 p-4 border border-gray-300 rounded ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            {div}
          </div>
          
        ))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={nextDiv}>
          Next
        </button>
        
      </div>
      <div className='flex'>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={prevDiv}>
          Previous
        </button> */}
        
      </div>
    </div>
  );
};

export default DivSlider;
