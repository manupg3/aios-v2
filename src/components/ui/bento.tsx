import React from 'react';
import styles from './Bento.module.css';

interface ImageProps {
  src: string;
  alt?: string;
  tooltip?: React.ReactNode; // Permite pasar cualquier estructura HTML/JSX
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
      {/* Fila superior: Izquierda más grande que la derecha */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <div className={styles.imageContainer}>
            <img src={topLeft.src} alt={topLeft.alt || 'Imagen superior izquierda'} />
            {topLeft.tooltip && (
              <div className={styles.tooltip}>
                {topLeft.tooltip}
              </div>
            )}
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imageContainer}>
            <img src={topRight.src} alt={topRight.alt || 'Imagen superior derecha'} />
            {topRight.tooltip && (
              <div className={styles.tooltip}>
                {topRight.tooltip}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fila inferior: Derecha más grande que la izquierda */}
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <div className={styles.imageContainer}>
            <img src={bottomLeft.src} alt={bottomLeft.alt || 'Imagen inferior izquierda'} />
            {bottomLeft.tooltip && (
              <div className={styles.tooltip}>
                {bottomLeft.tooltip}
              </div>
            )}
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.imageContainer}>
            <img src={bottomRight.src} alt={bottomRight.alt || 'Imagen inferior derecha'} />
            {bottomRight.tooltip && (
              <div className={styles.tooltip}>
                {bottomRight.tooltip}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
