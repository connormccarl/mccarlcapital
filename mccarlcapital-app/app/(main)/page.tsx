import React from "react";
import { Button } from "@headlessui/react";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <div className="relative isolate max-w-7xl">
      <div className="w-screen bg-[url('/lion.jpeg')] bg-cover">
        <div className="mx-auto max-w-2xl pt-14 pb-20 text-white text-drop-shadow">
          <div className="hidden sm:flex sm:justify-center">
            {/*<div className="relative rounded-full px-3 pb-3 text-sm leading-6">
              Announcing our next fund.{' '}
              <a href="#" className="font-semibold text-[#AF8C52] hover:text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Access the Best Real Estate Investments
            </h1>
            <p className="mt-6 text-lg leading-8">
              Protecting your future with large commerical real estate investments for the passive investor. Offering great cashflow and appreciation for your immediate needs and long-term wealth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CustomButton className="pointer-events-none opacity-30">
                Get started
              </CustomButton>
              <a href="/about" className="text-sm font-semibold leading-6 hover:text-gold-400">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen left-0 bg-[#AF8C52] text-white">
        <div className="flex flex-col sm:flex-row items-center justify-center p-5">
          <div className="col-span-4 text-lg uppercase text-center flex justify-center">
            Invest with your self-directed IRA or 401K
          </div>
          <div className="mt-2 sm:mt-0">
            <Button className="pointer-events-none opacity-30 ms-3 rounded py-2 px-4 text-base bg-white text-black hover:bg-green hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
