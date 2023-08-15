import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { visibilityMoDal } from '~/shared/redux/auth';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';
import AuthModal from '~/shared/components/AuthModal';
import Auth from '~/shared/pages/Auth';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const location = useLocation();
    const visibilityAuthModal = useSelector(visibilityMoDal);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (visibilityAuthModal) {
            document.body.setAttribute('aria-modal', 'true');
        } else {
            document.body.removeAttribute('aria-modal');
        }
    }, [visibilityAuthModal]);

    return (
        <div className={cx('wrapper')}>
            {visibilityAuthModal && (
                <AuthModal>
                    <Auth />
                </AuthModal>
            )}
            <Topbar />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
