const features = [
    {
      title: '1. Planing',
      subtitle: 'Definicion y Planificacion',
      description:
        'Definimos el tipo de solucion, alcance, funciones, tiempos, etc.',
    },
    {
      title: '2. Development',
      subtitle: 'Desarrollo Y Testeo Funcional',
      description:
        'En base a la etapa 1 se desarrolla la solucion y se testea por completo.',
    },
    {
      title: '3. Test',
      subtitle: 'Aprobacion Del Cliente',
      description:
        'El cliente tiene un tiempo para probar y aprobar lo acordado en la etapa 1.',
    },
    {
      title: '4. Deploy',
      subtitle: 'Lista Para El Mundo',
      description:
        'Una vez aprobado, se desplega la solucion cubriendo todos los puntos escenciales.',
    },
  ];
  
  export default function StepsHorizontal() {
    return (
      <>
        <div className="mx-auto w-full max-w-6xl px-3 py-20">
          <dl className="grid grid-cols-4 gap-10">
            {features.map((item) => (
              <div
                key={item.title}
                className="col-span-full sm:col-span-2 lg:col-span-1"
              >
                <span className="rounded-lg bg-blue-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-blue-500/20 ring-1 ring-blue-200/20 dark:bg-blue-900/20 dark:ring-blue-800/30 sm:text-sm">
                  <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400">
                    {item.title}
                  </span>
                </span>
                <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                  {item.subtitle}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </>
    );
  }