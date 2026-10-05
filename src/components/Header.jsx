import React, { useEffect, useState } from 'react';
import { KINDERGARTEN, NAV } from '../data/site';
import { Flower } from './Decor';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`bar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap bar-in">
        <a href="#top" className="brand" onClick={close}>
          <Flower className="brand-flower" />
          <b>{KINDERGARTEN.short}</b>
        </a>

        <nav className="bar-nav" aria-label="Негізгі мәзір">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${KINDERGARTEN.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold btn-sm bar-cta"
        >
          WhatsApp
        </a>

        <button className="burger" aria-label="Мәзірді ашу" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
