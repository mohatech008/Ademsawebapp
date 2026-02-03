// src/components/ProgramsSection.jsx
import React from 'react';
import ProgramCard from './ProgramCard';
import { Link } from 'react-router-dom';

function ProgramsSection({id}) {
  const programs = [
    {
      imageSrc: "Images/Mca.jpeg",
      altText: "Community Health Fair",
      title: "Health Awareness Campaigns",
      description: "Organizing fairs, screenings, and workshops to promote overall community health and well-being.",
      link: "/programs#health-awareness" // Link to the new programs page
    },
    {
      imageSrc: "Images/Mhh.jpeg", // New image for MHM
      altText: "Sanitary pad distribution",
      title: "Menstrual Health & Hygiene (MHH)", // Specific title
      description: "Our dedicated initiative for mobilizing, distributing, and educating on menstrual health.",
      link: "/programs#mhh" // Link to a specific section on the programs page
    },
    {
      imageSrc: "Images/proffessional.jpeg",
      altText: "Professional Mentorship",
      title: "Professional Skill-Share",
      description: "Connecting experts with communities and aspiring professionals for mentorship and knowledge transfer.",
      link: "/programs#skill-share" // Link to the new programs page
    }
  ];
  return (
    <section id={id} className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Initiatives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 items-start">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            imageSrc={program.imageSrc}
            altText={program.altText}
            title={program.title}
            description={program.description}
            link={program.link} // Now passes the link
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/programs" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          View All Initiatives
        </Link>
      </div>
    </section>
  );
}

export default ProgramsSection;