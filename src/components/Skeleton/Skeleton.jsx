import styles from './styles.module.css';

const Skeleton = ({ count = 1, type = 'banner' }) => {
    if (count > 1) {
        return (
            <ul className={styles.list}>
                {Array.from({ length: count }).map((_, index) => (
                    <li
                        key={index}
                        className={type === 'banner' ? styles.banner : styles.item}
                    ></li>
                ))}
            </ul>
        );
    }
    return (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
    );
};

export default Skeleton;