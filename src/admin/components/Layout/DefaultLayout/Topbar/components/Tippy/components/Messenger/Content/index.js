import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { styles } from '../../Styles';
import MsgItem from '../MsgItem';

const cx = classNames.bind(styles);

function Content({ handleClickOpenMsg }) {
    return (
        <div className={cx('wrapper')} style={{ '--width-tippy': '34rem' }}>
            <header>
                <div className={cx('title')}>Messenger</div>
                <button className={cx('mark-read-btn')}>Mark as read</button>
            </header>
            <div className={cx(['content', 'messenger'])}>
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
            <hr />
            <footer>
                <Link to={'/admin/messenger'} onClick={handleClickOpenMsg} className={cx('btn-open-msg')}>
                    Open Messenger
                </Link>
            </footer>
        </div>
    );
}

export default Content;
