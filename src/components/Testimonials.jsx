import React from 'react';
import CharacterMark from './CharacterMark';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Model Town Resident · 3 Years Student',
      quote: "I joined Aashi's Studio with severe lower back stiffness from long desk hours. Within 3 weeks of personalized mat-side correction, the pain vanished. Her warmth and attention to posture detail is unmatched in Ludhiana!",
      emoji: '🧘‍♀️',
      color: '#097fe8'
    },
    {
      id: 2,
      name: 'Harpreet Kaur',
      role: 'Power Yoga Student · 1.5 Years',
      quote: "Unlike big commercial gyms where no one watches your pose, Aashi ma'am corrects every millimeter of alignment. I have lost 8 kg and gained immense core strength!",
      emoji: '🌸',
      color: '#f64932'
    },
    {
      id: 3,
      name: 'Anish Verma',
      role: 'Spine Therapy Practitioner · 2 Years',
      quote: "The morning 6:30 AM batch gives me endless energy for the entire workday. Small batch size means we get 1-on-1 focus every single day.",
      emoji: '⭐',
      color: '#ffb110'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto border-t border-black/8" id="testimonials">
      
      {/* Section Header */}
      <div className="text-center max-w-[680px] mx-auto mb-12">
        <span className="text-[12px] font-bold tracking-[0.18em] text-[#0075de] uppercase block mb-2">
          REAL STUDENT STORIES
        </span>
        <h2 className="text-[40px] md:text-[48px] font-medium text-[#000000] leading-[1.1] tracking-[-1.89px] mb-4">
          Loved by Practitioners Across Ludhiana
        </h2>
        <p className="font-serif text-[18px] text-[#615d59] leading-[1.56]">
          Here is what our long-time students say about their journey at Aashi's Studio.
        </p>
      </div>

      {/* Editorial Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="notion-card notion-card-hover p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Avatar & Rating Header */}
              <div className="flex items-center justify-between mb-6">
                <CharacterMark emoji={rev.emoji} borderColor={rev.color} size="44px" />
                <div className="flex text-[#ffb110] space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Lyon Text Editorial Pull-Quote */}
              <p className="font-serif text-[18px] text-[#615d59] leading-[1.56] mb-6 italic">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-black/8">
              <div className="text-[15px] font-bold text-[#000000]">{rev.name}</div>
              <div className="text-[12px] font-medium text-[#757575]">{rev.role}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
