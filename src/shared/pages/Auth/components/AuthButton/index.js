import classNames from 'classnames/bind';

import styles from './AuthButton.module.scss';

const cx = classNames.bind(styles);

function AuthButton({ title, srcIcon, onClick }) {
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <img
                className={cx('icon')}
                src={srcIcon}
                alt="Đăng nhập với personal"
            />
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default AuthButton;
