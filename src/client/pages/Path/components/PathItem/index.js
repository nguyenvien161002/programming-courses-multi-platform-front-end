import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/client/components/Button';
import styles from './PathItem.module.scss';

const cx = classNames.bind(styles);

function PathItem({ title, desc, srcThumb, to }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>
                        <Link to={to}>{title}</Link>
                    </h2>
                    <p className={cx('desc')}>{desc}</p>
                </div>
                <div className={cx('thumb-wrap')}>
                    <Link className={cx('thumb-round')} to={to}>
                        <img className={cx('thumb')} src={srcThumb} alt={title} />
                    </Link>
                </div>
            </div>
            <div>
                <Button
                    title={'View details'}
                    to={to}
                    style={{
                        'backgroundColor': 'var(--primary-color)',
                        color: 'var(--white-color)',
                    }}
                />
            </div>
        </div>
    );
}

export default PathItem;
