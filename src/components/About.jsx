import React from 'react';
import { ABOUT_FACTS, KINDERGARTEN } from '../data/site';
import { EXTERIOR } from '../data/media';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-photos reveal">
          <img className="tall" src={EXTERIOR[2].src} alt={EXTERIOR[2].caption} loading="lazy" />
          <img src={EXTERIOR[4].src} alt={EXTERIOR[4].caption} loading="lazy" />
          <img src={EXTERIOR[5].src} alt={EXTERIOR[5].caption} loading="lazy" />
        </div>

        <div className="about-text reveal">
          <p className="kicker">Біз туралы</p>
          <h2>Әрбір бөлме — балаға арналған <em>кішкентай әлем</em></h2>
          <p>
            «Гулжан» бөбекжай балабақшасы {KINDERGARTEN.address} мекенжайында орналасқан.
          </p>
          <p>
            Әрбір жас тобына арнайы бөлінген киім шешетін бөлме, ойын бөлмесі, жатын бөлмесі және дәретхана бар —
            әр топ бір-бірінен оқшауланған. Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.
          </p>
          <div className="about-facts">
            {ABOUT_FACTS.map((f) => (
              <div className="fact" key={f.title}>
                <span className="fact-ic">{f.ic}</span>
                <div><b>{f.title}</b><small>{f.text}</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
