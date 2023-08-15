import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { auth, provider } from '~/config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { authSlice, getContentModal, getSignInWithEmail, getSignInWithNumberPhone } from '~/shared/redux/auth';
import AuthButton from './components/AuthButton';
import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';
import styles from './Auth.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

// đang làm lại cái management state cho form đăng nhập

function Auth() {
    const dispatch = useDispatch();
    const contentModal = useSelector(getContentModal);
    const signInWithEmail = useSelector(getSignInWithEmail);
    const signInWithNumberPhone = useSelector(getSignInWithNumberPhone);

    // Handle
    const handleBtnGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const newUser = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    emailVerified: result.user.emailVerified,
                    isAnonymous: result.user.isAnonymous,
                    phoneNumber: result.user.phoneNumber,
                    photoURL: result.user.photoURL,
                };
                dispatch(authSlice.actions.handleSetVisibilityModal(false));
                dispatch(
                    authSlice.actions.handleSignInWithGoogle({
                        ...newUser,
                    }),
                );
            })
            .catch((error) => {
                console.log('SignInWithPopup: ' + error);
            });
    };

    const handleBtnFacebook = () => {
        console.log('Facebook');
    };

    const handleBtnGithub = () => {
        console.log('Github');
    };

    const handleBtnPhoneNumber = () => {
        dispatch(authSlice.actions.handleSignInWithNumberPhone(!signInWithNumberPhone));
    };

    const handleChangeForm = () => {
        dispatch(authSlice.actions.handleSignInWithNumberPhone(false));
        dispatch(
            contentModal.unique === 1
                ? authSlice.actions.handleSetContentModal({
                      unique: 2,
                      titlePage: 'Sign up',
                      titleForm: 'Sign up for account V3D6 ',
                      dontHaveAcc: {
                          title: `You already have an account?`,
                          titleLink: 'Sign in',
                      },
                  })
                : authSlice.actions.handleResetContentModal(),
        );
    };

    // Array of buttons
    const btnsAuth = [
        {
            id: 1,
            title: 'Use email/phone number',
            iconSrc: images.social.personal.default,
            onClick: handleBtnPhoneNumber,
        },
        {
            id: 2,
            title: 'Continue with Google',
            iconSrc: images.social.google.default,
            onClick: handleBtnGoogle,
        },
        {
            id: 3,
            title: 'Continue with Facebook',
            iconSrc: images.social.facebook.default,
            onClick: handleBtnFacebook,
        },
        {
            id: 4,
            title: 'Continue with Github',
            iconSrc: images.social.github.default,
            onClick: handleBtnGithub,
        },
    ];

    return (
        <Fragment>
            <div className={cx('header')}>
                <a href={process.env.REACT_APP_URL}>
                    <img className={cx('logo')} src={images.logoMini.default} alt="V3D8" />
                </a>
                <h1 className={cx('title')}>{contentModal.titleForm}</h1>
            </div>
            <div className={cx('body')}>
                {!signInWithNumberPhone ? (
                    <div className={cx('main-step')}>
                        {btnsAuth.map((btn, index) => {
                            return (
                                <AuthButton key={index} title={btn.title} srcIcon={btn.iconSrc} onClick={btn.onClick} />
                            );
                        })}
                    </div>
                ) : (
                    <div className={cx('form-body')}>{contentModal.unique === 1 ? <FormSignIn /> : <FormSignUp />}</div>
                )}
                <p className={cx('dont-have-acc')}>
                    {contentModal.dontHaveAcc.title}
                    <span onClick={handleChangeForm}> {contentModal.dontHaveAcc.titleLink}</span>
                </p>
                {signInWithEmail && <p className={cx('forgot-password')}>Forgot your password?</p>}
                <div className={cx('accept-term')}>
                    Your continued use of this website constitutes your agreement to our{' '}
                    <a href={`${process.env.REACT_APP_URL}/term`}>Terms of Use</a>.
                </div>
            </div>
        </Fragment>
    );
}

export default Auth;
