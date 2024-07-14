import React from 'react'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
    const session = await getServerSession(authOptions);
    if(session) redirect('/dashboard');

  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout;