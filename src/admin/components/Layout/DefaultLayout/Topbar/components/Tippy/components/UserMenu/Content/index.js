import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import Avatar from '~/admin/components/Avatar';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <div className={cx('avatar-wrapper')}>
                    <Avatar fontSize={"0.56rem"} />
                </div>
                <div className={cx('info')}>
                    <span className={cx('username')}>NGUYỄN VĂN VIÊN</span>
                    <div className={cx('abbreviation')}>@nguyenvanvien1</div>
                </div>
            </div>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Your profile
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Create a blog
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Your blog
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Blog saved
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className={cx('list')}>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/signin">
                        Sign in
                    </Link>
                </li>
                <li>
                    <Link className={cx('item')} to="/admin/@nguyenvanvien1">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Content;
