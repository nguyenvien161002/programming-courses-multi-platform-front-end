import { Link } from 'react-router-dom';
import { useContext } from "react";
import { 
    faHouse, faLightbulb, faUsers, faCartShopping, 
    faFolder, faChartBar, faGear, faHeadset,
    faBook, faBell, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { SidebarContext } from "../SidebarContext";
import styles from './Sidebar.module.scss';
import images from '~/admin/assets/images';
import SidebarItem from './SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {

    const { isMinimizeSidebar } = useContext(SidebarContext)

    return (
        <nav className={cx({"sidebar": true, "active": isMinimizeSidebar})}>
            <div className={cx("sidebar-brand-wrapper")}>
                <Link className={cx("sidebar-brand")} to="#">
                    <img src={isMinimizeSidebar ? images.logoMini.default : images.logo.default} alt="logo" />
                </Link>
            </div>
            <ul className={cx("nav")}>
                <li className={cx("nav-profile")}>
                    <Link to="#" className={cx("nav-link")}>
                        <div className={cx("nav-profile-image")}>
                            <img src={images.face} alt="profile" />
                            <span className={cx("login-status")}></span>
                        </div>
                        <div className={cx("nav-profile-text")}>
                            <span className={cx("username")}>Henry Klein</span>
                            <span className={cx("revenue")}>$8,753.00</span>
                        </div>
                        <span className={cx("notification")}>3</span>
                    </Link>
                </li>
                <SidebarItem title="Dashboard" icon={faHouse} to="/admin"/>
                <SidebarItem title="Courses" icon={faLightbulb} to="/admin/courses"/>
                <SidebarItem title="Users" icon={faUsers} to="/admin/users"/>
                <SidebarItem title="Orders" icon={faCartShopping} to="/admin/orders"/>
                <SidebarItem title="Category" icon={faFolder} to="/admin/category"/>
                <SidebarItem title="Reports" icon={faChartBar} to="/admin/reports"/>
                <SidebarItem title="Settings" icon={faGear} to="/admin/settings"/>
                <SidebarItem title="Support" icon={faHeadset} to="/admin/support"/>
                {!isMinimizeSidebar && <p className={cx('menu-title')}>Docs</p>}
                <SidebarItem title="Documentation" icon={faBook} to="/admin/documentation"/>
                {!isMinimizeSidebar && <p className={cx('menu-title')}>Notification</p>}
                <SidebarItem title="Notification" icon={faBell} to="/admin/notification"/>
                {!isMinimizeSidebar && <p className={cx('menu-title')}>Authentication</p>}
                <SidebarItem title="Sign out" icon={faRightFromBracket} to="/admin/logout"/>
            </ul>
        </nav>
    );
}

export default Sidebar;
