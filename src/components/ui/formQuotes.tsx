import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { TextInput, Textarea } from '@tremor/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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


export default function FormCotizacion() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

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
