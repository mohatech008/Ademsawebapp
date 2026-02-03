import React from 'react';

function TestimonialCard({ quote, author, role, imageSrc }) {
  return (
    <div className="bg-blue-600 p-8 rounded-lg shadow-xl">
      <p className="text-xl italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={author}
          className="w-16 h-16 rounded-full border-4 border-white mr-4"
        />
        <div>
          <p className="font-bold text-lg">{author}</p>
          <p className="text-blue-200 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;