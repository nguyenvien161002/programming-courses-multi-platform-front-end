import classNames from 'classnames/bind';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')} aria-expanded="false">
            Đây là thông báo
        </div>
    );
}

export default Notification;
