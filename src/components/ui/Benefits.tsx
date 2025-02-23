const benefits = [
  {
    title: "Auditoría y Mejora de Sitios Web",
    description:
      "Realizamos auditorías completas de sitios web para identificar áreas de mejora en diseño, usabilidad y rendimiento.",
  },
  {
    title: "Consultoría en SEO y Posicionamiento",
    description:
      "Ofrecemos asesoría especializada en SEO para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.",
  },
  {
    title: "Asesoría en E-commerce",
    description:
      "Para negocios en línea, proporcionamos asesoría integral en e-commerce, desde la configuración de la tienda hasta la optimización de procesos de venta.",
  },
  {
    title: "Consultoría en Implementación de IA",
    description:
      "Nuestra asesoría en IA te ayuda a identificar y adoptar las soluciones de inteligencia artificial más adecuadas para tu negocio.",
  },
  {
    title: "Optimización de Procesos con IA",
    description:
      "Asesoramos a las empresas en la optimización de sus procesos utilizando IA.",
  },
  {
    title: "Estrategias de Personalización con IA",
    description:
      "Ofrecemos consultoría en estrategias de personalización utilizando IA para mejorar la experiencia del cliente.",
  },
  {
    title: "Consultoría en Chatbots y Asistentes Virtuales",
    description: "Proporcionamos asesoría en la implementación de chatbots y asistentes virtuales para mejorar la interacción con los clientes.",
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
