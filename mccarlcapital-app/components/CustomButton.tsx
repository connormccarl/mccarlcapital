import React from 'react'
import { Button } from '@headlessui/react'

const CustomButton = ({ className, variant , children }: { className?: string, variant?: string, children: React.ReactNode }) => {
  return (
    <Button className={`${className} rounded bg-gold hover:bg-green hover:text-white px-4 py-2 text-sm font-semibold leading-6 text-white`}>
        {children}
    </Button>
  )
}

export default CustomButton;