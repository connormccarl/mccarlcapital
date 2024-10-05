'use client'
import React, { useState } from 'react'
import { emailService } from '@/services/email.service';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
    
        // send email
        const body = {
            firstName,
            lastName,
            email,
            phone,
            message
        }
    
        try {
            emailService.sendEmail('contact', body)
                .then(() => {
                    alert("Message sent!");
                })
        } catch (e) {
            alert("Error. Message not sent.");
        }

        resetForm();
        setLoading(false);
    }

  return (
    <form onSubmit={handleSubmit} noValidate className="group px-6 pb-10 pt-12 sm:pb-32 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    id="firstName"
                    autoComplete="givenName"
                    className="peer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold focus:invalid:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    id="lastName"
                    autoComplete="familyName"
                    className="peer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold focus:invalid:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2.5">
                    <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    autoComplete="email"
                    className="peer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold focus:invalid:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                </label>
                <div className="mt-2.5">
                    <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    id="phoneNumber"
                    autoComplete="tel"
                    className="peer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold focus:invalid:ring-gold sm:text-sm sm:leading-6"
                    required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                </label>
                <div className="mt-2.5">
                    <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    id="message"
                    rows={4}
                    className="peer block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold focus:invalid:ring-gold sm:text-sm sm:leading-6"
                    defaultValue={''}
                    required
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
                <button
                type="submit"
                className="rounded-md bg-gold px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold group-invalid:pointer-events-none group-invalid:opacity-30"
                >
                {loading ? 
                    <svg className="animate-spin text-gray-300 h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                :
                    "Send Message"
                }
                </button>
            </div>
        </div>
    </form>
  )
}

export default ContactForm