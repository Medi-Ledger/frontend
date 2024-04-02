import Footer from '@/components/commons/Footer'
import InnerHeader from '@/components/commons/InnerHeader'
import DoctorArt from '@/components/signup/DoctorArt'
import DoctorForm from '@/components/signup/DoctorForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <InnerHeader/>
        <div className='py-10 px-5 flex justify-between'>
            <DoctorForm/>
            <DoctorArt/>
        </div>
        <Footer/>
    </div>
  )
}

export default page