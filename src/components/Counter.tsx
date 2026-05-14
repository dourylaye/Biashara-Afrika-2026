import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Counter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepValue = end / totalSteps;
    const intervalTime = (duration * 1000) / totalSteps;

    let timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};
