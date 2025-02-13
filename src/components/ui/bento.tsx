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
        <div className='container-badges-bento-tabs'><span>Landings</span><span>Up To 3 Pages</span><span>Emprendedores</span><span>Integracion IA</span><span>Pequeños Negocios</span></div>  
          <img src={topLeft.src} alt={topLeft.alt || 'Imagen superior izquierda'} />
        </div>
        <div className={styles.topRight}>
          <div className='container-badges-bento-tabs'><span>Landings</span><span>Up To 3 Pages</span><span>Emprendedores</span><span>Integracion IA</span><span>Pequeños Negocios</span></div>  
          <img className='img-top-right' src={topRight.src} alt={topRight.alt || 'Imagen superior derecha'} />
        </div>
      </div>

      {/* Fila inferior: Derecha más grande que la izquierda */}
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <div className='container-badges-bento-tabs'><span>Landings</span><span>Up To 3 Pages</span><span>Emprendedores</span><span>Integracion IA</span><span>Pequeños Negocios</span></div> 
          <img className='img-bottom-left' src={bottomLeft.src} alt={bottomLeft.alt || 'Imagen inferior izquierda'} />
        </div>
        <div className={styles.bottomRight}>
          <img src={bottomRight.src} alt={bottomRight.alt || 'Imagen inferior derecha'} />
        </div>
      </div>
    </div>
  );
};

export default Bento;
