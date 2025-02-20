import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import Balancer from "react-wrap-balancer"
import BadgeSolutions from "@/components/BadgesSolutions"
import Cta from "../../../Cta"

import { Tooltip } from "@/components/Tooltip"
import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import { cx } from "@/lib/utils"
import {
  RiCheckLine,
  RiInformationLine,
  RiSubtractLine,
} from "@remixicon/react"
import Link from "next/link"
import React, { Fragment } from "react"

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

const plans: Plan[] = [
  {
    name: "Simple",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Cotizar solucion",
    buttonLink: "#",
  },
  {
    name: "Empresarial",
    price: { monthly: "$49", annually: "$39" },
    description: "For small teams and start-ups that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Cotizar solucion",
    buttonLink: "#",
  },
  {
    name: "E-Commerce",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Cotizar solucion",
    buttonLink: "#",
  },
]

interface Feature {
  name: string
  plans: Record<string, boolean | string>
  tooltip?: string
}

interface Section {
  name: string
  features: Feature[]
}

const sections: Section[] = [
  {
    name: "Funciones Generales",
    features: [
      {
        name: "Hosting gratis",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
        },
      {
        name: "SSL gratis",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: "5", Empresarial: "10", "E-Commerce": "Ilimitados" },
        },
      {
        name: "Almacenamiento",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Simple: "5/10GB",
          Empresarial: "20/50GB",
          "E-Commerce": "100/150GB",
        },
      },
      {
        name: "Plantillas Premium",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Integraciones Generales",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: '10', Empresarial: '+20', "E-Commerce": 'Ilimitadas' },
      },
      {
        name: "Integraciones IA",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: '1', Empresarial: '+2', "E-Commerce": 'Ilimitadas' },
      },
    ],
  },
  {
    name: "Integraciones de Terceros",
    features: [
      {
        name: "Medios de Pago",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: false, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Medios de Envio",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: false, Empresarial: false, "E-Commerce": true },
      },
      {
        name: "CRMs",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Analiticas",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
    ],
  },
  {
    name: "Analiticas",
    features: [
      {
        name: "Google Analytics",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Google Tag Manager",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Hotjar",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: false, Empresarial: true, "E-Commerce": true },
      },
      {
        name: "Soluciones IA",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
          plans: { Simple: false, Empresarial: true, "E-Commerce": true },
      },
    ],
  },
  {
    name: "Atencion al Cliente",
    features: [
      {
        name: "Soluciones IA",
        plans: { Simple: true, Empresarial: true, "E-Commerce": true },

      },
      {
        name: "Email, SMS, WhatsApp, etc",
        plans: { Simple: true, Empresarial: true, "E-Commerce": true },
      },
   
    ],
  },
]





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
        <Badge>soluciones para cada necesidad</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
          Innovadores creando el futuro digital.
        </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
        La tecnología redefine cómo las empresas crecen y se conectan.
        <br /> Soluciones clave: diseño intuitivo, código eficaz y experiencias memorables.
        </p>
      </section>
      <section  className="section-badge-solutions" id="badge-solutions">
      <BadgeSolutions />
      </section>

      {/* plan details (lg+) */}
      <section className="mx-auto mt-0">
        <div className="mt-0 hidden sm:mt-28 lg:block">
          <div className="relative">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="sticky top-28">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="font-semibold leading-7 text-gray-900 dark:text-gray-50">
                      Todas las funciones
                    </div>
                    <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      Pensadas para cada solucion
                    </div>
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div
                        className={cx(
                          !plan.isStarter
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-900 dark:text-gray-50",
                          "font-semibold leading-7",
                        )}
                      >
                        {plan.name}
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50",
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-indigo-50/30 dark:hover:bg-indigo-800/5"
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                        >
                          <span>{feature.name}</span>
                          {feature.tooltip ? (
                            <Tooltip side="right" content={feature.tooltip}>
                              <RiInformationLine
                                className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                aria-hidden="true"
                              />
                            </Tooltip>
                          ) : null}
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                          >
                            {typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {feature.plans[plan.name]}
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.name] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.plans[plan.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {plan.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="pt-6 text-sm font-normal leading-6 text-gray-900 dark:text-gray-50"
                  >
                    <span className="sr-only">Link to activate plan</span>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 pt-6 lg:px-8">
                      {plan.isStarter ? (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base text-indigo-600 hover:bg-transparent dark:bg-transparent dark:text-indigo-400 hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
              <Cta />
        
    </div>
  )
}
