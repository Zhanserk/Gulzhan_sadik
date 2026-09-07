import React from 'react';

const bossPhoto = encodeURI('/Picters Boss/photo_2026-09-08_01-54-35.jpg');

export default function ManagerCard() {
  return (
    <section className="manager-sec" id="manager">
      <div className="wrap">
        <div className="manager-card">
          <div className="manager-photo-wrapper">
            <img src={bossPhoto} alt="Балабақша меңгерушісі" />
            <div className="manager-badge">Балабақша меңгерушісі</div>
          </div>

          <div className="manager-info">
            <div className="eyebrow"><span className="dot"></span>Меңгеруші сөзі</div>
            <h3>«Әр баланың күлкісі — біздің ең үлкен жетістігіміз»</h3>
            <p className="manager-quote">
              «Гулжан» бөбекжай балабақшасына қош келдіңіздер! Біздің басты мақсатымыз —
              әрбір бүлдіршінге жылылық, қауіпсіздік және сапалы тәрбие беру.
            </p>

            <div className="manager-name">Каликулова Мөлдірай Серікқызы</div>

            <div className="manager-meta">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}