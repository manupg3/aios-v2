'use client';

import { useState } from 'react';
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import { Switch } from "@/components/Switch"
import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import { Faqs } from "@/components/ui/Faqs"
import Script from 'next/script';
import { RiCheckLine, RiCloudLine, RiUserLine, RiCloseLine } from "@remixicon/react"
import React from "react"
import { RadioGroup } from '@headlessui/react';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { TextInput, Textarea } from '@tremor/react';

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  price: FixedPrice | VariablePrice;
  description: string;
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const monthlyPlans: Plan[] = [
  {
    name: "Simple",
    price: "Cotizar",
    description: "Una solución simple con todo lo que necesitas para digitalizar tu marca.",
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
    description: "Potencia tus ventas digitalizando tu negocio con nuestros diseños y herramientas.",
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
];

const annuallyPlans: Plan[] = [
  {
    name: "Mantenimiento",
    price: "Cotizar",
    description: "Ofrecemos mantenimiento integral para todo tipo de solución.",
    capacity: ["Múltiples plataformas", "Actualizaciones en la nube"],
    features: [
      "Actualizaciones continuas",
      "Seguridad integral",
      "Migración a nuevas tecnologías",
      "Contratación mensual y anual",
    ],
    isStarter: false,
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
];

const isVariablePrice = (price: FixedPrice | VariablePrice): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined;
};

const workspaces = [
  {
    id: 1,
    title: 'Solucion web',
    description: 'Digitaliza tu marca.',
    users: 'a cotizar',
  },
  {
    id: 2,
    title: 'Solucion IA',
    description: 'Integraciones a medida',
    users: 'a cotizar',
  },
  {
    id: 3,
    title: 'Mantenimiento',
    description: 'Siempre actualizado y seguro',
    users: 'a cotizar',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = React.useState<"monthly" | "annually">("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

  const plansToShow = billingFrequency === "monthly" ? monthlyPlans : annuallyPlans;

  const handleButtonClick = (workspaceId: number) => {
    const workspace = workspaces.find(w => w.id === workspaceId);
    if (workspace) {
      setSelectedWorkspace(workspace);
      setIsModalOpen(true);
    }
  };

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
              className={`mt-6 ${billingFrequency === "annually" ? "max-w-[900px]" : "max-w-md"}`}
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
                        <div onClick={() => handleButtonClick(1)}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </div>
                      </Button>
                    ) : (
                      <Button asChild className="group">
                      <div onClick={() => handleButtonClick(plan.name === "Mantenimiento" ? 3 : plan.name === "Soluciones IA" ? 2 : 1)}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </div>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <RiCloseLine className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <FormCotizacion selectedWorkspace={selectedWorkspace} setSelectedWorkspace={setSelectedWorkspace} />
          </div>
        </div>
      )}

      <section
        id="calendly-inline"
        className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl"
      >
   <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/solucion-aios"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      </section>

      <Faqs />
    </div>
  );
}

function FormCotizacion({ selectedWorkspace, setSelectedWorkspace }: any) {
  return (
    <div className="obfuscate">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="mt-6 text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Necesitas un socio. Estamos aqui para ayudar.
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Antes de comenzar, nos gustaría comprender mejor sus necesidades. <br/>
          Revisaremos su solicitud y nos pondremos en contacto a la brevedad.
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Nombre completo<span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                required
                placeholder="Nombre completo"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="email@ejemplo.com"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="company"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Empresa
              </label>
              <TextInput
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Nombre empresa."
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="size"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Tamaño (empleados)
              </label>
              <TextInput
                type="text"
                id="company-size"
                name="company-size"
                autoComplete="organization"
                placeholder="0-10, 10-50, 50-100, +100."
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <RadioGroup
                value={selectedWorkspace}
                onChange={setSelectedWorkspace}
                name="platform"
              >
                <RadioGroup.Label className="text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Elige la solucion para ti
                </RadioGroup.Label>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {workspaces.map((item) => (
                    <RadioGroup.Option
                      key={item.id}
                      value={item}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'border-tremor-brand-subtle ring-2 ring-tremor-brand-muted dark:border-dark-tremor-brand-subtle dark:ring-dark-tremor-brand-muted'
                            : 'border-tremor-border dark:border-dark-tremor-border radio-buttons',
                          'relative flex cursor-pointer rounded-tremor-default border bg-tremor-background p-4 transition dark:bg-dark-tremor-background',
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <div className="flex w-full flex-col justify-between">
                            <div>
                              <RadioGroup.Label
                                as="span"
                                className="block text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                              >
                                {item.title}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          <RiCheckboxCircleFill
                            className={classNames(
                              !checked ? 'invisible' : '',
                              'size-5 shrink-0 text-tremor-brand dark:text-dark-tremor-brand',
                            )}
                            aria-hidden={true}
                          />
                          <span
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-tremor-brand dark:border-dark-tremor-brand'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-tremor-default',
                            )}
                            aria-hidden={true}
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="col-span-full mt-2">
            <label
              htmlFor="workspace-description"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Breve descripcion
            </label>
            <Textarea
              id="workspace-description"
              name="workspace-description"
              className="mt-2"
              placeholder='Describe brevemente el proyecto/solucion que necesitas.'
              rows={4}
            />
            <p className="mt-2 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
              En base a esta informacion se procedera a la cotizacion, evaluacion.
            </p>
          </div>
          <div className='container-contact-specialist'>
            ¿No estas seguro? <a
              href='https://calendly.com/solucion-aios/30min'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
            >
              Contacta a un especialista
            </a>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Cotizar solucion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
