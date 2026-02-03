import React from 'react';

function PillarCard({ icon, title, description, link }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon} {/* The icon will be passed as a React element */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
    </div>
  );
}
export default PillarCard;