import React, { useState } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f6f5f4]/90 backdrop-blur-md border-b border-black/8 shadow-[0_3px_9px_rgba(0,0,0,0.03)]">
      
      {/* Announcement Bar */}
      <div className="bg-[#000000] text-white text-[12px] font-medium py-1.5 px-4 text-center tracking-wide">
        <span className="text-[#ffb110] font-semibold">✨ NEW BATCHES OPEN:</span> Morning sessions from 6:30 AM · 7 Days a Week in Model Town, Ludhiana
      </div>

      <div className="max-w-[1440px] mx-auto px-6 h-[64px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#top" className="flex flex-col group">
          <span className="font-hand text-[28px] font-bold text-[#000000] leading-none group-hover:text-[#0075de] transition-colors">
            Aashi's
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#757575] uppercase -mt-1">
            YOG & FITNESS STUDIO
          </span>
        </a>

        {/* Muted Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#top" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Home
          </a>
          <a href="#gallery" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Real Poses
          </a>
          <a href="#classes" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Classes
          </a>
          <a href="#videos" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Videos
          </a>
          <a href="#why-us" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Why Aashi's
          </a>
          <a href="#testimonials" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-[#000000]/60 hover:text-[#000000] font-medium text-[14px] px-3 py-2 rounded-[8px] transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <a 
            href="tel:08054900090" 
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#e6f3fe] text-[#0075de] text-[14px] font-medium px-[15px] py-[6px] rounded-[8px] hover:bg-[#0075de] hover:text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            080549 00090
          </a>

          <button 
            onClick={onOpenBooking}
            className="bg-[#0075de] text-white text-[14px] font-medium px-[15px] py-[6px] rounded-[8px] hover:bg-[#097fe8] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Trial Class
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black/70 hover:text-black rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-black/8 px-6 py-4 space-y-2 animate-fadeIn">
          <a href="#top" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Home</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Real Poses</a>
          <a href="#classes" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Classes</a>
          <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Videos</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Why Aashi's</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black/80 font-medium text-[15px]">Contact</a>
        </div>
      )}
    </header>
  );
}
