import React from 'react';
import { KINDERGARTEN as K, NAV } from '../data/site';
import { Flower } from './Decor';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-main">
        <div>
          <div className="foot-logo"><Flower className="brand-flower" /> <b>{K.short}</b></div>
          <p>Балаңыздың жарқын болашағы, сапалы білімі мен қауіпсіз дамуы үшін сенімді мекен.</p>
        </div>
        <div>
          <h4>Байланыс</h4>
          <p>📍 {K.address}</p>
          <p>📱 <a href={`https://wa.me/${K.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: {K.phone}</a></p>
          <p>📷 <a href={`https://www.instagram.com/${K.instagram}`} target="_blank" rel="noreferrer">@{K.instagram}</a></p>
          <p>🕗 {K.hours}</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <ul>{NAV.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        </div>
      </div>
      <p className="wrap foot-copy">© {new Date().getFullYear()} {K.legal}. Барлық құқықтар қорғалған.</p>
    </footer>
  );
}
