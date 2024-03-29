/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../Styles/Card.css";

const Card = ({ children }) => {
  console.log(children);
  return (
    <div className="bg-gray-600 p-2 text-xs m-2 shadow-lg w-full">
      {children}
    </div>
  );
};

export const CardSecond = ({ children }) => {
  return (
    <div class="bg-gradient-to-r p-10 from-green-900 to-purple-900 ... text-xs m-2 shadow-lg h-700 w-full">
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
}) => {
  return (
    <div className="max-w-xs mx-2 relative">
      <div className="bg-gray-600 shadow-lg p-6">
        <p className="text-xl font-semibold mb-2 border-b border-dashed border-gray-400 relative">
          <img src={image} />
          <span className="half-circle left"></span>
          <span className="half-circle right"></span>
        </p>
        <p className="text-xl font-semibold mb-2">{title}</p>
        <p className="text-sm text-gray-400 mb-4">{time}</p>
        <p className="text-sm text-gray-400 mb-4">{location}</p>
        <button className="bg-black text-white py-2 px-5 w-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
