import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StudioGallery from './components/StudioGallery';
import ClassPrograms from './components/ClassPrograms';
import VideoSection from './components/VideoSection';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f5f4] text-[#000000] selection:bg-[#ffb110] selection:text-black">
      
      {/* Custom Pointer Cursor Effect */}
      <CustomCursor />

      {/* Header Navigation */}
      <Header onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <StudioGallery />
        <ClassPrograms onOpenBooking={() => setBookingOpen(true)} />
        <VideoSection />
        <WhyUs onOpenBooking={() => setBookingOpen(true)} />
        <Testimonials />
        <ContactSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="bg-[#f6f5f4] border-t border-black/8 py-8 text-center text-[14px] text-[#757575]">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">Aashi's Yog &amp; Fitness Studio</span>
            <span>· 240-R, Model Town, Ludhiana, Punjab</span>
          </div>
          <div className="text-[13px] text-[#615d59]">
            © {new Date().getFullYear()} Aashi's Yog Studio. Built with Notion Design System.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
      />

    </div>
  );
}
