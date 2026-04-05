import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { refreshToken } from './authServices';
import { getAccessToken } from './authServices';
import { requestWithRefresh } from './authServices';

export const api = axios.create();

api.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export async function getNews() {
    try {
        const response = await requestWithRefresh(() => api.get(`${DOMAIN_BACK_NAME}/api/news/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => getNews());
    }
}

export async function postNew(newData) {
    try {
        const response = await requestWithRefresh(() => api.post(`${DOMAIN_BACK_NAME}/api/news/`, newData));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => postNew(newData));
    }
}

export async function putNew(newId, newData) {
    try {
        const response = await  requestWithRefresh(() => api.put(`${DOMAIN_BACK_NAME}/api/news/${newId}/`, newData));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => putNew(newId, newData));
    }
}

export async function deleteNew(newId) {
    try {
        const response = await requestWithRefresh(() => api.delete(`${DOMAIN_BACK_NAME}/api/news/${newId}/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => deleteNew(newId));
    }
}
