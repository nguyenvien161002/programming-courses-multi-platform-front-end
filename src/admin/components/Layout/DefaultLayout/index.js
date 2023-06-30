import { useState } from 'react';
import { SidebarProvider } from './SidebarContext';

import Topbar from './Topbar';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

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
                    <div className={cx('content')}>{ children }</div>
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DefaultLayout;
