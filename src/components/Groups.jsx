import React, { useState } from 'react';
import { GROUPS } from '../data/media';
import Lightbox from './Lightbox';

const TONES = ['rose', 'leaf', 'gold', 'lav', 'rose', 'leaf', 'gold', 'lav', 'rose', 'leaf'];

// Топтар — қысқа тізім; бетін басқанда топтың барлық суреті үлкен терезеде ашылады.
export default function Groups() {
  const [open, setOpen] = useState(null); // { g: топ индексі, i: сурет индексі }
  const group = open ? GROUPS[open.g] : null;

  return (
    <section className="groups" id="groups">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Топтар мен бөлмелер</p>
          <h2>Балаңызға арналған <em>{GROUPS.length} жайлы топ</em></h2>
          <p>Топты таңдаңыз — киім ілу, ойын, ұйқы және жуыну бөлмелерінің суреттері толық ашылады.</p>
        </div>

        <ul className="gl-list">
          {GROUPS.map((g, i) => (
            <li key={g.slug} className="reveal" style={{ transitionDelay: `${(i % 2) * 60}ms` }}>
              <button type="button" className={`gl-row tone-${TONES[i]}`} onClick={() => setOpen({ g: i, i: 0 })}>
                <span className="gl-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="gl-thumb"><img src={g.photos[0].src} alt="" loading="lazy" /></span>
                <span className="gl-text">
                  <b>«{g.name}» тобы</b>
                  <small>{g.photos.length} сурет</small>
                </span>
                <span className="gl-go">Көру →</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {group && (
        <Lightbox
          title={`«${group.name}» тобы`}
          items={group.photos}
          index={open.i}
          onChange={(i) => setOpen({ g: open.g, i })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
