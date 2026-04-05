import axios from 'axios';
import {
    LOGIN_URL,
    REFRESH_URL,
    IS_AUTHENTICATED_URL,
    IS_ADMIN_URL,
    LOGOUT_URL
} from '../Constants';

export const api = axios.create({
    withCredentials: true,
});

let accessToken = null;

export const setAccessToken = (token) => {
    accessToken = token;
};


api.interceptors.request.use((config) => {
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});


export async function refreshToken() {
    try {
        const response = await api.post(REFRESH_URL);
        accessToken = response.data.access;
        return response.data.refreshed;
    } catch {
        return false;
    }
}


async function requestWithRefresh(requestFn) {
    try {
        return await requestFn();
    } catch (error) {
        if (error.response?.status === 401) {
            const refreshed = await refreshToken();
            if (refreshed) return await requestFn();
        }
        throw error;
    }
}

export async function login(username, password) {
    try {
        const response = await api.post(LOGIN_URL, { username, password });
        accessToken = response.data.access;
        return response.data.success;
    } catch {
        return false;
    }
}

export async function logout() {
    try {
        await api.post(LOGOUT_URL);
        accessToken = null;
        return true;
    } catch {
        return false;
    }
}

export async function isAuthenticated() {
    const refreshed = await refreshToken();
    if (!refreshed) return { is_authenticated: false, user: null };

    try {
        const response = await requestWithRefresh(() => api.post(IS_AUTHENTICATED_URL));
        return response.data;
    } catch {
        return { is_authenticated: false, user: null };
    }
}

export async function isAdmin() {
    try {
        const response = await requestWithRefresh(() => api.post(IS_ADMIN_URL));
        return response.data.is_admin;
    } catch {
        return false;
    }
}
