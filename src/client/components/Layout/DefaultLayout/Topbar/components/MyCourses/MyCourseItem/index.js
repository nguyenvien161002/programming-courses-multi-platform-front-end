import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MyCourseItem.module.scss';

const cx = classNames.bind(styles);

function MyCourseItem() {
    return (
        <div className={cx('my-courses-item')}>
            <Link to={'/learning/reactjs'}>
                <img
                    className={cx('course-thumb')}
                    src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    alt=""
                />
            </Link>
            <div className={cx('course-info')}>
                <h3 className={cx('course-title')}>
                    <Link to={'/learning/reactjs'}>Xây Dựng Website với ReactJS</Link>
                </h3>
                <p className={cx('last-completed')}>Học cách đây 2 tháng trước</p>
                <div className={cx('process-bar')} style={{'--progress': '35%'}}></div>
            </div>
        </div>
    );
}

export default MyCourseItem;
