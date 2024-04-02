"use client"
import FileUpload from '@/components/dashboard/FileUpload'
import ImageUpload from '@/components/dashboard/ImageUpload'
import DataUpload from '@/components/dashboard/DataUpload'
import React from 'react'
import InnerHeader from '@/components/commons/InnerHeader'

const page = () => {
  return (
    <div className='w-full bg-gray-100'>
        <InnerHeader/>
        <FileUpload/>
        <ImageUpload/>
        <DataUpload/>
    </div>
  )
}

export default page