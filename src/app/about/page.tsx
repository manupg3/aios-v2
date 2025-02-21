import { Badge } from "@/components/Badge"
import Benefits from "@/components/ui/Benefits"
import Balancer from "react-wrap-balancer"
import CardCarousel from "@/components/ui/CardCarousel"
import Cta from "@/components/ui/Cta"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Asesoramiento</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            Asesoramiento especializado
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
        Optimizamos tu presencia en línea con estrategias web personalizadas para mejorar la funcionalidad y rendimiento de tu sitio, enfocándonos en aspectos clave como SEO y UX para maximizar el rendimiento 
        </p>
      </section>
      <section className="section-card-carousel">
      <CardCarousel />
      </section>
      <Benefits />
      <Cta/>
    </div>
  )
}
