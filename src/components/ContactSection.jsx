import React from 'react';
import { MapPin, Clock, Phone, Send, MessageCircle } from 'lucide-react';

export default function ContactSection({ onOpenBooking }) {
  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="contact">
      
      {/* Dark Feature Card (#02093a Midnight Ink) */}
      <div className="bg-[#02093a] text-white rounded-xl p-8 md:p-12 border border-black/8 shadow-lg">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Info Column */}
          <div>
            <span className="bg-[#ffb110] text-black text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              VISIT OUR STUDIO
            </span>

            <h2 className="text-[36px] md:text-[48px] font-medium text-white leading-[1.1] tracking-[-1.89px] mb-6">
              Ready to Begin Your Yoga Journey?
            </h2>

            <p className="font-serif text-[18px] text-white/80 leading-[1.56] mb-8">
              Visit our tranquil studio in Model Town, Ludhiana or book a complimentary trial class today.
            </p>

            <div className="space-y-4 text-[15px] mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ffb110] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Studio Location:</strong>
                  <span className="text-white/80">240-R, near Krishna Hospital, Model Town, Ludhiana, Punjab 141002</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#ffb110] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Batch Timings (7 Days a Week):</strong>
                  <span className="text-white/80">Morning: 6:30 AM – 10:30 AM · Evening: 4:30 PM – 7:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ffb110] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Call / WhatsApp:</strong>
                  <a href="tel:08054900090" className="text-[#62aef0] hover:underline font-bold text-[16px]">
                    080549 00090
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={onOpenBooking}
                className="bg-[#0075de] text-white text-[14px] font-medium px-6 py-2.5 rounded-[8px] hover:bg-[#097fe8] transition-all cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Book Free Trial Slot
              </button>

              <a 
                href="https://wa.me/918054900090?text=Hello%20Aashi's%20Yog%20Studio,%20I%20would%20like%20to%20inquire%20about%20yoga%20classes!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-[14px] font-medium px-6 py-2.5 rounded-[8px] hover:opacity-90 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="rounded-xl overflow-hidden border border-white/20 h-[380px] bg-black">
            <iframe 
              src="https://maps.google.com/maps?q=240-R%20near%20Krishna%20Hospital%20Model%20Town%20Ludhiana%20Punjab%20141002&z=15&output=embed" 
              loading="lazy" 
              title="Aashi's Studio Location Map"
              className="w-full h-full border-0"
            ></iframe>
          </div>

        </div>

      </div>

    </section>
  );
}
