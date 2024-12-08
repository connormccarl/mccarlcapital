"use client";

import React, { useState } from "react";
import { DialogTitle } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface modalProps {
  setOpen: (value: boolean) => void;
}

const ThreeStep = ({ setOpen }: modalProps) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits

    let formattedNumber = "";

    if (inputValue.length > 0) {
      formattedNumber = `(${inputValue.slice(0, 3)}`;
    }
    if (inputValue.length > 3) {
      formattedNumber += `) ${inputValue.slice(3, 6)}`;
    }
    if (inputValue.length > 6) {
      formattedNumber += `-${inputValue.slice(6, 10)}`;
    }

    setPhone(formattedNumber);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: string
  ) => {
    e.preventDefault();

    if (action === "email") {
      console.log("saved email");
    } else if (action === "phone") {
      console.log("saved phone");
    }
  };

  const steps = [
    {
      id: "01",
      name: "Brief Discovery Call",
      status: step === 1 ? "current" : step > 1 ? "complete" : "upcoming",
    },
    {
      id: "02",
      name: "Join Investor List",
      status: step === 2 ? "current" : step > 2 ? "complete" : "upcoming",
    },
    {
      id: "03",
      name: "Enjoy Multifamily Investing",
      status: step === 3 ? "current" : step > 3 ? "complete" : "upcoming",
    },
  ];

  return (
    <div className="">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className="relative md:flex md:flex-1 pointer-events-none"
            >
              {step.status === "complete" ? (
                <button className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-400 group-hover:bg-gold-400">
                      <CheckIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </button>
              ) : step.status === "current" ? (
                <button
                  aria-current="step"
                  className="flex items-center px-6 py-4 text-sm font-medium"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-400">
                    <span className="text-gold-400">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gold-400">
                    {step.name}
                  </span>
                </button>
              ) : (
                <button className="flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300">
                      <span className="text-gray-500">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                  </span>
                </button>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 22 80"
                      preserveAspectRatio="none"
                      className="size-full text-gray-300"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        stroke="currentcolor"
                        vectorEffect="non-scaling-stroke"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
      <div className="">
        {step === 1 ? (
          <form noValidate className="group">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h2"
                  className="text-lg font-semibold text-gray-900"
                >
                  Schedule a brief discovery call
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-base text-gray-500">
                    We will review your goals and form a compliant relationship.
                  </p>
                </div>
              </div>
              <div className="pt-5 flex gap-2 justify-center">
                <div className="">
                  <input
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    aria-label="Firstname"
                    className="peer block rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold-400 focus:border-gold-400 focus:ring-0 sm:text-base/6"
                    required
                  />
                  <span className="hidden text-sm text-red-500 peer-[&:placeholder-shown:not(:focus):invalid]:block">
                    Required
                  </span>
                </div>
                <div className="">
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    className="peer block w-80 rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold-400 focus:border-gold-400 focus:ring-0 sm:text-base/6"
                    required
                  />
                  <span className="hidden text-sm text-red-500 peer-[&:placeholder-shown:not(:focus):invalid]:block">
                    Required
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={(e) => {
                  handleSubmit(e, "email");
                  setStep(2);
                }}
                className="group-invalid:pointer-events-none group-invalid:opacity-30 inline-flex w-full justify-center rounded-md bg-gold-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:col-start-2"
              >
                Go to Step 2
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : step === 2 ? (
          <form noValidate className="group">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h2"
                  className="text-lg font-semibold text-gray-900"
                >
                  Added to our Investor List
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-base text-gray-500">
                    After our call, we will add you to our investor list and
                    send you future opportunities as they become available.
                  </p>
                </div>
              </div>
              <div className="pt-5 flex gap-2 justify-center">
                <div className="">
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => handlePhoneNumber(e)}
                    minLength={14}
                    type="text"
                    placeholder="Phone Number"
                    aria-label="Phone"
                    className="peer block rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold-400 focus:border-gold-400 focus:ring-0 sm:text-base/6"
                    required
                  />
                  <span className="hidden text-sm text-red-500 peer-[&:placeholder-shown:not(:focus):invalid]:block">
                    Required
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={(e) => {
                  handleSubmit(e, "phone");
                  setStep(3);
                }}
                className="group-invalid:pointer-events-none group-invalid:opacity-30 inline-flex w-full justify-center rounded-md bg-gold-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:col-start-2"
              >
                Go to Step 3
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setStep(1)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Back
              </button>
            </div>
          </form>
        ) : step === 3 ? (
          <div>
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h2"
                  className="text-lg font-semibold text-gray-900"
                >
                  Enjoy the benefits of Multifamily Investing
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-base text-gray-500">
                    Our team will be here to support you throughout the entire
                    process.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="inline-flex w-full justify-center rounded-md bg-gold-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:col-start-2"
              >
                Schedule Investor Call
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setStep(2)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>cal.com integration</div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeStep;
