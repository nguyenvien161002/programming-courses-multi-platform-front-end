import classNames from 'classnames/bind';

import styles from './NotifiItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function NotifiItem() {
    return (
        <div className={cx("notifi-list")}>
            <div className={cx("avatar-wrapper")}>
                <div className={cx("avatar")}>
                    <img src={images.f8Avatar} alt="" />
                </div>
            </div>
            <div className={cx("message-wrapper")}>
                <div>
                    Bài học <strong>Tìm hiểu về các giá trị màu sắc trong CSS</strong> mới được thêm vào.
                </div>
                <div className={cx("created-time")}>3 ngày trước</div>
            </div>
        </div>
    );
}

export default NotifiItem;
