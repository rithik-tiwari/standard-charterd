import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const UserWebCam = ({id,setId}) => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    // create a capture function
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        setId((prev)=>uuidv4())
        const data = {
            
        }
        try{
        const res = await axios.post('',imgSrc, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        console.log(res.data)
        }catch(err){
            console.log(err.message)
        }
      }

  return (
    <div className="container flex flex-col justify-center items-center gap-y-5">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={500} width={500} ref={webcamRef} mirrored = {true}/>
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake} className="p-2 border-2 border-black hover:border-blue-400 hover:text-blue-600 rounded-full" >Retake photo</button>
        ) : (
          <button onClick={capture} className="p-2 border-2 border-black hover:border-blue-400 hover:text-blue-600 rounded-full" >Capture photo</button>
        )}
      </div>
      <button onClick={handleSubmit} type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Submit
      </button>
    </div>
  );
};

export default UserWebCam;