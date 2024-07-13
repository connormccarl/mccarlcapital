import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const AdminIndex = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div>Hello, { session ? session.user!.name : 'Admin' }</div>
  )
}

export default AdminIndex