import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import {
    faCircleInfo,
    faCircleXmark,
    faFaceSmile,
    faPaperPlane,
    faPhone,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Messenger.module.scss';
import MsgItem from './components/MsgItem';
import Search from '~/admin/components/Search';
import Avatar from '~/admin/components/Avatar';

const cx = classNames.bind(styles);

function Messenger() {
    const location = useLocation();

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME} | Admin - Messenger`;
    }, [location.pathname]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <header className={cx('header')}>
                    <h2>Messenger</h2>
                    <div className={cx('search')}>
                        <Search widthSearch={'34rem'} />
                    </div>
                </header>
                <div className={cx('messenger-list')}>
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                    <MsgItem />
                </div>
            </div>
            <div className={cx('content')}>
                <header className={cx('content-header')}>
                    <h2 className={cx('header-left')}>
                        <Avatar fontSize={'0.48rem'} />
                        <div className={cx('receiver-info')}>
                            <span className={cx('receiver-name')}>Cao Tú Nhi</span>
                            <span className={cx('before-minute')}>Hoạt động 1 tiếng trước</span>
                        </div>
                        <span className={cx('point-operating')}></span>
                    </h2>
                    <div className={cx('msg-actions')}>
                        <FontAwesomeIcon className={cx('icon-actions')} icon={faPhone} />
                        <FontAwesomeIcon className={cx('icon-actions')} icon={faVideoCamera} />
                        <FontAwesomeIcon className={cx('icon-actions')} icon={faCircleInfo} />
                    </div>
                </header>
                <div className={cx('body-chat')}>
                    <div className={cx('body')}>
                        
                    </div>
                    <div className={cx('chat-actions')}>
                        <FontAwesomeIcon className={cx('icon-chat-actions')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('icon-chat-actions')} icon={faImage} />
                        <FontAwesomeIcon className={cx('icon-chat-actions')} icon={faFaceSmile} />
                        <input className={cx('input-msg')} type="text" placeholder="Enter your message here..." />
                        <FontAwesomeIcon className={cx('icon-chat-actions')} icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messenger;
