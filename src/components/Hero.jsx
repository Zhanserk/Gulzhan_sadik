import React from 'react';
import { KINDERGARTEN, PEOPLE } from '../data/site';
import { EXTERIOR, GROUPS } from '../data/media';
import { Flower, Leaf, Wave } from './Decor';
import { Basket, Bloom, Butterfly, Fence, Head, Vine, WateringCan } from './Garden';

const SHADES = ['#ff6b97', '#e8326f', '#ffb3c8', '#ff8fb1', '#c9a3ff', '#ffb08a', '#ffffff', '#a98bff'];

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
  const kinds = ['rose', 'peony', 'leaf', 'cosmos', 'rose', 'tulip', 'leaf', 'daisy', 'peony'];
  return pts.map(([x, y], i) => ({
    x, y,
    kind: kinds[i % kinds.length],
    color: SHADES[(i * 3) % SHADES.length === 6 ? 0 : (i * 3) % SHADES.length],
    size: 38 + ((i * 11) % 5) * 7,
    delay: (i % 7) * 0.4,
  }));
})();

// Екі қабатты гүлзар: артта биік, алдында аласа
const BACK = Array.from({ length: 20 }, (_, i) => ({
  left: `${0 + i * 5.2}%`,
  type: ['hydrangea', 'lavender', 'tulip', 'peony', 'lavender', 'cosmos'][i % 6],
  color: ['#c9a3ff', '#a98bff', '#ff8fb1', '#ff6b97', '#8e6bff', '#ffb08a'][i % 6],
  width: 44 + ((i * 7) % 4) * 6,
  delay: 0.2 + (i % 10) * 0.1,
}));
const FRONT = Array.from({ length: 34 }, (_, i) => ({
  left: `${0.5 + i * 2.95}%`,
  type: ['rose', 'daisy', 'cosmos', 'rose', 'tulip', 'daisy', 'peony'][i % 7],
  color: SHADES[i % SHADES.length],
  width: 26 + ((i * 5) % 4) * 6,
  delay: 0.4 + (i % 12) * 0.12,
}));
const SPARKLES = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 37) % 94 + 3}%`,
  top: `${(i * 23) % 62 + 12}%`,
  delay: (i % 6) * 0.8,
}));
const PETALS = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 53) % 98}%`,
  delay: (i % 8) * 1.7,
  dur: 11 + (i % 5) * 2.5,
  size: 12 + (i % 4) * 4,
}));

export default function Hero() {
  const gate = EXTERIOR[0];

  return (
    <section className="hero" id="top">
      <div className="blobs" aria-hidden="true" />
      <Flower className="mega-flower" />
      <Vine className="vine" />
      <div className="sparkles" aria-hidden="true">
        {SPARKLES.map((s, i) => <i key={i} style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }} />)}
      </div>
      <div className="petals" aria-hidden="true">
        {PETALS.map((p, i) => (
          <i key={i} style={{ left: p.left, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
        ))}
      </div>
      <Butterfly className="bfly bf-a" />
      <Butterfly className="bfly bf-b" color="#c9a3ff" accent="#ece6ff" />
      <Butterfly className="bfly bf-c" color="#ffb08a" accent="#ffe3d4" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="chip"><Flower className="chip-flower" /> {KINDERGARTEN.city} · сенімді балабақша</p>
          <h1>
            Балаңыздың күні <em>гүлдей</em> жайнап өтетін мекен
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
              ) : (
                <Head key={i} type={f.kind} className="arch-bit" style={{ left: `${f.x}%`, top: `${f.y}%`, width: f.size, color: f.color, animationDelay: `${f.delay}s` }} />
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
      <Basket className="basket" />
      <div className="bed bed-back" aria-hidden="true">
        {BACK.map((b, i) => (
          <span key={i} className="bed-item" style={{ left: b.left, width: b.width, animationDelay: `${b.delay}s` }}>
            <Bloom type={b.type} className="bed-bloom" style={{ color: b.color, animationDelay: `${b.delay}s` }} />
          </span>
        ))}
      </div>
      <div className="bed" aria-hidden="true">
        {FRONT.map((b, i) => (
          <span key={i} className="bed-item" style={{ left: b.left, width: b.width, animationDelay: `${b.delay}s` }}>
            <Bloom type={b.type} className="bed-bloom" style={{ color: b.color, animationDelay: `${b.delay}s` }} />
          </span>
        ))}
      </div>
      <Fence className="fence" />
      <Wave className="hero-wave" />
    </section>
  );
}
