import React from 'react';
import HeroSection from '../Components/HeroSection';
//import MissionSection from '../Components/MissionSection';
import PillarsSection from '../Components/PillarsSection';
import ProgramsSection from '../Components/ProgramsSection';
import TestimonialsSection from '../Components/TestimonialSection';
import VolunteerSection from '../Components/VolunteerSection';
import ProgramCard from '../Components/ProgramCard';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <main className="w-full p-8">
        {/*<MissionSection />*/}
        <VolunteerSection/>
        <PillarsSection />
        <ProgramsSection id="programs"/>
        <TestimonialsSection id="impact" />

        <section id="volunteer" className="py-20 bg-blue-100 text-center rounded-lg shadow-inner my-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Involved?</h2>
          <p className="text-xl text-gray-700 mb-8">Join our network of professionals and volunteers to make a real difference.</p>
          <Link to="/volunteer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            View Volunteer Opportunities
          </Link>
        </section>
      </main>
  </div>
  );
}

export default HomePage;