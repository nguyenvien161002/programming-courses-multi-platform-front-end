import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { auth } from '~/config/firebase';
import { authSlice } from '~/shared/redux/auth';
import { currentUserSelector } from '~/shared/redux/auth';
import styles from './Content.module.scss';
import Avatar from '~/client/components/Avatar';

const cx = classNames.bind(styles);

function UserMenu() {
    const dispatch = useDispatch();
    const currentUser = useSelector(currentUserSelector);

    const handleSignOut = () => {
        dispatch(authSlice.actions.handleSignOut(null));
        auth.signOut()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <div className={cx('avatar-wrapper')}>
                    <Avatar src={currentUser.photoURL} fontSize={'0.56rem'} />
                </div>
                <div className={cx('info')}>
                    <span className={cx('username')}>{currentUser.displayName}</span>
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
                    <div className={cx('item')} onClick={handleSignOut}>
                        Sign out
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default UserMenu;
