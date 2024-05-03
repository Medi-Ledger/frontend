import api, { BASE_URL } from './interceptor';

export const getDiagnosedPatients = async () => {
  try {
    return await api.get(`${BASE_URL}/doctor/diagnosis/`);
  } catch (error) {
    throw error;
  }
}

export const getPatientHistory = async (id) => {
  try {
      return await api.post(`${BASE_URL}/doctor/history/`, {'user': id});
  } catch (error) {
      throw error;
  }
};

export const uploadPatientData = async (formData) => {
  try {
      return await api.post(`${BASE_URL}/doctor/data/`, formData);
  } catch (error) {
      throw error;
  }
};

export const uploadPatientImage = async (formData) => {
  try {
      const response = await api.post(`${BASE_URL}/doctor/image/`, formData, {
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
      const response = await api.post(`${BASE_URL}/doctor/file/`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const checkPatientExists = async (username) => {
  try {
    return await api.post(`${BASE_URL}/doctor/lookup/`, {'username': username});
} catch (error) {
    throw error;
}
}