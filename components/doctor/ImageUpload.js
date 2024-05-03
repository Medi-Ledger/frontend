import React, { useState } from 'react';
import { uploadPatientImage } from '@/api/doctor';
import { toast } from 'react-toastify';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image || !name) {
            alert('Please select an image and enter a name.');
            return;
        }

        const formData = new FormData();
        const user_id = localStorage.getItem('patientId');
        if (!user_id){
            alert('Invalid Patient');
            return;
        }
        formData.append('image', image);
        formData.append('name', name);
        formData.append('user', user_id);

        try {
            const response = await uploadPatientImage(formData);
            console.log('Image uploaded successfully:', response);
            toast.success('Image uploaded successfully');
            // Reset form fields
            setImage(null);
            setName('');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mb-10">
            <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nameInput" className="block mb-1">Name:</label>
                    <input type="text" id="nameInput" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageInput" className="block mb-1">Image:</label>
                    <input type="file" id="imageInput" onChange={handleImageChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <button type="submit" className="bg-[#FFC671] text-white py-2 px-4 rounded-md w-full">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default ImageUpload;
