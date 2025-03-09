import Image from "next/image"
import {
  RiLinksLine,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiStackLine,
} from "@remixicon/react"
import { Badge } from "../Badge"
import CodeExampleTabs from "./CodeExampleTabs"

const features = [
  {
    name: "Para todo tipo de sitio web",
    description:
      "Desde una landing page, web empresarial, e-commerce y sitios a medida.",
    icon: RiStackLine,
  },
  {
    name: "Atencion al cliente automatizada",
    description:
      "Que la IA se encargue de contestar las preguntas, dudas de tus clientes.",
    icon: RiPlugLine,
  },
  {
    name: "Analizador de Tendencias",
    description:
      "Analiza y da sugerencias de improvement a partir de tus ventas y clientes.",
    icon: RiLinksLine,
  },
  {
    name: "Integracion multi-plataforma",
    description:
      "Integramos nuestras soluciones con la plataforma que utilizes.",
    icon: RiShieldKeyholeLine,
  },
]

export default function CodeExample() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>Potenciado con IA</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Construido para innovar,<br /> potenciado por IA
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Soluciones de IA fluidas que se adaptan a cualquier sitio web, desde blogs hasta empresas. Aprovecha la automatización inteligente para mejorar experiencias, sin importar la complejidad o enfoque de tu plataforma.
      </p>

      <CodeExampleTabs
        tab1={
          <div className="relative h-[31rem] tabs-features-home">
            <Image
              src="/images/premium-designs.png"  // <<-- Use the public path here
              alt="premium designs"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        }
        tab2={
          <div className="relative h-[31rem] tabs-features-home">
            <Image
              src="/images/trend-analyzer-2.png" // <<-- Use the public path here
              alt="trend analyzer"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        }
      />

      <dl className="mt-24 grid grid-cols-4 gap-10">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            <div className="w-fit rounded-lg p-2 shadow-md shadow-indigo-400/30 ring-1 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
              <item.icon
                aria-hidden="true"
                className="size-6 text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
              {item.name}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
