import axios from 'axios';
import { DOMAIN_BACK_NAME } from '../Constants';

export async function getProducts() {
    try {
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/products/`);
        return await response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
