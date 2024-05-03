"use client"
import InnerHeader from '@/components/doctor/InnerHeader';
import Footer from '@/components/commons/Footer';
import { getPatientHistory } from '@/api/doctor';
import PatientHistory from '@/components/dashboard/PatientHistory';
import { React, useState, useEffect } from 'react';

const page = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem('patientId');
    console.log('user', user_id);
    if (!user_id) {
      return;
    }
    const fetchPatientHistory = async () => {
      try {
        const response = await getPatientHistory(user_id);
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching patient history:', error);
      }
    };

    fetchPatientHistory();
  }, []);

  return (
    <div className='bg-gray-50'>
      <InnerHeader />
      <PatientHistory history={history} />
      <Footer />
    </div>
  )
}

export default page