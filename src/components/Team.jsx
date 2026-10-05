import React from 'react';
import { STAFF, TEAM } from '../data/media';
import { TEACHERS } from '../data/site';

export default function Team() {
  return (
    <section className="team-sec" id="team">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Ұжым</div>
          <h2>Балаңызды күтіп тұрған мейірімді ұжым</h2>
          <p>Тәрбиешілеріміз әр баланың мінезі мен қажеттілігіне көңіл бөледі.</p>
        </div>

        <figure className="team-photo">
          <img src={TEAM} alt="Балабақша ұжымының ортақ суреті" loading="lazy" />
        </figure>

        <h3 className="team-sub">Тәрбиешілер</h3>
        <ul className="teacher-list">
          {TEACHERS.map((name) => (
            <li key={name}>
              <span className="teacher-ic">{name.charAt(0)}</span>
              <div>
                <b>{name}</b>
                <small>Тәрбиеші</small>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="team-sub">Біздің ұжым</h3>
        <div className="portrait-grid">
          {STAFF.map((s, i) => (
            <img key={s.src} src={s.src} alt={`Ұжым мүшесі ${i + 1}`} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
