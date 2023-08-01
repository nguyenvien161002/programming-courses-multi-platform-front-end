import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SidebarProvider } from './SidebarContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <SidebarProvider data={''}>
            <div className={cx({ wrapper: true })}>
                <Topbar />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
            </div>
        </SidebarProvider>
    );
}

export default DefaultLayout;
