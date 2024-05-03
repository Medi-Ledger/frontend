import React from 'react';
import { BASE_URL } from '@/api/interceptor';

const PatientHistory = ({ history }) => {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-start">
        <div className="max-w-4xl w-full p-8">
          <h2 className="text-2xl font-semibold mb-4">Patient History</h2>
          {history.length === 0 && (
            <div className='text-gray-500 text-lg text-center py-5'>
              No Records Uploaded
            </div>
          )}
          {history.map((item) => (
            <div key={item.id} className="mb-4 border border-gray-300 rounded-md p-4">
              <p className="font-semibold">Name: {item.name}</p>
              {item.data && (
                <div className="mt-2 py-2">
                  <pre>{item.data.substring(1, item.data.length - 1)}</pre>
                </div>
              )}
              {item.file && (
                <div className="mt-2 py-2">
                  <a href={BASE_URL + item.file} target="_blank" rel="noopener noreferrer" className='hover:text-cyan-700 font-semibold underline'>{item.file.split('/').pop()}</a>
                </div>
              )}
              {item.image && (
                <div className="mt-2 py-2">
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
