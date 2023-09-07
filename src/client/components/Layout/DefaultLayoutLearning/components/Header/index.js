import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCircleQuestion, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Progress } from 'antd';
import classNames from 'classnames/bind';

import CustomProgress from './CustomProgress';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('back-btn')} to={'/'}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
            </Link>
            <Link className={cx('logo')} to="/">
                <img src={images.logoMini.default} alt="F8" />
            </Link>
            <div className={cx('course-title')}>Lập Trình JavaScript Nâng Cao</div>
            <div className={cx('actions')}>
                <div className={cx('progress-bar')}>
                    <CustomProgress>
                        <div className="custom-progress">
                            <Progress type="circle" percent={90} size={34} strokeColor="#00badf" strokeWidth={5} />
                        </div>
                    </CustomProgress>
                    <p className={cx('completed-msg')}>
                        <strong>
                            <span className={cx('num')}>23</span>/<span className={cx('num')}>30</span>
                        </strong>{' '}
                        bài học
                    </p>
                </div>
                <button className={cx('action-btn')} data-tour="">
                    <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                    <span className={cx('label')}>Ghi chú</span>
                </button>
                <button className={cx(['action-btn', 'help-btn'])}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion} />
                    <span className={cx('label')}>Hướng dẫn</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
