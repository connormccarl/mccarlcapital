"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/20/solid'
import { useSession, signOut } from 'next-auth/react'

export default function AdminHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // session
  const {status, data: session} = useSession();
  if(status === 'loading') return null;

  return (
    <header className="bg-white">
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
          <Link href="/admin" className="text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <div>
            {session!.user!.name}
          </div>
          <button onClick={() => signOut()} className="text-sm font-semibold leading-6 text-gray-900 ms-5">
            Sign Out
          </button>
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/admin"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/api/auth/signin"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
