import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Connor McCarl',
    title: 'Managing Director',
    role: 'Executive',
    imageUrl:
      '/people/headshot.jpg',
    bio: 'Connor has been passionate about real estate since he was a child. After a decade of building businesses in software, telecom, and digital marketing, he started helping everyday investors capitalize on the benefits of multifamily real estate. With a knack for systems that scale, Connor has helped McCarl Capital position to reach over 12,000 units in the first five years of inception.',
    xUrl: 'https://x.com/connormccarl',
    linkedinUrl: 'https://www.linkedin.com/in/connormccarl/',
    email: 'connormccarl@gmail.com',
    telephone: '+1 (925) 378-1728'
  },
  {
    name: 'Joshua Ferrari',
    title: 'Investor Relations Advisor',
    role: 'Advisor',
    imageUrl:
      '/people/josh.webp',
    bio: null,
    xUrl: null,
    linkedinUrl: 'https://www.linkedin.com/in/joshuaferrari/',
    email: null,
    telephone: null
  },
  {
    name: 'Reggie Ross',
    title: 'Asset Management Advisor',
    role: 'Advisor',
    imageUrl:
      '/people/reggie.webp',
    bio: null,
    xUrl: null,
    linkedinUrl: 'https://www.linkedin.com/in/reginaldross/',
    email: null,
    telephone: null
  },
  {
    name: 'Matt Gardner',
    title: 'Operations Advisor',
    role: 'Advisor',
    imageUrl:
      '/people/matt.webp',
    bio: null,
    xUrl: null,
    linkedinUrl: 'https://www.linkedin.com/in/roargardner/',
    email: null,
    telephone: null
  }/*,
  {
    name: 'Precious Nasikpo',
    title: 'Acquisitions Associate',
    role: 'Acquistions',
    imageUrl:
      '/people/precious.jpeg',
    bio: 'Precious has been passionate about real estate since 2020, blending his expertise in property investment with a commitment to environmental sustainability. As a dedicated environmentalist and real estate investor, he has helped numerous clients make informed, eco-conscious decisions. Recently joining McCarl Capital, precious is excited to bring his unique perspective and drive for sustainable growth to the team, contributing to its ambitious real estate expansion.',
    xUrl: null,
    linkedinUrl: 'https://www.linkedin.com/in/precious-nasikpo-12113a286/',
    email: 'precious.nasikpo@mccarlcapital.com',
    telephone: '+1 (925) 378-1728,,,,,,802'
  },*/
]

const Team = () => {
  return (
    <div className="bg-white py-4 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 lg:px-8">
        <div className="max-w-2xl xl:col-span-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about real estate and dedicated to delivering the
            best results for our investors.
          </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12'>
          {people.map((person) => (
            <div
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img alt="" src={person.imageUrl} className="mx-auto h-32 w-32 shrink-0 rounded-full" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                <dl className="mt-1 flex grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{person.title}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {person.role}
                    </span>
                  </dd>
                  <dt className="sr-only">Social Media Links</dt>
                  <dd className="text-sm flex flex-row gap-x-2 pt-6">
                    {person.xUrl && (<div>
                        <a href={person.xUrl} target="_blank" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">X</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                          </svg>
                        </a>
                      </div>)}
                      <div>
                        <a href={person.linkedinUrl} target="_blank" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  {person.email && <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      Email
                    </a>
                  </div>}
                  {person.telephone && <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <PhoneIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      Call
                    </a>
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team