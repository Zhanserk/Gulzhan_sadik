import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/photo1.jpg',
    alt: 'Балабақша бөлмесі',
    caption: 'Жайлы ойын бөлмесі',
  },
  {
    id: 2,
    src: '/gallery/photo2.jpg',
    alt: 'Ойын алаңы',
    caption: 'Ашық ауладағы ойындар',
  },
  {
    id: 3,
    src: '/gallery/photo3.jpg',
    alt: 'Топ бөлмесі',
    caption: 'Топтарға арналған кең бөлме',
  },
  {
    id: 4,
    src: '/gallery/photo4.jpg',
    alt: 'Ұйықтау бөлмесі',
    caption: 'Жеке кереуеттер',
  },
  {
    id: 5,
    src: '/gallery/photo5.jpg',
    alt: 'Шығармашылық сабағы',
    caption: 'Шығармашылық сабақтар',
  },
  {
    id: 6,
    src: '/gallery/photo6.jpg',
    alt: 'Тамақтану',
    caption: 'Дәмді әрі пайдалы тамақ',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>
            Галерея
          </div>
          <h2>Балабақшамыздың ішінен</h2>
          <p>Біздің жайлы әрі қауіпсіз ортамызбен танысыңыз.</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}