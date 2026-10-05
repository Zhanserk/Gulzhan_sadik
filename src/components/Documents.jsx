import React from 'react';
import { DOCS } from '../data/media';
import { DOCS_PENDING } from '../data/site';

export default function Documents() {
  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Құжаттар</div>
          <h2>Ресми құжаттар мен жоспарлар</h2>
          <p>Іс-әрекет кестелері мен күн тәртібі — оқу жылдары бойынша. Файлды ашу үшін карточканы басыңыз.</p>
        </div>

        <div className="docs-grid">
          {DOCS.map((doc) => (
            <a key={doc.file} href={`/${doc.file}`} target="_blank" rel="noreferrer" className="doc-card">
              <div className="doc-icon">{doc.title.startsWith('Күн') ? '🕗' : '📑'}</div>
              <div className="doc-info">
                <h4>{doc.title}</h4>
                <p>{doc.kind} оқу жылы · PDF · {doc.size}</p>
              </div>
              <span className="doc-download">⤓</span>
            </a>
          ))}
        </div>
        <p className="docs-pending">{DOCS_PENDING}</p>
      </div>
    </section>
  );
}
