import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Search from './components/Search';
import styles from './Topbar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Topbar() {
    const urlApp = process.env.REACT_APP_URL;
    const location = useLocation();
    const [isBackHome, setIsBackHome] = useState(false);
    
    useEffect(() => {
        if(location.pathname !== '/') { 
            setIsBackHome(true);
        } else {
            setIsBackHome(false);
        }
    }, [location.pathname]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo', 'item')}>
                <Link to={`${urlApp}`} className={cx('link')}>
                    <img src={images.logoMini.default} alt="logo" />
                </Link>
                {!isBackHome ? (
                    <h4 className={cx('logo-heading')}>Popular Programming Courses</h4>
                ) : (
                    <Link to={'/'} className={cx('back-home')}>
                        <h4 className={cx('heading-back')}>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('icon')} />
                            <span>Back</span>
                        </h4>
                    </Link>
                )}
            </div>
            <div className={cx('body', 'item')}>
                <Search />
            </div>
            <div className={cx('actions', 'item')}>
                <Link to={'/signin'} className={cx('login-btn')}>
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default Topbar;
