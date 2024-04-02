import React, { useState } from 'react';
import { uploadPatientData } from '@/api/patient';

const DataUpload = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data || !name) {
      alert('Please enter data and name.');
      return;
    }

    const formData = new FormData();
    formData.append('data', JSON.stringify(data)); // Serialize the JSON data
    formData.append('name', name);

    try {
      const response = await uploadPatientData(formData);
      console.log('Data uploaded successfully:', response);
      // Reset form fields
      setData('');
      setName('');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mb-10">
      <h2 className="text-lg font-semibold mb-4">Upload Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="dataInput" className="block mb-1">Data:</label>
          <textarea id="dataInput" value={data} onChange={handleDataChange} className="border border-gray-300 rounded-md px-3 py-2 w-full h-32" />
        </div>
        <div className="mb-4">
          <label htmlFor="nameInput" className="block mb-1">Name:</label>
          <input type="text" id="nameInput" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <button type="submit" className="bg-[#FFC671] text-white py-2 px-4 rounded-md w-full">
          Upload
        </button>
      </form>
    </div>
  );
};

export default DataUpload;
