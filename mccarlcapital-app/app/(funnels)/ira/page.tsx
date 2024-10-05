import React from 'react'
import Image from 'next/image'
import { faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@headlessui/react'

const pageDetails = {
  title: 'IRA'
}

const IRA = () => {
  return (
    <div className='mx-auto max-w-7xl text-center font-funnel mb-20'>
      <div className='uppercase text-5xl font-extrabold'>Invest with your 401K or IRA Today!</div>
      <div className='text-gray-400 mt-3 capitalize text-3xl font-light'>Learn the dirty little secret your financial advisor doesn&apos;t want you to know</div>

      <div className='grid grid-cols-1 lg:grid-cols-12 px-10 pt-8'>
        <div className='flex justify-center lg:col-span-5'>
          <Image className='w-3/4 h-fit' src='/funnels/test.avif' alt='Meet Click Funnels' width={873} height={1185} />
        </div>
        <div className='lg:col-span-7'>
          <div className="overflow-hidden rounded-lg bg-white funnel-shadow">
            <div className="px-4 py-7 sm:py-8 sm:px-12">
              <div className='capitalize font-extrabold text-4xl leading-normal'>Simplify and secure your retirement with real estate</div>
              <div className='text-xl my-6 flex flex-col gap-4'>
                <div className='flex items-center font-light'>
                  <FontAwesomeIcon icon={faCheck} className='size-8 mr-3 text-icon' />
                  <span className='font-bold'>Protected:&nbsp;</span>
                  Investment backed by Real Estate
                </div>
                <div className='flex items-center font-light'>
                  <FontAwesomeIcon icon={faCheck} className='size-8 mr-3 text-icon' />
                  <span className='font-bold'>Sheltered:&nbsp;</span>
                  No tax hit to use funds
                </div>
                <div className='flex items-center font-light'>
                  <FontAwesomeIcon icon={faCheck} className='size-8 mr-3 text-icon' />
                  <span className='font-bold'>Cash Flow:&nbsp;</span>
                  Money every month
                </div>
                <div className='flex items-center font-light'>
                  <FontAwesomeIcon icon={faCheck} className='size-8 mr-3 text-icon' />
                  <span className='font-bold'>Appreciation:&nbsp;</span>
                  Wealth generation
                </div>
              </div>
              <input className='block w-full rounded-md border-0 py-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-300 hover:ring-inset focus:ring-gray-300 placeholder:text-black focus:ring-inset text-lg sm:leading-6' placeholder='Email' />
              <Button className='group rounded my-6 w-full bg-orange hover:bg-green py-5 flex justify-center'>
                <div className='flex items-center text-white uppercase text-2xl font-bold'>
                  <FontAwesomeIcon icon={faSquareCheck} className='size-8 mr-3 text-orange group-hover:text-green bg-white rounded' />
                  I want the free Guide
                </div>
              </Button>
            </div>
          </div>
          <div className='flex w-full mt-8 items-center gap-6'>
              <div className=''>
                <Image className='rounded-full' src='/headshot.jpg' alt='Connor McCarl' width={150} height={150} />
              </div>
              <div className='text-left'>
                &quot;Real estate is the best change you can make to your retirement plans today.&quot;
                <br/><br/>
                <strong>- Connor McCarl</strong>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default IRA