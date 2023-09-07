import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import TrackItem from '../TrackItem';
import styles from './Tracks.module.scss';

const cx = classNames.bind(styles);

function Tracks() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h1 className={cx('heading')}>Nội dung khóa học</h1>
                    <button className={cx('close-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </header>
                <div className={cx('body')}>
                    <TrackItem />
                </div>
            </div>
        </div>
    );
}

export default Tracks;
