import React, { ReactNode } from 'react'
import AuthProvider from '@/components/AuthProvider';
import AdminHeader from '@/components/AdminHeader';


interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <AdminHeader />
      {children}
    </AuthProvider>
  )
}

export default MainLayout;