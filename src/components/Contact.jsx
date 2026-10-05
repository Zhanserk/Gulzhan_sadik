import React from 'react';
import { KINDERGARTEN as K } from '../data/site';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-card reveal">
          <p className="kicker">Байланыс</p>
          <h2>Бізбен хабарласыңыз</h2>
          <dl className="contact-list">
            <div><dt>📍 Мекенжай</dt><dd><a href={K.mapUrl} target="_blank" rel="noreferrer">{K.address}</a></dd></div>
            <div><dt>📞 Телефон</dt><dd><a href={`https://wa.me/${K.whatsapp}`} target="_blank" rel="noreferrer">{K.phone} (WhatsApp)</a></dd></div>
            <div><dt>📷 Instagram</dt><dd><a href={`https://www.instagram.com/${K.instagram}`} target="_blank" rel="noreferrer">@{K.instagram}</a></dd></div>
            <div><dt>🕗 Жұмыс уақыты</dt><dd>{K.hours}</dd></div>
          </dl>
          <a className="btn btn-gold" href={`https://wa.me/${K.whatsapp}?text=${encodeURIComponent('Сәлеметсіз бе! Балабақшада орын туралы білгім келеді.')}`} target="_blank" rel="noreferrer">
            WhatsApp-қа жазу
          </a>
        </div>

        <div className="map reveal">
          <iframe
            title="«Гулжан» бөбекжай балабақшасы мекенжайы"
            src={K.mapEmbed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
