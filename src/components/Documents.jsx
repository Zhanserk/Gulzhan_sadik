import React from 'react';
import { motion } from 'framer-motion';

const documentsData = [
  {
    id: 1,
    icon: '📄',
    title: 'Лицензия',
    description: 'Мемлекеттік лицензия',
    link: '/documents/license.pdf',
  },
  {
    id: 2,
    icon: '📋',
    title: 'Жарғы',
    description: 'Ұйым жарғысы',
    link: '/documents/ustav.pdf',
  },
  {
    id: 3,
    icon: '📑',
    title: 'Оқу бағдарламасы',
    description: 'Жылдық оқу жоспары',
    link: '/documents/program.pdf',
  },
  {
    id: 4,
    icon: '🏥',
    title: 'Санитарлық қорытынды',
    description: 'СЭС рұқсаты',
    link: '/documents/sanitary.pdf',
  },
];

export default function Documents() {
  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>
            Құжаттар
          </div>
          <h2>Ресми құжаттар мен жоспарлар</h2>
          <p>Барлық рұқсат құжаттары мен оқу жоспарлары.</p>
        </motion.div>

        <div className="docs-grid">
          {documentsData.map((doc, index) => (
            <motion.a
              key={doc.id}
              href={doc.link}
              target="_blank"
              rel="noreferrer"
              className="doc-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="doc-icon">{doc.icon}</div>
              <div className="doc-info">
                <h4>{doc.title}</h4>
                <p>{doc.description}</p>
              </div>
              <span className="doc-download">⤓</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}