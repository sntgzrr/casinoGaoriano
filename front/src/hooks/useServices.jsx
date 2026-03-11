import { useState, useEffect } from 'react';
import { getNews } from '../utils/services/newsServices';
import { getProducts } from '../utils/services/productsServices';

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
    return { products };
}
