import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-main">
          <div className="foot-brand">
            <div className="logo" style={{ color: '#fff' }}>
              <div className="logo-mark">🧸</div>
              <span className="logo-title" style={{ color: '#fff' }}>GULZHAN</span>
            </div>
            <p className="foot-desc">
              Балаңыздың жарқын болашағы, сапалы білімі мен қауіпсіз дамуы үшін сенімді мекен.
            </p>
          </div>

          <div className="foot-info">
            <h4>Байланыс</h4>
            <p>📍 Қазақстан Республикасы, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қаласы, Қазыбек би көшесі, N10A</p>
            <p>
              📱{' '}
              <a href="https://wa.me/77781005619" target="_blank" rel="noreferrer">
                WhatsApp: +7 778 100 56 19
              </a>
            </p>
            <p>
              📷{' '}
              <a href="https://www.instagram.com/gulzhan_balabaksha" target="_blank" rel="noreferrer">
                @gulzhan_balabaksha
              </a>
            </p>
            <p>🕗 Дүйсенбі – Жұма, 08:00 – 18:30</p>
          </div>

          <div className="foot-links">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#about">Біз туралы</a></li>
              <li><a href="#groups">Топтар</a></li>
              <li><a href="#team">Ұжым</a></li>
              <li><a href="#day">Күн тәртібі</a></li>
              <li><a href="#gallery">Галерея</a></li>
              <li><a href="#trust">Құжаттар</a></li>
              <li><a href="#contact">Байланыс</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} «Гулжан» бөбекжай балабақшасы. Барлық құқықтар қорғалған.</div>
        </div>
      </div>
    </footer>
  );
}