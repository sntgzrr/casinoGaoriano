import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { refreshToken } from "./authServices";
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

export async function getProducts() {
    try {
        const response = await requestWithRefresh(() => api.get(`${DOMAIN_BACK_NAME}/api/products/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => getProducts());
    }
}

export async function postProduct(productData) {
    try {
        const response = await requestWithRefresh(() => api.post(`${DOMAIN_BACK_NAME}/api/products/`, productData));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => postProduct(productData));
    }
}

export async function putProduct(productId, productData) {
    try {
        const response = await requestWithRefresh(() => api.put(`${DOMAIN_BACK_NAME}/api/products/${productId}/`, productData));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => putProduct(productId, productData));
    }
}

export async function deleteProduct(productId) {
    try {
        const response = await requestWithRefresh(() => api.delete(`${DOMAIN_BACK_NAME}/api/products/${productId}/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => deleteProduct(productId));
    }
}
