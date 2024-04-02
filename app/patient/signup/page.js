"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/components/commons/Footer'
import InnerHeader from '@/components/commons/InnerHeader'
import PatientArt from '@/components/signup/PatientArt'
import PatientForm from '@/components/signup/PatientForm'
import React from 'react'

const page = () => {
    const queryClient = new QueryClient();
    return (
        <div className='bg-gray-50'>
            <QueryClientProvider client={queryClient}>
                <InnerHeader />
                <div className='flex items-center justify-center'>
                    <PatientForm />
                    {/* <PatientArt /> */}
                </div>
                <Footer />
            </QueryClientProvider>
        </div>
    )
}

export default page