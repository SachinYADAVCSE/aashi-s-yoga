import React from 'react';
import CharacterMark from './CharacterMark';
import StatCounter from './StatCounter';
import Typewriter from './Typewriter';
import { ArrowRight, Phone, Star, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const typewriterPhrases = [
    "real hands-on posture correction, not a screen.",
    "small mat-side classes 7 days a week.",
    "morning batches from 6:30 AM in Model Town.",
    "personalized guidance for every body type."
  ];

  return (
    <section className="pt-2 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto" id="top">
      
      {/* Full-Cover Hero Card with Animated Typography & Background */}
      <div className="relative rounded-3xl overflow-hidden min-h-[620px] md:min-h-[720px] flex flex-col justify-between p-6 md:p-10 shadow-xl border border-black/10">
        
        {/* Full-Bleed Studio Image Background */}
        <img 
          src="/images/real_instructor_split.png" 
          alt="Aashi Ma'am Hanumanasana Pose in Studio" 
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-[1.02] filter contrast-[1.05]"
        />
        
        {/* Dark Overlay for Crisp White Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 z-0"></div>

        {/* Animated Vertical "Scroll Down" Indicator (Left Edge) */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-white/90 uppercase select-none">
          <span className="writing-vertical -rotate-180">Scroll Down</span>
          <div className="animate-bounce-line">
            <ChevronDown className="w-5 h-5 text-[#ffb110]" />
          </div>
        </div>

        {/* Hero Top Bar Row with Animated Number Counters */}
        <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#ffb110] text-black text-[12px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              AASHI'S STUDIO
            </span>
            <span className="text-[13px] font-semibold text-white/90">
              Model Town, Ludhiana
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-white/90 backdrop-blur-md text-[#1a212d] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#ffb110] text-[#ffb110]" />
              <StatCounter end={4.9} decimals={1} suffix="★ Rating" />
              <span className="text-black/60">
                (<StatCounter end={77} suffix="+ Reviews" />)
              </span>
            </span>
          </div>
        </div>

        {/* Center Canvas: Animated Floating "YOGA STUDIO" Typography */}
        <div className="relative z-10 my-auto py-8 text-center flex flex-col items-center justify-center select-none">
          <h1 className="text-[100px] sm:text-[160px] md:text-[230px] font-black text-white leading-none tracking-[-0.06em] uppercase drop-shadow-2xl animate-float-slow animate-text-glow">
            YOGA
          </h1>
          
          <span className="text-[26px] sm:text-[42px] md:text-[60px] font-light tracking-[0.2em] text-[#ffb110] uppercase -mt-4 sm:-mt-8 md:-mt-12 font-sans drop-shadow-md">
            STUDIO
          </span>

          {/* Typewriter Subheadline */}
          <div className="font-serif text-[18px] md:text-[22px] text-white/95 leading-[1.5] max-w-[760px] mx-auto mt-4 drop-shadow-sm min-h-[60px]">
            <span>Small mat-side classes in Model Town — </span>
            <Typewriter texts={typewriterPhrases} speed={50} delay={2200} />
          </div>
        </div>

        {/* Bottom Journey Card ("Let's start your journey together") */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl border border-black/8 p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-2 flex-shrink-0">
              <CharacterMark emoji="🧘‍♀️" borderColor="#097fe8" size="42px" />
              <CharacterMark emoji="🌸" borderColor="#f64932" size="42px" />
              <CharacterMark emoji="☀️" borderColor="#ffb110" size="42px" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[26px] font-bold text-[#000000] leading-tight">
                Let's start your <span className="font-serif italic font-normal text-[#0075de]">journey together</span>
              </h3>
              <p className="text-[14px] text-[#615d59] mt-0.5">
                Small morning &amp; evening batches in Model Town, Ludhiana · <StatCounter end={7} suffix=" days a week" />
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap w-full md:w-auto">
            <a 
              href="tel:08054900090"
              className="w-full sm:w-auto bg-[#e6f3fe] text-[#0075de] text-[14px] font-medium px-4 py-2.5 rounded-[8px] hover:bg-[#0075de] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              080549 00090
            </a>

            <button 
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#0075de] text-white text-[14px] font-medium px-6 py-2.5 rounded-[8px] hover:bg-[#097fe8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              Book Trial Class
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Notion Feature Highlights Ribbon Below Hero with Number Counters */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <div className="bg-white p-4.5 rounded-xl border border-black/8 flex items-center gap-3.5 hover:border-black/20 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-[#ffb110]/20 text-black flex items-center justify-center font-bold text-lg flex-shrink-0">
            <StatCounter end={1} suffix="00%" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-black">Hands-on Posture Adjustment</div>
            <div className="text-[12px] text-[#615d59]">Every pose is corrected live in studio</div>
          </div>
        </div>

        <div className="bg-white p-4.5 rounded-xl border border-black/8 flex items-center gap-3.5 hover:border-black/20 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-[#e6f3fe] text-[#0075de] flex items-center justify-center font-bold text-lg flex-shrink-0">
            <StatCounter end={77} suffix="+" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-black">Happy Active Students</div>
            <div className="text-[12px] text-[#615d59]">Personal care tailored for your body</div>
          </div>
        </div>

        <div className="bg-white p-4.5 rounded-xl border border-black/8 flex items-center gap-3.5 hover:border-black/20 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-[#f64932]/10 text-[#f64932] flex items-center justify-center font-bold text-lg flex-shrink-0">
            <StatCounter end={7} suffix="d" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-black">7 Days a Week Sessions</div>
            <div className="text-[12px] text-[#615d59]">Flexible morning 6:30 AM &amp; evening slots</div>
          </div>
        </div>
      </div>

    </section>
  );
}
