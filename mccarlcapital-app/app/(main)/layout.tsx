import React, { ReactNode } from 'react'
import Header from "@/components/Header";
import Footer from '@/components/Footer';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='h-fit'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;