import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { refreshToken } from './authServices';

export const api = axios.create();

let accessToken = null;

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export async function getPayments() {
    try {
        const response = await api.get(`${DOMAIN_BACK_NAME}/api/payments/`);
        accessToken = response.data.access;
        const formattedData = [...response.data.map(payment => ({
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
        }))];
        return formattedData;
    } catch (error) {
        return refreshToken(error, () => getPaymentById());
    }
}

export async function getPaymentById(paymentId) {
    try {
        const response = await api.get(`${DOMAIN_BACK_NAME}/api/payments/${paymentId}/`)
        accessToken = response.data.access;
        const formattedData = {
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
        }
        return formattedData;
    } catch (error) {
        return refreshToken(error, () => getPaymentById(paymentId));
    }
}

export async function putPayment(user, paymentData) {
    try {
        const response = await api.put(`${DOMAIN_BACK_NAME}/api/payments/${user}/`, paymentData);
        accessToken = response.data.access;
        return response.data;
    } catch (error) {
        return refreshToken(error, () => putPayment(user, paymentData));
    }
}
