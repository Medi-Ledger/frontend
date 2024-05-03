import React, { useEffect, useState } from 'react'
import { getDiagnosedPatients, checkPatientExists } from '@/api/doctor'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const DiagnosedPatients = () => {
  const router = useRouter();
  const [patients, setPatients] = useState([]);
  const [newPatientUsername, setNewPatientUsername] = useState('');

  const handleNewPatientChange = (event) => {
    setNewPatientUsername(event.target.value);
  }

  const handleAddNewPatient = async () => {
    try {
      const response = await checkPatientExists(newPatientUsername);
      if (response.data && response.data.patient_id) {
        localStorage.setItem('patientId', response.data.patient_id);
        toast.success("Patient added successfully")
        router.push("/diagnosed-patients/history/");
      } else {
        console.error('Patient not found');
        toast.error('Patient not found');
      }
    } catch (error) {
      console.error('Error adding new patient:', error);
      toast.error('Patient not found');
    }
  }

  useEffect(() => {
    const fetchDiadnosedPatients = async () => {
      try {
        const response = await getDiagnosedPatients();
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching diagnosed patients:', error);
      }
    }

    fetchDiadnosedPatients();
  }, [])

  const handleCheckHistory = (id) => {
    localStorage.setItem('patientId', id);
    router.push("/diagnosed-patients/history/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex-col justify-center items-start">
      <div className="p-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 w-full">Add New Patient</h2>
        <input
          type="text"
          value={newPatientUsername}
          onChange={handleNewPatientChange}
          placeholder="Patient's Aadhar"
          className="border rounded px-3 py-2 mr-2"
        />
        <button onClick={handleAddNewPatient} className="bg-[#ffb84e] hover:bg-[#ffa958] text-white font-semibold px-4 py-2 rounded">
          Add New Patient
        </button>
      </div>
      <div className="p-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 w-full">Previously Diagnosed Patients</h2>
        {patients.length === 0 && (
          <div className='text-gray-500 text-lg text-center py-5 w-full'>
            No Patients History
          </div>
        )}
        {patients.map((item) => (
          <div key={item.id} className="mb-4 border bg-white shadow-sm border-gray-300 rounded-md p-4 w-full flex items-center justify-between gap-10">
            <p className="font-semibold">Name: {item.name}</p>
            <button onClick={() => handleCheckHistory(item.id)} className='text-sm hover:text-cyan-700'>Check History</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiagnosedPatients