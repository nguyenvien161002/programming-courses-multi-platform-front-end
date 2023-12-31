import classNames from 'classnames/bind';

import styles from './TabTopCont.module.scss';

const cx = classNames.bind(styles);

function TabTopCont({ heading, desc, style }) {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>{heading}</h1>
            <div className={cx('desc')} style={style}>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default TabTopCont;
