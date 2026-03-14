import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { callRefresh } from './authServices';

export async function getProducts() {
    try {
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/products/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function postProduct(productData) {
    try {
        const response = await axios.post(`${DOMAIN_BACK_NAME}/api/products/`, productData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => postProduct(productData));
    }
}

export async function putProduct(productId, productData) {
    try {
        const response = await axios.put(`${DOMAIN_BACK_NAME}/api/products/${productId}/`, productData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => putProduct(productId, productData));
    }
}

export async function deleteProduct(productId) {
    try {
        const response = await axios.delete(`${DOMAIN_BACK_NAME}/api/products/${productId}/`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => deleteProduct(productId));
    }
}
