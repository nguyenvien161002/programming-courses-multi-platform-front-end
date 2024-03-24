import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { SidebarContext } from '../SidebarContext';
import { Messenger, Notification, UserMenu } from './components/Tippy';
import styles from './Topbar.module.scss';
import Search from '~/admin/components/Search';

const cx = classNames.bind(styles);

function Topbar() {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('nav-bar-toggler')} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('box-search')}>
                    <Search widthSearch={'42rem'} />
                </div>
            </div>
            <div className={cx('actions')}>
                <Notification />
                <Messenger />
                <UserMenu />
            </div>
        </div>
    );
}

export default Topbar;
