import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Avatar({ fontSize, src, isPro }) {
    return (
        <div
            className={cx({ 'avatar-wrapper': true, 'avatar-pro': isPro ? isPro : false })}
            style={{ '--font-size': fontSize }}
        >
            <img className={cx('avatar')} src={src ? src : images.silentMeow} alt="Nguyễn Văn Viên" />
            {isPro && <img className={cx('crown')} src={images.crown.default} alt="icon crown" />}
        </div>
    );
}

export default Avatar;
