import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import SearchItem from '../SearchItem';
import style from './Content.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Content({ searchContent }) {
    return (
        <div className={cx('wrapper')} style={{ '--width-tippy': '42rem' }}>
            <div className={cx('header')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                <span>Kết quả cho '{searchContent}'</span>
            </div>
            <div className={cx('heading')}>
                <h5>KHÓA HỌC</h5>
                <Link className={cx('see-more')} to={'/search?q=css'}>
                    Xem thêm
                </Link>
            </div>
            <SearchItem
                title={'Lập Trình JavaScript Cơ Bản'}
                to={'/courses/javascript-base'}
                srcAvatar={images.courses.jsBase}
            />
            <SearchItem
                title={'Lập Trình JavaScript Nâng Cao'}
                to={'/courses/javascript-advance'}
                srcAvatar={images.courses.jsAdvance}
            />
            <div className={cx('heading')}>
                <h5>BÀI VIẾT</h5>
                <Link className={cx('see-more')} to={'/search?q=css'}>
                    Xem thêm
                </Link>
            </div>
            <SearchItem
                title={'Không Nên Học Javascript, Liệu Có Đúng Như Vậy?'}
                to={'/blog/khong-nen-hoc-javascript-lieu-co-dung-nhu-vay.html'}
                srcAvatar={images.courses.jsAdvance}
            />
            <SearchItem
                title={'Chuyện  cũ xưa: Nên dùng === hay == để so sánh trong Javascript?'}
                to={'/blog/chuyen-cu-xua-nen-dung-hay-de-so-sanh-trong-javascript.html'}
                srcAvatar={images.courses.jsAdvance}
            />
            <SearchItem
                title={'Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1'}
                to={'/blog/xu-ly-bat-dong-bo-trong-javascript-phan-1.html'}
                srcAvatar={images.courses.jsAdvance}
            />
            <div className={cx('heading')}>
                <h5>VIDEO</h5>
                <Link className={cx('see-more')} to={'/search?q=css'}>
                    Xem thêm
                </Link>
            </div>
            <SearchItem
                title={'Lập Trình JavaScript Nâng Cao'}
                to={'/courses/javascript-advance'}
                srcAvatar={images.courses.jsAdvance}
            />
            <SearchItem
                title={'Lập Trình JavaScript Nâng Cao'}
                to={'/courses/javascript-advance'}
                srcAvatar={images.courses.jsAdvance}
            />
            <SearchItem
                title={'Lập Trình JavaScript Nâng Cao'}
                to={'/courses/javascript-advance'}
                srcAvatar={images.courses.jsAdvance}
            />
        </div>
    );
}

export default Content;
