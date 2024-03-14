import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState


const CustomWebcam = () => {
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

  return (
    <div className="container flex flex-col justify-center items-center">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={500} width={500} ref={webcamRef} mirrored = {true}/>
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;