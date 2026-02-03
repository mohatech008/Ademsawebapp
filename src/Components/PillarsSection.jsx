import React from 'react';
import PillarCard from './PillarCard'; // Import the PillarCard

function PillarsSection() {
  // Define pillar data, making it easy to add/edit pillars later
  const pillars = [
    {
      icon: <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.794 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.206 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>,
      title: "Health Education",
      description: "Providing accessible, evidence-based information and workshops to empower individuals with knowledge.",
      link: "#"
    },
    {
      icon: <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
      title: "Community Outreach",
      description: "Organizing health screenings, free clinics, and resource distribution events in underserved areas.",
      link: "#"
    },
    {
      icon: <svg className="w-16 h-16 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-5 0h10a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4 2l4 4m0 0l4-4m-4 4v7"></path></svg>,
      title: "Professional Collaboration",
      description: "Facilitating networking and project opportunities for diverse professionals dedicated to public health.",
      link: "#"
    },
    {
      icon: <svg className="w-16 h-16 text-yellow-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0V6h-2m2 7l-2 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4l-2-2m-2-2h16"></path></svg>,
      title: "Mentorship & Support",
      description: "Connecting aspiring health professionals and community members with experienced mentors.",
      link: "#"
    }
  ];
  return (
    <section className="py-16 bg-white rounded-lg shadow-xl -mt-8 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How We Make an Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {pillars.map((pillar, index) => (
          <PillarCard
            key={index}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
            link={pillar.link}
          />
        ))}
      </div>
    </section>
  );
}

export default PillarsSection;