import React from 'react';
import styles from './Bento.module.css';

interface ImageProps {
  src: string;
  alt?: string;
  cardContent?: React.ReactNode; // Ahora puede recibir cualquier contenido HTML/JSX
}

interface BentoProps {
  topLeft: ImageProps;
  topRight: ImageProps;
  bottomLeft: ImageProps;
  bottomRight: ImageProps;
}

const Bento: React.FC<BentoProps> = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
  return (
    <div className={styles.bentoContainer}>
      {/* Fila superior */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <div className={styles.imageContainer}>
            <img className='bento-img-top-left' src={topLeft.src} alt={topLeft.alt || 'Imagen superior izquierda'} />
            {topLeft.cardContent && (
              <div className={styles.card}>
                {topLeft.cardContent}
              </div>
            )}
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imageContainer}>
            <img className='bento-img-top-right' src={topRight.src} alt={topRight.alt || 'Imagen superior derecha'} />
            {topRight.cardContent && (
              <div className={styles.card}>
                {topRight.cardContent}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fila inferior */}
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <div className={styles.imageContainer}>
            <img className='bento-img-bottom-left' src={bottomLeft.src} alt={bottomLeft.alt || 'Imagen inferior izquierda'} />
            {bottomLeft.cardContent && (
              <div className={styles.card}>
                {bottomLeft.cardContent}
              </div>
            )}
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.imageContainer}>
            <img className='bento-img-bottom-right' src={bottomRight.src} alt={bottomRight.alt || 'Imagen inferior derecha'} />
            {bottomRight.cardContent && (
              <div className={styles.card}>
                {bottomRight.cardContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
