import React, { useState } from 'react';
import { X, Send, Calendar, User, Phone, Clock } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    batch: 'Morning 6:30 AM – 7:30 AM'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, batch } = formData;
    
    const message = `Hello Aashi's Yog Studio, I would like to book a trial class!\nName: ${name}\nPhone: ${phone}\nPreferred Batch: ${batch}`;
    const whatsappUrl = `https://wa.me/918054900090?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      
      {/* Modal Surface */}
      <div className="bg-[#f6f5f4] rounded-xl border border-black/8 w-full max-w-[500px] p-6 md:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-black/60 hover:text-black hover:bg-black/5 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="bg-[#ffb110] text-black text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            FREE TRIAL CLASS
          </span>
          <h3 className="text-[28px] font-bold text-[#000000] leading-tight">
            Book Your Trial Slot
          </h3>
          <p className="text-[14px] text-[#615d59] mt-1">
            Reserve your mat space for a hands-on guided session with Aashi ma'am in Model Town.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-[13px] font-bold text-[#000000] mb-1.5 flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#0075de]" /> Full Name
            </label>
            <input 
              type="text" 
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-black/15 rounded-[8px] px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-[#0075de] focus:ring-1 focus:ring-[#0075de]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-[#000000] mb-1.5 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#0075de]" /> Mobile Number
            </label>
            <input 
              type="tel" 
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white border border-black/15 rounded-[8px] px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-[#0075de] focus:ring-1 focus:ring-[#0075de]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-[#000000] mb-1.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0075de]" /> Preferred Batch Time
            </label>
            <select 
              value={formData.batch}
              onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
              className="w-full bg-white border border-black/15 rounded-[8px] px-3.5 py-2.5 text-[15px] focus:outline-none focus:border-[#0075de] focus:ring-1 focus:ring-[#0075de]"
            >
              <option value="Morning 6:30 AM – 7:30 AM">Morning 6:30 AM – 7:30 AM</option>
              <option value="Morning 7:30 AM – 8:30 AM">Morning 7:30 AM – 8:30 AM</option>
              <option value="Morning 8:30 AM – 9:30 AM">Morning 8:30 AM – 9:30 AM</option>
              <option value="Evening 5:00 PM – 6:00 PM">Evening 5:00 PM – 6:00 PM</option>
              <option value="Evening 6:00 PM – 7:00 PM">Evening 6:00 PM – 7:00 PM</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#0075de] text-white text-[14px] font-medium py-3 rounded-[8px] hover:bg-[#097fe8] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm mt-6"
          >
            <Send className="w-4 h-4" /> Confirm Trial Slot via WhatsApp
          </button>

        </form>

      </div>

    </div>
  );
}
