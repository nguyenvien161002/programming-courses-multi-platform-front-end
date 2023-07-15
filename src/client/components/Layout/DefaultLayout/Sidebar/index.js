import { faHome, faLightbulb, faNewspaper, faRoad } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss';
import CreateBtn from './CreateBtn';

const cx = classNames.bind(styles);

function Sidebar() {

    const appName = process.env.REACT_APP_NAME

    const arrSibaItems = [
        {
            title: 'Home',
            icon: faHome,
            to: '/',
            unique: '/home',
            titlePage: 'Popular Programming Courses'
        },
        {
            title: 'Road',
            icon: faRoad,
            to: '/road',
            unique: '/road',
            titlePage: 'Learning path for newbies'
        },
        {
            title: 'Learn',
            icon: faLightbulb,
            to: '/learn',
            unique: '/learn',
            titlePage: `List of programming courses at ${appName}`
        },
        {
            title: 'Blog',
            icon: faNewspaper,
            to: '/blog',
            unique: '/blog',
            titlePage: `List of blog about IT at ${appName}`
        },
    ];

    return (
        <nav className={cx({ wrapper: true })}>
            <CreateBtn />
            <ul className={cx('sidebar-list')}>
                {arrSibaItems.map((item, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            to={item.to}
                            unique={item.unique}
                            titlePage={item.titlePage}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

export default Sidebar;
