import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ widthSearch }) {
    return (
        <div className={cx("wrapper")} style={{ '--width-search': widthSearch }}>
            <div className={cx("search-icon")}></div>
            <input
                className={cx("input")}
                placeholder="Search courses, articles, videos, ..."
            />
        </div>
    );
}

export default Search;
