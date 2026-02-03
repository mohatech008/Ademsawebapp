import React from "react";
import { HashLink } from 'react-router-hash-link';
function HeroSection() {
  return (
    <header className="relative pt-8 md:pt-20 min-h-[100svh] flex items-center justify-center overflow-hidden">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/Event-launch.jpeg"
          alt="Health Awareness Outreach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/85 sm:from-blue-900/90 via-blue-900/60 to-teal-500/40"></div>
      </div>

      {/* Floating Shapes */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        {/* Tag */}
        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 text-[11px] md:text-md font-bold tracking-widest text-teal-300 uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          Ademasajida Health Network
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
          Empowering Health,
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">
            Enriching Communities
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          “Prevention Today, Healthier Communities Tomorrow.”
          <br className="hidden md:block" />
          Join us in delivering impactful initiatives across Ademasajida Ward.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <HashLink smooth to="/#programs">
          <button className="w-full sm:w-auto group relative px-8 py-3 md:py-4 bg-teal-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl transition hover:bg-teal-600 active:scale-95">
            <span className="relative z-10">Explore Programs</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          </HashLink>
          
          <HashLink smooth to="/#volunteer">
          <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition active:scale-95">
            Join Our Network
          </button>
          </HashLink>
        </div>

        {/* Stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-teal-300 text-xl md:text-2xl font-bold">100%</p>
            <p className="text-gray-300 text-[11px] md:text-xs uppercase tracking-widest">
              Community Focused
            </p>
          </div>

          <div className="text-center">
            <p className="text-teal-300 text-xl md:text-2xl font-bold">Ademasajida</p>
            <p className="text-gray-300 text-[11px] md:text-xs uppercase tracking-widest">
               Ward
            </p>
          </div>

          <div className="hidden md:block text-center">
            <p className="text-teal-300 text-2xl font-bold">24/7</p>
            <p className="text-gray-300 text-xs uppercase tracking-widest">
              Health Advocacy
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="block w-full h-[40px] sm:h-[60px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,
            26.09,214.34,3V120H0V95.8C58,117.26,
            128.5,123.61,197.33,114.62,242.27,
            108.78,284.4,93.68,321.39,56.44Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </header>
  );
}

export default HeroSection;
