import classNames from 'classnames/bind';

import styles from './Actionbar.module.scss';

const cx = classNames.bind(styles);

function Actionbar() {
    return (
        <div className={cx('wrapper')}>
            <h1>Actionbar</h1>
        </div>
    );
}

export default Actionbar;
