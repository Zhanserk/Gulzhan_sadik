import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ManagerCard from './components/ManagerCard';
import Groups from './components/Groups';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import { EXTERIOR } from './data/media';
import './App.css';

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Сарыағаш қаласындағы сенімді балабақша</div>
            <h1>Балаңыздың күні <span className="crayon">жылылықпен</span> толы өтетін мекен</h1>
            <p className="lead">«Гулжан» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер ұжымы.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Байланысу</a>
              <a href="#about" className="btn btn-ghost">Толығырақ білу</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>10</b><span>жас ерекшелігіне сай топ</span></div>
              <div className="stat"><b>100%</b><span>санитарлық нормаларға сай</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-blob hb-1"></div>
            <div className="hero-blob hb-2"></div>
            <div className="hero-photo-frame">
              <img src={EXTERIOR[0].src} alt={EXTERIOR[0].caption} />
            </div>
            <div className="hero-icon-card hic-1">🧸</div>
            <div className="hero-icon-card hic-2">☀️</div>
            <div className="hero-icon-card hic-3">🌳</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photos">
            <img className="tall" src={EXTERIOR[2].src} alt={EXTERIOR[2].caption} loading="lazy" />
            <img src={EXTERIOR[4].src} alt={EXTERIOR[4].caption} loading="lazy" />
            <img src={EXTERIOR[5].src} alt={EXTERIOR[5].caption} loading="lazy" />
          </div>
          <div className="about-text">
            <div className="eyebrow"><span className="dot"></span>Біз туралы</div>
            <h2>Әрбір бөлме — балаға арналған кішкентай әлем</h2>
            <p>«Гулжан» бөбекжай балабақшасы Қазақстан Республикасы, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қаласы, Қазыбек би көшесі, N10A мекенжайында орналасқан.</p>
            <p>Әрбір жас тобына арнайы бөлінген киім шешетін бөлме, ойын бөлмесі, жатын бөлмесі және дәретхана бар — әр топ бір-бірiнен оқшауланған. Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.</p>
            <div className="about-facts">
              <div className="fact"><div className="ic">🛏️</div><div><b>Жеке кереует</b><span>әр балаға жеке стационарлық кереует</span></div></div>
              <div className="fact"><div className="ic">🧴</div><div><b>Санитарлық норма</b><span>тексеруден толық өтті</span></div></div>
              <div className="fact"><div className="ic">🔥</div><div><b>Жылы едендер</b><span>барлық бөлмелерде</span></div></div>
              <div className="fact"><div className="ic">🪟</div><div><b>Табиғи жарық</b><span>күннен қорғау жүйесімен</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <ManagerCard />

      <Groups />

      <Team />

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Неге бізді таңдайды</div>
            <h2>Ата-аналар сенетін төрт себеп</h2>
          </div>
          <div className="adv-grid">
            <div className="adv"><div className="ic">🛡️</div><h4>Қауіпсіздік</h4><p>Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған.</p></div>
            <div className="adv"><div className="ic">🎨</div><h4>Дамыту ортасы</h4><p>Әр бөлме ойын, шығармашылық және демалуға арналған аймақтарға бөлінген.</p></div>
            <div className="adv"><div className="ic">👩‍⚕️</div><h4>Медициналық бақылау</h4><p>Күнделікті денсаулық тексеруі жүргізіледі.</p></div>
            <div className="adv"><div className="ic">🧼</div><h4>Тазалық пен гигиена</h4><p>Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.</p></div>
          </div>
        </div>
      </section>

      {/* TIMELINE / DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap day-grid">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Күн тәртібі</div>
            <h2>Балаңыздың бір күні қалай өтеді</h2>
            <p>Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.</p>
          </div>
          <div className="timeline">
            <div className="titem"><b className="time">08:00 — Қабылдау</b><p>Балаларды жылы қарсы алу, таңғы жаттығу</p></div>
            <div className="titem"><b className="time">09:00 — Таңғы ас</b><p>Дәмді әрі пайдалы таңғы ас</p></div>
            <div className="titem"><b className="time">09:30 — Сабақ пен ойын</b><p>Дамыту сабақтары, шығармашылық жұмыстар</p></div>
            <div className="titem"><b className="time">11:30 — Серуен</b><p>Ашық аулада белсенді қозғалыс ойындары</p></div>
            <div className="titem"><b className="time">13:00 — Түскі ас пен ұйқы</b><p>Жеке кереуеттерде тыныш демалыс уақыты</p></div>
            <div className="titem"><b className="time">16:00 — Бесін ас, еркін ойын</b><p>Ата-аналарды күту, үйге қайту</p></div>
          </div>
        </div>
      </section>

      <Gallery />

      <Documents />

      {/* CONTACTS */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="ccard">
            <div className="eyebrow"><span className="dot"></span>Байланыс</div>
            <h2 style={{ margin: '16px 0 24px', fontSize: '28px' }}>Бізбен хабарласыңыз</h2>
            <div className="crow"><div className="ic">📍</div><div><b>Мекенжай</b><span>Қазақстан Республикасы, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қаласы, Қазыбек би көшесі, N10A</span></div></div>
            <div className="crow"><div className="ic">📞</div><div><b>Телефон</b><br /><a href="https://wa.me/77781005619" target="_blank" rel="noreferrer">+7 778 100 56 19 (WhatsApp)</a></div></div>
            <div className="crow"><div className="ic">📷</div><div><b>Instagram</b><br /><a href="https://www.instagram.com/gulzhan_balabaksha" target="_blank" rel="noreferrer">@gulzhan_balabaksha</a></div></div>
            <div className="crow"><div className="ic">✉️</div><div><b>Email</b><span>жақында қосылады</span></div></div>
            <div className="crow"><div className="ic">🕗</div><div><b>Жұмыс уақыты</b><span>Дүйсенбі – Жұма, 08:00 – 18:30</span></div></div>
          </div>
          
          {/* GOOGLE MAPS EMBED */}
<div className="map-wrapper" style={{ width: '100%', minHeight: '380px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
  <iframe
    title="«Гулжан» бөбекжай балабақшасы мекенжайы"
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2989.803392434274!2d69.16588977606348!3d41.46517937129013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI3JzU0LjciTiA2OcKwMTAnMDYuNSJF!5e0!3m2!1sru!2skz!4v1788902793674!5m2!1sru!2skz"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: '380px', display: 'block' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}