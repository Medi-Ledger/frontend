import React from 'react';
import { BASE_URL } from '@/api/interceptor';

const PatientHistory = ({ history }) => {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Patient History</h2>
          {history.map((item) => (
            <div key={item.id} className="mb-4 border border-gray-300 rounded-md p-4">
              <p className="font-semibold">Name: {item.name}</p>
              {item.data && (
                <div>
                  <p>Data:</p>
                  <pre>{JSON.stringify(item.data, null, 2)}</pre>
                </div>
              )}
              {item.file && (
                <div className="mt-2">
                  <p>File:</p>
                  <a href={BASE_URL + item.file} target="_blank" rel="noopener noreferrer">{item.file.split('/').pop()}</a>
                </div>
              )}
              {item.image && (
                <div className="mt-2">
                  <p>Image:</p>
                  <img src={BASE_URL + item.image} alt="Image" className="max-w-full h-auto" />
                </div>
              )}
              <p className="text-gray-500 mt-2">Created At: {new Date(item.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default PatientHistory;
