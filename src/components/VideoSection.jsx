import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: '15-Min Morning Energy & Surya Namaskar Flow',
      category: 'Asanas & Flow',
      bgColor: 'bg-[#ffb110]', // Marigold Accent
      textColor: 'text-black',
      tagBg: 'bg-black text-white',
      img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/inpok4MKVLM'
    },
    {
      id: 2,
      title: 'Simple Stretches for Chronic Lower Back Pain',
      category: 'Therapy & Pain Relief',
      bgColor: 'bg-[#62aef0]', // Sky Wash Accent
      textColor: 'text-black',
      tagBg: 'bg-[#02093a] text-white',
      img: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/v7SN-d4qXx0'
    },
    {
      id: 3,
      title: '10-Min Deep Pranayama Breathing for Stress Relief',
      category: 'Breathwork & Meditation',
      bgColor: 'bg-[#f64932]', // Coral Accent
      textColor: 'text-white',
      tagBg: 'bg-white text-black',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/c1Zy-6h848Q'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="videos">
      
      {/* Section Title */}
      <div className="text-center max-w-[680px] mx-auto mb-12">
        <span className="text-[12px] font-bold tracking-[0.18em] text-[#0075de] uppercase block mb-2">
          SELF PRACTICE AT HOME
        </span>
        <h2 className="text-[40px] md:text-[48px] font-medium text-[#000000] leading-[1.1] tracking-[-1.89px] mb-4">
          Featured Practice Videos
        </h2>
        <p className="font-serif text-[18px] text-[#615d59] leading-[1.56]">
          Sample our teaching style with quick home practice routines guided by Aashi ma'am.
        </p>
      </div>

      {/* Notion Accent Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((vid) => (
          <div 
            key={vid.id}
            className={`${vid.bgColor} ${vid.textColor} rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between cursor-pointer group`}
            onClick={() => setSelectedVideo(vid)}
          >
            <div>
              {/* Thumbnail with Play Overlay */}
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6 bg-black">
                <img 
                  src={vid.img} 
                  alt={vid.title} 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#0075de] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <span className={`text-[12px] font-bold px-3 py-1 rounded-full inline-block mb-3 ${vid.tagBg}`}>
                {vid.category}
              </span>

              <h3 className="text-[20px] font-bold leading-[1.3] mb-4">
                {vid.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[13px] font-semibold">
              <span>Watch Video →</span>
              <span>Free Practice</span>
            </div>

          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-[840px] overflow-hidden relative shadow-2xl animate-fadeIn">
            <div className="p-4 border-b border-black/8 flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-black">{selectedVideo.title}</h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 hover:bg-black/5 rounded-full text-black cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe 
                src={selectedVideo.embedUrl} 
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
