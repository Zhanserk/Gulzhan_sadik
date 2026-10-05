import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="logo" onClick={closeMenu}>
          <div className="logo-mark">🧸</div>
          <span className="logo-title">GULZHAN</span>
        </a>

        {/* Десктопное меню */}
        <nav className="links">
          <a href="#about">Біз туралы</a>
          <a href="#groups">Топтар</a>
          <a href="#team">Ұжым</a>
          <a href="#day">Күн тәртібі</a>
          <a href="#gallery">Галерея</a>
          <a href="#trust">Құжаттар</a>
          <a href="#contact">Байланыс</a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary desktop-cta">
            Өтінім қалдыру
          </a>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <a href="#about" onClick={closeMenu}>Біз туралы</a>
            <a href="#groups" onClick={closeMenu}>Топтар</a>
            <a href="#team" onClick={closeMenu}>Ұжым</a>
            <a href="#day" onClick={closeMenu}>Күн тәртібі</a>
            <a href="#gallery" onClick={closeMenu}>Галерея</a>
            <a href="#trust" onClick={closeMenu}>Құжаттар</a>
            <a href="#contact" onClick={closeMenu}>Байланыс</a>
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
              Өтінім қалдыру
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}