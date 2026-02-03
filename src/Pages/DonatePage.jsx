import React, { useState } from 'react';
import { CreditCard, Smartphone, Heart, CheckCircle, ShieldCheck, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient'; // <--- Ensure this path is correct for your project!

function DonatePage() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [method, setMethod] = useState('mpesa'); 
  
  // NEW STATE VARIABLES
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // To show success/error messages

  const handleDonate = async (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? customAmount : amount;
    
    // 1. CLEAR PREVIOUS STATUS
    setStatus(null);

    // 2. HANDLE M-PESA LOGIC
    if (method === 'mpesa') {
      setLoading(true);

      // Format phone: remove spaces, handle leading 0
      let formattedPhone = phoneNumber.replace(/\s+/g, '');
      if (formattedPhone.startsWith('0')) formattedPhone = '254' + formattedPhone.slice(1);
      if (formattedPhone.startsWith('+')) formattedPhone = formattedPhone.slice(1);

      try {
        // CALL SUPABASE EDGE FUNCTION
        const { data, error } = await supabase.functions.invoke('mpesa-stk', {
          body: { 
            phoneNumber: formattedPhone, 
            amount: finalAmount 
          },
        });

        if (error) throw error;

        // CHECK RESPONSE FROM SAFARICOM
        if (data.ResponseCode === "0") {
          setStatus({ type: 'success', msg: `✅ Request sent! Check your phone to pay KES ${finalAmount}` });
        } else {
          setStatus({ type: 'error', msg: `❌ Error: ${data.errorMessage || "Could not initiate payment"}` });
        }

      } catch (err) {
        console.error(err);
        setStatus({ type: 'error', msg: "❌ Connection failed. Please try again." });
      } finally {
        setLoading(false);
      }
    } else {
      // Logic for Card/PayPal would go here
      alert(`Card integration coming soon for KES ${finalAmount}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-20">
      {/* Header / Hero */}
      <div className="bg-teal-700 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Support Our Mission</h1>
        <p className="text-lg text-teal-100 max-w-2xl mx-auto">
          Your contribution provides medical supplies, health education, and critical care 
          to families in the Ademasajida community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: The Impact */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">How your money helps</h3>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-teal-600">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">KES 1,000</h4>
                <p className="text-sm text-gray-600">Provides a basic medical checkup kit for one family.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">KES 5,000</h4>
                <p className="text-sm text-gray-600">Sponsors a community hygiene workshop for 50 people.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-purple-600">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">KES 10,000+</h4>
                <p className="text-sm text-gray-600">Helps digitize records and improve logistics for outreach.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="text-teal-600 font-bold hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h3>
          
          <form onSubmit={handleDonate}>
            {/* Amount Selection */}
            <label className="block text-sm font-bold text-gray-400 uppercase mb-3">Select Amount (KES)</label>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[500, 1000, 5000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => { setAmount(val); setCustomAmount(''); }}
                  className={`py-3 rounded-xl font-bold border transition-all ${
                    amount === val && !customAmount
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md transform scale-105' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-teal-400'
                  }`}
                >
                  {val.toLocaleString()}
                </button>
              ))}
            </div>
            
            <div className="mb-8">
              <input
                type="number"
                placeholder="Enter Custom Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none font-bold text-gray-700"
              />
            </div>

            {/* Payment Method Tabs */}
            <label className="block text-sm font-bold text-gray-400 uppercase mb-3">Payment Method</label>
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setMethod('mpesa')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all ${
                  method === 'mpesa' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Smartphone size={18} /> M-Pesa
              </button>
              <button
                type="button"
                onClick={() => setMethod('card')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all ${
                  method === 'card' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <CreditCard size={18} /> Card / PayPal
              </button>
            </div>

            {/* Conditional Inputs based on Method */}
            {method === 'mpesa' ? (
              <div className="space-y-4 mb-6 animate-in fade-in">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">M-Pesa Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="07XX XXX XXX" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} // Capture the input
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" 
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-6 animate-in fade-in">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Email Address</label>
                  <input required type="email" placeholder="you@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
            )}

            {/* STATUS MESSAGE (Success or Error) */}
            {status && (
              <div className={`mb-4 p-3 rounded-lg text-sm font-bold text-center ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.msg}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading} // Disable while processing
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-teal-700 transform active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Processing...
                </>
              ) : (
                `Donate KES ${customAmount ? Number(customAmount).toLocaleString() : amount.toLocaleString()}`
              )}
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
              <CheckCircle size={12} /> Secure SSL Encrypted Transaction
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;