// 'use client';

import { RiCheckboxCircleFill } from '@remixicon/react';
import { useEffect, useState } from 'react'; 

const steps = [
  {
    id: '1.',
    title: 'Set up your organization',
    description:
      'You successfully created your account. You can edit your account details anytime.',
    href: '#',
  },
  {
    id: '2.',
    title: 'Connect to data source',
    description:
      'The platform supports more than 50 databases and data warehouses.',
    href: '#',
  },
  {
    id: '3.',
    title: 'Create metrics',
    description: 'Create metrics using custom SQL or our intuitive query mask.',
    href: '#',
  },
  {
    id: '4.',
    title: 'Create report',
    description:
      'Transform metrics into visualizations and arrange them visually.',
    href: '#',
  },
];

export default function StepsComponent() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <div className="container-steps-modal sm:mx-auto sm:max-w-lg">
      <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Simplificamos el proceso en 4 pasos
      </h3>
      <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
  
      </p>
    
      <ul role="list" className="mt-4 space-y-4 ul-steps-modal">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className="relative rounded-tremor-default border border-tremor-border bg-tremor-background p-4 dark:border-dark-tremor-border dark:bg-dark-tremor-background"
          >
            <div className="flex items-start space-x-3">
              {index < currentStep ? ( // Verificar si el paso está completado
                <RiCheckboxCircleFill
                  className="size-6 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                  aria-hidden={true}
                />
              ) : (
                <span
                  className="flex size-6 items-center justify-center font-medium text-tremor-content dark:text-dark-tremor-content"
                  aria-hidden={true}
                >
                  {step.id}
                </span>
              )}
              <div>
                <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <a href={step.href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden={true} />
                    {step.title}
                  </a>
                </h3>
                <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                  {step.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}