import React from 'react';
import { motion } from 'framer-motion';

const groupsData = [
  {
    id: 1,
    title: '1-топ',
    subtitle: 'Кіші топ',
    description: 'Кіші жастағы балаларға арналған жарық, жайлы бөлме.',
    color: 'coral',
  },
  {
    id: 2,
    title: '2-топ',
    subtitle: 'Ортаңғы топ',
    description: 'Тіл дамыту мен шығармашылыққа арналған кең кеңістік.',
    color: 'leaf',
  },
  {
    id: 3,
    title: '3-топ',
    subtitle: 'Ересек топ',
    description: 'Мектепке дайындықтың негізгі бағдарламасы.',
    color: 'sky',
  },
  {
    id: 4,
    title: '4-топ',
    subtitle: 'Мектепалды тобы',
    description: 'Сауат ашу мен есептің бастамасы.',
    color: 'sun',
  },
];

export default function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>
            Топтар мен бөлмелер
          </div>
          <h2>Балаңызға жайлы топтар</h2>
          <p>Әр топта жеке киім шешетін, ойын және дамыту аймақтары жоспарланған.</p>
        </motion.div>

        <div className="group-cards">
          {groupsData.map((group, index) => (
            <motion.div
              key={group.id}
              className="gcard"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="num">{group.subtitle}</div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}