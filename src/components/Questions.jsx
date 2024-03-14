import React, { useState, useRef } from 'react';
import DivSlider from './Divslider';
import adhar_dummy from '../images/aadhaar_dummy.png';
import CustomWebcam from './webcam'; // import it
import Popup from 'reactjs-popup'
import SignaturePad from 'react-signature-canvas';
import ChatApp from './ChatApp'


const Questions = () => {

  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () => 
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  const divs = [
    <div id='div1' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2>Let's begin with the KYC Process</h2>
      <div>&nbsp;</div>
      <p className='text-lg text-gray-400'>keep the following documents handy before proceeding. </p>
      <div className='w-[401px] flex flex-col'>
         <img src={adhar_dummy} alt="" />
         <p className='justify-center items-center flex text-lg text-gray-400'>Aadhar Card</p>
      </div>
    </div>,
    <div id='div2' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2>Enter Your Aadhar card number below</h2>
      <div>&nbsp;</div>
      <div className='border border-1'>
        <input name="myInput" type='number' placeholder='Aadhar Card Number'/>
      </div>
    </div>,
    <div id='div3' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2 className='m-4'>Capture an Image of yourself.</h2>
      <div className="App">
          <CustomWebcam />
      </div>
    </div>,
    <div id='div4' className='font-bold text-2xl flex flex-col justify-center items-center'>
      <h2 className='m-4 text-3xl'>Give your Signature.</h2>
      <div className="App">
        <Popup 
          model
          trigger={<button className='border border-2 border-blue-500 p-2 rounded-lg hover:border-black hover:text-blue-500'>Open Signature Pad</button>}
          closeOnDocumentClick={false}
        >
          {close => (
            <>
              <SignaturePad 
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
    <div id='div5' className='font-semibold text-xl flex flex-col justify-center items-center gap-y-6 w-full'>
        <ChatApp />

    </div>,
    
    // Add more divs as needed
  ];

  return (
    <div className="container mx-auto m-8 h-[100vh] mb-44 ">
      <h1 className="text-3xl font-bold mb-4 justify-center items-center flex">KYC</h1>
      <DivSlider divs={divs} />
    </div>
  );
};

export default Questions;
