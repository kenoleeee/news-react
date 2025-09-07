import styles from './styles.module.css';

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick }) => {
    return (
        <>
            <div className={styles.pagination}>
                <button className={styles.arrow} onClick={handlePreviousPage}>Previous</button>
                <div className={styles.list}>
                    {[...Array(totalPages)].map((_, index) => {
                        return (<button className={styles.pageNumber} key={index} onClick={() => handlePageClick(index + 1)}>
                            {index + 1}
                        </button>
                        );
                    })}
                </div>
                <button className={styles.arrow} onClick={handleNextPage}>Next</button>
            </div>
        </>
    )
}

export default Pagination;