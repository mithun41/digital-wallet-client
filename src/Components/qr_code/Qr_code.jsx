import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = ({ action, actionName }) => {
  const websiteURL = `http://localhost:5173/${action}`;
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteURL);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  return (
    <div className="p-6 relative flex flex-col items-center space-y-4 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{actionName} QR Code</h2>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <QRCode value={websiteURL} size={150} />
      </div>

      {/* Copied message */}
      <p
        className={`absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded transition-all duration-300 ${
          copy ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        Copied!
      </p>

      <p className="text-gray-600 dark:text-gray-300 text-center">
        Scan this QR code to visit your page
      </p>

      <button
        onClick={handleCopy}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
      >
        Copy Link
      </button>
    </div>
  );
};

export default QrCode;


