import { useState, useEffect } from 'react';
import { getNews, getProducts } from '../utils/api/FetchingData';

export function useFetchingNewsData() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await getNews();
            setNews(newsData);
        };
        fetchNews();
    }, []);

    return { news };
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
