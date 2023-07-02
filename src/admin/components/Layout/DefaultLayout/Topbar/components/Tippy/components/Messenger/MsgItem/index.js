import classNames from 'classnames/bind';

import styles from './MsgItem.module.scss';
import images from '~/admin/assets/images';

const cx = classNames.bind(styles);

function MsgItem() {
    return (
        <div className={cx("notifi-list")}>
            <div className={cx("avatar-wrapper")}>
                <div className={cx("avatar")}>
                    <img src={images.crush} alt="" />
                </div>
            </div>
            <div className={cx("message-wrapper")}>
                <div className={cx("username")}><strong>Cao Tú Nhi</strong></div>
                <div className={cx("message-content")}>Hiện tại bạn và Nhi đã có thể nhắn tin để trao đổi qua lại</div>
            </div>
        </div>
    );
}

export default MsgItem;
