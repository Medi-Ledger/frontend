"use client"
import FileUpload from '@/components/doctor/FileUpload'
import ImageUpload from '@/components/doctor/ImageUpload'
import DataUpload from '@/components/doctor/DataUpload'
import React from 'react'
import InnerHeader from '@/components/doctor/InnerHeader'
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