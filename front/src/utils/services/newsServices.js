import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';

export async function getNews() {
    try {
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/news/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export async function createNew(newData) {
    try {
        const response = await axios.post(`${DOMAIN_BACK_NAME}/api/news/`, newData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error creating news:', error);
        throw error;
    }
}

export async function updateNew(newId, newData) {
    try {
        const response = await axios.put(`${DOMAIN_BACK_NAME}/api/news/${newId}/`, newData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error updating news:', error);
        throw error;
    }
}

export async function deleteNew(newId) {
    try {
        await axios.delete(`${DOMAIN_BACK_NAME}/api/news/${newId}/`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error deleting news:', error);
        throw error;
    }
}
