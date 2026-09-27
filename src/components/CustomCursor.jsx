import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide cursor on touch devices / small screens
    if (window.innerWidth <= 992) {
      setIsVisible(false);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };

    let animationFrameId;

    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      setFollowerPosition({ x: followerX, y: followerY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    // Add hover listener to interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, .notion-card, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-100 ease-out ${
          isHovered
            ? 'w-6 h-6 bg-[#ffb110] opacity-90 shadow-[0_0_15px_#ffb110]'
            : 'w-3 h-3 bg-[#0075de]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Outer Smooth Follower Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border-1.5 transition-all duration-300 ease-out ${
          isHovered
            ? 'w-16 h-16 border-[#0075de] bg-[#0075de]/10 scale-110 shadow-lg'
            : 'w-10 h-10 border-[#000000]/40'
        }`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />
    </>
  );
}
