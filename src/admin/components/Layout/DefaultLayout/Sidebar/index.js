import { Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {
    faHouse, faLightbulb, faUsers, faCartShopping,
    faFolder, faChartBar, faGear, faHeadset,
    faBook, faBell, faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { SidebarContext } from '../SidebarContext';
import styles from './Sidebar.module.scss';
import images from '~/admin/assets/images';
import SidebarItem from './SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {
    const { isMinimizeSidebar } = useContext(SidebarContext);
    
    const arrSibaItems = [
        {
            title: 'Dashboard',
            icon: faHouse,
            to: '/admin',
            unique: '/dashboard',
        },
        {
            title: 'Courses',
            icon: faLightbulb,
            to: '/admin/courses',
            unique: '/courses',
        },
        {
            title: 'Users',
            icon: faUsers,
            to: '/admin/users',
            unique: '/users',
        },
        {
            title: 'Orders',
            icon: faCartShopping,
            to: '/admin/orders',
            unique: '/orders',
        },
        {
            title: 'Category',
            icon: faFolder,
            to: '/admin/category',
            unique: '/category',
        },
        {
            title: 'Reports',
            icon: faChartBar,
            to: '/admin/reports',
            unique: '/reports',
        },
        {
            title: 'Settings',
            icon: faGear,
            to: '/admin/settings',
            unique: '/settings',
        },
        {
            title: 'Support',
            icon: faHeadset,
            to: '/admin/support',
            unique: '/support',
        },
        {
            title: 'Documentation',
            icon: faBook,
            to: '/admin/documentation',
            unique: '/documentation',
            separate: <p className={cx('menu-title')}>Docs</p>,
        },
        {
            title: 'Notification',
            icon: faBell,
            to: '/admin/notification',
            unique: '/notification',
            separate: <p className={cx('menu-title')}>Notification</p>,
        },
        {
            title: 'Sign out',
            icon: faRightFromBracket,
            to: '/admin/logout',
            unique: '/logout',
            separate: <p className={cx('menu-title')}>Authentication</p>,
        },
    ];

    return (
        <nav className={cx({ sidebar: true, active: isMinimizeSidebar })}>
            <div className={cx('sidebar-brand-wrapper')}>
                <Link className={cx('sidebar-brand')} to="#">
                    <img src={isMinimizeSidebar ? images.logoMini.default : images.logo.default} alt="logo" />
                </Link>
            </div>
            <ul className={cx('nav')}>
                <li className={cx('nav-profile')}>
                    <Link to="#" className={cx('nav-link')}>
                        <div className={cx('nav-profile-image')}>
                            <img src={images.silentMeow} alt="profile" />
                            <span className={cx('login-status')}></span>
                        </div>
                        <div className={cx('nav-profile-text')}>
                            <span className={cx('username')}>Henry Klein</span>
                            <span className={cx('revenue')}>$8,753.00</span>
                        </div>
                        <span className={cx('notification')}>3</span>
                    </Link>
                </li>
                {arrSibaItems.map((sibaItem, index) => {
                    return (
                        <Fragment key={index}>
                            {!isMinimizeSidebar && sibaItem.separate}
                            <SidebarItem title={sibaItem.title} icon={sibaItem.icon} to={sibaItem.to} unique={sibaItem.unique} />
                        </Fragment>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Sidebar;
