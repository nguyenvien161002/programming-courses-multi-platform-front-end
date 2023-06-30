import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './TopbarItem.module.scss';

const cx = classNames.bind(styles);

function TopbarItem({ title, to }) {

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(location.pathname === to) {
            document.title = `V4D8 | Admin - ${title}`;
        }
        setIsActive(location.pathname === to);
    }, [location.pathname, to, title]);

    return (
        <li className={cx({ 'nav-item': true, 'active': isActive })}>
            <Link className={cx('nav-link')} to={to}>
                <p className={cx('nav-item-title')}>{title}</p>
            </Link>
        </li>
    );
}

export default TopbarItem;
