
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Residential Roofing',
    urgency: 'Low',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-12 text-center space-y-6">
        <CheckCircle2 size={80} className="text-black mx-auto" />
        <h3 className="text-4xl font-black uppercase tracking-tighter">Sent.</h3>
        <p className="text-lg text-gray-500 font-medium">
          We'll call you at {formData.phone} within 15 minutes.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-black text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Request Help<span className="text-primaryAccent">.</span></h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-transparent border-b-2 border-gray-100 focus:border-black py-2 font-bold outline-none transition-all placeholder:text-gray-200"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</label>
            <input 
              required
              type="tel" 
              className="w-full bg-transparent border-b-2 border-gray-100 focus:border-black py-2 font-bold outline-none transition-all placeholder:text-gray-200"
              placeholder="(000) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Urgency</label>
          <select 
            className="w-full bg-transparent border-b-2 border-gray-100 focus:border-black py-2 font-bold outline-none cursor-pointer"
            value={formData.urgency}
            onChange={(e) => setFormData({...formData, urgency: e.target.value})}
          >
            <option value="Emergency">Urgent Response</option>
            <option value="Soon">Next 24 Hours</option>
            <option value="Low">General Quote</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Details</label>
          <textarea 
            rows={3}
            className="w-full bg-transparent border-b-2 border-gray-100 focus:border-black py-2 font-bold outline-none transition-all placeholder:text-gray-200 resize-none"
            placeholder="What's going on?"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-black text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primaryAccent hover:text-black transition-all"
        >
          Dispatch Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
