import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const DivSlider = ({ divs }) => {

  const handleChangeLanguage=(lang) => {
    i18n.changeLanguage(lang);
    };
  const [t,i18n ] = useTranslation("global");

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex === divs.length - 1 ? 0 : prevIndex + 1));
  };

  const prevDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? divs.length - 1 : prevIndex - 1));
  };

  useEffect(()=>{
    i18n.changeLanguage("hi")
  },[])

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
        
        
      </div>
      <div className='flex'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={prevDiv}>
        {t("homepage9.heading")}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={nextDiv}>
        {t("homepage10.heading")}
        </button>
        
      </div>
    </div>
  );
};

export default DivSlider;
