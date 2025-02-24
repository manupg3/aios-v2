// components/CursorTrail.js
import { useEffect, useRef } from 'react';
import styles from './CursorTrail.module.css';

const CursorTrail = () => {
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const now = Date.now();
      // Solo crea una gota cada 50ms (ajustable)
      if (now - lastTimeRef.current < 50) return;
      lastTimeRef.current = now;

      const trail = document.createElement('div');
      trail.className = styles.trail;
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;
      document.body.appendChild(trail);

      // Remover la gota al finalizar la animación (1.2s)
      setTimeout(() => {
        trail.remove();
      }, 1200);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
