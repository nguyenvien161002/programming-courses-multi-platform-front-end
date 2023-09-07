import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './StepItem.module.scss';

const cx = classNames.bind(styles);

function StepItem() {
    return (
        <div className={cx(['wrapper', 'learn-item-1', 'active'])}>
            <div className={cx('info')}>
                <h3 className={cx('title')}>1. Giới thiệu</h3>
                <p className={cx('desc')}>
                    <FontAwesomeIcon icon={faCompactDisc} className={cx('lesson-icon', 'active')} />
                    <span>01:48</span>
                </p>
            </div>
            <div className={cx('icon-box')}>
                <FontAwesomeIcon icon={faCircleCheck} />
            </div>
        </div>
    );
}

export default StepItem;
