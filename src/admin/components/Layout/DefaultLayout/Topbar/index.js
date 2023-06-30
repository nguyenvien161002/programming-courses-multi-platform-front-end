import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import classNames from 'classnames/bind';

import { SidebarContext } from "../SidebarContext";
import styles from './Topbar.module.scss';
import Search from './Search';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function Topbar() {

    const { toggleSidebar } = useContext(SidebarContext)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('nav-bar-toggler')} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('box-search')}>
                    <Search />
                </div>
            </div>
            <div className={cx('actions')}>
                <div className={cx('action-item')}>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className={cx('action-item')}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={cx('box-avatar')}>
                    <img className={cx('avatar')} src={images.face} alt="Nguyễn Văn Viên" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
