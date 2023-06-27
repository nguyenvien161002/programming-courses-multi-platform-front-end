import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx("container")}>
                <Topbar />
                <div className={cx("content")}> { children }</div>
            </div>
        </div>
    );
}

export default DefaultLayout;