import api, { BASE_URL } from './interceptor';

export const uploadPatientData = async (formData) => {
    try {
        return await api.post(`${BASE_URL}/patient/data/`, formData);
    } catch (error) {
        throw error;
    }
};

export const uploadPatientImage = async (formData) => {
    try {
        const response = await api.post(`${BASE_URL}/patient/image/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadPatientFile = async (formData) => {
    try {
        const response = await api.post(`${BASE_URL}/patient/file/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getPatientHistory = async () => {
    try {
        return await api.get(`${BASE_URL}/patient/history/`);
    } catch (error) {
        throw error;
    }
};