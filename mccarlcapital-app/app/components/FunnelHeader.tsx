import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@headlessui/react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const FunnelHeader = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-center py-4" aria-label="Global">
        <Link href='/' className='p-1'>
            <ChevronLeftIcon className='size-5 text-gold hover:text-black' />
        </Link>
        <Image className="h-16 lg:h-28 w-auto" src="/banner.png" alt="McCarl Capital" width={500} height={80} />
      </nav>
    </header>
  )
}

export default FunnelHeader