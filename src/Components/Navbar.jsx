import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // UPDATED LINKS: Note the use of '/#' and updated impact link
  const navLinks = [
    {name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/#programs' }, // Changed to #impact per your request
    { name: 'Get Involved', href: '/#join-form' },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <HashLink smooth to="/#top" className="flex items-center gap-3">
              <img 
                src="Images/Ademsa-logo.jpg" 
                alt="Ademasajida Logo" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-teal-500 shadow-sm" 
              />
              <div className="hidden xs:block">
                <span className="block text-xs md:text-sm font-bold text-teal-700 leading-none">ADEMASAJIDA</span>
                <span className="hidden sm:block text-[10px] md:text-xs font-medium text-teal-600 uppercase tracking-tighter">Health Network</span>
              </div>
            </HashLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth // 1. Added smooth scrolling
                to={link.href} // 2. CHANGED 'href' TO 'to' (Crucial fix)
                className="text-gray-700 hover:text-teal-600 text-sm lg:text-base font-semibold transition-colors duration-300"
              >
                {link.name}
              </HashLink>
            ))}
          </div>

          {/* Donate Button */}
          <div className="ml-auto hidden md:block">
            <Link to="/donate">
              <button className="bg-teal-600 text-white px-5 lg:px-6 py-2 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-teal-100 active:scale-95">
                Donate
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-700 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100 visible' : 'top-[-400px] opacity-0 invisible'}`}>
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth // Added smooth
                to={link.href} // Changed 'href' to 'to'
                className="block px-4 py-4 text-base font-bold text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
              {link.name}
              </HashLink>
            ))}
            <div className="px-4 pt-4">
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-teal-600 text-white px-6 py-4 rounded-xl font-black shadow-lg shadow-teal-100">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
