import React from 'react'
import { Button } from "@headlessui/react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { ShieldCheckIcon, BanknotesIcon, CircleStackIcon, DocumentChartBarIcon, ArrowPathIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

const stats = [
    { label: 'Properties analyzed every month', value: '520' },
    { label: 'Assets under management goal', value: '$1 billion' },
    { label: 'Funds raised goal', value: '$250 million' },
]
const values = [
{
    name: 'Special',
    description:
    'Every person has a special uniqueness that fosters strong connections within our team, enhancing both our individual and collective lives. Recognizing and celebrating these special qualities boosts our confidence and character in everything we do.',
},
{
    name: 'Simple',
    description:
    'We prioritize clear and straightforward communication. Simple communication is powerful and effective, streamlining our operations and investor relations. This clarity allows us to scale efficiently, build trust with our investors, and facilitate larger investments.',
},
{
    name: 'Successful',
    description:
    'Our team is committed to success in all aspects of life. Understanding and achieving success in both personal and professional realms is crucial. Success in personal life enhances professional performance, and vice versa, ensuring a thriving business and a happy, productive team.',
},
]

const benefits = [
{
    icon: ShieldCheckIcon,
    title: 'Stability',
    description: 'Real estate is less volatile and has historically outperformed the S&P 500.',
    button: 'Gain Stability',
},
{
    icon: ArrowPathIcon,
    title: 'Cash Flow',
    description: 'Tenants pay monthly rent which covers expenses and provides cash flow to the owners.',
    button: 'Earn Cash Flow',
},
{
    icon: CircleStackIcon,
    title: 'Amortization',
    description: 'Property cash flow services the debt which increases your equity, creating long-term wealth.',
    button: 'Increase Your Equity',
},
{
    icon: DocumentChartBarIcon,
    title: 'Tax Benefits',
    description: 'Depreciation is a free tax write-off that allows you to keep more cash flow in your pocket.',
    button: 'Get Tax Benefits',
},
{
    icon: DocumentDuplicateIcon,
    title: 'Leverage',
    description: 'You can leverage real estate, allowing for the purchase of $100M with only $25M.',
    button: 'Leverage Real Estate',
},
{
    icon: BanknotesIcon,
    title: 'Appreciation',
    description: 'Real estate typically appreciates in value faster than inflation.',
    button: 'Invest in Appreciating Assets',
},
]

const Overview = () => {
  return (
    <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
            <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
            >
            <defs>
                <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
                >
                <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
                />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-0 sm:pt-60 lg:px-8 lg:pt-8">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Leveling the playing field for all investors.
                            </h1>
                            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                <strong>McCarl Capital</strong> acquires and manages real estate properties with a focus on both near-term income generation and long-term value creation. We raise money from investors to invest in commercial real estate such as apartment buildings, mobile home parks, RV parks, office buildings and hotels.
                            </p>
                            <Button
                                className="rounded-md bg-[#AF8C52] mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF8C52]"
                            >
                                Invest Now
                            </Button>
                            <a href="#benefits" className="text-sm font-semibold leading-6 ml-6 hover:text-gold">
                                Benefits <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <div className="relative">
                                <img
                                src="/about/night.jpg"
                                alt="Apartment at Night"
                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-right shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            </div>
                            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <div className="relative">
                                <img
                                src="/about/grass.jpg"
                                alt="Apartment Grass Lawn"
                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="relative">
                                <img
                                src="/about/pool.jpg"
                                alt="Apartment Pool"
                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            </div>
                            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <div className="relative">
                                <img
                                src="/about/balconies.jpg"
                                alt="Apartment with Balconies"
                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="relative">
                                <img
                                src="/about/brick.jpg"
                                alt="Brick Apartment"
                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mission section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                    We create generational wealth for the families invested in our success, fueled by our dedication to real estate. Participating in ownership of each property we invest in, these families earn cash flow and appreciation. 
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    <p>
                    We excel in understanding our investors, tenants, properties, and communities, consistently staying ahead of the competition and finding the edge often. We are property first, and our focus on property operations ensures high tenant retention, exceptional property management, and stable investor returns.
                    </p>
                    <p className="mt-10">
                    McCarl Capital is localized and deeply committed to the communities we operate in, creating lasting, positive change. We are seen as community influencers, driving long-term prosperity and economic wealth for generations. We are encouraged by the surrounding areas in which we are located and hold properties.
                    </p>
                </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
            </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    When our people embody being special, simple, and successful, McCarl Capital naturally reflects these qualities.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
                <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
                </div>
            ))}
            </dl>
        </div>

        {/* Image section */}
        <div className="mt-24 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
            src="/about/together.jpeg"
            alt="Arms Together"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
        </div>

        {/* Benefits section */}
        <div id="benefits" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Investing Benefits</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Invest with us in apartment buildings and achieve the following benefits.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {benefits.map((value) => (
                <div key={value.title} className="group overflow-hidden rounded-lg bg-white shadow hover:bg-gold hover:text-white">
                    <div className="px-5 py-8 flex flex-col justify-center items-center gap-y-4">
                        <value.icon className='size-14' />
                        <div className='text-xl'>{value.title}</div>
                        <div className='text-center'>{value.description}</div>
                        <Button className='px-16 py-2.5 bg-gold text-sm text-white group-hover:bg-white group-hover:text-black'>{value.button}</Button>
                    </div>
                </div>
            ))}
            </dl>
        </div>
    </main>
  )
}

export default Overview