import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import AuthButton from '~/admin/components/AuthButton';
import FormSignIn from './components/FormSignIn';
import styles from './Auth.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function Auth() {
    const location = useLocation();
    const appName = process.env.REACT_APP_NAME;
    const [isSignUp, setIsSignUp] = useState(false);
    const [isHandleBtn, setIsHandleBtn] = useState(false);

    const btnsAuth = [
        {
            title: 'Sử dụng email / số điện thoại',
            iconSrc: images.social.personal.default,
        },
        {
            title: 'Tiếp tục với Google',
            iconSrc: images.social.google.default,
        },
        {
            title: 'Tiếp tục với Facebook',
            iconSrc: images.social.facebook.default,
        },
        {
            title: 'Tiếp tục với Github',
            iconSrc: images.social.github.default,
        },
    ];

    useEffect(() => {
        if (location.pathname.includes('/signup')) {
            document.title = `${appName} | Admin - Sign Up`;
        } else {
            document.title = `${appName} | Admin - Sign In`;
        }
    }, [location.pathname, appName]);

    const handleSignUp = () => {
        setIsSignUp(!isSignUp);
        setIsHandleBtn(false);
    };

    const handleBtn = () => {
        setIsHandleBtn(true);
    };

    return (
        <div>
            <div className={cx('header')}>
                <a href={process.env.REACT_APP_URL}>
                    <img className={cx('logo')} src={images.logoMini.default} alt="V3D8" />
                </a>
                <h1 className={cx('title')}>{isSignUp ? 'Đăng ký vào V3D8' : 'Đăng nhập vào V3D8'}</h1>
            </div>
            <div className={cx('body')}>
                {!isHandleBtn ? (
                    btnsAuth.map((btn, index) => {
                        return (
                            <div className={cx('main-step')}>
                                <AuthButton
                                    key={index}
                                    title={btn.title}
                                    srcIcon={btn.iconSrc}
                                    isSignUp={isSignUp}
                                    onClick={handleBtn}
                                />
                            </div>
                        );
                    })
                ) : (
                    <FormSignIn />
                )}
                <p className={cx('dont-have-acc')}>
                    {isSignUp ? 'Bạn đã có tài khoản? ' : 'Bạn chưa có tài khoản? '}
                    <Link to={isSignUp ? '/signin' : '/signup'} onClick={handleSignUp}>
                        {isSignUp ? 'Đăng nhập' : 'Đăng ký'}
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Auth;
