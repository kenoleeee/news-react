import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

import { getNews } from '../../api/apiNews';
import { useEffect, useState } from 'react';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            }
            catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchNews();
    }, [])

    return (
        <>
            <main className={styles.main}>

                {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]} />) : (<Skeleton count={1} type="banner" />)}

                {!isLoading ? (<NewsList news={news} />) : (<Skeleton count={10} type="item" />)}
            </main>
        </>
    )
}

export default Main;