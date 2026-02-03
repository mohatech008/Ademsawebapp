// src/components/ProgramCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function ProgramCard({ imageSrc, altText, title, description, link }) { // Accept 'link' prop
  return (
    <div className="bg-white rounded-2xl border-2 border-blue-500 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link to={link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProgramCard;