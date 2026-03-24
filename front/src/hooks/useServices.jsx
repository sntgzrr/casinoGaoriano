import { useState, useEffect } from 'react';
import { getNews } from '../utils/services/newsServices';
import { getProducts } from '../utils/services/productsServices';
import { getUsers } from '../utils/services/userServices';
import { getPaymentById} from '../utils/services/paymentsServices';

export function useFetchingNewsData() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await getNews();
            setNews(newsData);
        };
        fetchNews();
    }, []);

    return { news, setNews };
}

export function useFetchingProductsData() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);
    return { products, setProducts };
}

export function useFetchingUsersData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers();
    }, []);
    return { users, setUsers }
}

export function useFetchingPaymentDataById(paymentId) {
    const [payments, setPayments] = useState(null);
    useEffect(() => {
        const fetchPayment = async () => {
            const paymentData = await getPaymentById(paymentId);
            setPayments(paymentData);
        };
        fetchPayment();
    }, [paymentId]);
    return { payments, setPayments };
}
