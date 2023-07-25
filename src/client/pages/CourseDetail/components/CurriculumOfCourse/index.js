import classNames from 'classnames/bind';

import style from './CurriculumOfCourse.module.scss';

const cx = classNames.bind(style);

function CurriculumOfCourse({ tracks }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-inner')}>
                    <h2 className={cx('title')}>Nội dung khóa học</h2>
                </div>
                <div className={cx('sub-head-wrapper')}>
                    <ul className={cx('list-sub-head')}>
                        <li>
                            <strong>20 </strong> chương
                        </li>
                        <li className={cx('dot')}>•</li>
                        <li>
                            <strong>204 </strong> bài học
                        </li>
                        <li className={cx('dot')}>•</li>
                        <li>
                            <span>
                                Thời lượng <strong>29 giờ 11 phút</strong>
                            </span>
                        </li>
                    </ul>
                    <div className={cx('toggle-btn')}>Mở rộng tất cả</div>
                </div>
            </div>
            <div className={cx('panel-wrapper')}>
                <div className={cx('panel-group')}>
                    <div>
                        {tracks &&
                            tracks.map((track, index) => (
                                <div key={index} className={cx('panel')}>
                                    <div className={cx('panel-heading')}>
                                        <div className={cx('panel-title')}>
                                            <div className={cx('headline')}>
                                                <span className={cx('float-left', 'group-name')}>
                                                    <strong>
                                                        {index + 1}. {track.title}
                                                    </strong>
                                                </span>
                                                <span className={cx('float-right', 'time-of-section')}>
                                                    {track.track_steps.length} bài học
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurriculumOfCourse;
