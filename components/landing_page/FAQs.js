import React from 'react'

const FAQs = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg">
            <h3 className="font-bold mb-2">Is my data secure on MediLedger?</h3>
            <p>Yes, MediLedger uses blockchain technology to ensure the security and integrity of patient records.</p>
          </div>
          <div className="text-lg">
            <h3 className="font-bold mb-2">How can I access my patient records?</h3>
            <p>Patients can easily access their records by logging into their MediLedger account.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs