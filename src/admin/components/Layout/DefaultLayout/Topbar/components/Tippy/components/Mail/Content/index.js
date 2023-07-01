import classNames from 'classnames/bind';

import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Mailbox() {
    return (
        <div className={cx('wrapper')} aria-expanded="false">
            Đây là Mailbox
        </div>
    );
}

export default Mailbox;
