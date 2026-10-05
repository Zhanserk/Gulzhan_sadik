import React from 'react';
import { MANAGER } from '../data/media';
import { MANAGER_INFO } from '../data/site';
import { Flower } from './Decor';

export default function ManagerCard() {
  return (
    <section className="manager-sec" id="manager">
      <div className="wrap">
        <div className="manager-card reveal">
          <Flower className="manager-flower" />
          <div className="manager-photo">
            <img src={MANAGER} alt={MANAGER_INFO.role} />
            <span className="manager-badge">{MANAGER_INFO.role}</span>
          </div>
          <div className="manager-info">
            <p className="kicker">Меңгеруші сөзі</p>
            <h3>{MANAGER_INFO.title}</h3>
            <p className="manager-quote">{MANAGER_INFO.text}</p>
            <div className="manager-name">{MANAGER_INFO.name}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
