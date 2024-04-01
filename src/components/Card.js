import React from "react";
import "../Styles/Card.css";

const Card = ({ children, theme }) => {
  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-gray-600"} ${
        theme === "light" ? "text-black" : "text-white"
      } p-2 text-xs m-2 shadow-lg w-full`}
    >
      {children}
    </div>
  );
};

export const CardSecond = ({ children, theme }) => {
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white"
          : "bg-gradient-to-b from-green-950 to-purple-950"
      } ${theme === "light" ? "text-black" : "text-white"}
      p-10 ... text-xs m-2 shadow-lg h-700 w-full`}
    >
      {children}
    </div>
  );
};

export const CollectionCard = ({
  image,
  title,
  time,
  location,
  buttonText,
  theme,
}) => {
  return (
    <div
      className={`w-400 relative m-5 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <div
        className={`shadow-lg p-1   ${
          theme === "light" ? "bg-white" : "bg-gray-600"
        }`}
      >
        <p className="mb-2 border-b border-dashed border-gray-400 relative">
          <img src={image} alt={title} />
        </p>
      </div>
      <span
        className={`half-circle left ${
          theme === "light" ? "bg-white" : "bg-purple-950"
        }`}
      ></span>
      <span
        className={`half-circle right ${
          theme === "light" ? "bg-white" : "bg-purple-950"
        }`}
      ></span>
      <div
        className={`shadow-lg p-4   ${
          theme === "light" ? "bg-white" : "bg-gray-600"
        }`}
      >
        <p className="text-xl font-semibold mb-2">{title}</p>
        <p className="text-sm text-gray-400 mb-4">{time}</p>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        <button
          className={`py-2 px-5 w-full ${
            theme === "dark" ? "bg-black text-white" : "bg-gray-700 text-white"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
