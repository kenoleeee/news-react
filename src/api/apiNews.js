import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (pageNumber = 1, pageSize = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}top-headlines`, {
            params: {
                apiKey: API_KEY,
                country: 'us',
                page: pageNumber,
                pageSize: pageSize,
            },
            timeout: 10000,
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}
