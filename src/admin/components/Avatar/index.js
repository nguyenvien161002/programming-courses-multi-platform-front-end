import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { currentUserSelector } from '~/shared/redux/auth';
import styles from './Avatar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Avatar({ fontSize }) {
    const currentUser = useSelector(currentUserSelector) || JSON.parse(localStorage.getItem('currentUser'));

    return (
        <div className={cx('avatar-wrapper')} style={{ '--font-size': fontSize }}>
            {currentUser !== null && (
                <img
                    className={cx('avatar')}
                    src={currentUser.photoURL ? currentUser.photoURL : images.silentMeow}
                    alt={currentUser.displayName ? currentUser.displayName : 'Nguyễn Văn Viên'}
                />
            )}
        </div>
    );
}

export default Avatar;
