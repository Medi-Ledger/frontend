"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/components/commons/Footer'
import InnerHeader from '@/components/commons/AuthHeader'
import LoginForm from '@/components/signup/LoginForm';

const page = () => {
  const queryClient = new QueryClient();
  return (
    <div className='bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <InnerHeader />
        <div className='flex items-center justify-center h-[80vh]'>
          <LoginForm type="doctor"/>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default page