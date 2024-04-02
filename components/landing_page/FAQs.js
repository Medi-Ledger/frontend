
"use client"
import React, { useState } from 'react';
import Image from 'next/image'; 

const FAQs = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState({
    isSecure: false,
    isAccess: false,
    isCompliant: false,
    isUpdate: false
  });

  const toggleAnswerVisibility = (question) => {
    setIsAnswerVisible({
      ...isAnswerVisible,
      [question]: !isAnswerVisible[question]
    });
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="text-center"> 
            <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions (FAQ's)</h2>
          </div>
      <div className="container px-10 mx-auto flex">
        <div className="md:w-1/2 flex flex-col gap-8 ml-4"> 
          
          <div className="bg-[#F0F0F2] rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2 cursor-pointer" onClick={() => toggleAnswerVisibility('isSecure')}>
              &#8226; Is my data secure on MediLedger?
            </h3>
            {isAnswerVisible.isSecure && (
              <p>Yes, MediLedger uses blockchain technology to ensure the security and integrity of patient records.</p>
            )}
          </div>
          <div className="bg-[#F0F0F2] rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2 cursor-pointer" onClick={() => toggleAnswerVisibility('isAccess')}>
              &#8226; How can I access my patient records?
            </h3>
            {isAnswerVisible.isAccess && (
              <p>Patients can easily access their records by logging into their MediLedger account.</p>
            )}
          </div>
          <div className="bg-[#F0F0F2] rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2 cursor-pointer" onClick={() => toggleAnswerVisibility('isCompliant')}>
              &#8226; Is the system compliant with healthcare regulations standards?
            </h3>
            {isAnswerVisible.isCompliant && (
              <p>Yes, our system is designed to comply with relevant healthcare regulations and standards, such as HIPAA (Health Insurance Portability and Accountability Act) in the United States.</p>
            )}
          </div>
          <div className="bg-[#F0F0F2] rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2 cursor-pointer" onClick={() => toggleAnswerVisibility('isUpdate')}>
              &#8226; Can patients update their own records through the system?
            </h3>
            {isAnswerVisible.isUpdate && (
              <p>Yes, patients have the ability to update certain aspects of their records, such as personal information and medical history, through their secure patient portal.</p>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex items-start justify-center"> 
          <Image src="/think.png" height={450} width={450} />
        </div>
      </div>
    </section>
  );
};

export default FAQs;











  




