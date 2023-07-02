import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function Avatar() {
    return (
        <div className={cx('avatar-wrapper')}>
            <img className={cx('avatar')} src={images.silentMeow} alt="Nguyễn Văn Viên" />
        </div>
    );
}

export default Avatar;
