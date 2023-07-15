import classNames from 'classnames/bind';

import styles from './Learn.module.scss';

const cx = classNames.bind(styles);

function Learn() {
    return (
        <div className={cx('wrapper')}>
            <h1>Learn Client</h1>
        </div>
    );
}

export default Learn;