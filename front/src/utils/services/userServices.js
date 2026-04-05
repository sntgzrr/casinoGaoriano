import axios from "axios";
import { DOMAIN_BACK_NAME } from "../Constants";
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

export async function getUsers() {
    try {
        const response = await requestWithRefresh(() => api.get(`${DOMAIN_BACK_NAME}/api/users/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => getUsers());
    }
}

export async function getUserById(id) {
    try {
        const response = await requestWithRefresh(() => api.get(`${DOMAIN_BACK_NAME}/api/users/${id}/`));
        return response.data;
    } catch (error) {
        return refreshToken(error, () => getUserById(id));
    }
}
