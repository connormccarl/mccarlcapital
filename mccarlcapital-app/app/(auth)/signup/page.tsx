"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Signup = () => {
  const router = useRouter();

  // form validation rules 
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = ({ firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }) => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password })
    }).then(() => router.push('/signin'));
  }

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link href="/">
                <img
                  alt="Your Company"
                  src="/banner.png"
                  className="h-20 w-auto"
                />
              </Link>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create an account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Have an account already?{' '}
                <Link href="/signin" className="font-semibold text-gold hover:text-green">
                  Login
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('firstName')}
                          type="text"
                          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${ errors.firstName ? 'ring-red-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6`}
                        />
                      </div>
                      <div className="mt-1 text-red-600 text-xs">{errors.firstName?.message}</div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                        Last Name
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('lastName')}
                          type="text"
                          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${ errors.lastName ? 'ring-red-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6`}
                        />
                      </div>
                      <div className="mt-1 text-red-600 text-xs">{errors.lastName?.message}</div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('email')}
                          type="email"
                          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${ errors.email ? 'ring-red-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6`}
                        />
                      </div>
                      <div className="mt-1 text-red-600 text-xs">{errors.email?.message}</div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          {...register('password')}
                          type="password"
                          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${ errors.password ? 'ring-red-600' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6`}
                        />
                      </div>
                      <div className="mt-1 text-red-600 text-xs">{errors.password?.message}</div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="cursor-not-allowed flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      disabled
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10 hidden">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => signIn('google')}
                    className="flex w-full hover:text-black col-span-2 items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            alt=""
            src="/about/grass.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Signup