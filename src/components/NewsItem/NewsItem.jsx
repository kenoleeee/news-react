import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

const NewsItem = ({ item }) => {
    return (
        <>
            <li className={styles.item}>
                <div className={styles.wrapper} style={{ backgroundImage: `url(${item.urlToImage})` }}>

                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.extra}>
                        {formatTimeAgo(item.publishedAt)} by {item.author}
                    </p>
                </div>
            </li>
        </>
    )
}

export default NewsItem;