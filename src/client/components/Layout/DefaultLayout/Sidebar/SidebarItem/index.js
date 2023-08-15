import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SidebarItem.module.scss';
import { clientSlice } from '~/shared/redux/client';

const cx = classNames.bind(styles);

const SidebarItem = ({ title, icon, to, unique, titlePage }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (location.pathname === to) {
            document.title = `${titlePage} | ${process.env.REACT_APP_NAME}`;
        }
        setIsActive(location.pathname.includes(unique) || location.pathname === to);
    }, [location.pathname, to, title, unique, titlePage]);

    const handleBtnSidebar = () => {
        dispatch(to !== '/' ? clientSlice.actions.handleBackHome(true) : clientSlice.actions.handleBackHome(false));
    };

    return (
        <li className={cx('nav-item')}>
            <Link className={cx('nav-link-sidebar', { active: isActive })} to={to} onClick={handleBtnSidebar}>
                <FontAwesomeIcon className={cx('icon-nav-item')} icon={icon} />
                <p className={cx('nav-item-title')}>{title}</p>
            </Link>
        </li>
    );
};

export default SidebarItem;
