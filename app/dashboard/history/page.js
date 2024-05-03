"use client"
import InnerHeader from '@/components/commons/InnerHeader';
import Footer from '@/components/commons/Footer';
import { getPatientHistory } from '@/api/patient';
import PatientHistory from '@/components/dashboard/PatientHistory';
import { React , useState, useEffect } from 'react';

const page = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchPatientHistory = async () => {
            try {
                const response = await getPatientHistory();
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
            <Footer/>
        </div>
    )
}

export default page