import classNames from 'classnames/bind';

import styles from './SlideItem.module.scss';

const cx = classNames.bind(styles);

function SlideItem({ heading, desc, link, imgSrc, styles }) {
    return (
        <div
            className={cx('wrapper')}
            style={styles}
        >
            <div className={cx('left')}>
                <h2 className={cx('heading')}>
                    <a rel="noreferrer noopener noreferrer" target="_blank" href={link.href}>
                        {heading}
                    </a>
                </h2>
                <p className={cx('desc')}>{desc}</p>
                <a rel="noreferrer noopener noreferrer" className={cx('create-btn')} target="_blank" href={link.href}>
                    {link.title}
                </a>
            </div>
            <div className={cx('right')}>
                <a rel="noreferrer noopener noreferrer" target="_blank" href={link.title}>
                    <img className={cx('img')} src={imgSrc} alt="V3D8 on Youtube" title="V3D8 on Youtube" />
                </a>
            </div>
        </div>
    );
}

export default SlideItem;
