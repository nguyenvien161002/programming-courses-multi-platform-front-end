import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function UserMenu() {
    return (
        <div className={cx('wrapper')} aria-expanded="false">
            <div className={cx('user')}>
                <div className={cx('avatar-wrapper')}>
                    <img
                        src={images.silentMeow}
                        alt="NGUYỄN VĂN VIÊN"
                    />
                </div>
                <div className={cx('info')}>
                    <span className={cx('username')}>NGUYỄN VĂN VIÊN</span>
                    <div className={cx('abbreviation')}>@nguyenvanvien1</div>
                </div>
            </div>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Trang cá nhân
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Viết Blog
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Bài viết của tôi
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Bài viết đã lưu
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Cài đặt
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UserMenu;
