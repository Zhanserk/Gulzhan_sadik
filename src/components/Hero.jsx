import React from 'react';
import { KINDERGARTEN, PEOPLE } from '../data/site';
import { EXTERIOR, GROUPS } from '../data/media';
import { Flower, Leaf, Wave } from './Decor';
import { Bloom, Garland, WateringCan } from './Garden';

// Арка гүлдері: фото жартылай шеңбері мен екі жағын жиектейді (пайызбен, 420×540 қорап ішінде)
const ARCH = (() => {
  const pts = [];
  for (let i = 0; i <= 12; i += 1) {
    const a = Math.PI - (Math.PI * i) / 12;
    pts.push([50 + 42.9 * Math.cos(a), 40 - 33.3 * Math.sin(a)]);
  }
  for (let k = 1; k <= 5; k += 1) {
    const y = 40 + k * 10.4;
    pts.push([7.1, y], [92.9, y]);
  }
  return pts.map(([x, y], i) => ({
    x, y,
    kind: ['rose', 'daisy', 'rose', 'leaf', 'rose', 'daisy'][i % 6],
    color: ['#e8326f', '#ffffff', '#f6b93b', '#2faa6e', '#ff6b97', '#ffffff'][i % 6],
    size: 34 + ((i * 11) % 5) * 7,
    delay: (i % 7) * 0.4,
  }));
})();

const BED = Array.from({ length: 34 }, (_, i) => ({
  left: `${0.5 + i * 2.95}%`,
  type: ['lavender', 'daisy', 'rose', 'lavender', 'rose', 'daisy'][i % 6],
  color: ['#8e6bff', '#fff', '#e8326f', '#a98bff', '#ff6b97', '#fff'][i % 6],
  width: 26 + ((i * 5) % 4) * 6,
  delay: 0.2 + (i % 12) * 0.12,
}));
const FIREFLIES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 96 + 2}%`,
  top: `${(i * 23) % 70 + 12}%`,
  delay: (i % 8) * 0.9,
  dur: 7 + (i % 5) * 2,
}));
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 53) % 98}%`,
  delay: (i % 7) * 1.7,
  dur: 11 + (i % 5) * 2.5,
  size: 12 + (i % 4) * 4,
}));

export default function Hero() {
  const gate = EXTERIOR[0];

  return (
    <section className="hero" id="top">
      <div className="bokeh" aria-hidden="true" />
      <Garland className="garland" />
      <div className="fireflies" aria-hidden="true">
        {FIREFLIES.map((f, i) => (
          <i key={i} style={{ left: f.left, top: f.top, animationDelay: `${f.delay}s`, animationDuration: `${f.dur}s` }} />
        ))}
      </div>
      <div className="petals" aria-hidden="true">
        {PETALS.map((p, i) => (
          <i key={i} style={{ left: p.left, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
        ))}
      </div>
      <Leaf className="lf lf-a" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="chip"><Flower className="chip-flower" /> {KINDERGARTEN.city} · сенімді балабақша</p>
          <h1>
            Балаңыздың күні <em>жылылықпен</em> толы өтетін мекен
          </h1>
          <p className="lead">
            «Гулжан» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер ұжымы.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Байланысу</a>
            <a href="#groups" className="btn btn-line">Топтарды көру →</a>
          </div>
          <ul className="hero-stats">
            <li><b>{GROUPS.length}</b><span>жас тобы</span></li>
            <li><b>{PEOPLE.length}</b><span>педагогикалық ұжым</span></li>
            <li><b>100%</b><span>санитарлық нормаларға сай</span></li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="garden-frame">
            <div className="hero-arch">
              <img src={gate.src} alt={gate.caption} />
            </div>
            {ARCH.map((f, i) =>
              f.kind === 'leaf' ? (
                <Leaf key={i} className="arch-bit arch-leaf" style={{ left: `${f.x}%`, top: `${f.y}%`, width: f.size * 0.8, animationDelay: `${f.delay}s` }} />
              ) : f.kind === 'daisy' ? (
                <Flower key={i} className="arch-bit arch-flower" style={{ left: `${f.x}%`, top: `${f.y}%`, width: f.size, color: f.color, animationDelay: `${f.delay}s` }} />
              ) : (
                <Flower key={i} className="arch-bit arch-flower" style={{ left: `${f.x}%`, top: `${f.y}%`, width: f.size, color: f.color, animationDelay: `${f.delay}s` }} />
              ),
            )}
            <div className="stk stk-a">🌸 Гүлдей ұқыпты<small>таза, жарық бөлмелер</small></div>
            <div className="stk stk-b">🧸 Жылы ұжым</div>
          </div>
        </div>
      </div>

      <div className="can-wrap" aria-hidden="true">
        <WateringCan className="can" />
        <i className="drop" /><i className="drop" /><i className="drop" />
      </div>
      <div className="bed" aria-hidden="true">
        {BED.map((b, i) => (
          <span key={i} className="bed-item" style={{ left: b.left, width: b.width, animationDelay: `${b.delay}s` }}>
            <Bloom type={b.type} className="bed-bloom" style={{ color: b.color, animationDelay: `${b.delay}s` }} />
          </span>
        ))}
      </div>
      <Wave className="hero-wave" />
    </section>
  );
}
