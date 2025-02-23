const benefits = [
  {
    title: "Auditoría y Mejora de Sitios Web",
    description:
      "Realizamos auditorías completas de sitios web.",
  },
  {
    title: "SEO y Posicionamiento",
    description:
      "Ofrecemos asesoría especializada en SEO.",
  },
  {
    title: "Asesoría en E-commerce",
    description:
      "Asesoría integral en E-Commerce.",
  },
  {
    title: "Implementación de IA",
    description:
      "Ayudamos a identificar y adoptar soluciones de IA.",
  },
  {
    title: "Optimización de Procesos - IA",
    description:
      "Optimización de sus procesos con IA.",
  },
  {
    title: "Personalización con IA",
    description:
      "IA para mejorar la experiencia del cliente.",
  },
  {
    title: "Chatbots y Asistentes Virtuales",
    description: "Asesoría en la implementación de chatbots y asistentes virtuales.",
  },
]

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="mx-auto">
      <h2
        id="benefits-title"
        className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
      >
        ¿Qué beneficios ofrecemos?
      </h2>
      <dl className="mt-8 grid grid-cols-4 gap-x-10 gap-y-8 sm:mt-12 sm:gap-y-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
            <dt className="font-semibold text-gray-900 dark:text-gray-50">
              {benefit.title}
              <div className="absolute -left-2 top-1 h-4 w-0.5 rounded-full bg-blue-500" /> 
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {benefit.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
