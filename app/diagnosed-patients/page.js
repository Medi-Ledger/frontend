"use client"
import React from 'react'
import Footer from '@/components/commons/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InnerHeader from '@/components/commons/AuthHeader'
import DiagnosedPatients from '@/components/doctor/DiagnosedPatients';

const page = () => {
  const queryClient = new QueryClient();
  return (
    <div className='bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <InnerHeader />
        <div className='flex items-center justify-center'>
          <DiagnosedPatients/>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default page