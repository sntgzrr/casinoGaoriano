import axios from 'axios';
import { LOGIN_URL, REFRESH_URL, IS_AUTHENTICATED_URL, LOGOUT_URL } from '../Constants';

export async function login(username, password) {
    try {
        const response = await axios.post(LOGIN_URL, {
            username: username,
            password: password
        }, {
            withCredentials: true
        });
        return response.data.success;
    } catch (error) {
        console.error('Error during login:', error);
        return false;
    }
}

export async function logout() {
    try {
        await axios.post(LOGOUT_URL, {}, {
            withCredentials: true
        });
        return true;
    } catch {
        return false;
    }
}

export async function isAuthenticated() {
    try {
        await axios.post(IS_AUTHENTICATED_URL, {}, {
            withCredentials: true
        });
        return true;
    } catch {
        return false;
    }
}

export async function refreshToken() {
    try {
        const response = await axios.post(REFRESH_URL,{
            withCredentials: true
        });
        return response.data.refreshed;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return false;
    }
}

export async function callRefresh (error, func) {
    if (error.response && error.response.status == 401) {
        const tokenRefreshed = await refreshToken()
        if (tokenRefreshed) {
            const retryResponse = await func();
            return retryResponse.data;
        }
    }
    return false;
}
