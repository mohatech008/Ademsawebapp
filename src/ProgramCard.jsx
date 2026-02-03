import React from 'react';

function ProgramCard({ imageSrc, altText, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProgramCard;