import classNames from 'classnames/bind';

import styles from './Road.module.scss';

const cx = classNames.bind(styles);

function Road() {
    return (
        <div className={cx('wrapper')}>
            <h1>Road Client</h1>
        </div>
    );
}

export default Road;
