import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SocialMedia() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Social Media</span>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-item')}>
                    <div className={cx('item')}>
                        <div className={cx(['wrapper-img', 'icon-fb'])}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className={cx('body')}>
                            <span className={cx('title-item')}>Follower</span>
                            <span className={cx('follower')}>500.000</span>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx(['wrapper-img', 'icon-twitter'])}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className={cx('body')}>
                            <span className={cx('title-item')}>Follower</span>
                            <span className={cx('follower')}>5M</span>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx(['wrapper-img', 'icon-ytb'])}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                        <div className={cx('body')}>
                            <span className={cx('title-item')}>Follower</span>
                            <span className={cx('follower')}>1.7M</span>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx(['wrapper-img', 'icon-tiktok'])}>
                            <FontAwesomeIcon icon={faTiktok} />
                        </div>
                        <div className={cx('body')}>
                            <span className={cx('title-item')}>Follower</span>
                            <span className={cx('follower')}>3M</span>
                        </div>
                    </div>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item')}>
                        <div className={cx(['wrapper-img', 'icon-ig'])}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className={cx('body')}>
                            <span className={cx('title-item')}>Follower</span>
                            <span className={cx('follower')}>10M</span>
                        </div>
                    </div>
                    <div className={cx('symbolic-image')}>
                        <img className={cx('img')} src={images.plane} alt={images.plane} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
