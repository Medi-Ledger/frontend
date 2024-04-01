import React from 'react'

const GetStarted = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg mr-4">For Patients</button>
          <button className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg">For Doctors</button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted