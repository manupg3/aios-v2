'use client'
import { useEffect } from 'react';
import styles from './CursorTrail.module.css';

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const trail = document.createElement('div');
      trail.className = styles.trail;
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;
      document.body.appendChild(trail);

      // Eliminar el elemento después de 500ms
      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    // Agregar el listener del movimiento del mouse
    document.addEventListener('mousemove', handleMouseMove);

    // Limpiar el listener cuando se desmonte el componente
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
