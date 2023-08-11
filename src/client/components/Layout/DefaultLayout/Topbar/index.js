import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { currentUserSelector } from '~/shared/redux/auth'
import Search from './components/Search';
import MyCourses from './components/MyCourses';
import Notification from './components/Notification';
import UserMenu from './components/UserMenu';
import styles from './Topbar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Topbar() {
    const urlApp = process.env.REACT_APP_URL;
    const location = useLocation();
    const [isBackHome, setIsBackHome] = useState(false);
    const currentUser =
        useSelector(currentUserSelector) || localStorage.getItem('currentUser')
            ? JSON.parse(localStorage.getItem('currentUser'))
            : null;

    useEffect(() => {
        if (location.pathname !== '/') {
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
                {currentUser !== null ? (
                    <>
                        <div>
                            <MyCourses />
                        </div>
                        <div>
                            <Notification />
                        </div>
                        <div className={cx('avatar-wrapper')}>
                            <UserMenu />
                        </div>
                    </>
                ) : (
                    <Link to={'/signin'} className={cx('login-btn')}>
                        Sign in
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Topbar;
