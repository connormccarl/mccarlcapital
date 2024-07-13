"use client"
import React, { useState } from 'react'

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(JSON.stringify(e));
}

const ContactForm = () => {
  return (
    <form onSubmit={handleSubmit} method="POST" className="px-6 pb-10 pt-12 sm:pb-32 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="givenName"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                </div>
                </div>
                <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="familyName"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2.5">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                </label>
                <div className="mt-2.5">
                    <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                </label>
                <div className="mt-2.5">
                    <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    defaultValue={''}
                    required
                    />
                </div>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
                <button
                type="submit"
                className="rounded-md bg-gold px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                Send message
                </button>
            </div>
        </div>
    </form>
  )
}

export default ContactForm