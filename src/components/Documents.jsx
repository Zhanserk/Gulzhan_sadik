import React from 'react';
import { DOCS } from '../data/media';
import { DOCS_PENDING } from '../data/site';

export default function Documents() {
  const groups = [
    ['Іс-әрекет кестесі', '📑'],
    ['Күн тәртібі', '🕗'],
  ].map(([title, ic]) => ({ title, ic, docs: DOCS.filter((d) => d.title === title) }));

  return (
    <section className="docs" id="docs">
      <div className="wrap">
        <div className="section-title reveal">
          <p className="kicker">Құжаттар</p>
          <h2>Ресми құжаттар мен <em>жоспарлар</em></h2>
          <p>Іс-әрекет кестелері мен күн тәртібі — оқу жылдары бойынша. Файлды ашу үшін карточканы басыңыз.</p>
        </div>

        <div className="doc-groups">
          {groups.map((g) => (
            <div key={g.title} className="doc-group reveal">
              <h3><span>{g.ic}</span> {g.title}</h3>
              {g.docs.map((d) => (
                <a key={d.file} href={`/${d.file}`} target="_blank" rel="noreferrer" className="doc">
                  <span className="doc-ext">PDF</span>
                  <span className="doc-info"><b>{d.kind} оқу жылы</b><small>{d.size}</small></span>
                  <span className="doc-open">Ашу ↗</span>
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="docs-pending">{DOCS_PENDING}</p>
      </div>
    </section>
  );
}
