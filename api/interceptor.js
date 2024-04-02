import axios from 'axios';
export const BASE_URL = 'https://mediledger.onrender.com';
// export const BASE_URL = 'http://localhost:8000'

export const getToken = () => {
    const token = localStorage.getItem('authToken');
    return token;
};

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;