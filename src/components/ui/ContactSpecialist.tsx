import React, { useEffect } from 'react';

// Declarar Calendly como una variable global
declare global {
  interface Window {
    Calendly: any;
  }
}

const ContactSpecialist = () => {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='container-contact-specialist'>
      ¿No estas seguro?
      <a
        href="#"
        onClick={() => {
          window.Calendly.initPopupWidget({ url: 'https://calendly.com/solucion-aios' });
          return false;
        }}
        className='font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
      >
        Contacta a un especialista
      </a>
    </div>
  );
};

export default ContactSpecialist;
