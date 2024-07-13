import React, { ReactNode } from 'react'
import FunnelHeader from "@/components/FunnelHeader";

interface Props {
  children: ReactNode;
}

const FunnelLayout = ({ children }: Props) => {
  return (
    <>
      <FunnelHeader />
      {children}
    </>
  )
}

export default FunnelLayout;
