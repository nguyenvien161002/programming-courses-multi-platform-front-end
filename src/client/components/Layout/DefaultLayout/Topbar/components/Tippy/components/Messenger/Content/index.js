import classNames from 'classnames/bind';

import { styles} from '../../Styles';
import MsgItem from '../MsgItem';

const cx = classNames.bind(styles);

function Messenger() {
    return (
        <div className={cx('wrapper')} style={{'--width-tippy': '32rem'}}>
            <header>
                <div className={cx('title')}>Messenger</div>
                <button className={cx('mark-read-btn')}>Mark as read</button>
            </header>
            <div className={cx('content')}>
                <hr />
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
    );
}

export default Messenger;
