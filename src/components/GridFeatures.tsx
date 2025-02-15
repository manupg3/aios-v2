// 'use client';

import {
    RiDatabase2Line,
    RiGroupLine,
    RiTimeLine,
  } from '@remixicon/react';
  import {
    Card,
    List,
    ListItem,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from '@tremor/react';
  
  const data = [
    {
      region: 'Solucion Simmple',
      workspaces: [
        {
          name: 'Hosting Gratis',
          status: 'active',
          tipo: 'Servicio de Hosting',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'SSL Gratis',
          status: 'active',
          tipo: 'Seguridad',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Diseños Premium',
          status: 'active',
          tipo: 'Diseño Web',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: +50,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Admin Panel',
          status: 'active',
          tipo: 'Administracion',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 3,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Integraciones a Medida',
          status: 'active',
          tipo: 'Desarrollo Personalizado',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 10,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
            name: 'Integraciones IA',
            status: 'active',
            tipo: 'Inteligencia Artificial',
            registro: 'actualizando',
            href: '#',
            capacity: [
              {
                label: 'users',
                value: 1,
              },
              {
                label: 'storage',
                value: '5/10GB',
              },
              {
                label: 'lastEdited',
                value: 'Ilimitado',
              },
            ],
        },
      ],
    },
    {
      region: 'Solucion Empresarial',
      workspaces: [
        {
          name: 'Hosting Gratis',
          status: 'active',
          tipo: 'Servicio de Hosting',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 5,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'SSL',
          status: 'active',
          tipo: 'Seguridad',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 20,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Diseños Premim a Medida',
          status: 'active',
          tipo: 'Diseño Web',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 50,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Admin Panel Personalizado',
          status: 'active',
          tipo: 'Administracion',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 20,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Integraciones a Medida',
          status: 'active',
          tipo: 'Desarrollo Personalizado',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 20,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Integraciones Ia',
          status: 'active',
          tipo: 'Inteligencia Artificial',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 2,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
     
        {
          name: 'Integraciones CRM (Leads)',
          status: 'active',
          tipo: 'Marketing',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 5,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        
        {
          name: 'Mantenimiento Continuo',
          status: 'active',
          tipo: 'Seguridad',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '20/50GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },

      ],
    },
    {
      region: 'Solucion E-Commerce',
      workspaces: [
        {
          name: 'Hosting Gratis',
          status: 'active',
          tipo: 'Servicio de Hosting',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 50,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'SSL Gratis',
          status: 'active',
          tipo: 'Seguridad',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 50,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Admin Personalizado E-Commerce',
          status: 'active',
          tipo: 'Administracion',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 20,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Integraciones a Medida',
          status: 'active',
          tipo: 'Administracion',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 100,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Integraciones IA',
          status: 'active',
          tipo: 'Inteligencia artificual',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 2,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Potenciador de Ventas',
          status: 'active',
          tipo: 'Ventas On Site',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 10,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Analisis Integral',
          status: 'active',
          tipo: 'Marketing',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Mantenimiento Continuo',
          status: 'active',
          tipo: 'Seguridad',
          registro: 'actualizado',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
        {
          name: 'Administracion Integral E-Commerce',
          status: 'active',
          tipo: 'Administracion',
          registro: 'actualizando',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 1,
            },
            {
              label: 'storage',
              value: '100/150GB',
            },
            {
              label: 'lastEdited',
              value: 'Ilimitado',
            },
          ],
        },
      ],
    },
  ];
  
  const capacityIcon = {
    users: RiGroupLine,
    storage: RiDatabase2Line,
    lastEdited: RiTimeLine,
  };
  
  export default function GridFeatures() {
    return (
      <>
        <Card className="p-0">
          <div className="p-6 container-title-features">
            <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Funcionalidades
            </h3>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Ofrecemos multiples funcionalidades, modulos customizados, integraciones y mucho mas.
            </p>
          </div>
          <TabGroup>
            <TabList className="px-6">
              {data.map((category) => (
                <Tab
                  key={category.region}
                  className="pb-2.5 font-medium hover:border-gray-300"
                >
                  <span className="ui-selected:text-tremor-content-strong ui-selected:dark:text-dark-tremor-content-strong">
                    {category.region}
                  </span>
                  <span className="ml-2 hidden rounded-tremor-small bg-tremor-background px-2 py-1 text-xs font-semibold tabular-nums ring-1 ring-inset ring-tremor-ring ui-selected:text-tremor-content-emphasis dark:bg-dark-tremor-background dark:ring-dark-tremor-ring ui-selected:dark:text-dark-tremor-content-emphasis sm:inline-flex">
                    {category.workspaces.length}
                  </span>
                </Tab>
              ))}
            </TabList>
            <TabPanels className="pt-2">
              {data.map((category) => (
                <TabPanel
                  key={category.region}
                  className="space-y-4 px-6 pb-6 pt-2"
                >
       
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {category.workspaces.map((workspace) => (
                      <Card
                        key={workspace.name}
                        className="rounded-tremor-small p-4"
                      >
                        <div className="flex justify-between items-center space-x-2">
                          <h4 className="truncate text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            <a
                              href={workspace.href}
                              className="focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden={true}
                              />
                              {workspace.name}
                            </a>
                          </h4>
                          {workspace.status === 'active' ? (
                            <span className="inline-flex items-center rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                              active
                            </span>
                          ) : null}
                        </div>
                        <List className="mt-3 divide-none">
                          <ListItem className="justify-start space-x-2 py-1">
                            <span>Tipo:</span>
                            <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              {workspace.tipo}
                            </span>
                          </ListItem>
                          <ListItem className="justify-start space-x-2 py-1">
                            <span>Registro:</span>
                            <span className="inline-flex items-center gap-1.5 rounded-tremor-small px-2 py-1 text-xs font-medium text-tremor-content-strong ring-1 ring-inset ring-tremor-ring dark:text-dark-tremor-content-strong dark:ring-dark-tremor-ring">
                              {workspace.registro === 'actualizando' ? (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-tremor-content-subtle dark:bg-dark-tremor-content-subtle"
                                  aria-hidden={true}
                                />
                              ) : (
                                <span
                                  className="size-2 shrink-0 rounded-sm bg-tremor-brand dark:bg-dark-tremor-brand"
                                  aria-hidden={true}
                                />
                              )}
  
                              {workspace.registro}
                            </span>
                          </ListItem>
                        </List>
                        <div className="mt-5 flex flex-wrap gap-4">
                          {workspace.capacity.map((item) => {
                            const Icon = capacityIcon[item.label as keyof typeof capacityIcon]; // Aserción de tipo
                            return (
                              <div
                                key={item.label}
                                className="flex items-center space-x-1.5"
                              >
                                <Icon
                                  className="size-4 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
                                  aria-hidden={true}
                                />
                                <span className="text-xs font-medium text-tremor-content dark:text-dark-tremor-content">
                                  {item.value}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </Card>
      </>
    );
  }