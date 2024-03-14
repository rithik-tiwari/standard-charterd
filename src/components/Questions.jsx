import React, { useState, useRef, useEffect } from 'react';
import DivSlider from './Divslider';
import adhar_dummy from '../images/aadhaar_dummy.png';
import CustomWebcam from './webcam'; // import it
import Popup from 'reactjs-popup'
import SignaturePad from 'react-signature-canvas';
import ChatApp from './ChatApp'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import UserWebCam from './userWebCame';
import { useTranslation } from 'react-i18next';


const Questions = () => {

  const handleChangeLanguage=(lang) => {
    i18n.changeLanguage(lang);
    };
  const [t,i18n ] = useTranslation("global");
    
  const [userName, setUserName] = useState('');
  const [userDOB,setUserDOB] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userAadhar, setUserAadhar] = useState('');
  const [userEmployment, setUserEmployment] = useState('');
  const [userIncome, setUserIncome] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [id,setId] = useState('')
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () => 
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  const handleSubmit = () => {
    setCurrentIndex((prevIndex) => (prevIndex === divs.length - 1 ? 0 : prevIndex + 1));
  }

  useEffect(()=>{
    i18n.changeLanguage("hi")
  },[])

  const handle_Submit = async(e) => {

    e.preventDefault()
    try{
    const res = await axios.post('',imageURL);
    console.log(res.data)
    }catch(err){
        console.log(err.message)
    }
  }


  const divs = [
    <div id='div1' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2>{t("homepage.heading")}</h2>
      <div>&nbsp;</div>
      <p className='text-lg text-gray-400'>{t("homepage.title")} </p>
      <div className='w-[401px] flex flex-col'>
         <img src={adhar_dummy} alt="" />
         <p className='justify-center items-center flex text-lg text-gray-400'>Aadhar Card</p>
      </div>
    </div>,
    <div id='div5' className='font-semibold text-xl flex flex-col justify-center items-center gap-y-6 w-full'>
        <ChatApp userName={userName} setUserName={setUserName}  userAddress={userAddress} setUserAadhar={setUserAadhar} userAadhar={userAadhar} setUserAddress={setUserAddress} userDOB={userDOB} setUserDOB={setUserDOB} userEmployment={userEmployment} setUserEmployment={setUserEmployment} userIncome={userIncome} setUserIncome={setUserIncome} id={id} setId={setId}/>
    </div>,
    <div id='div2' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2 className='m-4'>{t("homepage3.heading")}</h2>
      <div className="App">
          <UserWebCam id={id}/>
      </div>
    </div>,
    <div id='div3' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2 className='m-4'>{t("homepage5.heading")}</h2>
      <div className="App">
          <CustomWebcam id={id}/>
      </div>
    </div>,
    <div id='div4' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2 className='m-4 text-3xl'>{t("homepage4.heading")}</h2>
      <div className="App">
        <Popup 
          model
          trigger={<button className='border border-2 border-blue-500 p-2 rounded-lg hover:border-black hover:text-blue-500'>{t("homepage6.heading")}</button>}
          closeOnDocumentClick={false}
        >
          {close => (
            <>
              <SignaturePad 
              id = {id}
               ref={sigCanvas}
               canvasProps={{
                className: "signatureCanvas border border-[5px] bg-red-100 border-black w-full h-[500px]"
               }}/>
               {/* Button to trigger save canvas image */}
               <div className='flex m-2'>
               <button className='m-2' onClick={save}>Save</button>
               <button className='m-2' onClick={clear}>Clear</button>
               <button className='m-2' onClick={close}>Close</button>

               </div>
               <button onClick={handle_Submit} type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
               {t("homepage11.heading")}
               </button>
            </>
          )}
        </Popup>
        <br/>
        <br/>
        {imageURL ? (
          <img
            src={imageURL}
            alt='my_signature'
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        ) : null }
      </div>
    </div>,
    
    
    // Add more divs as needed
  ];

  return (
    <div className="container mx-auto m-8 h-[100vh] mb-44 ">
<h1 className="text-3xl font-bold mb-4 justify-between items-center flex">KYC 
      <div>
      <button className='px-4 mx-2 border border-slate-900 bg-blue-700 text-white text-sm' onClick={() => handleChangeLanguage("hi")}HI>Hindi</button>
      <button className='px-4 mx-2 border border-slate-900 bg-blue-700 text-white text-sm' onClick={() => handleChangeLanguage("en")}EN>English</button>
      </div></h1>
      <DivSlider divs={divs} />
      
    </div>
  );
};

export default Questions;
