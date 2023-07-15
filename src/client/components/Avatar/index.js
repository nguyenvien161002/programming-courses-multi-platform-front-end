import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Avatar({ fontSize }) {
    return (
        <div className={cx('avatar-wrapper')} style={{ '--font-size': fontSize }}>
            <img className={cx('avatar')} src={images.silentMeow} alt="Nguyễn Văn Viên" />
        </div>
    );
}

export default Avatar;
