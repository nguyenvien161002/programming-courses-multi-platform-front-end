import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { SidebarProvider } from './SidebarContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const location = useLocation();
    const [isMinimizeSidebar, setIsMinimizeSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsMinimizeSidebar(!isMinimizeSidebar);
    };

    return (
        <SidebarProvider data={{ isMinimizeSidebar, toggleSidebar }}>
            <div className={cx({ wrapper: true, 'minimize-sidebar': isMinimizeSidebar })}>
                <Sidebar />
                <div className={cx('container')}>
                    <Topbar />
                    <div className={cx('content')}>
                        {children}
                        <div className={cx(['copyright', `${location.pathname === '/admin/messenger' ? 'd-none' : ''}`])}>
                            2023 © Influence - Designed by Nguyen Vien{' '}
                            <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DefaultLayout;
