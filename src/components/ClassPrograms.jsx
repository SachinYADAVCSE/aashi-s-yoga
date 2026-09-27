import React, { useState } from 'react';
import { Clock, CheckCircle2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClassPrograms({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const programs = [
    {
      id: 1,
      category: 'hatha',
      badge: 'MOST POPULAR',
      badgeBg: 'bg-[#ffb110] text-black',
      title: 'Hatha & Traditional Asanas',
      subtitle: 'Foundation Alignment & Breathwork',
      duration: '60 Mins',
      timing: 'Morning & Evening Batches',
      desc: 'Classic posture holds designed to build stamina, flexibility, and spinal health under direct hands-on guided instruction.',
      benefits: [
        'Improves spine flexibility & posture alignment',
        'Enhances lung capacity through pranayama',
        'Calms the nervous system & reduces cortisol',
        'Builds foundational muscular strength'
      ],
      img: '/images/real_instructor_split.png'
    },
    {
      id: 2,
      category: 'power',
      badge: 'HIGH ENERGY',
      badgeBg: 'bg-[#f64932] text-white',
      title: 'Power Yoga & Acro Fitness',
      subtitle: 'Dynamic Calorie Burn & Balance',
      duration: '60 Mins',
      timing: 'Weight Loss Focus',
      desc: 'Energetic Vinyasa flow combining strength holds, partner acro balances, and rapid movement to burn calories.',
      benefits: [
        'Rapid calorie burn & fat reduction',
        'Core stability & partner balance training',
        'Boosts cardiovascular endurance',
        'Accelerates metabolic rate'
      ],
      img: '/images/real_group_acro.png'
    },
    {
      id: 3,
      category: 'therapy',
      badge: 'THERAPEUTIC',
      badgeBg: 'bg-[#0075de] text-white',
      title: 'Posture, Spine & Wheel Therapy',
      subtitle: 'Lumbar & Neck Pain Relief',
      duration: '45 Mins',
      timing: 'Pain Relief Focus',
      desc: 'Targeted therapeutic sequences using green yoga wheels and blocks for desk workers suffering from lower back stiffness and computer neck strain.',
      benefits: [
        'Relieves lumbar strain & sciatica discomfort',
        'Deep backbend opening with specialized yoga wheel',
        'Increases joint mobility in neck & shoulders',
        'Prevents long-term spinal degeneration'
      ],
      img: '/images/real_yoga_wheel.jpg'
    },
    {
      id: 4,
      category: 'wellness',
      badge: 'IN-STUDIO GROUP',
      badgeBg: 'bg-[#10b981] text-white',
      title: 'Group Meditation & Flexibility',
      subtitle: 'Pranayama & Hamstring Release',
      duration: '50 Mins',
      timing: 'All Flexibility Levels',
      desc: 'In-studio group sessions focusing on lotus meditation postures, seated forward folds (Kurmasana), and mental relaxation.',
      benefits: [
        'Deep hamstring and hip flexor lengthening',
        'Group energy meditation & stress release',
        'Blood pressure regulation & calming breathwork',
        'Improves daily mental clarity'
      ],
      img: '/images/real_group_class.png'
    }
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeFilter);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="classes">
      
      {/* Section Header */}
      <div className="text-center max-w-[680px] mx-auto mb-12">
        <span className="text-[12px] font-bold tracking-[0.18em] text-[#0075de] uppercase block mb-2">
          PROGRAMS FOR EVERY BODY
        </span>
        <h2 className="text-[40px] md:text-[48px] font-medium text-[#000000] leading-[1.1] tracking-[-1.89px] mb-4">
          Classes Crafted for Where You Are
        </h2>
        <p className="font-serif text-[18px] text-[#615d59] leading-[1.56]">
          Paced for beginners and long-time practitioners alike — monitored and adjusted in real time by Aashi ma'am.
        </p>
      </div>

      {/* Notion Filter Bar (Pills) */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {[
          { id: 'all', label: 'All Programs' },
          { id: 'hatha', label: 'Hatha & Asanas' },
          { id: 'power', label: 'Power & Acro' },
          { id: 'therapy', label: 'Spine & Wheel Therapy' },
          { id: 'wellness', label: 'Meditation & Flexibility' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`text-[14px] font-medium px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-[#000000] text-white shadow-xs'
                : 'bg-white text-[#615d59] border border-black/8 hover:border-black/20 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notion White Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPrograms.map((program) => (
          <div 
            key={program.id}
            className="notion-card notion-card-hover p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Header Image & Badge */}
              <div className="relative h-[240px] rounded-lg overflow-hidden mb-6 border border-black/8 bg-[#f6f5f4]">
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className={`absolute top-4 left-4 text-[12px] font-bold px-3 py-1 rounded-full shadow-xs ${program.badgeBg}`}>
                  {program.badge}
                </span>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-[13px] font-semibold text-[#757575] mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0075de]" /> {program.duration}
                </span>
                <span>{program.timing}</span>
              </div>

              {/* Card Title & Description */}
              <h3 className="text-[22px] font-bold text-[#000000] leading-[1.27] tracking-[-0.242px] mb-1">
                {program.title}
              </h3>
              <p className="text-[14px] font-medium text-[#0075de] mb-3">
                {program.subtitle}
              </p>
              <p className="text-[16px] text-[#615d59] leading-[1.5] mb-6">
                {program.desc}
              </p>

              {/* Expandable Benefits Box */}
              {expandedCard === program.id && (
                <div className="bg-[#e6f3fe]/60 border border-[#0075de]/20 p-4 rounded-lg mb-6 animate-fadeIn">
                  <span className="text-[13px] font-bold text-[#0075de] block mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Proven Benefits:
                  </span>
                  <ul className="space-y-1.5">
                    {program.benefits.map((b, idx) => (
                      <li key={idx} className="text-[13px] text-[#000000] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 border-t border-black/8 flex items-center justify-between flex-wrap gap-3">
              <button 
                onClick={() => toggleExpand(program.id)}
                className="text-[14px] font-medium text-[#000000]/90 border border-black/20 hover:bg-black/5 px-3 py-1.5 rounded-[4px] transition-colors flex items-center gap-1 cursor-pointer"
              >
                {expandedCard === program.id ? (
                  <>Hide Benefits <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View Benefits <ChevronDown className="w-4 h-4" /></>
                )}
              </button>

              <button 
                onClick={onOpenBooking}
                className="bg-[#0075de] text-white text-[14px] font-medium px-[15px] py-[6px] rounded-[8px] hover:bg-[#097fe8] transition-all cursor-pointer"
              >
                Book Slot →
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
