import React, { useState, useEffect } from 'react';

export default function Typewriter({ texts = [], speed = 60, delay = 2500 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex] || '';

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className="inline-block">
      <span>{currentText}</span>
      <span className="inline-block w-[2px] h-[1.1em] bg-[#ffb110] ml-1 align-middle animate-pulse"></span>
    </span>
  );
}
