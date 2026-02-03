import React from 'react';
import { Target, Eye, Heart } from 'lucide-react'; // Optional: Use Lucide icons or SVG equivalents

function MissionSection() {
  return (
    <section className="py-8 bg-white overflow-hidden ">
      <div className="w-full mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-3 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
              Driving Change Through <br/> 
              <span className="text-teal-500 italic">Compassionate Action.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium md:max-w-xs border-l-4 border-teal-500 pl-4">
            "Prevention Today, Healthier Communities Tomorrow."
          </p>
        </div>

        {/* Main Content: Image & Info Grid */}
        <div className="w- full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Modern Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden transform  transition-transform duration-500">
              <img 
                src="/Images/Banner.jpeg" // Use an image of a health professional or community meeting
                alt="Community Health Work" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-100 rounded-3xl -z-10"></div>
          </div>

          {/* Right: Mission & Vision Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Mission Card */}
            <div className="group p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-teal-500 p-3 rounded-xl text-white shadow-lg shadow-teal-200">
                   <Target size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To promote community health through education, advocacy, service delivery, and partnerships, 
                    while addressing local health challenges such as maternal and child health, 
                    infectious diseases, nutrition, and environmental health.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-200">
                   <Eye size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A healthy, resilient, and empowered community in Ademasajida Ward where every 
                    individual has access to quality healthcare and preventive health services.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Link */}
            <a href="#volunteer" className="pt-4 flex items-center gap-4 text-teal-600 font-bold cursor-pointer group">
               <span className="border-b-2 border-teal-500 pb-1">Become a volunteer today</span>
               <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all">
                  →
               </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionSection;