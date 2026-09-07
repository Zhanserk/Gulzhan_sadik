import React from 'react';
import { motion } from 'framer-motion';

const advantagesData = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Қауіпсіздік',
    description:
      'Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған.',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Дамыту ортасы',
    description:
      'Әр бөлме ойын, шығармашылық және демалуға арналған аймақтарға бөлінген.',
  },
  {
    id: 3,
    icon: '👩‍⚕️',
    title: 'Медициналық бақылау',
    description: 'Күнделікті денсаулық тексеруі жүргізіледі.',
  },
  {
    id: 4,
    icon: '🧼',
    title: 'Тазалық пен гигиена',
    description:
      'Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.',
  },
];

export default function Advantages() {
  return (
    <section className="adv-sec" id="advantages">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">
            Неге бізді таңдайды
          </div>
          <h2>Ата-аналар сенетін төрт себеп</h2>
        </motion.div>

        <div className="adv-grid">
          {advantagesData.map((item, index) => (
            <motion.div
              key={item.id}
              className="adv"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="ic">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}