'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { signOut } from 'next-auth/react'

interface Props {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Posts', href: '/dashboard', icon: PencilSquareIcon },
]
/*
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
*/
const userNavigation = [
  { name: 'Sign Out', href: "#" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const AdminLayout = ({ children }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState(usePathname());
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
    <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="McCarl Capital"
                    src="/banner.png"
                    className="h-16 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <button
                              onClick={() => {
                                setActive(item.href);
                                router.push(item.href);
                                setSidebarOpen(false);
                              }}
                              className={classNames(
                                active === item.href
                                  ? 'bg-gray-50 text-gold'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-gold',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  active === item.href ? 'text-gold' : 'text-gray-400 group-hover:text-gold',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {/*
                    <li>
                      <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <Link
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-50 text-gold'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-gold',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'border-gold text-gold'
                                    : 'border-gray-200 text-gray-400 group-hover:border-gold group-hover:text-gold',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    */}
                    <li className="mt-auto">
                      <Link
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-gold"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gold"
                        />
                        Settings
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="McCarl Capital"
                src="/banner.png"
                className="h-16 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            setActive(item.href);
                            router.push(item.href);
                          }}
                          className={classNames(
                            active === item.href
                              ? 'bg-gray-50 text-gold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gold',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              active === item.href ? 'text-gold' : 'text-gray-400 group-hover:text-gold',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                {/*
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <Link
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-gold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gold',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-gold text-gold'
                                : 'border-gray-200 text-gray-400 group-hover:border-gold group-hover:text-gold',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                */}
                <li className="mt-auto">
                  <Link
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-gold"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gold"
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

            <div className="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="/headshot.jpg"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                        Connor
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        {item.name === 'Sign Out' ?
                          <button onClick={() => signOut({ callbackUrl: '/'})} className="block w-full px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                            {item.name}
                          </button>
                          :
                          <Link
                            href={item.href}
                            className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                          >
                          {item.name}
                        </Link>
                        }
                        
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
      
    </>
  )
}

export default AdminLayout;