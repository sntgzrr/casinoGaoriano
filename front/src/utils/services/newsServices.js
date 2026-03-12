import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';
import { callRefresh } from './authServices';

export async function getNews() {
    try {
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/news/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export async function postNew(newData) {
    try {
        const response = await axios.post(`${DOMAIN_BACK_NAME}/api/news/`, newData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => postNew(newData));
    }
}

export async function putNew(newId, newData) {
    try {
        const response = await axios.put(`${DOMAIN_BACK_NAME}/api/news/${newId}/`, newData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => putNew(newId, newData));
    }
}

export async function deleteNew(newId) {
    try {
        const response = await axios.delete(`${DOMAIN_BACK_NAME}/api/news/${newId}/`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return callRefresh(error, () => deleteNew(newId));
    }
}
