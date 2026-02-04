import React, { useState } from 'react';
import { Users, BookOpen, Stethoscope, Share2, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../utils/supabaseClient'; // Adjust path based on your file structure

function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // NEW: State specifically for the unique email error
  const [emailError, setEmailError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    expertise: 'Medical / Nursing',
    message: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submission to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setEmailError(''); // Reset specific email error on new submit attempt

    try {
      const { error: supabaseError } = await supabase
        .from('volunteers')
        .insert([
          {
            full_name: formData.full_name,
            phone: formData.phone,
            email: formData.email,
            expertise: formData.expertise,
            message: formData.message,
          },
        ]);

      if (supabaseError) {
        // CHECK: Postgres error code 23505 means Unique Violation (Duplicate Entry)
        if (supabaseError.code === '23505') {
          setEmailError('This email is already registered. Please use a different one.');
          setLoading(false); // Stop loading, but don't show generic error
          return; // Stop execution here
        }
        
        // If it's not a duplicate error, throw it to be caught by the generic handler
        throw supabaseError;
      }

      // Success
      setSubmitted(true);
      setFormData({ full_name: '', phone: '', email: '', expertise: 'Medical / Nursing', message: '' });
      
    } catch (err) {
      console.error('Submission error:', err);
      setError(`Failed to submit: ${err.message}`);
    } finally {
      // Only set loading false here if we didn't return early for the email error
      if (!emailError) {
        setLoading(false);
      }
    }
  };

  const roles = [
    { icon: <Stethoscope className="text-teal-500" />, title: "Medical Outreach", desc: "Nurses, doctors, and students assisting in community checkups." },
    { icon: <BookOpen className="text-blue-500" />, title: "Health Educators", desc: "Leading workshops on nutrition, hygiene, and maternal health." },
    { icon: <Share2 className="text-green-500" />, title: "Digital Advocates", desc: "Helping manage our social media and community awareness online." },
    { icon: <Users className="text-purple-500" />, title: "Logistics & Support", desc: "Helping organize events and distributing resources in the Ward." },
  ];

  return (
    <section id="volunteer" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: The Why & The Roles */}
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-6">Make an Impact with Us</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We are looking for passionate individuals to join the Ademasajida Health Network. 
              Whether you are a medical professional or just someone who wants to give back, 
              your skills can help save lives in our community.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-4">{role.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{role.title}</h4>
                  <p className="text-sm text-gray-500">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div 
            id="join-form" 
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 relative overflow-hidden shadow-xl scroll-mt-32"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 z-0"></div>
            
            {!submitted ? (
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Join the Network</h3>
                <p className="text-gray-500 mb-8 italic text-sm">Fill out this quick form and we'll reach out.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Generic Error Message Display (For non-email errors) */}
                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2 mb-4">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Phone</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0700 000 000" 
                        className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition" 
                      />
                    </div>
                  </div>

                  {/* MODIFIED EMAIL FIELD SECTION */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        if (emailError) setEmailError(''); // Clear error immediately when user starts typing
                      }}
                      placeholder="john@example.com" 
                      className={`p-3 border rounded-xl outline-none transition
                        ${emailError 
                          ? 'bg-red-50 border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500'
                        }`}
                    />
                    {/* The Red Error Text */}
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1 ml-1 font-medium animate-in slide-in-from-top-1">
                        {emailError}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Area of Expertise / Skills</label>
                    <select 
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleChange}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition"
                    >
                      <option value="Medical / Nursing">Medical / Nursing</option>
                      <option value="Education / Teaching">Education / Teaching</option>
                      <option value="General Support">General Support</option>
                      <option value="Media / Tech">Media / Tech</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Why do you want to join?</label>
                    <textarea 
                      rows="3" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about yourself..." 
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transform active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending...
                      </>
                    ) : (
                      "Send My Application"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Application Received!</h3>
                <p className="text-gray-600">Thank you for your interest. Our team will contact you via Phone or Email within 48 hours.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setEmailError(''); // Ensure error is clear if they go back
                  }} 
                  className="mt-8 text-teal-600 font-bold border-b-2 border-teal-500 hover:text-teal-700"
                >
                  Send another application
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default VolunteerSection;