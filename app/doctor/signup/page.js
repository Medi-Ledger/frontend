"use client"
import Footer from '@/components/commons/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InnerHeader from '@/components/commons/AuthHeader'
import DoctorArt from '@/components/signup/DoctorArt'
import DoctorForm from '@/components/signup/DoctorForm'
import React from 'react'

const page = () => {
  const queryClient = new QueryClient();
  return (
    <div className='bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <InnerHeader />
        <div className='flex items-center justify-center'>
          <DoctorForm />
          {/* <DoctorArt /> */}
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default page