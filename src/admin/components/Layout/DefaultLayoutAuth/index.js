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
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                        <a href={`${process.env.REACT_APP_URL}/term`}>Điều khoản sử dụng</a> của chúng tôi.
                    </div>
                </div>
                <div className={cx('about')}>
                    <a href={`${process.env.REACT_APP_URL}/abou-us`} target="_blank" rel="noreferrer">
                        Giới thiệu về V3D8
                    </a>
                    <span>|</span>
                    <a href="https://www.youtube.com/c/V3D8VNOfficial" target="_blank" rel="noreferrer">
                        V3D8 trên Youtube
                    </a>
                    <span>|</span>
                    <a href="https://www.facebook.com/groups/V3D8official" target="_blank" rel="noreferrer">
                        V3D8 trên Facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutAuth;
