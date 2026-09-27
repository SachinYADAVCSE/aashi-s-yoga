import React from 'react';
import CharacterMark from './CharacterMark';

export default function StudioGallery() {
  const photos = [
    {
      id: 1,
      title: 'Hanumanasana (Full Split Pose)',
      category: 'Advanced Asana',
      desc: 'Demonstrated by Aashi ma\'am at our Model Town studio with yoga blocks & props wall backdrop.',
      img: '/images/real_instructor_split.png',
    },
    {
      id: 2,
      title: 'Supported Backbend Wheel Inversion',
      category: 'Spine & Wheel Therapy',
      desc: 'Using specialized green yoga wheels for deep spinal opening and shoulder relief.',
      img: '/images/real_yoga_wheel.jpg',
    },
    {
      id: 3,
      title: 'Group Acro-Yoga Downward Pyramid',
      category: 'Team Building Asana',
      desc: 'Advanced students demonstrating partner stability, balance, and trust.',
      img: '/images/real_group_acro.png',
    },
    {
      id: 4,
      title: 'Group Meditation & Pranayama Session',
      category: 'In-Studio Batches',
      desc: 'Morning batch practicing guided breathwork and mindfulness on colorful mats.',
      img: '/images/real_group_class.png',
    },
    {
      id: 5,
      title: 'Kurmasana (Seated Forward Stretch)',
      category: 'Flexibility Training',
      desc: 'Deep hamstring, hip, and lower back release performed on leaf-pattern mat.',
      img: '/images/real_forward_fold.png',
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="gallery">
      
      {/* Section Header */}
      <div className="text-center max-w-[720px] mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <CharacterMark emoji="📸" borderColor="#ffb110" size="38px" />
          <span className="text-[12px] font-bold tracking-[0.18em] text-[#0075de] uppercase">
            REAL POSES &amp; IN-STUDIO PRACTICE
          </span>
        </div>
        <h2 className="text-[40px] md:text-[48px] font-medium text-[#000000] leading-[1.1] tracking-[-1.89px] mb-4">
          Real Students, Authentic Poses &amp; Studio Life
        </h2>
        <p className="font-serif text-[18px] text-[#615d59] leading-[1.56]">
          Take a look inside Aashi's Studio in Model Town, Ludhiana — from beginner alignment to advanced prop-supported inversions.
        </p>
      </div>

      {/* Grid of Real Photos (Fixed height images, NO white gaps) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((item) => (
          <div 
            key={item.id}
            className="notion-card notion-card-hover flex flex-col justify-between overflow-hidden group h-full"
          >
            <div>
              {/* Image Container - Fixed height matching card ratio */}
              <div className="relative h-[240px] md:h-[280px] w-full bg-black/5 overflow-hidden border-b border-black/8">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs text-white text-[12px] font-bold px-3 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-6">
                <h3 className="text-[19px] font-bold text-[#000000] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#615d59] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <span className="text-[12px] font-bold text-[#0075de] tracking-wide uppercase">
                Model Town Studio · In-Person
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
