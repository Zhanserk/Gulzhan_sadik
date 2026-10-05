import React, { useState } from 'react';
import { EXTERIOR } from '../data/media';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Галерея</p>
          <h2>Балабақшамыздың <em>ауласы</em></h2>
          <p>Қақпадан бастап ойын алаңына дейін — біздің сыртқы көрінісіміз.</p>
        </div>

        <div className="mosaic">
          {EXTERIOR.map((p, i) => (
            <button type="button" key={p.src} className={`mosaic-item m${i}`} aria-label={p.caption} onClick={() => setOpen(i)}>
              <img src={p.src} alt={p.caption} loading="lazy" />
              <span>{p.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox title="Балабақша ауласы" items={EXTERIOR} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
