import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './MsgItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MsgItem() {
    // Nếu isChecked == true tức là đã nhấn vào xem tin nhắn 
    // attribute new-message để thay đổi biến khi css khi đã xem rồi
    // class "is-checked" để check nếu xem r thì để còn chưa xem thì xóa
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={cx('msg-list')} onClick={handleCheck} new-message={`${!isChecked}`}>
            <div className={cx('avatar-wrapper')}>
                <div className={cx('avatar')}>
                    <img src={images.crush} alt="" />
                </div>
            </div>
            <div className={cx('msg-wrapper')}>
                <div className={cx('username')}>
                    <strong>Cao Tú Nhi</strong>
                </div>
                <div className={cx('body')}>
                    <p className={cx('content')}>Hiện tại bạn và Nhi đã có thể nhắn tin</p>
                    <p className={cx('create-time-send')}>
                        <span className={cx('point')}></span>
                        <span className={cx('time')}>9:00</span>
                    </p>
                </div>
            </div>
            <div className={cx({'icon-check': true, 'is-checked': isChecked})}>
                <FontAwesomeIcon icon={faCircleCheck} />
            </div>
        </div>
    );
}

export default MsgItem;
