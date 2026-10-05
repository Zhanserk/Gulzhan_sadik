import React from 'react';
import { KINDERGARTEN, PEOPLE } from '../data/site';
import { EXTERIOR, GROUPS } from '../data/media';
import { Flower, Leaf, Wave } from './Decor';

export default function Hero() {
  const gate = EXTERIOR[0];

  return (
    <section className="hero" id="top">
      <Flower className="fl fl-a" />
      <Flower className="fl fl-b" />
      <Flower className="fl fl-c" />
      <Leaf className="lf lf-a" />
      <Leaf className="lf lf-b" />

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
          <div className="hero-arch">
            <img src={gate.src} alt={gate.caption} />
          </div>
          <div className="stk stk-a">🌸 Гүлдей ұқыпты<small>таза, жарық бөлмелер</small></div>
          <div className="stk stk-b">🧸 Жылы ұжым</div>
        </div>
      </div>
      <Wave className="hero-wave" />
    </section>
  );
}
