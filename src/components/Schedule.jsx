import React from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
  {
    id: 1,
    time: '08:00 — Қабылдау',
    description: 'Балаларды жылы қарсы алу, таңғы жаттығу',
  },
  {
    id: 2,
    time: '09:00 — Таңғы ас',
    description: 'Дәмді әрі пайдалы таңғы ас',
  },
  {
    id: 3,
    time: '09:30 — Сабақ пен ойын',
    description: 'Дамыту сабақтары, шығармашылық жұмыстар',
  },
  {
    id: 4,
    time: '11:30 — Серуен',
    description: 'Ашық аулада белсенді қозғалыс ойындары',
  },
  {
    id: 5,
    time: '13:00 — Түскі ас пен ұйқы',
    description: 'Жеке кереуеттерде тыныш демалыс уақыты',
  },
  {
    id: 6,
    time: '16:00 — Бесін ас, еркін ойын',
    description: 'Ата-аналарды күту, үйге қайту',
  },
];

export default function Schedule() {
  return (
    <section className="day" id="day">
      <div className="wrap day-grid">
        <motion.div
          className="section-head"
          style={{ marginBottom: 0 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">
            Күн тәртібі
          </div>
          <h2>Балаңыздың бір күні қалай өтеді</h2>
          <p>
            Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.
          </p>
        </motion.div>

        <div className="timeline">
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.id}
              className="titem"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <b className="time">{item.time}</b>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}