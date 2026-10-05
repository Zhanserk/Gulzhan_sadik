import React from 'react';
import { EXTERIOR } from '../data/media';

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Галерея</div>
          <h2>Балабақшамыздың ауласы</h2>
          <p>Қақпадан бастап ойын алаңына дейін — біздің сыртқы көрінісіміз.</p>
        </div>

        <div className="gallery-grid">
          {EXTERIOR.map((p) => (
            <figure key={p.src} className="gallery-item">
              <img src={p.src} alt={p.caption} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
