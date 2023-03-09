import React from 'react'
import { CustomerRequestProvider } from './CustomerRequestContext';

interface IChildrenProps {
    children: React.ReactNode
  }

const Providers = ({ children }: IChildrenProps) => {
  return (
    <CustomerRequestProvider>
        {children}
    </CustomerRequestProvider>
  )
}

export default Providers
