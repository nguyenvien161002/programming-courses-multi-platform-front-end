import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import MsgItem from '../MsgItem';

const cx = classNames.bind(styles);

function Messenger() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <div className={cx('title')}>Messenger</div>
                <button className={cx('mark-read-btn')}>Mark as read</button>
            </header>
            <div className={cx('content')}>
                <hr />
                <MsgItem />                
            </div>
        </div>
    );
}

export default Messenger;
