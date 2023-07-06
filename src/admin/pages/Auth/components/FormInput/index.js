import classNames from 'classnames/bind';

import styles from './FormInput.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function FormInput() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('labelGroup')}>
                    <label className={cx('label')}>Số điện thoại</label>
                    <label className={cx('label right')}>Đăng nhập với email</label>
                </div>
                <div className={cx('inputWrap')}>
                    <div className={cx('wrapper insideInput')}>
                        <div className={cx('label')} aria-expanded="false">
                            <span>VN +84</span>
                        </div>
                    </div>
                    <input type="text" placeholder="Số điện thoại" name="phone" maxlength="12" value="" />
                </div>
            </div>
        </>
    );
}

export default FormInput;
