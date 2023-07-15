import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Topbar.module.scss';
import Search from './components/Search';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Topbar() {
    const urlApp = process.env.REACT_APP_URL;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo', 'item')}>
                <Link to={`${urlApp}`} className={cx('link')}>
                    <img src={images.logoMini.default} alt='logo' />
                </Link>
                <h4 className={cx('logo-heading')}>Popular Programming Courses</h4>
            </div>
            <div className={cx('body', 'item')}>
                <Search />
            </div>
            <div className={cx('actions', 'item')}>
                <Link to={'/signin'} className={cx('login-btn')}>Sign in</Link>
            </div>
        </div>
    );
}

export default Topbar;
