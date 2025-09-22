import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
      <div className="bg-gray-100 px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="px-4 py-3 text-gray-700">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
