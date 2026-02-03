// src/pages/ProgramsPage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 1. Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function ProgramsPage() {
  const location = useLocation();

  // 2. Define your images here. 
  // Replace these paths with your actual 10 image filenames inside your public/Images folder.
  const mhhImages = [
    "Images/Mhh.jpeg",      // Your original image
    "Images/Mhh2.jpeg",    // Example: Rename your files to match these or change these strings
    "Images/Mhh3.jpeg",
    "Images/mhh4.jpeg",
    "Images/Mhh5.jpeg",
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80;
          const yOffset = -navbarHeight - 20;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="container mx-auto p-8 pt-20">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-12">Our Initiatives & Programs</h1>

      {/* Overview Section */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Making a Tangible Difference</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ademasajida Health Network  is committed to fostering well-being through a range of impactful initiatives. Our programs are designed to address critical health needs, empower communities with knowledge, and facilitate collaborative action among diverse professionals.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Below are some of our core focus areas, driven by the dedication of our volunteers and partners.
        </p>
      </section>

      {/* --- Menstrual Health & Hygiene (MHH) Initiative --- */}
      <section id="mhh" className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">Menstrual Health & Hygiene (MHH) Initiative</h2>
        
        {/* --- SWIPER CAROUSEL START --- */}
        <div className="mb-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="rounded-lg shadow-md"
            >
                {mhhImages.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        {/* 
                           FIX: 'w-full h-auto object-contain' ensures the image is not cut off 
                           on desktop, matching the mobile view behavior.
                           'max-h-[600px]' prevents it from being too tall on huge screens.
                        */}
                        <img 
                            src={imgSrc} 
                            alt={`MHH Slide ${index + 1}`} 
                            className="w-full h-auto max-h-[600px] object-contain mx-auto bg-gray-50"
                            // Fallback if image not found (optional)
                            onError={(e) => {e.target.src = 'https://placehold.co/800x500?text=Image+Not+Found'}}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        {/* --- SWIPER CAROUSEL END --- */}

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Menstrual Health & Hygiene (MHH) Initiative is a cornerstone of Ademasajida Health Network's community give-back efforts. We believe that access to sanitary products and accurate information is a fundamental right, enabling individuals to manage their menstruation with dignity and confidence.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Approach:</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 pl-4 mb-8">
          <li>
            <strong>Mobilization and Collection of Sanitary Pads:</strong>
            <p className="text-base text-gray-600 pl-4">We actively seek donations and forge partnerships with local businesses, NGOs, and community leaders to collect high-quality sanitary pads. Every contribution helps us reach more individuals in need.</p>
          </li>
          <li>
            <strong>Distribution of Sanitary Pads:</strong>
            <p className="text-base text-gray-600 pl-4">Our dedicated volunteers ensure the equitable distribution of sanitary pads directly in schools and community centers, prioritizing underserved areas and vulnerable populations.</p>
          </li>
          <li>
            <strong>Comprehensive Menstrual Hygiene Talks:</strong>
            <p className="text-base text-gray-600 pl-4">Beyond distribution, education is key. We conduct engaging and informative sessions covering vital topics:</p>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2 pl-8">
              <li>Understanding the menstrual cycle and bodily changes.</li>
              <li>Proper use and safe disposal of various sanitary products.</li>
              <li>Maintaining personal hygiene to prevent infections.</li>
              <li>Breaking menstrual myths and tackling the pervasive stigma.</li>
              <li>Interactive question-and-answer sessions and peer discussions to foster open dialogue and build confidence.</li>
            </ul>
          </li>
        </ul>
        <div className="text-center mt-8">
          <Link to="/volunteer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Involved with MHH
          </Link>
        </div>
      </section>

      {/* --- Other Program Sections --- */}
      <section id="health-awareness" className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Health Awareness Campaigns</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our Health Awareness Campaigns are designed to reach broad audiences, providing crucial information on preventative care, healthy living, and disease management. We organize community health fairs, public seminars, and digital campaigns to disseminate vital health knowledge.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          These campaigns are collaborative efforts with local health experts and community leaders, tailored to the specific needs of the areas we serve.
        </p>
        <div className="text-center mt-8">
          <Link to="/volunteer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Join an Awareness Campaign
          </Link>
        </div>
      </section>

      <section id="skill-share" className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Professional Skill-Share</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The Professional Skill-Share initiative harnesses the diverse expertise within our network to benefit communities and aspiring professionals. We facilitate mentorship programs, expert-led workshops, and practical training sessions across various fields relevant to health and community development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This program aims to build local capacity, transfer valuable skills, and foster a new generation of community leaders and health advocates.
        </p>
        <div className="text-center mt-8">
          <Link to="/volunteer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Offer Your Skills
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <div className="text-center py-10 bg-blue-100 rounded-lg shadow-inner">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Want to support our work?</h2>
        <p className="text-xl text-gray-700 mb-8">Your contribution helps us expand our reach and impact.</p>
        <Link to="/volunteer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mr-4">
          Volunteer Today
        </Link>
        <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Make a Donation
        </a>
      </div>

    </div>
  );
}

export default ProgramsPage;