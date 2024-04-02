"use client"
import React from 'react';
import Router from 'next/router';

const GetStarted = () => {
  const handlePatientButtonClick = () => {
    window.location.href = '/patient/signup/';
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
      </div>
      <div className="flex flex-col justify-around items-center px-10 py-10 bg-gray-200 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 shadow-sm rounded-lg overflow-hidden mb-4 md:mr-4">
            <img src="/patient.jpg" alt="Card" className="w-full h-56 object-cover object-center" />
            <div className="p-4 text-center">
              <button onClick={handlePatientButtonClick} className='bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg'>For Patients</button>
            </div>
          </div>
          <div className="bg-gray-100 shadow-sm rounded-lg overflow-hidden mb-4 md:mr-4">
            <img src="/doc.png" alt="Card" className="w-full h-56 object-cover object-center" />
            <div className="p-4 text-center">
              <button className='bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg'>For Doctors</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default GetStarted;
