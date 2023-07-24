import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('pages')}>
                <div className={cx(['page', 'disabled'])}>
                    <FontAwesomeIcon icon={faAnglesLeft} className={cx('icon')} />
                </div>
                <div className={cx(['page', 'active'])}>1</div>
                <div className={cx('page')}>2</div>
                <div className={cx('page')}>3</div>
                <div className={cx('page')}>4</div>
                <div className={cx('page')}>5</div>
                <div className={cx('page')}>6</div>
                <div className={cx('page')}>7</div>
                <div className={cx('page')}>8</div>
                <div className={cx('page')}>9</div>
                <div className={cx('page')}>10</div>
                <div className={cx('page')}>11</div>
                <div className={cx('page')}>12</div>
                <div className={cx('page')}>
                    <FontAwesomeIcon icon={faAnglesRight} className={cx('icon')} />
                </div>
            </div>
        </div>
    );
}

export default Pagination;
