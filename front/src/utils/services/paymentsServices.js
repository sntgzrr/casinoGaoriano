import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { callRefresh } from './authServices';

export async function getPaymentById(paymentId) {
    try {
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/payments/${paymentId}/`, {
            withCredentials: true
        });
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
        return callRefresh(error, () => getPaymentById(paymentId));
    }
}

export async function putPayment(paymentId, paymentData) {
    try {
        const response = await axios.put(`${DOMAIN_BACK_NAME}/api/payments/${paymentId}/`, paymentData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => putPayment(paymentId, paymentData));
    }
}
