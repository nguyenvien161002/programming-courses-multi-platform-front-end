import classNames from 'classnames/bind';

import { styles } from '../../Styles';
import NotifiItem from '../NotifiItem';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')} style={{'--width-tippy': '38rem'}}>
            <header>
                <div className={cx('title')}>Notification</div>
                <button className={cx('mark-read-btn')}>Mark as read</button>
            </header>
            <div className={cx('content')}>
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
                <NotifiItem />
            </div>
        </div>
    );
}

export default Notification;
