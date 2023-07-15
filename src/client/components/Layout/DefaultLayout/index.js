import classNames from 'classnames/bind';

import { SidebarProvider } from './SidebarContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <SidebarProvider data={''}>
            <div className={cx({ wrapper: true })}>
                <Topbar />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DefaultLayout;
