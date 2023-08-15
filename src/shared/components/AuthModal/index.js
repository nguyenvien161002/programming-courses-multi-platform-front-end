import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { authSlice, getSignInWithNumberPhone } from '~/shared/redux/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './AuthModal.module.scss';

const cx = classNames.bind(styles);

function AuthModal({ children }) {
    const dispatch = useDispatch();
    const signInWithNumberPhone = useSelector(getSignInWithNumberPhone);

    const handleBtnPhoneNumber = () => {
        dispatch(authSlice.actions.handleSignInWithNumberPhone(!signInWithNumberPhone));
    };

    const handleHiddenModal = () => {
        dispatch(authSlice.actions.handleSetVisibilityModal(false));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} onClick={handleHiddenModal}></div>
            <div className={cx('content')}>
                <div className={cx('scrollbar')}>
                    <button className={cx('close')} onClick={handleHiddenModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {signInWithNumberPhone && (
                        <div className={cx('back-btn')} onClick={handleBtnPhoneNumber}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    )}
                    <div className={cx('body')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
