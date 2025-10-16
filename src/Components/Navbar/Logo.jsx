import React from "react";
import logo from "../../assets/paymate-logo-Edited.png";
import "./logo.css";

const Logo = () => {
  const companyName = "PAYMATE";

  return (
    <div className="flex justify-center items-center">
      <img className="h-14 w-16" src={logo} alt="Paymate Logo" />

      <h2 className="animated-name text-2xl">
        {companyName.split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Logo;
