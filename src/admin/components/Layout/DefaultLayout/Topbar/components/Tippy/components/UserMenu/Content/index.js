import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function UserMenu() {
    return (
        <div className={cx('wrapper')}>
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
                        Your profile
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Create a blog
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Your blog
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Blog saved
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/@nguyenvanvien1">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UserMenu;
