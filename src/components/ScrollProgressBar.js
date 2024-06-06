import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: '#00f',
        transformOrigin: '0 0',
      }}
    />
  );
};

export default ScrollProgressBar;
