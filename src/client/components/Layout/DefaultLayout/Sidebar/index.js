import { faHome, faLightbulb, faNewspaper, faRoad } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss';
import CreateBtn from './CreateBtn';

const cx = classNames.bind(styles);

function Sidebar() {
    const appName = process.env.REACT_APP_NAME;

    const arrSibaItems = [
        {
            title: 'Home',
            icon: faHome,
            to: '/',
            unique: '/home',
            titlePage: 'Popular Programming Courses',
        },
        {
            title: 'Path',
            icon: faRoad,
            to: '/learning-paths',
            unique: '/learning-paths',
            titlePage: 'Learning path for newbies',
        },
        {
            title: 'Learn',
            icon: faLightbulb,
            to: '/courses',
            unique: '/courses',
            titlePage: `List of programming courses at ${appName}`,
        },
        {
            title: 'Blog',
            icon: faNewspaper,
            to: '/blog',
            unique: '/blog',
            titlePage: `List of blog about IT at ${appName}`,
        },
    ];

    return (
        <div>
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
        </div>
    );
}

export default Sidebar;
