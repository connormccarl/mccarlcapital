import React from 'react'

const timeline = [
  {
    name: 'Founded company',
    description:
      'Connor McCarl starts McCarl Capital.',
    date: 'Nov 2023',
    dateTime: '2023-11',
  },
  {
    name: 'Entered North Carolina',
    description:
      'McCarl Capital picks Raleigh-Durham, North Carolina as the next target market.',
    date: 'Oct 2024',
    dateTime: '2024-10',
  },
]

export default function Markets() {

  return (
    <main className="isolate">
    {/* Hero section */}
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-16">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Raleigh-Durham, <br/>North Carolina
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                    Raleigh-Durham, NC is a growing powerhouse in the Southeastern United States, attracting both residents and businesses with its combination of economic opportunity, education, and lifestyle. Below is an overview of Raleigh-Durham as a top market for apartment investing based on key factors.
                </p>
            </div>
        </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>

    {/* Timeline section */}
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
            <div key={item.name}>
            <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
            <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
        ))}
        </div>
    </div>

    {/* Content section */}
    <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Analyzing this market</h2>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Population Growth
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Raleigh-Durham has one of the fastest-growing populations in the Southeast, with an annual growth rate of around 2%. This population increase is driven by a mix of young professionals, families, and students moving to the area for jobs, education, and quality of life. 
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The Research Triangle (Raleigh, Durham, and Chapel Hill) is home to over 2 million people and is projected to continue growing rapidly. Population growth supports a healthy demand for rentals, making this a key advantage for apartment investors.
                    </p>
                </div>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Employment Growth
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The area benefits from its proximity to Research Triangle Park (RTP), one of the largest research and technology hubs in the U.S., attracting companies like IBM, Cisco, and GlaxoSmithKline. 
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Job growth in tech, healthcare, biotech, and education is robust, providing a strong employment base and keeping unemployment rates below the national average. This diversification mirrors the employment diversity sought after in an investment market.
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The median income in Raleigh-Durham is relatively high, supporting rental affordability and reducing the risk of vacancy.
                    </p>
                </div>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Educational Institutions & Renters
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The region is home to several major universities, including Duke University, University of North Carolina at Chapel Hill, and North Carolina State University, which collectively house tens of thousands of students. This creates steady demand for student housing and long-term rentals.
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Approximately 40-45% of the population rents their housing, which is lower than national urban averages but reflective of the area&apos;s strong rental demand, especially in the urban and university-centric areas. 
                    </p>
                </div>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Rental Demand
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The influx of young professionals and students has created a strong rental market, particularly in Raleigh and downtown Durham.
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        As the area continues to attract both domestic and international migrants, the demand for rental properties, especially apartments, is rising. The rental market benefits from both the transient student population and a growing number of high-income renters. 
                    </p>
                </div>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Rental Yield and ROI
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The average rental yield in Raleigh-Durham is around 5-7%, depending on the specific location and type of property, with neighborhoods closer to RTP or universities offering better returns. This is in line with the document&apos;s recommendation of focusing on areas with higher ROI potential.
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The combination of rental appreciation and high demand ensures a strong long-term ROI. Investors have seen both capital appreciation and steady cash flow from apartment investments, making this a solid choice for apartment investing. 
                    </p>
                </div>
                <div>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Supply vs. Demand
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        The housing supply in Raleigh-Durham is increasing with new apartment complexes and developments, but the demand continues to outpace supply in many submarkets, leading to high occupancy rates and rising rental prices. 
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        This supply-demand imbalance creates opportunities for rental increases and high occupancy, key factors for maximizing rental income. 
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                alt=""
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    {/* Stats */}
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Raleigh-Durham, NC is an excellent market for apartment investing.
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
            Don&apos;t believe us? Look at the recap numbers below!
        </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">$1,469</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-gray-900">Effective rents</p>
            <p className="mt-2 text-base leading-7 text-gray-600">
                The average effective rent per unit reached $1,469.
            </p>
            </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">97.8%</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
                Occupancy
            </p>
            <p className="mt-2 text-base leading-7 text-gray-400">
                Demand reaches new heights market-wide and Class C properties report 97.8% occupancy.
            </p>
            </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">19%</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">Rent growth</p>
            <p className="mt-2 text-base leading-7 text-indigo-200">
                Annual effective rent growth on a per square foot basis reached 19%, the highest ever recorded.
            </p>
            </div>
        </div>
        </div>
    </div>
    </main>
  )
}