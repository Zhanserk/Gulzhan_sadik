import React, { useState } from 'react';
import { GROUPS } from '../data/media';

function GroupCard({ group, index }) {
  const [i, setI] = useState(0);
  const total = group.photos.length;
  const photo = group.photos[i];
  const go = (d) => setI((i + d + total) % total);

  return (
    <article className="gr-card">
      <div className="gr-photo">
        <img src={photo.src} alt={`«${group.name}» тобы — ${photo.caption}`} loading="lazy" />
        <span className="gr-cap">{photo.caption}</span>
        {total > 1 && (
          <>
            <button type="button" className="gr-nav gr-prev" aria-label="Алдыңғы сурет" onClick={() => go(-1)}>‹</button>
            <button type="button" className="gr-nav gr-next" aria-label="Келесі сурет" onClick={() => go(1)}>›</button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="gr-thumbs">
          {group.photos.map((p, k) => (
            <button
              key={p.src}
              type="button"
              className={k === i ? 'on' : ''}
              aria-label={`${k + 1}-сурет: ${p.caption}`}
              onClick={() => setI(k)}
            >
              <img src={p.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <div className="gr-body">
        <div className="num">{String(index + 1).padStart(2, '0')} · топ</div>
        <h3>«{group.name}» тобы</h3>
      </div>
    </article>
  );
}

export default function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Топтар мен бөлмелер</div>
          <h2>Балаңызға арналған {GROUPS.length} жайлы топ</h2>
          <p>Әр топта киім ілу, ойын, ұйықтау және жуыну бөлмелері бөлек. Суретті сырғытып көріңіз.</p>
        </div>
        <div className="gr-grid">
          {GROUPS.map((g, idx) => (
            <GroupCard key={g.slug} group={g} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
