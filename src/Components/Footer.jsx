import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: About / Brand */}
        <div>
          <HashLink smooth to="/#top" className="inline-block group">
            {/* Flex container to align Logo and Text */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="Images/Ademsa-logo.jpg" 
                alt="Ademasajida Logo" 
                className="h-12 w-12 rounded-full border-2 border-teal-500 shadow-sm" 
              />
              <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition">
                Ademasajida Health Network
              </h2>
            </div>
          </HashLink>
          <p className="text-gray-400 leading-relaxed">
            We are dedicated to promoting health awareness, empowering communities, 
            and fostering impactful partnerships for a healthier future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition flex items-center gap-2">
                About Us
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#programs" className="hover:text-blue-400 transition flex items-center gap-2">
                Our Programs
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#impact" className="hover:text-blue-400 transition flex items-center gap-2">
                Events & Activities
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#volunteer" className="hover:text-blue-400 transition flex items-center gap-2">
                Contact / Volunteer
              </HashLink>
            </li>
            <li>
              <Link to="/donate" className="text-teal-400 font-bold hover:text-white transition flex items-center gap-2">
                Donate Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-teal-500 shrink-0" /> 
              <span>Habaswein, Wajir</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-teal-500 shrink-0" /> 
              {/* Added clickable phone link */}
              <a href="tel:+254114133796" className="hover:text-teal-400 transition">
                +254 114 133 796
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-teal-500 shrink-0" /> 
              {/* Added clickable email link */}
              <a href="mailto:info@ademasajidahealthnetwork.com" className="hover:text-teal-400 transition">
               info@ademasajidahealthnetwork.com
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-5 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Ademasajida Health Network</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;