import classNames from 'classnames/bind';

import styles from './AuthButton.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AuthButton({ title, srcIcon, isSignUp, onClick }) {

    useEffect(() => {
        
    }, [isSignUp])

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
