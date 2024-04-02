import api, { BASE_URL } from './interceptor';

export const registerPatient = async (formData) => {
    try {
        return await api.post(`${BASE_URL}/patient/register/`, formData);
    } catch (error) {
        throw error;
    }
};

export const registerDoctor = async (formData) => {
    try {
        return await api.post(`${BASE_URL}/doctor/register/`, formData);
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (formData) => {
    try {
        return await api.post(`${BASE_URL}/login/`, formData)
    } catch (e) {
        throw e
    }
}