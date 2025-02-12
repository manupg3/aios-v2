// Bento.js
import React from 'react';
import styles from './Bento.module.css';

interface ImageProps {
    src: string;
    alt?: string;
  }
  
  // Interfaz para las propiedades del componente Bento
  interface BentoProps {
    topLeft: ImageProps;
    bottomRight: ImageProps;
  }


  const Bento: React.FC<BentoProps> = ({ topLeft, bottomRight }) => {
    return (
    <div className={styles.bentoContainer}>
      {/* Fila superior: Izquierda más grande que la derecha */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <img src={topLeft.src} alt={topLeft.alt || 'Imagen superior izquierda'} />
        </div>
        <div className={styles.topRight}>
        <h2>TITLE</h2>   
        </div>
      </div>

      {/* Fila inferior: Derecha más grande que la izquierda */}
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
        <h2>TITLE</h2>   
        </div>
        <div className={styles.bottomRight}>
          <img src={bottomRight.src} alt={bottomRight.alt || 'Imagen inferior derecha'} />
        </div>
      </div>
    </div>
  );
};

export default Bento;
