"use client"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import { Switch } from "@/components/Switch"
import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import { Faqs } from "@/components/ui/Faqs"
import Testimonial from "@/components/ui/Testimonial"
import {
  RiCheckLine,
  RiCloudLine,
  RiUserLine,
} from "@remixicon/react"
import Link from "next/link"
import React from "react"

type FixedPrice = string

interface VariablePrice {
  monthly: string
  annually: string
}

interface Plan {
  name: string
  price: FixedPrice | VariablePrice
  description: string
  capacity: string[]
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const monthlyPlans: Plan[] = [
  {
    name: "Simple",
    price: "Cotizar",
    description:
      "Una solución simple con todo lo que necesitas para digitalizar tu marca.",
    capacity: ["Hasta 3 usuarios, 1 admin", "1 solución en la nube"],
    features: [
      "Hosting gratis",
      "SSL gratis",
      "Diseños premium",
      "Integraciones de terceros",
      "Integraciones IA",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Comenzar ahora",
    buttonLink: "#",
  },
  {
    name: "Empresarial",
    price: "Cotizar",
    description: "Renovamos y optimizamos tu presencia digital para cualquier empresa o industria.",
    capacity: ["Hasta 20 usuarios, 3 admins", "5 Soluciones en la nube"],
    features: [
      "Hosting gratis",
      "SSL gratis",
      "Diseños premium Personalizados",
      "Integraciones de terceros",
      "Integraciones IA personalizadas",
      "Optimización de procesos",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Comenzar ahora",
    buttonLink: "#",
  },
  {
    name: "E-Commerce",
    price: "Cotizar",
    description:
      "Potencia tus ventas digitalizando tu negocio con nuestros diseños y herramientas.",
    capacity: ["Usuarios ilimitados, 5 admins", "10 Soluciones en la nube"],
    features: [
      "Hosting gratis",
      "SSL gratis",
      "Diseños premium para vender más",
      "Integraciones de terceros",
      "Integraciones IA a medida",
      "Optimización de procesos de venta",
      "Potenciador de ventas",
      "Medios de pago y envíos",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Comenzar ahora",
    buttonLink: "#",
  },
]

const annuallyPlans: Plan[] = [
  {
    name: "Mantenimiento",
    price: "Cotizar",
    description:
      "Ofrecemos mantenimiento integral para todo tipo de solución.",
    capacity: ["Múltiples plataformas", "Actualizaciones en la nube"],
    features: [
      "Actualizaciones continuas",
      "Seguridad integral",
      "Migración a nuevas tecnologías",
      "Contratación mensual y anual",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Comenzar ahora",
    buttonLink: "#",
  },
  {
    name: "Soluciones IA",
    price: "Cotizar",
    description: "Ofrecemos herramientas potenciadas con IA para automatizar y optimizar procesos.",
    capacity: ["+2", "Soluciones en la nube"],
    features: [
      "Asistentes automatizados (Chatbots)",
      "Analizadores de tendencias",
      "Soluciones a medida",
      "Configuración y uso simple e intuitivo",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Comenzar ahora",
    buttonLink: "#",
  },
]

const isVariablePrice = (
  price: FixedPrice | VariablePrice,
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined
}

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly")

  const plansToShow = billingFrequency === "monthly" ? monthlyPlans : annuallyPlans

  return (
    <div className="px-3">
      <section
        aria-labelledby="pricing-title"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Cotiza tu solución</Badge>
        <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
          Nuestros planes escalan con tu negocio
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Ofrecemos soluciones para todo tipo de sitio web. Creamos herramientas
          especializadas adaptadas a cada necesidad, desde diseños optimizados, hasta
          integraciones IA.
        </p>
      </section>
      <section
        id="pricing-overview"
        className="mt-20 animate-slide-up-fade"
        aria-labelledby="pricing-overview"
        style={{
          animationDuration: "600ms",
          animationDelay: "200ms",
          animationFillMode: "backwards",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            Soluciones Web
          </Label>
          <Switch
            id="switch"
            checked={billingFrequency === "annually"}
            onCheckedChange={() =>
              setBillingFrequency(
                billingFrequency === "monthly" ? "annually" : "monthly",
              )
            }
          />
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            IA - Mantenimiento
          </Label>
        </div>
        <div className={`grid grid-cols-1 gap-x-14 gap-y-8 ${billingFrequency === "monthly" ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {plansToShow.map((plan, planIdx) => (
            <div
              key={planIdx}
              className={`mt-6 ${billingFrequency === "annually" ? "max-w-sm" : "max-w-md"}`}
            >
              {plan.isRecommended ? (
                <div className="flex h-4 items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-indigo-600 dark:border-indigo-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-indigo-600 dark:bg-gray-950 dark:text-indigo-400">
                        Potencia tus ventas
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-4 items-center">
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                </div>
              )}
              <div className="mx-auto">
                <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-center gap-x-3">
                  <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                    {isVariablePrice(plan.price)
                      ? billingFrequency === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually
                      : plan.price}
                  </span>
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    {plan.isStarter ? (
                      <Button variant="secondary" asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.capacity.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      {index === 0 && (
                        <RiUserLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      {index === 1 && (
                        <RiCloudLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonial"
        className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl"
        aria-labelledby="testimonial"
      >
        <Testimonial />
      </section>

      <Faqs />
    </div>
  )
}
