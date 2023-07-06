import classNames from 'classnames/bind';

import styles from './FormSignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FormSignIn() {
    return (
        <div>
            <div className={cx("form-body")}>
                <div className={cx("wrapper-control")}>
                    <div className={cx("wrapper-input")}>
                        <div className={cx("label-group")}>
                            <label className={cx("label")}>Số điện thoại</label>
                            <label className={cx("label")}>Đăng nhập với email</label>
                        </div>
                        <div className={cx("input-wrap")}>
                            <div className={cx("inside-input")}>
                                <div className={cx("label")} aria-expanded="false">
                                    <span>VN +84</span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
                                </div>
                            </div>
                            <input type="text" placeholder="Số điện thoại" name="phone"  />
                        </div>
                    </div>
                </div>
                <div className={cx("wrapper-control")}>
                    <div className={cx("wrapper-input")}>
                        <div className={cx("label-group")}></div>
                        <div className={cx("input-wrap")}>
                            <input
                                name="phone_code"
                                placeholder="Nhập mã xác nhận"
                                type="number"
                                disabled=""
                            />
                            <div className={cx(["right-btn", "disabled"])}>
                                <span>Gửi mã</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className={cx("btn-signin")}
                    disabled=""
                    type="button"
                >
                    <div className={cx("btn-inner")}>
                        <span className={cx("base-module_text")}>Đăng nhập</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default FormSignIn;
