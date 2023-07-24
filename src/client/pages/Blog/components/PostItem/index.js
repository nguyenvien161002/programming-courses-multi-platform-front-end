import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import Avatar from '~/client/components/Avatar';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem({ title, slug, user, image_url, min_read, meta_description }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')}>
                    <Link to={user.username}>
                        <Avatar fontSize={'0.29rem'} src={user.avatar_url} isPro={user.is_pro} />
                    </Link>
                    <Link to={user.username}>
                        <span>{user.full_name}</span>
                    </Link>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('toggleBtn', 'optionBtn')}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <div className={cx('optionBtn')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Link to={slug}>
                        <h2 className={cx('title')}>{title}</h2>
                    </Link>
                    <p className={cx('desc')}>{meta_description}</p>
                    <div className={cx('info')}>
                        <span>3 giờ trước</span>
                        <span className={cx('dot')}>·</span>
                        {min_read} phút đọc
                    </div>
                </div>
                {image_url && (
                    <div className={cx('thumb')}>
                        <Link to={slug}>
                            <img src={image_url} alt={title} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostItem;
