'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  CloseButton
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  InformationCircleIcon,
  UsersIcon,
  HomeModernIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import CustomButton from './CustomButton'

const about = [
  { name: 'Overview', description: 'Get to know us better', href: '/about', icon: InformationCircleIcon },
  { name: 'Markets', description: 'See where we invest', href: '/markets', icon: HomeModernIcon },
  { name: 'Team', description: 'See who you are working with', href: '/team', icon: UsersIcon },
  { name: 'Blog', description: 'Educate yourself and stay informed', href: '/blog', icon: NewspaperIcon },
]
const callsToAction = [
  { name: 'Watch overview', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full bg-red-600 text-white text-center">
        <span className='uppercase tracking-widest'>
          beta
        </span>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:p-0 lg:px-8" aria-label="Global">
        <div className="contents lg:flex items-center">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">McCarl Capital</span>
              <Image className="h-16 lg:h-20 w-auto" src="/banner.png" alt="McCarl Capital" width={275} height={80} />
            </Link>
          </div>
          <div className="flex lg:hidden">
              <Link href="tel:+1(925)378-1728" className='p-1.5 bg-green rounded-full'>
                  <span className="sr-only">Call us</span>
                  <PhoneIcon className="h-6 text-white" aria-hidden="true" />
              </Link>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ps-10">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-gold-400">
                About
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>

              <PopoverPanel data-open={openPanel ? true : null} transition className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="p-4">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#AF8C52]" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <CloseButton as={Link} href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </CloseButton>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <CloseButton
                    as={Link}
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </CloseButton>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            {/*<Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Investments
            </Link>*/}
            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900  hover:text-gold-400">
              Contact
            </Link>
            {/*<Link href="/ira" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gold-400">
              IRA
            </Link>*/}
          </PopoverGroup>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Link href="tel:+1(925)378-1728" className='me-5 hover:text-gold-400'>
              (954) 361-6700
          </Link>
          <Link href="/signin" className="text-sm font-semibold leading-6 text-gray-900 me-5 hover:text-gold-400">
            Login
          </Link>
          <CustomButton className="pointer-events-none opacity-30">
            Ready to Invest? <span aria-hidden="true">&rarr;</span>
          </CustomButton>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">McCarl Capital</span>
              <Image
                className="h-16 w-auto"
                src="/banner.png"
                alt="McCarl Capital"
                width={275}
                height={80} 
              />
            </Link>
            <Link href="tel:+1(925)378-1728" className='p-1.5 bg-green rounded-full'>
                <span className="sr-only">Call us</span>
                <PhoneIcon className="h-6 text-white" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...about, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as={Button}
                            onClick={() => {
                              router.push(item.href);
                              setMobileMenuOpen(false);
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                {/*<Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Investments
                </Link>*/}
                <Button
                  onClick={() => {
                    router.push('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Button>
                {/*<Button
                  onClick={() => {
                    router.push('/ira');
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  IRA
                </Button>*/}
              </div>
              <div className="py-6">
                <Button
                  onClick={() => {
                    router.push('/signin');
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </Button>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ready to Invest?
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
