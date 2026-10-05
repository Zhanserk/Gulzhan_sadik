import React, { useState } from 'react';
import { MANAGER, STAFF, TEAM } from '../data/media';
import { PEOPLE } from '../data/site';
import Lightbox from './Lightbox';

const initials = (name) => name.split(' ').slice(0, 2).map((w) => w.charAt(0)).join('');
const TONES = ['rose', 'leaf', 'gold', 'lav'];

function Avatar({ person, index }) {
  const photo = person.photo || (person.lead && person.role === 'Меңгеруші' ? MANAGER : null);
  return photo
    ? <img className="pc-ava pc-photo" src={photo} alt={person.name} loading="lazy" />
    : <span className={`pc-ava tone-${TONES[index % TONES.length]}`}>{initials(person.name)}</span>;
}

export default function Team() {
  const [open, setOpen] = useState(null); // портрет индексі
  const leads = PEOPLE.filter((p) => p.lead);
  const teachers = PEOPLE.filter((p) => !p.lead);
  const portraits = STAFF.map((s, i) => ({ src: s.src, caption: `Ұжым суреті ${i + 1}` }));

  return (
    <section className="team-sec" id="team">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Ұжым</p>
          <h2>Балаңызды күтіп тұрған <em>мейірімді ұжым</em></h2>
          <p>Тәрбиешілеріміз әр баланың мінезі мен қажеттілігіне көңіл бөледі.</p>
        </div>

        <figure className="team-photo reveal">
          <img src={TEAM} alt="Балабақша ұжымының ортақ суреті" loading="lazy" />
        </figure>

        <ul className="lead-list">
          {leads.map((p, i) => (
            <li key={p.name} className="lead-card reveal">
              <Avatar person={p} index={i} />
              <div>
                <small>{p.role}</small>
                <b>{p.name}</b>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="team-sub">Тәрбиешілер <span>{teachers.length}</span></h3>
        <ul className="teacher-list">
          {teachers.map((p, i) => (
            <li key={p.name} className="teacher reveal">
              <Avatar person={p} index={i} />
              <div>
                <b>{p.name}</b>
                <small>{p.role}</small>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="team-sub">Ұжым суреттері <span>{portraits.length}</span></h3>
        <div className="strip" role="list">
          {portraits.map((p, i) => (
            <button type="button" key={p.src} role="listitem" className="strip-item" aria-label={`${i + 1}-сурет`} onClick={() => setOpen(i)}>
              <img src={p.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox title="Біздің ұжым" items={portraits} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
