import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComment, faEye, faPlay, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Avatar from '~/client/components/Avatar';
import styles from './CommonItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CommonItem(props) {
    const {
        title,
        students_count,
        price,
        old_price,
        landing_page_url,
        image_url,
        is_pro,
        user,
        min_read,
        yt_view_count,
        yt_comment_count,
        yt_like_count,
        duration,
    } = props;
    return (
        <div className={cx('wrapper')}>
            <Link className={cx(['link', 'has-link'])} title={title} to={landing_page_url}>
                <button className={cx('btn')}>Xem khóa học</button>
                <img className={cx('thumb')} src={image_url} alt={title} />
                {is_pro === true && (
                    <div className={cx('pro-icon')}>
                        <img src={images.crownIconCourse.default} alt="" />
                    </div>
                )}
                {duration && (
                    <div className={cx('video-info')}>
                        <div className={cx('play-wrap')}>
                            <FontAwesomeIcon icon={faPlay} className={cx('play-icon')} />
                        </div>
                        <div className={cx('duration')}>
                            <span>
                                {Math.floor(duration / 3600) !== 0 ? `${Math.floor(duration / 3600)}:` : false}
                                {Math.floor((duration % 3600) / 60)}:{duration % 60}
                            </span>
                        </div>
                    </div>
                )}
            </Link>
            <h3 className={cx('title')}>
                <Link to={landing_page_url}>{title}</Link>
            </h3>
            {is_pro === false && (
                <div className={cx('students-count')}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span>{students_count && students_count.toLocaleString('de')}</span>
                </div>
            )}
            {is_pro === true && (
                <div className={cx({ price: true, 'd-none': price === 0 ? true : false })}>
                    <span className={cx('old-price')}>{old_price && old_price.toLocaleString('de')}đ</span>
                    <span className={cx('main-price')}>{price && price.toLocaleString('de')}đ</span>
                </div>
            )}
            {user !== undefined && (
                <div className={cx('author')}>
                    <div className={cx('avatar-wrapper')}>
                        <Avatar fontSize={'0.29rem'} src={user.avatar_url} isPro={user.is_pro} />
                    </div>
                    <Link to={''}>
                        <span className={cx('user-name')}>{user.full_name}</span>
                        <span className={cx({ 'icon-wrapper': true, 'd-none': !user.is_admin })}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                        </span>
                        <span className={cx('dot')}>·</span>
                        <span>{min_read} minutes reading</span>
                    </Link>
                </div>
            )}
            {yt_view_count && (
                <div className={cx('stats')}>
                    <div>
                        <FontAwesomeIcon icon={faEye} />
                        <span>{yt_view_count && yt_view_count.toLocaleString('de')}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{yt_comment_count && yt_comment_count.toLocaleString('de')}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{yt_like_count && yt_like_count.toLocaleString('de')}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CommonItem;
