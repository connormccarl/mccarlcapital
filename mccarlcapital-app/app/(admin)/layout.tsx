import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default AdminLayout;