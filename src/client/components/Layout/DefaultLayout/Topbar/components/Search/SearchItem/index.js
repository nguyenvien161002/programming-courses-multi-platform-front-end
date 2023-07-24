import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Avatar from '~/client/components/Avatar';
import styles from './SearchItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SearchItem({ title, to, srcAvatar }) {
    return (
        <Link className={cx('wrapper')} to={to}>
            <Avatar fontSize={'0.36rem'} src={srcAvatar} />
            <span>{title}</span>
        </Link>
    );
}

export default SearchItem;
