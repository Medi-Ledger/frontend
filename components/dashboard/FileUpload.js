"use client"
import React, { useState } from 'react';
import { uploadPatientFile } from '@/api/patient';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file || !name) {
            alert('Please select a file and enter a name.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);

        try {
            const response = await uploadPatientFile(formData);
            console.log('File uploaded successfully:', response);
            // Reset form fields
            setFile(null);
            setName('');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md my-10">
            <h2 className="text-lg font-semibold mb-4">Upload File</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nameInput" className="block mb-1">Name:</label>
                    <input type="text" id="nameInput" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="fileInput" className="block mb-1">File:</label>
                    <input type="file" id="fileInput" onChange={handleFileChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <button type="submit" className="bg-[#FFC671] text-white py-2 px-4 rounded-md w-full">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default FileUpload;