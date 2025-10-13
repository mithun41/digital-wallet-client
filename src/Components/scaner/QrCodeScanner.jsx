import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QrCodeScanner = ({onClose}) => {
  const handleScan = (result) => {
    console.log(result);
  //   if(result){
  //     const resultValue = result.data || result.text;

  //     console.log(resultValue);
    
  //   if (resultValue) {
  //     console.log("Scanned Rej  sult:", resultValue);
  //     window.location.href = resultValue; 
  //     onClose()
  //   }
  // }
  };

  const handleError = (error) => {
    console.error("Scan Error:", error);
  };

  return (
    <div className="flex justify-center items-center h-screen fixed z-50 inset-0 bg-black/50 backdrop-blur-2xl  mx-auto">
      
      <div>
        <div className="w-80">
        <Scanner
          onResult={(result, error) => {
            if (!!result) handleScan(result);
            if (!!error) handleError(error);
          }}
          constraints={{ facingMode: "environment" }}
        />
      </div>
      <button onClick={onClose} className="border border-yellow-400 rounded p-2 cursor-pointer font-bold w-full hover:bg-amber-800">Close</button>
      </div>
    </div>
  );
};

export default QrCodeScanner;
