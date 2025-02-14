// 'use client';

import {
    RiDatabase2Line,
    RiGroupLine,
    RiTimeLine,
  } from '@remixicon/react';
  import {
    Card,
    Divider,
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
          name: 'sales_by_day_api',
          status: 'active',
          type: 'Test workspace',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 34,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: '1d ago',
            },
          ],
        },
        {
          name: 'testing_environment_2',
          status: 'inactive',
          type: 'API',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 28,
            },
            {
              label: 'storage',
              value: '7.4/10GB',
            },
            {
              label: 'lastEdited',
              value: '2d ago',
            },
          ],
        },
        {
          name: 'training_environment',
          status: 'active',
          type: 'Test workspace',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 38,
            },
            {
              label: 'storage',
              value: '3.2/10GB',
            },
            {
              label: 'lastEdited',
              value: '4h ago',
            },
          ],
        },
        {
          name: 'analytics_dashboard',
          status: 'inactive',
          type: 'API',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 34,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: '1d ago',
            },
          ],
        },
        {
          name: 'managed_database_test',
          status: 'active',
          type: 'Test workspace',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 39,
            },
            {
              label: 'storage',
              value: '5.9/10GB',
            },
            {
              label: 'lastEdited',
              value: '7d ago',
            },
          ],
        },
      ],
    },
    {
      region: 'Solucion Empresarial',
      workspaces: [
        {
          name: 'testing_lab',
          status: 'active',
          type: 'Report',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 27,
            },
            {
              label: 'storage',
              value: '5/10GB',
            },
            {
              label: 'lastEdited',
              value: '1d ago',
            },
          ],
        },
        {
          name: 'research_project_2',
          status: 'inactive',
          type: 'Report',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 45,
            },
            {
              label: 'storage',
              value: '6.4/10GB',
            },
            {
              label: 'lastEdited',
              value: '4d ago',
            },
          ],
        },
        {
          name: 'supply_chain_api_month',
          status: 'active',
          type: 'API',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 41,
            },
            {
              label: 'storage',
              value: '7.8/10GB',
            },
            {
              label: 'lastEdited',
              value: '1d ago',
            },
          ],
        },
        {
          name: 'test_environment_beta',
          status: 'inactive',
          type: 'Test workspace',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 39,
            },
            {
              label: 'storage',
              value: '6.4/10GB',
            },
            {
              label: 'lastEdited',
              value: '2h ago',
            },
          ],
        },
        {
          name: 'private_workspace_test_api',
          status: 'inactive',
          type: 'Test workspace',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 31,
            },
            {
              label: 'storage',
              value: '4.1/10GB',
            },
            {
              label: 'lastEdited',
              value: '2d ago',
            },
          ],
        },
      ],
    },
    {
      region: 'Solucion Empresarial',
      workspaces: [
        {
          name: 'testing_lab',
          status: 'active',
          type: 'API',
          database: 'live_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 24,
            },
            {
              label: 'storage',
              value: '6.1/10GB',
            },
            {
              label: 'lastEdited',
              value: '1h ago',
            },
          ],
        },
        {
          name: 'research_project_2',
          status: 'inactive',
          type: 'Report',
          database: 'test_data',
          href: '#',
          capacity: [
            {
              label: 'users',
              value: 12,
            },
            {
              label: 'storage',
              value: '1.1/10GB',
            },
            {
              label: 'lastEdited',
              value: '3d ago',
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
          <div className="p-6">
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
                  <div className="block md:flex md:items-center md:justify-between">
                    
                    <div className="lg:flex lg:items-center lg:space-x-3">
                    
                      <span className="hidden h-8 w-px bg-tremor-border dark:bg-dark-tremor-border lg:block" />
                      <button
                        type="button"
                        className="mt-2 h-9 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis disabled:hover:bg-tremor-brand dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:block md:mt-0 md:w-fit"
                      >
                        Sugerir Funcionalidades
                      </button>
                    </div>
                  </div>
                  <Divider />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {category.workspaces.map((workspace) => (
                      <Card
                        key={workspace.name}
                        className="rounded-tremor-small p-4"
                      >
                        <div className="flex items-center space-x-2">
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
                            <span>Type:</span>
                            <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              {workspace.type}
                            </span>
                          </ListItem>
                          <ListItem className="justify-start space-x-2 py-1">
                            <span>Database:</span>
                            <span className="inline-flex items-center gap-1.5 rounded-tremor-small px-2 py-1 text-xs font-medium text-tremor-content-strong ring-1 ring-inset ring-tremor-ring dark:text-dark-tremor-content-strong dark:ring-dark-tremor-ring">
                              {workspace.database === 'test_data' ? (
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
  
                              {workspace.database}
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