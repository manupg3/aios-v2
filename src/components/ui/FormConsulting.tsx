// 'use client';

import {
    Divider,
    List,
    ListItem,
    NumberInput,
    Select,
    SelectItem,
    Textarea,
    TextInput,
  } from '@tremor/react';
  
  // This example requires @tailwind/forms
  
  // // tailwind.config.js
  // module.exports = {
  //   // ...
  //   plugins: [
  //     // ...
  //     require('@tailwindcss/forms'),
  //   ],
  // }
  
  export default function Example() {
    return (
      <>
        <form>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h2 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Personal information
              </h2>
              <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="sm:max-w-3xl md:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    First name
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="given-name"
                    placeholder="Emma"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Last name
                  </label>
                  <TextInput
                    type="text"
                    id="last-name"
                    name="last-name"
                    autoComplete="family-name"
                    placeholder="Crown"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Email
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="emma@company.com"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="year"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Birth year
                  </label>
                  <NumberInput
                    id="birthyear"
                    name="year"
                    placeholder="1990"
                    enableStepper={false}
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Role
                  </label>
                  <TextInput
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Senior Manager"
                    disabled
                    className="mt-2"
                  />
                  <p className="mt-2 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                    Roles can only be changed by system admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-14" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h2 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Workspace settings
              </h2>
              <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="sm:max-w-3xl md:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="workspace-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Workspace name
                  </label>
                  <TextInput
                    type="text"
                    id="workspace-name"
                    name="workspace-name"
                    placeholder="Test workspace"
                    className="mt-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="visibility"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Visibility
                  </label>
                  <Select
                    id="visibility"
                    name="visibility"
                    defaultValue="private"
                    className="mt-2"
                    enableClear={false}
                  >
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </Select>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="workspace-description"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Workspace description
                  </label>
                  <Textarea
                    id="workspace-description"
                    name="workspace-description"
                    className="mt-2"
                    rows={4}
                  />
                  <p className="mt-2 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                    Note: description provided will not be displayed externally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-14" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h2 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Notification settings
              </h2>
              <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="sm:max-w-3xl md:col-span-2">
              <fieldset>
                <legend className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Team
                </legend>
                <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                  Configure the types of team alerts you want to receive.
                </p>
                <List className="mt-4">
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="team-requests"
                      name="team-requests"
                      type="checkbox"
                      defaultChecked
                      className="size-4 rounded border-tremor-border accent-tremor-brand focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:accent-tremor-brand dark:ring-offset-gray-950 dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="team-requests"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Team join requests
                    </label>
                  </ListItem>
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="team-activity-digest"
                      name="team-activity-digest"
                      type="checkbox"
                      className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="team-activity-digest"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Weekly team activity digest
                    </label>
                  </ListItem>
                </List>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Usage
                </legend>
                <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                  Configure the types of usage alerts you want to receive.
                </p>
                <List className="mt-4">
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="api-requests"
                      name="api-requests"
                      type="checkbox"
                      className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="api-requests"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      API requests
                    </label>
                  </ListItem>
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="workspace-execution"
                      name="workspace-execution"
                      type="checkbox"
                      className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="workspace-execution"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Workspace loading times
                    </label>
                  </ListItem>
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="query-caching"
                      name="query-caching"
                      type="checkbox"
                      defaultChecked
                      className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="query-caching"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Query caching
                    </label>
                  </ListItem>
                  <ListItem className="items-center justify-start gap-x-3 py-3">
                    <input
                      id="storage"
                      name="storage"
                      type="checkbox"
                      defaultChecked
                      className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                    />
                    <label
                      htmlFor="storage"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Storage
                    </label>
                  </ListItem>
                </List>
              </fieldset>
            </div>
          </div>
          <Divider className="my-14" />
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Go back
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Save settings
            </button>
          </div>
        </form>
      </>
    );
  }