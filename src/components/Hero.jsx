import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="hero"
      id="top"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="wrap hero-grid">
        <div className="hero-content">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="dot"></span>
            Сарыағаш қаласындағы сенімді балабақша
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Балаңыздың күні{' '}
            <span className="crayon">жылылықпен</span> толы өтетін мекен
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            «Гулжан» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын
            алаңдары және мейірімді тәрбиешілер ұжымы.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              Байланысу
            </a>
            <a href="#about" className="btn btn-ghost">
              Толығырақ білу
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="stat">
              <b>4</b>
              <span>жас ерекшелігіне сай топ</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>санитарлық нормаларға сай</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-blob hb-1"></div>
          <div className="hero-blob hb-2"></div>
          <div className="hero-icon-card hic-1">🧸</div>
          <div className="hero-icon-card hic-2">☀️</div>
          <div className="hero-icon-card hic-3">🌳</div>
        </motion.div>
      </div>
    </motion.section>
  );
}