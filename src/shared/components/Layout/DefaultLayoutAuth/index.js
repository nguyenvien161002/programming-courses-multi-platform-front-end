import classNames from 'classnames/bind';

import styles from './DefaultLayoutAuth.module.scss';

const cx = classNames.bind(styles);

function DefaultLayoutAuth({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                    <div className={cx('accept-term')}>
                        Your continued use of this website constitutes your agreement to our{' '}
                        <a href={`${process.env.REACT_APP_URL}/term`}>Terms of Use</a>.
                    </div>
                </div>
                <div className={cx('about')}>
                    <a href={`${process.env.REACT_APP_URL}/abou-us`} target="_blank" rel="noreferrer">
                        About V3D8
                    </a>
                    <span>|</span>
                    <a href="https://www.youtube.com/c/V3D8VNOfficial" target="_blank" rel="noreferrer">
                        V3D8 on Youtube
                    </a>
                    <span>|</span>
                    <a href="https://www.facebook.com/groups/V3D8official" target="_blank" rel="noreferrer">
                        V3D8 on Facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutAuth;
