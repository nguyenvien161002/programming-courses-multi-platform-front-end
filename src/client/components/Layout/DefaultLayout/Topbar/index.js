import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { currentUserSelector } from '~/shared/redux/auth';
import { clientIsBackHomeSelectors, clientSlice } from '~/shared/redux/client';
import { authSlice } from '~/shared/redux/auth';
import Search from './components/Search';
import MyCourses from './components/MyCourses';
import Notification from './components/Notification';
import UserMenu from './components/UserMenu';
import styles from './Topbar.module.scss';
import images from '~/assets/images';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Topbar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const urlApp = process.env.REACT_APP_URL;
    const currentUser = useSelector(currentUserSelector);
    const isBackHome = useSelector(clientIsBackHomeSelectors);

    const handleBtnBackHome = () => {
        dispatch(clientSlice.actions.handleBackHome(false));
    };

    const handleBtnSignIn = () => { 
        dispatch(authSlice.actions.handleSetVisibilityModal(true));
    }

    useEffect(() => {
        if(!isBackHome && location.pathname !== '/') {
            dispatch(clientSlice.actions.handleBackHome(true));
        }
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo', 'item')}>
                <Link to={`${urlApp}`} className={cx('link')}>
                    <img src={images.logoMini.default} alt="logo" />
                </Link>
                {isBackHome ? (
                    <Link to={'/'} className={cx('back-home')} onClick={handleBtnBackHome}>
                        <h4 className={cx('heading-back')}>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('icon')} />
                            <span>Back</span>
                        </h4>
                    </Link>
                ) : (
                    <h4 className={cx('logo-heading')}>Popular Programming Courses</h4>
                )}
            </div>
            <div className={cx('body', 'item')}>
                <Search />
            </div>
            <div className={cx('actions', 'item')}>
                {currentUser ? (
                    <>
                        <div>
                            <MyCourses />
                        </div>
                        <div>
                            <Notification />
                        </div>
                        <div className={cx('avatar-wrapper')}>
                            <UserMenu srcAvatar={currentUser ? currentUser.photoURL : ''} />
                        </div>
                    </>
                ) : (
                    <div className={cx('login-btn')} onClick={handleBtnSignIn}>
                        Sign in
                    </div>
                )}
            </div>
        </div>
    );
}

export default Topbar;
