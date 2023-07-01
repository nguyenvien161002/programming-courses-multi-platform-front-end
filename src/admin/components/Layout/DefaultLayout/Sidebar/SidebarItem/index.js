import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { SidebarContext } from "../../SidebarContext";
import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

const SidebarItem = ({ title, icon, to, unique }) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const { isMinimizeSidebar } = useContext(SidebarContext)

    useEffect(() => {
        if(location.pathname === to) {
            document.title = `${process.env.REACT_APP_NAME} | Admin - ${title}`;
        }
        setIsActive(location.pathname.includes(unique) || location.pathname === to);
    }, [location.pathname, to, title, unique]);

    return (
        <li className={cx({ 'nav-item': true, 'active': isActive })}>
            <Link className={cx('nav-link-sidebar')} to={to}>
                <div className={cx('wrapper-icon-nav')}>
                    <FontAwesomeIcon className={cx('icon-nav-item')} icon={icon} />
                </div>
                {!isMinimizeSidebar && <p className={cx('nav-item-title')}>{title}</p>}
            </Link>
        </li>
    );
};

export default SidebarItem;
