"use client"
import InnerHeader from '@/components/commons/InnerHeader';
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
        <div>
            <InnerHeader />
            <PatientHistory history={history} />
        </div>
    )
}

export default page