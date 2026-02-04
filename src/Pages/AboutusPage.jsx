import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Target, Eye, Heart, Users, Activity } from 'lucide-react';

function AboutPage() {
  
  // --- 1. SLIDESHOW LOGIC ---
  const [currentImage, setCurrentImage] = useState(0);

  // REPLACE THESE FILENAMES with your actual images in public/Images/
  const historyImages = [
    "/Images/hero1.png", 
    "/Images/hero2.png",
    "/Images/hero3.png",
    "/Images/hero4.png",
    "/Images/hero5.png",
    "/Images/hero6.png",
    "/Images/hero7.png",
    "/Images/hero8.png", 
    "/Images/hero9.png",
    "/Images/hero10.png",
    "/Images/hero11.png",
    "/Images/hero12.png",
    "/Images/hero13.png",
    "/Images/hero14.png",
    "/Images/hero15.png",
    "/Images/hero16.png",
    "/Images/hero17.png",

  ];

  useEffect(() => {
    // Switch image every 3.5 seconds
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % historyImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [historyImages.length]);
  // --------------------------


  // Team Data
  const teamMembers = [
    {
      name: "Hamza Issack Ibrahim",
      role: "Chairperson",
      bio: "Psychologist.",
      image: "/Images/Hamza.jpeg" // Added / for safety
    },
    {
      name: "Adoy Abdulahi Omar",
      role: "Vice Chairperson",
      bio: "A community leader dedicated to bridging the gap between hospitals and local families.",
      image: "/Images/Adoy.jpeg"
    },
    {
      name: "Abdinasir Musa",
      role: "Organizing Secretary",
      bio: "Clinical Officer.",
      image: "/Images/abdinasir.jpeg"
    },
    {
      name: "Fardowsa Adan",
      role: "Vice Organizing Secretary",
      bio: "community Health Worker.",
      image: "/Images/Fardowsa.jpeg"
    }
  ];

  return (
    <div className="bg-white font-sans pt-16">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-teal-900 py-16 px-6 text-center text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160550-217358c7be61?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-teal-800/50 backdrop-blur-sm px-4 py-1 rounded-full text-teal-200 text-sm font-bold mb-6 border border-teal-700">
            EST. 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Driven by Compassion, <br/> Guided by Science.
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-2xl mx-auto leading-relaxed font-light">
            We are dedicated to ensuring that quality healthcare is not a privilege, but a fundamental right for the Ademasajida community.
          </p>
        </div>
      </div>

      {/* 2. MISSION & VISION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-teal-50 p-8 md:p-10 rounded-3xl border border-teal-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide accessible, affordable, and high-quality medical support to underserved families through community outreach, health education, and volunteer mobilization.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A thriving community where every individual, regardless of income or background, has the knowledge and resources to lead a healthy, productive life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION (WITH SLIDESHOW) */}
      <section className="bg-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* SLIDESHOW CONTAINER */}
          <div className="relative w-full h-[500px]">
            {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-teal-200 rounded-3xl z-0"></div>
            
            {/* Images Loop */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl z-10 bg-gray-200">
              {historyImages.map((imgSrc, index) => (
                <img 
                  key={index}
                  src={imgSrc} 
                  alt={`History slide ${index + 1}`} 
                  className={`
                    absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                    ${index === currentImage ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              ))}
              
              {/* Optional Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {historyImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-wide mb-3">
              <Activity size={20} /> Our History
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">From a Volunteer Group to a Health Network</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              The Ademasajida Health Network began in 2025 as a small group of volunteer nurses visiting homes on weekends. We noticed that many treatable conditions were becoming life-threatening simply due to a lack of transport and awareness.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Today, we have grown into a full-fledged network of doctors, educators, and community volunteers, having served over 5,000 families in the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-500"><Heart size={20} fill="currentColor" /></div>
                <span className="font-bold text-gray-700">Passionate Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-500"><Users size={20} fill="currentColor" /></div>
                <span className="font-bold text-gray-700">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            The dedicated professionals working behind the scenes to guide our mission forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border-2 border-blue-200 hover:shadow-xl transition-all duration-300 text-center p-5 group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-teal-50 group-hover:border-teal-400 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-teal-600 font-bold text-sm uppercase mb-4 tracking-wide">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-blue-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Be Part of the Solution</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you want to volunteer your time or contribute financially, your support saves lives in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/donate">
              <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-10 rounded-xl transition shadow-lg text-lg transform hover:-translate-y-1">
                Make a Donation
              </button>
            </Link>
            <HashLink to="/#volunteer">
              <button className="w-full sm:w-auto bg-white text-blue-900 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg transform hover:-translate-y-1">
                Join as Volunteer
              </button>

            </HashLink>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;