import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { refreshToken } from './authServices';
import { getAccessToken } from './authServices';

export const api = axios.create();

api.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

async function requestWithRefresh(requestFn) {
    try {
        return await requestFn();
    } catch (error) {
        if (error.response?.status === 401) {
            const refreshed = await refreshToken();

            if (refreshed) {
                return await requestFn();
            }
        }
        throw error;
    }
}

export async function getPayments() {
    try {
        const response = await requestWithRefresh(() =>
            api.get(`${DOMAIN_BACK_NAME}/api/payments/`)
        );

        return response.data.map(payment => ({
            user: payment.user,
            days: {
                monday: payment.monday,
                tuesday: payment.tuesday,
                wednesday: payment.wednesday,
                thursday: payment.thursday,
                friday: payment.friday,
                saturday: payment.saturday,
                sunday: payment.sunday
            },
            week: payment.week,
        }));

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPaymentById(paymentId) {
    try {
        const response = await requestWithRefresh(() =>
            api.get(`${DOMAIN_BACK_NAME}/api/payments/${paymentId}/`)
        );

        return {
            user: response.data.user,
            days: {
                monday: response.data.monday,
                tuesday: response.data.tuesday,
                wednesday: response.data.wednesday,
                thursday: response.data.thursday,
                friday: response.data.friday,
                saturday: response.data.saturday,
                sunday: response.data.sunday
            },
            week: response.data.week,
        };

    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function putPayment(user, paymentData) {
    try {
        const response = await requestWithRefresh(() =>
            api.put(`${DOMAIN_BACK_NAME}/api/payments/${user}/`, paymentData)
        );

        return response.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}
