import React from 'react';
import CharacterMark from './CharacterMark';
import { ShieldCheck, Users, Sun, CheckCircle } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="why-us">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Features */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CharacterMark emoji="🌟" borderColor="#ffb110" size="36px" />
            <span className="text-[12px] font-bold tracking-[0.18em] text-[#0075de] uppercase">
              THE STUDIO DIFFERENCE
            </span>
          </div>

          <h2 className="text-[40px] md:text-[48px] font-medium text-[#000000] leading-[1.1] tracking-[-1.89px] mb-6">
            Why Students Stay With Us For Years
          </h2>

          <p className="font-serif text-[18px] text-[#615d59] leading-[1.56] mb-8">
            Unlike crowded commercial gyms or video streaming apps, Aashi's Studio focuses on genuine personal care, proper posture alignment, and progressive growth.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-black/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#e6f3fe] text-[#0075de] flex items-center justify-center font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-[#000000] mb-1">
                  Real Mat-Side Hands-on Correction
                </h4>
                <p className="text-[15px] text-[#615d59] leading-[1.5]">
                  Every movement is watched in real-time. Aashi ma'am ensures your posture is safe and effective to prevent long-term injury.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#ffb110]/20 text-black flex items-center justify-center font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-[#000000] mb-1">
                  Small Intimate Batch Sizes
                </h4>
                <p className="text-[15px] text-[#615d59] leading-[1.5]">
                  We restrict batch numbers so every student receives individual attention tailored to their body's unique flexibility level.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#f64932]/10 text-[#f64932] flex items-center justify-center font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-[#000000] mb-1">
                  7 Days a Week Flexibility
                </h4>
                <p className="text-[15px] text-[#615d59] leading-[1.5]">
                  Morning slots from 6:30 AM and evening options ensure your practice never pauses due to busy work schedules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accent Feature Card (#ffb110 Marigold Panel) */}
        <div className="bg-[#ffb110] rounded-xl p-8 md:p-10 text-black flex flex-col justify-between relative overflow-hidden">
          
          <div className="mb-8">
            <span className="bg-black text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              STUDIO GUARANTEE
            </span>
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.15] mb-4">
              Hands-On Guidance From Day One.
            </h3>
            <p className="text-[16px] text-black/80 font-medium leading-[1.5]">
              Whether you are a beginner taking your first mat pose or looking to cure chronic back pain, you are never alone on your mat.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 font-semibold text-[15px]">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
              <span>Model Town, Ludhiana's Most Trusted Studio</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-[15px]">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
              <span>Certified Hatha &amp; Vinyasa Instructor</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-[15px]">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
              <span>No Screens — Pure In-Person Connection</span>
            </div>
          </div>

          <button 
            onClick={onOpenBooking}
            className="w-full bg-[#000000] text-white text-[14px] font-medium py-3 rounded-[8px] hover:bg-[#111111] transition-all cursor-pointer shadow-md"
          >
            Claim Your Free Trial Slot →
          </button>

        </div>

      </div>

    </section>
  );
}
