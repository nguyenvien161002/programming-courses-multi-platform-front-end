import classNames from 'classnames/bind';

import MyCourseItem from '../MyCourseItem';
import { styles } from '../../Styles';

const cx = classNames.bind(styles);

function Messenger() {
    return (
        <div className={cx('wrapper')} style={{ '--width-tippy': '38rem', paddingBottom: '1.2rem' }}>
            <header>
                <div className={cx('title')}>My Courses</div>
                <button className={cx('mark-read-btn')}>See all</button>
            </header>
            <div className={cx('content')}>
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
                <MyCourseItem />
            </div>
        </div>
    );
}

export default Messenger;
