"use client"
import FileUpload from '@/components/dashboard/FileUpload'
import ImageUpload from '@/components/dashboard/ImageUpload'
import DataUpload from '@/components/dashboard/DataUpload'
import React from 'react'
import InnerHeader from '@/components/commons/InnerHeader'
import Footer from '@/components/commons/Footer'

const page = () => {
  return (
    <div className='w-full bg-gray-50'>
        <InnerHeader/>
        <DataUpload/>
        <ImageUpload/>
        <FileUpload/>
        <Footer/>
    </div>
  )
}

export default page