import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slick-slide')}>
                <div className={cx(['arrow', 'prev'])}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                {children}
                <div className={cx(['arrow', 'next'])}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <ul className={cx('slick-dots')}>
                    <li className={cx('slick-active')}>
                        <button>1</button>
                    </li>
                    <li>
                        <button>2</button>
                    </li>
                    <li>
                        <button>3</button>
                    </li>
                    <li>
                        <button>4</button>
                    </li>
                    <li>
                        <button>5</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SlideShow;
