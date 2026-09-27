import React from 'react';

export default function CharacterMark({ emoji = "🧘‍♀️", borderColor = "#097fe8", size = "42px" }) {
  return (
    <div 
      className="inline-flex items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-110 select-none shadow-xs"
      style={{
        width: size,
        height: size,
        border: `2px solid ${borderColor}`,
      }}
    >
      <span className="text-xl leading-none">{emoji}</span>
    </div>
  );
}
