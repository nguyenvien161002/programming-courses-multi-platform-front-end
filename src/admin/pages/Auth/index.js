import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { FormProvider } from './components/FormContext';
import AuthButton from '~/admin/pages/Auth/components/AuthButton';
import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';
import styles from './Auth.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function Auth() {
    const location = useLocation();
    const appName = process.env.REACT_APP_NAME;
    const [isSignUp, setIsSignUp] = useState(false);
    const [isHandleAuthBtn, setIsHandleAuthBtn] = useState(false);
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);
    const [varOfThisPage, setVarOfThisPage] = useState({
        url: '',
        titlePage: '',
        titleForm: '',
        dontHaveAcc: {
            url: '',
            title: '',
            titleLink: '',
        },
    });
    const btnsAuth = [
        {
            title: 'Use email/phone number',
            iconSrc: images.social.personal.default,
        },
        {
            title: 'Continue with Google',
            iconSrc: images.social.google.default,
        },
        {
            title: 'Continue with Facebook',
            iconSrc: images.social.facebook.default,
        },
        {
            title: 'Continue with Github',
            iconSrc: images.social.github.default,
        },
    ];

    // Handle
    const handleSignUp = () => {
        setIsSignUp(!isSignUp);
        setIsHandleAuthBtn(false);
        setIsSignInWithEmail(false);
    };

    const handleAuthBtn = () => {
        setIsHandleAuthBtn(true);
    };

    const handleSIWithEmail = () => {
        setIsSignInWithEmail(!isSignInWithEmail);
    };
    // ------

    // Set var init for page
    useEffect(() => {
        if (location.pathname.includes('/signup')) {
            document.title = `${appName} | Admin - Sign Up`;
            setVarOfThisPage((prevState) => ({
                ...prevState,
                url: '/signup',
                titlePage: 'Sign up',
                titleForm: 'Sign up for an F8 account',
                dontHaveAcc: {
                    url: '/signin',
                    title: 'Already have an account?',
                    titleLink: 'Sign in',
                },
                childCpnent: <FormSignUp />,
            }));
        } else {
            document.title = `${appName} | Admin - Sign In`;
            setVarOfThisPage((prevState) => ({
                ...prevState,
                url: '/signin',
                titlePage: 'Sign in',
                titleForm: 'Sign in to V3D8',
                dontHaveAcc: {
                    url: '/signup',
                    title: `Don't have an account yet?`,
                    titleLink: 'Sign up',
                },
                childCpnent: <FormSignIn />,
            }));
        }
    }, [location.pathname, appName]);
    // ------------------

    return (
        <FormProvider data={{ isSignInWithEmail, handleSIWithEmail }}>
            <div className={cx('header')}>
                <a href={process.env.REACT_APP_URL}>
                    <img className={cx('logo')} src={images.logoMini.default} alt="V3D8" />
                </a>
                <h1 className={cx('title')}>{varOfThisPage.titleForm}</h1>
            </div>
            <div className={cx('body')}>
                {!isHandleAuthBtn ? ( // chưa hanlde thì vào đây
                    <div className={cx('main-step')}>
                        {btnsAuth.map((btn, index) => {
                            return (
                                <AuthButton
                                    key={index}
                                    title={btn.title}
                                    srcIcon={btn.iconSrc}
                                    isSignUp={isSignUp}
                                    onClick={handleAuthBtn}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className={cx('form-body')}>{varOfThisPage.childCpnent}</div>
                )}
                <p className={cx('dont-have-acc')}>
                    {varOfThisPage.dontHaveAcc.title}
                    <Link to={varOfThisPage.dontHaveAcc.url} onClick={handleSignUp}>
                        {` ${varOfThisPage.dontHaveAcc.titleLink}`}
                    </Link>
                </p>
                {isSignInWithEmail && <p className={cx('forgot-password')}>Forgot your password?</p>}
            </div>
        </FormProvider>
    );
}

export default Auth;
