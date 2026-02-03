import React from 'react';
import TestimonialCard from './TestimonialCard'; // Import TestimonialCard
import { Link } from 'react-router-dom';
function TestimonialsSection({id}) {
  const testimonials = [
    {
      quote: "Volunteering with Ademeasajida Health Network Organization has been incredibly rewarding. I've been able to apply my skills in a meaningful way, directly impacting lives in my community. The diverse team makes every project a rich learning experience!",
      author: "Zahra Hassan",
      role: "Volunteer, Health Educator",
      imageSrc: "/Images/Zahra.jpg"
    },
    {
      quote: "The health screenings provided by Ademasajida Health Network Organization made a huge difference. I learned about a potential health risk early on and received guidance that changed my life. Grateful for their dedication!",
      author: "Mohamed Abdi",
      role: "Community Member",
      imageSrc: "/Images/Moha.jpg"
    },
    
  ];

  return (
    <section id={id} className="py-20 bg-blue-700 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Hear From Our Community</h2>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
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
        <Link to="/impact-stories" className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Read More Impact Stories
        </Link>
      </div>
    </section>
  );
}

export default TestimonialsSection;