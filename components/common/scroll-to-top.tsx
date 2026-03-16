'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 30 * 2 * Math.PI;

  return (
    <motion.div
      className="fixed right-8 bottom-8 z-50 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 text-slate-100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#f97316"
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              pathLength: scaleX,
            }}
          />
        </svg>

        <div className="relative z-10 rounded-full bg-orange-500 p-2 text-white transition-colors group-hover:bg-orange-600">
          <ArrowUp className="h-4 w-4" />
        </div>
      </button>
    </motion.div>
  );
}
