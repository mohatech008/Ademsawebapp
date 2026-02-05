import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection({ id }) {
  // 1. Create state to track if we are showing all cards or just the first 2
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      quote: "Volunteering with Ademeasajida Health Network Organization has been incredibly rewarding. I've been able to apply my skills in a meaningful way, directly impacting lives in my community. The diverse team makes every project a rich learning experience!",
      author: "Yusuf Abdi",
      role: "Volunteer, Health Educator",
      imageSrc: "/Images/yususfo.jpeg"
    },
    {
      quote: "The health screenings provided by Ademasajida Health Network Organization made a huge difference. I learned about a potential health risk early on and received guidance that changed my life. Grateful for their dedication!",
      author: "Abdirizack Osman",
      role: "Community Member",
      imageSrc: "/Images/Abdirizack.jpeg"
    },
    {
      quote: "The compassion and professionalism of the Ademasajida team are unmatched. They educated me on how to stay healthy. It is rare to find such genuine care in our community.",
      author: "Mohamed Farah",
      role: "Community Member",
      imageSrc: "/Images/Mohamed-Farah.jpeg"
    },
  ];

  // 2. Determine which cards to display based on state
  // If showAll is true, show everything. If false, show only the first 2.
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section id={id} className="py-20 bg-blue-700 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Hear From Our Community</h2>
      
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        {/* 3. Button logic: 
            If not showing all, show "Read More".
            If showing all, show "Show Less" (or you can remove this else block to hide button entirely) 
        */}
        {!showAll ? (
          <button 
            onClick={() => setShowAll(true)} 
            className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Read More Impact Stories
          </button>
        ) : (
          <button 
            onClick={() => setShowAll(false)} 
            className="bg-transparent border-2 border-white hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;